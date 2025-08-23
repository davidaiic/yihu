'use strict';
const cloudbase = require('@cloudbase/node-sdk');

exports.main = async (event, context) => {
  /* ── 0. 初始化 ───────────────────────────────────────────────────── */
  const app = cloudbase.init({ env: cloudbase.SYMBOL_CURRENT_ENV });
  const db = app.database();

  /* ── 1. 拆包并兜底 ───────────────────────────────────────────────── */
  const {
    type,                       // 订单类型：inHospital / …
    deptId,                     // 病床 / 科室 ID
    serviceItemId,              // 这里前端已传 selectedItem._id
    quantity = 1,
    startDate,
    remark = '',
    selectedItem = {},
    patientInfo = {},
    hospitalName = '',
    userSnapshot = {},
    contactSnapshot = {},
    extraBedNo = '',
    selectedLevel = ''          // 预留：价格分级
  } = event;

  if (!serviceItemId) throw new Error('serviceItemId 不能为空');
  if (!deptId) throw new Error('deptId 不能为空');
  if (!startDate) throw new Error('startDate 不能为空');

  /* ── 2. 取价格 ───────────────────────────────────────────────────── */
  const svcSnap = await db.collection('HospitalServiceItems')
    .doc(serviceItemId)   // 精确按 _id 获取
    .get();

  if (!svcSnap.data || svcSnap.data.length === 0) {
    throw new Error(`HospitalServiceItems 找不到 _id=${serviceItemId}`);
  }

  // 如有分级价（unitPriceByLevel），优先选；否则用 unitPrice
  const svc = svcSnap.data[0];
  const unitPrice = svc.unitPriceByLevel?.[selectedLevel] ?? svc.unitPrice;
  const amount = unitPrice * quantity;

  /* ── 3. 写入 Orders ──────────────────────────────────────────────── */
  const { uid: openId } = await app.auth().getUserInfo();
  const orderId = `ORD_${Date.now()}`;          // 可换成雪花 ID

  await db.collection('Orders').add({
    orderId,
    openId,
    type,
    status: 'pending',

    /* 基本业务字段 */
    deptId,
    serviceItemId,              // = HospitalServiceItems._id
    quantity,
    startDate,
    remark,
    selectedLevel,
    extraBedNo,
    amount,                     // 订单金额
    hospitalName: hospitalName || patientInfo.hospitalName || '',

    /* 全量快照，减少后续多表查询 */
    selectedItem,
    patientInfo,
    userSnapshot,
    contactSnapshot,

    createdAt: db.serverDate()
  });

  /* ── 4. 返回给前端 ──────────────────────────────────────────────── */
  return { orderId, amount };
};
