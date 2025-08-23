// cloudfunctions/listCaregiversByProximity/index.js

'use strict';
const tcb = require('@cloudbase/node-sdk');
const app = tcb.init({ env: tcb.SYMBOL_CURRENT_ENV });
const db = app.database();

exports.main = async (event, context) => {
  const { latitude, longitude, page = 1, pageSize = 10 } = event;

  // 1. 校验经纬度
  if (
    typeof latitude !== 'number' ||
    typeof longitude !== 'number'
  ) {
    return { success: false, message: '未提供有效的 latitude/longitude' };
  }

  // 2. 构造地理查询 Point 实例
  const point = new db.Geo.Point(longitude, latitude);

  // 3. 公共筛选条件
  const baseQuery = {
    status: 1,
    assignments: db.command.elemMatch({ roleId: 'Caregiver' })
  };

  // —————————————————————————————
  // 4. 聚合统计总数
  const countAgg = db.collection('Users').aggregate();
  countAgg.geoNear({
    near: point,
    distanceField: 'distance',
    maxDistance: 50000,
    spherical: true,
    query: baseQuery
  });
  countAgg.count('total');
  const countAggRes = await countAgg.end();
  // 4.1 从结果里正确取 total
  const total = Array.isArray(countAggRes.data) && countAggRes.data[0]
    ? countAggRes.data[0].total
    : 0;
  const totalPages = Math.ceil(total / pageSize);

  // —————————————————————————————
  // 5. 聚合分页拉数据
  const dataAgg = db.collection('Users').aggregate();
  dataAgg.geoNear({
    near: point,
    distanceField: 'distance',
    maxDistance: 50000,
    spherical: true,
    query: baseQuery
  });
  dataAgg.skip((page - 1) * pageSize).limit(pageSize);
  const dataAggRes = await dataAgg.end();
  // 5.1 扁平化拿到数组
  const usersList = Array.isArray(dataAggRes.data) ? dataAggRes.data : [];

  // —————————————————————————————
  // 6. 返回与之前一致的结构
  return {
    success: true,
    data: usersList,
    pagination: { page, pageSize, total, totalPages }
  };
};




/*'use strict';
const tcb = require('@cloudbase/node-sdk');
const app = tcb.init({ env: tcb.SYMBOL_CURRENT_ENV });
const db = app.database();

exports.main = async (event, context) => {
  const {
    latitude,
    longitude,
    page = 1,
    pageSize = 5
  } = event;

  // 1. 校验经纬度
  if (
    typeof latitude !== 'number' ||
    typeof longitude !== 'number'
  ) {
    return {
      success: false,
      message: '未提供有效的 latitude/longitude'
    };
  }

  // 2. 构造地理查询 Point 实例
  const point = new db.Geo.Point(longitude, latitude);
  const geoCond = db.command.geoNear({
    geometry: point,
    maxDistance: 50000,
    spherical: true
  });

  // 3. 查询并分页
  const baseFilter = {
    status: 1,
    assignments: db.command.elemMatch({ roleId: 'Caregiver' }),
    location: geoCond
  };

  const [geoRes, countRes] = await Promise.all([
    db.collection('Users')
      .where(baseFilter)
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .get(),
    db.collection('Users')
      .where(baseFilter)
      .count()
  ]);

  const total = countRes.total;
  console.log('countRes', countRes);
  // console.log('countRes', countRes);
  const totalPages = Math.ceil(total / pageSize);

  return {
    success: true,
    data: geoRes.data,
    pagination: { page, pageSize, total, totalPages }
  };
};
*/