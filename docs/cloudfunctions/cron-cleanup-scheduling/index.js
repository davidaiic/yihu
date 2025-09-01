const tcb = require('@cloudbase/node-sdk');
const app = tcb.init({ env: process.env.TCB_ENV || process.env.SCF_NAMESPACE });
const db = app.database();

exports.main = async () => {
  const startedAt = Date.now();
  const runId = `cron_${startedAt}_${Math.random().toString(16).slice(2)}`;
  const logCol = db.collection('CronRuns');

  const today = new Date(); today.setHours(0,0,0,0); const todayStr = today.toISOString().slice(0,10);
  const ninety = new Date(); ninety.setDate(ninety.getDate()-90); const nineStr = ninety.toISOString().slice(0,10);

  const out = { runId, startedAt, locks:0, holds:0, apptArchived:0, availArchived:0, errors:[] };

  try {
    // 1) Expired SlotLocks
    const lockDel = await db.collection('SlotLocks').where({ expiresAt: db.command.lt(Date.now()) }).remove();
    out.locks += lockDel.deleted || 0;

    // 2) Expired SlotHolds
    const holdDel = await db.collection('SlotHolds').where({ expiresAt: db.command.lt(Date.now()) }).remove();
    out.holds += holdDel.deleted || 0;

    // 3) Appointments archive (>90 days)
    const apptsCol = db.collection('Appointments');
    const { data: olds } = await apptsCol.where({ date: db.command.lt(nineStr) }).get();
    for (const a of olds) {
      try {
        await db.collection('Appointments_archive').add({ ...a, archivedAt: Date.now(), runId });
        await apptsCol.doc(a._id).remove();
        out.apptArchived++;
      } catch (e) {
        out.errors.push(`appt ${a._id}: ${e.message}`);
      }
    }

    // 4) Availability move (< today)
    const avCol = db.collection('SchedulesAvailability');
    const { data: avs } = await avCol.where({ date: db.command.lt(todayStr) }).get();
    for (const a of avs) {
      try {
        await db.collection('SchedulesAvailability_archive').add({ ...a, archivedAt: Date.now(), runId });
        await avCol.doc(a._id).remove();
        out.availArchived++;
      } catch (e) {
        out.errors.push(`avail ${a._id}: ${e.message}`);
      }
    }
  } catch (e) {
    out.errors.push(e.message);
  }

  out.finishedAt = Date.now();
  out.durationMs = out.finishedAt - startedAt;
  await logCol.add(out);
  return { code:'OK', data: out };
};
