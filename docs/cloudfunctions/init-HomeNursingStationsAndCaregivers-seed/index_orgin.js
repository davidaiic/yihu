const tcb = require('@cloudbase/node-sdk');
const app = tcb.init({ env: process.env.TCB_ENV || process.env.SCF_NAMESPACE });
const db = app.database();

const now = () => Date.now();
const rid = () => `run_${Date.now()}_${Math.random().toString(16).slice(2)}`;
const fmtDate = (d) => d.toISOString().slice(0,10);
const addDays = (d,n)=>{const x=new Date(d); x.setDate(x.getDate()+n); return x;};
const today = ()=> new Date();
const log = (...args)=> console.log('[SEED]', ...args);

async function backup(col, id, op, before, after, runId) {
  await db.collection('SeedBackups').add({ runId, ts: now(), collection: col, docId: id, op, before, after });
}

async function backupUpsertById(col, id, doc, runId) {
  const c = db.collection(col);
  const { data } = await c.where({ _id:id }).get();
  if (data && data.length) {
    await backup(col, id, 'update', data[0], doc, runId);
    await c.doc(id).update({ ...doc, updatedAt: now() });
    return { op:'update', id };
  } else {
    await c.add({ ...doc, _id:id, createdAt: now(), updatedAt: now() });
    await backup(col, id, 'insert', null, doc, runId);
    return { op:'insert', id };
  }
}

async function rollback(runId){
  const bk = db.collection('SeedBackups');
  const { data: recs } = await bk.where({ runId }).get();
  if (!recs || !recs.length) return { rolled:0 };
  let rolled=0;
  for (const r of recs) {
    const c = db.collection(r.collection);
    if (r.op === 'insert') {
      try { await c.doc(r.docId).remove(); rolled++; } catch(e){ log('rm fail', r.collection, r.docId, e.message); }
    } else if (r.op === 'update') {
      try { await c.doc(r.docId).set(r.before); rolled++; } catch(e){ log('restore fail', r.collection, r.docId, e.message); }
    }
  }
  return { rolled };
}

function toSlots(from, to, excludeRanges=[]) {
  const toMin=(t)=>{const [h,m]=t.split(':').map(Number);return h*60+m;};
  const ok=(m)=>!excludeRanges.some(([a,b])=> m>=toMin(a)&&m<toMin(b));
  const arr=[]; for(let m=toMin(from); m<toMin(to); m+=15){ if(ok(m)){ const h=String(Math.floor(m/60)).padStart(2,'0'); const mm=String(m%60).padStart(2,'0'); arr.push(`${h}:${mm}`); } }
  return arr;
}

function genByShift(shiftType){
  if (shiftType==='full_day') return toSlots('00:00','24:00');
  if (shiftType==='night_shift') return [...toSlots('20:00','24:00'), ...toSlots('00:00','08:00')];
  return [...toSlots('09:00','12:00'), ...toSlots('13:00','17:00')]; // day_shift
}

exports.main = async (event) => {
  const mode = event?.mode || 'apply';
  const runId = event?.runId || rid();
  log('mode=', mode, 'runId=', runId);

  if (mode === 'rollback') {
    const ret = await rollback(runId);
    return { code:'OK', data:{ runId, ...ret } };
  }

  try {
    const res = { runId, departments:0, users:0, serviceItems:0, svcAssigns:0, availabilityDays:0, searchIndex:0 };

    // Load two existing station docs if present (prefer DB), else fallback minimal
    const expectedStations = [
      'home_station_1753533327784_2639', // Beijing
      'home_station_1753533342853_7444'  // Shanghai
    ];
    const stations = [];
    for (const id of expectedStations) {
      const { data } = await db.collection('Departments').where({ _id:id }).get();
      if (data && data.length) stations.push(data[0]);
    }
    // Add new stations for Huilongguan & Xinzhuang
    stations.push(
      { _id:'home_station_bj_hlg', name:'北京居家护理站·回龙观', citystdname:'北京市', geo:new db.Geo.Point(116.34,40.07), _type:'Department', deptType:'home_station', status:'active' },
      { _id:'home_station_sh_xz', name:'上海居家护理站·莘庄', citystdname:'上海市', geo:new db.Geo.Point(121.38,31.11), _type:'Department', deptType:'home_station', status:'active' }
    );

    // Upsert all stations (if two imported ones exist, their original fields are kept and only status enforced)
    for (const s of stations) {
      const base = { _type:'Department', deptType:'home_station', name:s.name, citystdname:s.citystdname, geo:s.geo, status: s.status || 'active' };
      await backupUpsertById('Departments', s._id, base, runId);
      res.departments++;
      // Ensure basic home_group/home_subgroup structure
      const groupId = `${s._id}_grp_01`;
      const subgroupA = `${s._id}_subgrp_A`;
      const subgroupB = `${s._id}_subgrp_B`;
      await backupUpsertById('Departments', groupId, { _type:'Department', deptType:'home_group', name:`${s.name}·一组`, citystdname:s.citystdname, parentId:s._id, status:'active' }, runId);
      await backupUpsertById('Departments', subgroupA, { _type:'Department', deptType:'home_subgroup', name:`${s.name}·A小组`, citystdname:s.citystdname, parentId:groupId, status:'active' }, runId);
      await backupUpsertById('Departments', subgroupB, { _type:'Department', deptType:'home_subgroup', name:`${s.name}·B小组`, citystdname:s.citystdname, parentId:groupId, status:'active' }, runId);
    }

    // Create 4 caregivers per station, assigned to home_subgroup leafs
    const caregivers = [];
    for (const s of stations) {
      const subgroupA = `${s._id}_subgrp_A`;
      const subgroupB = `${s._id}_subgrp_B`;
      for (let i=1;i<=4;i++){
        const uid = `u_seed_${s._id}_${String(i).padStart(2,'0')}`;
        const assignmentDept = i<=2 ? subgroupA : subgroupB; // 2 in A, 2 in B
        const userDoc = { _id: uid, _type:'User', name:`${s.name.replace('居家护理站','护理员')}${i}`, gender: i%2===0?'F':'M', assignments:[{ deptId: assignmentDept, roleId:'Caregiver' }], avatar_url:'', status:'active' };
        await backupUpsertById('Users', uid, userDoc, runId);
        res.users++;
        caregivers.push({ uid, deptId: assignmentDept, stationId: s._id, citystdname: s.citystdname, geo: s.geo });
      }
    }

    // Load ServiceTemplates
    const { data: tpls } = await db.collection('ServiceTemplates').get();
    if (!tpls || !tpls.length) return { code:'MISSING_TEMPLATES', message:'run init-HomeNursingServices-seed first' };
    const allTplIds = tpls.map(x=>x._id);

    // Pricing default (if not set in existing HSI, we apply defaults)
    const priceMap = {
      chronic: { per_visit: 120, per_month: 2000, per_month_24h: 15000 },
      bedridden: { per_visit: 160, per_month: 3200, per_month_24h: 19800 },
      post_op: { per_visit: 180, per_week: 980, per_month: 3600 },
      dementia: { single: 200, per_month_day: 6800, per_month_24h: 20800 },
      maternity: { per_month_level: { L1: 6800, L2: 8800, L3: 11800 } },
      palliative: { single: 260, per_day: 980, per_month_24h: 23800 },
      pediatric: { per_month_level: { L1: 4800, L2: 6800 } },
      telemed: { per_month_fixed: 100 },
      care_plan: { per_month_fixed: 200 },
      mental: { per_session_fixed: 30 },
      lab: { per_visit_fixed: 50 }
    };

    // Mount all 11 templates to each STATION (ownerDeptId = stationId)
    for (const s of stations) {
      for (const t of tpls) {
        const existing = await db.collection('HospitalServiceItems').where({ _id: `${s._id}_${t._id}` }).get();
        let unitPrice = (priceMap[t.typeCode] || { per_visit: 100 });
        if (existing.data && existing.data.length && existing.data[0].unitPrice) unitPrice = existing.data[0].unitPrice;
        const doc = { _id: `${s._id}_${t._id}`, _type:'HospitalItem', ownerDeptId: s._id, citystdname: s.citystdname, templateId: t._id, name: t.name, status:'active', unitPrice, enabledBilling: Object.keys(unitPrice), iconUrl: t.iconUrl || null, geo: s.geo };
        await backupUpsertById('HospitalServiceItems', doc._id, doc, runId);
        res.serviceItems++;
      }
    }

    // ServiceAssignments: every caregiver covers all 11 items (serviceItemId bound to STATION HSI)
    for (const cg of caregivers) {
      for (const tplId of allTplIds) {
        const serviceItemId = `${cg.stationId}_${tplId}`; // HSI owned by station
        const c = db.collection('ServiceAssignments');
        const where = { caregiverId: cg.uid, serviceItemId };
        const { data: existed } = await c.where(where).get();
        const doc = { caregiverId: cg.uid, ownerDeptId: cg.stationId, // owned by station
                      leafDeptId: cg.deptId, // caregiver's subgroup (leaf)
                      serviceItemId, status:'active', citystdname: cg.citystdname };
        if (existed && existed.length) {
          await backup('ServiceAssignments', existed[0]._id, 'update', existed[0], doc, runId);
          await c.doc(existed[0]._id).update({ ...doc, updatedAt: now() });
        } else {
          const ret = await c.add({ ...doc, createdAt: now(), updatedAt: now() });
          await backup('ServiceAssignments', ret.id, 'insert', null, doc, runId);
        }
        res.svcAssigns++;
      }
    }

    // Availability: 30 days, weekdays only, random shiftType per day
    const avCol = db.collection('SchedulesAvailability');
    const start = addDays(today(), 1);
    const shifts = ['day_shift','full_day','night_shift'];
    for (const cg of caregivers) {
      for (let d=0; d<30; d++){
        const day = addDays(start, d);
        const dow = day.getDay(); if (dow===0 || dow===6) continue;
        const dateStr = fmtDate(day);
        const shift = shifts[Math.floor(Math.random()*shifts.length)];
        const slots = genByShift(shift);
        const _id = `${cg.uid}_${dateStr}`;
        const doc = { _id, caregiverId: cg.uid, ownerDeptId: cg.stationId, citystdname: cg.citystdname, date: dateStr, shiftType: shift, slots, updatedAt: now() };
        await backupUpsertById('SchedulesAvailability', _id, doc, runId);
        res.availabilityDays++;
      }
    }

    // CaregiverSearchIndex
    for (const cg of caregivers) {
      const mySvc = allTplIds.map(tid => `${cg.stationId}_${tid}`);
      const doc = { caregiverId: cg.uid, ownerDeptId: cg.stationId, leafDeptId: cg.deptId, citystdname: cg.citystdname, geo: cg.geo, services: mySvc, updatedAt: now() };
      const c = db.collection('CaregiverSearchIndex');
      const where = { caregiverId: cg.uid, ownerDeptId: cg.stationId };
      const { data: existed } = await c.where(where).get();
      if (existed && existed.length) {
        await backup('CaregiverSearchIndex', existed[0]._id, 'update', existed[0], doc, runId);
        await c.doc(existed[0]._id).update({ ...doc, updatedAt: now() });
      } else {
        const ret = await c.add({ ...doc, createdAt: now(), updatedAt: now() });
        await backup('CaregiverSearchIndex', ret.id, 'insert', null, doc, runId);
      }
      res.searchIndex++;
    }

    log('DONE', res);
    return { code:'OK', data: res };
  } catch (e) {
    return { code:'SYS_ERR', message: e.message, stack: String(e.stack || e) };
  }
};
