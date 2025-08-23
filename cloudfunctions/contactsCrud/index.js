// 云函数：contactsCrud  ——  add / list / delete
const cloud = require('@cloudbase/node-sdk');
const app = cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });
const db = app.database();

exports.main = async (event, context) => {
  const { action, id, name, phone } = event;

  const { WX_OPENID, WX_FROM_OPENID, TCB_UUID } =
    cloud.getCloudbaseContext(context);
  const OPENID = WX_FROM_OPENID || WX_OPENID || TCB_UUID;

  const coll = db.collection('Contacts');

  try {
    switch (action) {
      case 'list':
        return await coll.where({ openid: OPENID }).get();

      case 'add':
        if (!name || !phone) return { code: 400, msg: '姓名和手机号不能为空' };
        return await coll.add({
          openid: OPENID,
          name,
          phone,
          createdAt: Date.now(),
        });

      case 'delete':
        if (!id) return { code: 400, msg: '缺少 id' };
        return await coll.doc(id).remove();

      default:
        return { code: 400, msg: '未知 action' };
    }
  } catch (e) {
    console.error('contactsCrud error', e);   // TODO-REMOVE
    return { code: 500, msg: '系统异常' };
  }
};
