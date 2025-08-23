// ./cloudfunctions/careRecipients/index.js
'use strict';
const tcb = require('@cloudbase/node-sdk');

exports.main = async (event, context) => {
  const app = tcb.init({ env: tcb.SYMBOL_CURRENT_ENV });
  const db = app.database();
  const _ = db.command;

  // 身份：优先微信 OPENID，其次匿名 UID
  const { WX_OPENID, WX_FROM_OPENID, TCB_UUID } = tcb.getCloudbaseContext(context);
  const OPENID = WX_FROM_OPENID || WX_OPENID || TCB_UUID;

  const { action, id, data = {}, filter = {}, limit = 20, offset = 0 } = event;
  const col = db.collection('CareRecipients');

  /** 把 { _id, data:{…} } => { …data, _id } 展平（保证 _id 不会被覆盖） */
  const flatten = ({ _id, data }) => ({ ...data, _id });

  switch (action) {
    case 'create':
      return await col.add({
        data: { creatorOpenId: OPENID, createdAt: db.serverDate(), ...data }
      });

    /* ---------- 读取 ---------- */
    case 'read': {
      if (id) {
        // ① 单条查询：将 doc 对象解构后再 flatten，确保 _id 带出
        const { data: doc } = await col.doc(id).get();        // doc() 单文档查询返回 { data: doc } :contentReference[oaicite:0]{index=0}
        return { data: doc ? flatten(doc) : null };
      }
      // ② 列表查询：同样展平并带 _id
      const res = await col
        .where({ 'data.creatorOpenId': OPENID, ...filter })   // 嵌套字段需点语法 :contentReference[oaicite:1]{index=1}
        .orderBy('data.createdAt', 'desc')
        .skip(offset)
        .limit(limit)
        .get();
      return { data: res.data.map(flatten) };
    }

    /* ---------- 更新 ---------- */
    case 'update': {
      if (!id) throw new Error('id is required for update');

      // 把 { age: 70, weight: 60 } => { 'data.age':70, 'data.weight':60 }
      const nestedPatch = {};
      Object.keys(data).forEach(k => nestedPatch[`data.${k}`] = data[k]);

      return await col.doc(id).update({ data: nestedPatch });
    }

    /* ---------- 删除 ---------- */
    case 'delete': {
      if (!id) throw new Error('id is required for delete');
      return await col.doc(id).remove();
    }

    default:
      return { errCode: 400, errMsg: `Unknown action: ${action}` };
  }
};
