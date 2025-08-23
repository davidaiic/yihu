// cloudfunctions/getOrderStatsByOpenId/index.js
'use strict';
const tcb = require('@cloudbase/node-sdk');

exports.main = async (event, context) => {
  // 1. 初始化并鉴权
  const app = tcb.init({ env: tcb.SYMBOL_CURRENT_ENV });
  const authInfo = await app.auth().getUserInfo();
  const openid = authInfo.openId || authInfo.uid;
  if (!openid) {
    throw new Error('未登录或无法获取用户标识');
  }

  // 2. 获取数据库引用
  const db = app.database();
  const orders = db.collection('Orders');

  // 3. 分别统计三种状态的订单数量
  //    假设 status 字段值为 'completed'、'paid'、'pending'
  const [
    completedRes,
    reviewRes,
    pendingRes
  ] = await Promise.all([
    orders.where({ openId: openid, status: 'completed' }).count(),
    orders.where({ openId: openid, status: 'paid' }).count(),
    orders.where({ openId: openid, status: 'pending' }).count()
  ]);

  // 4. 返回统计结果
  return {
    result: {
      completed: completedRes.total,
      paid: reviewRes.total,
      pending: pendingRes.total
    }
  };
};
