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
export default function({event, data}) {

      const { user } = this.$WEAPPS_COMP.__internal__?.$w?.app.dataset.state;

      if (user?.openid) {
        // —— 退出逻辑 —— 
        // 清空全局，回到默认状态

        console.log('[个人中心] 开始退出登录');

        this.$WEAPPS_COMP.__internal__?.$w?.app.setState({
          user: null,
          assignments: [],
          currentDeptId: null,
          currentRoleId: null
        });

        // （可选）本地缓存也可同步清除
        wx.clearStorageSync('user');

        // 一次性更新所有状态
        $page.setState({
          userInfo : {},
          isLoggedIn : false,
          completedCount : 0,
          paidCount : 0,
          pendingCount : 0,
          assignmentsOptions : [],
          hasCaregiverAssignment : false,
          selectedAssignment : {},
          hasCaregiver : false,
          switching : false
        });

        console.log('[个人中心] 已经退出登录');

      } else {

        this.$WEAPPS_COMP.__internal__?.$w?.utils.navigateTo({ pageId: 'LoginPageByOpenId' });

      }

}