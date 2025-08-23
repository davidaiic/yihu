'use strict';
const tcb = require('@cloudbase/node-sdk');

exports.main = async (event, context) => {
  /* 1 — init ---------------------------------------------------------------- */
  const app = tcb.init({ env: tcb.SYMBOL_CURRENT_ENV });
  const db = app.database();
  const _ = db.command;

  /* 2 — get caller identity -------------------------------------------------- */
  const { WX_OPENID, WX_FROM_OPENID, TCB_UUID } =
    tcb.getCloudbaseContext(context);
  const OPENID = WX_FROM_OPENID || WX_OPENID || TCB_UUID;

  /* 3 — collection handle ---------------------------------------------------- */
  const col = db.collection('address_book');

  /* 4 — router --------------------------------------------------------------- */
  try {
    switch (event.action) {

      // CREATE ­­­----------------------------------------------------------
      case 'create': {
        const doc = {
          ...event.data,            // id / icon / name / address / isDefault
          openid: OPENID,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        if (doc.isDefault) {
          // keep only one default per user
          await col.where({ openid: OPENID })
            .update({ data: { isDefault: false } });
        }
        await col.add({ data: doc });
        return { ok: true };
      }

      /* ---------- R ­Read / list ------------------------------------------ */
      case 'list': {
        const res = await col
          .where({ 'data.openid': OPENID })
          .orderBy('data.updatedAt', 'desc')         // dot-path sort
          .get();
        // front-end expects pure objects, not wrappers
        return { data: res.data.map(doc => doc.data) };
      }

      /* ---------- U ­Update ------------------------------------------------ */
      case 'update': {
        const { id, patch } = event;                 // e.g. { address: '…' }
        patch.updatedAt = new Date();

        // if isDefault is being switched on ⇒ clear old defaults first
        if (patch.isDefault === true) {
          await col.where({ 'data.openid': OPENID })
            .update({ data: { 'data.isDefault': false } });
        }

        // convert {k:v} → {'data.k':v}
        const updateObj = {};
        Object.keys(patch).forEach(k => {
          updateObj[`data.${k}`] = patch[k];
        });

        await col.where({
          'data.openid': OPENID,
          'data.id': id
        }).update({ data: updateObj });

        return { ok: true };
      }

      /* ---------- D ­Delete ------------------------------------------------ */
      case 'remove': {
        await col.where({
          'data.openid': OPENID,
          'data.id': event.id
        }).remove();
        return { ok: true };
      }

      default:
        return { error: 'Unknown action' };
    }
  } catch (e) {
    return { error: e.message };
  }
};
