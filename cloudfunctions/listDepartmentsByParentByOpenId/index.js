/**
 * 云函数：listDepartmentsByParentByOpenId
 * 说明：根据当前登录用户的 openId 和传入的 parentId，查询 Departments 集合并返回下级部门
 */
'use strict';

const tcb = require('@cloudbase/node-sdk');
const app = tcb.init({ env: tcb.SYMBOL_CURRENT_ENV });
const db = app.database();

exports.main = async (event, context) => {
  const { parentId = null } = event;               // 上级部门 ID，根节点传 null
  const authInfo = await app.auth().getUserInfo();
  const openId = authInfo.openId || authInfo.uid;   // 获取当前用户 openId

  console.log(`listDepartmentsByParentByOpenId: openId=${openId}, parentId=${parentId}`);

  // 查询 Departments 集合中 parentId 匹配的文档
  // （可根据业务需求，在此加入更多基于 openId 的权限过滤条件）
  const snapshot = await db.collection('Departments')
    .where({ parentId })
    .orderBy('name', 'asc')        // 按部门名称升序
    .get();

  // 返回简化后的部门列表
  const departments = snapshot.data.map(doc => ({
    deptId: doc.deptId,
    name: doc.name
  }));

  console.log('返回部门列表：', departments);
  return { result: departments };
};
