'use strict';
const cloudbase = require('@cloudbase/node-sdk');

exports.main = async (event, context) => {
  // 1. 初始化
  const { keyword = '', page = 1, pageSize = 5 } = event;
  const app = cloudbase.init({ env: cloudbase.SYMBOL_CURRENT_ENV });
  const db = app.database();
  const collection = db.collection('Departments');

  // 2. 用户鉴权（可选保留或移除 userId 返回）
  const authInfo = app.auth().getUserInfo() || {};
  const { openId, uid } = authInfo;
  const userId = openId || uid;
  if (!userId) {
    return { success: false, message: '未登录或无法获取用户标识' };
  }

  // 3. 构建查询条件
  const whereClause = {
    type: 'hospital',
    officialName: new db.RegExp({ regexp: keyword, options: 'i' })
  };

  // 4. 总数 & 分页计算
  const countRes = await collection.where(whereClause).count();
  const total = countRes.total || 0;
  const totalPages = Math.ceil(total / pageSize);

  // 5. 拉取当前页数据
  const dataRes = await collection
    .where(whereClause)
    .skip((page - 1) * pageSize)
    .limit(pageSize)
    .get();

  // 6. 返回统一结构
  return {
    success: true,
    data: dataRes.data,
    pagination: {
      total,
      pageSize,
      currentPage: page,
      totalPages
    }
    // 如需返回 userId 可加上：, userId
  };
};
