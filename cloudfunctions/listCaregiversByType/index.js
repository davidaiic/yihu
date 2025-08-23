'use strict';
const cloudbase = require('@cloudbase/node-sdk');
const app = cloudbase.init({ env: cloudbase.SYMBOL_CURRENT_ENV });
const db = app.database();
const COLLECTION = 'Users';

exports.main = async (event, context) => {
  const { type, page = 1, pageSize = 5 } = event;
  const whereClause = {};

  // 如果是附近，则可扩展定位过滤；这里简化为所有 Caregiver
  if (type === 'nearby') {
    whereClause['assignments.roleId'] = 'Caregiver';
  } else {
    // 其余类型直接根据 roleId 过滤
    const roleMap = {
      ward: 'Caregiver',
      companion: 'Companion',
      home: 'HomeCaregiver',
      maternity: 'MaternityMatron'
    };
    // whereClause['assignments.roleId'] = roleMap[type] || 'Caregiver';
    whereClause['assignments.roleId'] = 'Caregiver';
  }

  // 查询总数
  const countRes = await db.collection(COLLECTION).where(whereClause).count();
  const total = countRes.total || 0;
  const totalPages = Math.ceil(total / pageSize);

  // 分页查询
  const dataRes = await db.collection(COLLECTION)
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
