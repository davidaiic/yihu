'use strict';
const tcb = require('@cloudbase/node-sdk');

exports.main = async (event, context) => {
  // 1. 初始化
  const app = tcb.init({ env: tcb.SYMBOL_CURRENT_ENV });
  const db = app.database();
  const Users = db.collection('Users');

  // 2. 获取 openid
  const { openid } = event;
  if (!openid) {
    throw new Error('缺少 openid');
  }

  // 3. 查询用户是否存在
  const existing = await Users.where({ openid }).limit(1).get();
  let userDoc;
  if (existing.data && existing.data.length > 0) {
    // 非首次登录：读取已有数据
    userDoc = existing.data[0];
  } else {
    // 首次登录：创建新用户记录（默认角色 Customer）
    const now = db.serverDate();
    const newUser = {
      openid,
      name: '',
      nickname: '',
      avatar_url: '',
      mobile: '',
      status: 1,
      globalRoles: [],
      assignments: [
        // 默认普通用户不隶属任何部门，前端以 assignments.empty 视为 Customer
      ],
      createdAt: now,
      updatedAt: now
    };
    const addRes = await Users.add({ data: newUser });
    userDoc = { _id: addRes.id, ...newUser };
  }

  // 4. 确定 currentDeptId & currentRoleId：取 assignments 第一项（若有）
  const assignments = Array.isArray(userDoc.assignments) ? userDoc.assignments : [];
  let currentDeptId = null, currentRoleId = null;
  if (assignments.length > 0) {
    currentDeptId = assignments[0].deptId;
    currentRoleId = assignments[0].roleId;
  }

  // 5. 安全：不返还 passwordHash
  delete userDoc.passwordHash;

  // 6. 返回给前端填充全局状态
  return {
    result: {
      user: userDoc,
      currentDeptId,
      currentRoleId,
      assignments
    }
  };
};
