/**
 * 云函数：getSMHLServiceItembycity
 * 入参：{ cityName:string }
 * 出参：{ list: ServiceItem[] }
 */
const cloud = require('@cloudbase/node-sdk');
const app = cloud.init({ env: process.env.TCB_ENV });
const db = app.database();

exports.main = async (event, context) => {
  const { cityName } = event;
  if (!cityName) return { code: 'ERR_PARAM', message: 'cityName 不能为空' };

  try {
    const { data } = await db.collection('HospitalServiceItems')
      .where({
        cityName,                        // 假设表里有 cityName 字段，若字段不同请改
        type: 'home_nursing_service',
        status: 'active'
      })
      .get();

    return { code: 'OK', list: data };
  } catch (e) {
    console.error(e);
    return { code: 'SYS_ERR', message: e.message };
  }
};
