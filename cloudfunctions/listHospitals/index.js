'use strict';
const cloudbase = require('@cloudbase/node-sdk');

exports.main = async (event, context) => {
  const { page = 1, pageSize = 5 } = event;
  const app = cloudbase.init({ env: cloudbase.SYMBOL_CURRENT_ENV });
  const db = app.database();
  const collection = db.collection('Departments');

  // 只拉取 type==='hospital'
  const whereClause = { type: 'hospital' };

  // 先查询总数
  const countRes = await collection.where(whereClause).count();
  const total = countRes.total || 0;
  const totalPages = Math.ceil(total / pageSize);

  // 跳过 (page-1)*pageSize，取 pageSize 条
  const dataRes = await collection
    .where(whereClause)
    .skip((page - 1) * pageSize)
    .limit(pageSize)
    .get();

  return {
    success: true,
    data: dataRes.data,
    pagination: {
      total,
      pageSize,
      currentPage: page,
      totalPages
    }
  };
};
