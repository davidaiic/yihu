// 云函数：wxpayBedCareOrder.js
'use strict';

const tcb = require('@cloudbase/node-sdk');
const app = tcb.init({ env: tcb.SYMBOL_CURRENT_ENV });

// 业务逻辑：若前端不传 total_fee，则从 Orders 集合回落获取（可选）
async function fetchAmountYuan(orderId) {
  const db = app.database();
  const snap = await db.collection('Orders')
    .where({ orderId })
    .field({ amount: true })
    .get();
  if (!snap.data.length) {
    throw new Error(`订单 ${orderId} 未找到`);
  }
  return snap.data[0].amount;  // 单位：元
}

exports.main = async (event) => {
  console.log('🏷 wxpayBedCareOrder 收到参数：', JSON.stringify(event));

  // 1. 用户身份
  const authInfo = await app.auth().getUserInfo();
  const openid = authInfo.openId || authInfo.uid;
  console.log('🔑 openid =', openid);

  // 2. 必需参数校验
  const out_trade_no = event.out_trade_no;
  if (!out_trade_no) {
    throw new Error('缺少 out_trade_no');
  }
  let total_fee = event.total_fee;         // 单位：分
  console.log('💰 初始 total_fee:', total_fee);

  // 3. 回落获取金额（如前端未传）
  if (total_fee == null) {
    const amountYuan = await fetchAmountYuan(out_trade_no);
    total_fee = Math.round(amountYuan * 100);
    console.log('🔄 回落计算 total_fee =', total_fee, '分');
  }

  // 4. 下单所需其它字段
  const body = event.body || '病床医疗护理服务';
  console.log('📋 body =', body);

  // 5. 调用微信支付云模板
  try {
    const payRes = await app.callFunction({
      name: 'cloudbase_module',
      data: {
        name: 'wxpay_order',
        data: {
          description: body,                // 商品描述
          amount: { total: total_fee, currency: 'CNY' },
          out_trade_no,                     // 商户订单号
          payer: { openid },                // 用户 OpenID
          // **不传 attach**，使用模板中心默认 attach=""
        }
      }
    });
    console.log('✅ wxpay_order 返回：', JSON.stringify(payRes));

    // 6. 检查接口层面错误
    if (payRes.result?.errcode) {
      throw new Error(`微信支付下单失败：${payRes.result.errmsg}`);
    }

    // 7. 透传前端调用
    return payRes.result;
  } catch (err) {
    console.error('❌ wxpayBedCareOrder 执行出错：', err);
    // 向调用方抛出错误，由前端 catch 处理
    throw err;
  }
};
