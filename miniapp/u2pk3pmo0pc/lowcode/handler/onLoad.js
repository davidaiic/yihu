import { getWedaAPI } from '@cloudbase/weda-client';
const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});
const $w = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.$w?.[prop] }});
/**
 * 
 * 可通过 $page 获取或修改当前页面的 变量 状态 handler lifecycle 等信息
 * 可通过 app 获取或修改全局应用的 变量 状态 等信息
 * 具体可以console.info 在编辑器Console面板查看更多信息
 * 注意：该方法仅在所属的页面有效
 * 如果需要 async-await，请修改成 export default async function() {}
 * 帮助文档 https://cloud.tencent.com/document/product/1301/57912
 **/

/**
 * @param {Object} event - 事件对象
 * @param {string} event.type - 事件名
 * @param {any} event.detail - 事件携带自定义数据
 *
 * @param {Object} data
 * @param {any} data.target - 获取事件传参的数据
 **/
export default async function({ event, data }) {
  console.log('[个人中心] onPageLoad triggered', { event, data });
  const { user, assignments } = this.$WEAPPS_COMP.__internal__?.$w?.app.dataset.state;
  console.log('[个人中心] 全局 user & assignments:', user, assignments);

  // const isLoggedIn = Boolean(user);
  const isLoggedIn = !!(user && Object.keys(user).length);

  if (!isLoggedIn) {
    console.log('[个人中心] 用户未登录，跳过统计与角色选项初始化');
    return;
  }
  
  // 先设置登录状态和用户信息
  $page.setState({ isLoggedIn, userInfo: user });

  // 已登录，开始加载订单统计
  let completedCount = 0, paidCount = 0, pendingCount = 0;
  try {
    console.log('[个人中心] 调用 getOrderStatsByOpenId');
    const statRes = await this.$WEAPPS_COMP.__internal__?.$w?.cloud.callFunction({ name: 'getOrderStatsByOpenId' });
    console.log('[个人中心] 调用 getOrderStatsByOpenId,statRes.result=',statRes.result);
    ({ completed: completedCount, paid: paidCount, pending: pendingCount } = statRes.result.result);
    console.log('[个人中心] 订单统计返回', { completedCount, paidCount, pendingCount });
  } catch (err) {
    console.error('[个人中心] getOrderStatsByOpenId 调用失败', err);
  }

  // 处理 assignmentsOptions
  let assignmentsOptions = [];
  if (Array.isArray(assignments) && assignments.length > 0) {
    assignmentsOptions = assignments.map(a => ({
      label: `${a.roleId}`,
      // label: `${a.deptId} — ${a.roleId}`,
      value: JSON.stringify({ deptId: a.deptId, roleId: a.roleId })
    }));
  } else {
    console.warn('[个人中心] assignments 为空或格式不对，默认不展示切换选项', assignments);
  }

  // 判断是否已有护理员角色
  const hasCaregiverAssignment = Array.isArray(assignments)
    ? assignments.some(a => a.roleId === 'Caregiver')
    : false;
  console.log('[个人中心] hasCaregiverAssignment:', hasCaregiverAssignment);

  // 一次性更新所有状态
  $page.setState({
    completedCount,
    paidCount,
    pendingCount,
    assignmentsOptions,
    hasCaregiverAssignment
  });
}
