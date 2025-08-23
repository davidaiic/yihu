// cloudfunctions/listHospitalsNearbyByOpenId/index.js
'use strict';
const tcb = require('@cloudbase/node-sdk');
const app = tcb.init({ env: tcb.SYMBOL_CURRENT_ENV });
const db = app.database();

exports.main = async (event, context) => {
  // 1. 获取并校验用户身份
  const authInfo = await app.auth().getUserInfo();
  const userId = authInfo.openId || authInfo.uid;
  if (!userId) throw new Error('未登录或无法获取用户标识');

  // 2. 分页和定位参数
  const page = parseInt(event.page, 10) || 1;
  const pageSize = parseInt(event.pageSize, 10) || 5;
  const { latitude, longitude, radius } = event;
  if (
    typeof latitude !== 'number' ||
    typeof longitude !== 'number' ||
    typeof radius !== 'number'
  ) {
    return { success: false, message: '缺少有效经纬度或半径参数' };
  }

  // 3. 构造 GeoJSON Point
  const point = new db.Geo.Point(longitude, latitude);

  // 4. 基础筛选条件：只查 hospital 类型
  const baseQuery = { type: 'hospital' };

  // ───【统计总数】───────────────────────────────────
  const countAgg = db.collection('Departments').aggregate();
  countAgg.geoNear({
    near: point,
    distanceField: 'distance',
    maxDistance: radius,
    spherical: true,
    query: baseQuery
  });
  countAgg.count('total');  // 聚合管道第一个阶段必须为 geoNear :contentReference[oaicite:2]{index=2}
  const countRes = await countAgg.end();
  // 从第一个文档的 total 字段读取总数
  const total = Array.isArray(countRes.data) && countRes.data[0]?.total
    ? countRes.data[0].total
    : 0;
  const totalPages = Math.ceil(total / pageSize);

  // ───【分页获取数据】─────────────────────────────────
  const dataAgg = db.collection('Departments').aggregate();
  dataAgg.geoNear({
    near: point,
    distanceField: 'distance',
    maxDistance: radius,
    spherical: true,
    query: baseQuery
  });
  dataAgg.skip((page - 1) * pageSize).limit(pageSize);
  const dataRes = await dataAgg.end();
  // 聚合结果在 data 属性中
  const hospitals = Array.isArray(dataRes.data) ? dataRes.data : [];

  // 5. 返回与之前接口一致的结构
  return {
    success: true,
    data: hospitals,
    pagination: {
      total,
      pageSize,
      currentPage: page,
      totalPages
    }
  };
};
