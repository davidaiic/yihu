// 云函数：getHomeNursingServiceList
const cloud = require('wx-server-sdk');
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });
const db = cloud.database();

exports.main = async () => {
  const { data } = await db
    .collection('ServiceItem')
    .where({ type: 'home_nursing_service', status: 'active' })
    .get();          // 查询符合条件的全部文档
  return data;
};
