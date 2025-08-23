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
export default async function({event, data}) {

    // data.openid 是微信一键登录返回的 openid
    const openid = this.$WEAPPS_COMP.__internal__?.$w?.auth.currentUser.openId || this.$WEAPPS_COMP.__internal__?.$w?.auth.currentUser.userId;

    if (!openid) {
      this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '登录失败：未获取到 OpenID', icon: 'error' });
      return;
    }

    $page.setState({ loggingIn: true });
    try {
      // 调用云函数获取或创建用户信息
      const res = await this.$WEAPPS_COMP.__internal__?.$w?.cloud.callFunction({
        name: 'loginByOpenId',
        data: { openid }
      });

      console.log('loginByOpenId返回',res.result);

      const { user, currentDeptId, currentRoleId, assignments } = res.result.result;

      // 1. 填充全局变量
      this.$WEAPPS_COMP.__internal__?.$w?.app.setState({
        user,
        currentDeptId,
        currentRoleId,
        assignments
      });

      // 2. 根据角色设置底部 Tab
      // 如果 assignments 为空，或所有 assignment 都是 Customer，就当作普通用户
      const isCustomer =
        this.$WEAPPS_COMP.__internal__?.$w?.app.dataset.state.assignments?.length === 0 ||
        this.$WEAPPS_COMP.__internal__?.$w?.app.dataset.state.assignments?.every(a => a.roleId === 'Customer');

      if (isCustomer) {
        // 普通用户菜单（方案 C）
        this.$WEAPPS_COMP.__internal__?.$w?.app.setState({
          tabBarConfig: {
            isMultiTerminal: false,
            menuData: [
              { title:'预约', key:'1', iconUrl:'td:home', type:'route', path:'/u_shou_hu_home', children:[] },
              { title:'专家圈', key:'2', iconUrl:'td:shutter', type:'route', path:'/u_peng_you_quan', children:[] },
              { title:'订单页', key:'3', iconUrl:'td:edit', type:'route', path:'/u_ding_dan_A', children:[] },
              { title:'个人中心', key:'4', iconUrl:'td:user', type:'route', path:'/u2pk3pmo0pc', children:[] }
            ],
            mobileMenuData: []
          }
        });
        console.log('一键登录，普通用户',user);
        
        // 登录成功，跳转到普通用户个人中心页
        this.$WEAPPS_COMP.__internal__?.$w?.utils.navigateTo({ pageId : 'u2pk3pmo0pc' });

      } else {
        // 医疗护理员等非普通用户菜单（方案 B）
        this.$WEAPPS_COMP.__internal__?.$w?.app.setState({
          tabBarConfig: {
            isMultiTerminal: false,
            menuData: [
              { title:'工作台', key:'1', iconUrl:'td:work', type:'route', path:'/u_gong_zuo_tai', children:[] },
              { title:'专家圈', key:'2', iconUrl:'td:shutter', type:'route', path:'/u_peng_you_quan', children:[] },
              { title:'订单中心', key:'3', iconUrl:'td:work', type:'route', path:'/u_ding_dan_B', children:[] },
              { title:'个人中心', key:'4', iconUrl:'td:user', type:'route', path:'/u_gong_zuo_wo', children:[] }
            ],
            mobileMenuData: []
          }
        });
        console.log('一键登录，医疗护理员等',user,currentDeptId,currentRoleId,assignments);

        // 登录成功，跳转到普通用户个人中心页
        this.$WEAPPS_COMP.__internal__?.$w?.utils.navigateTo({ pageId : 'u_gong_zuo_wo' });

      }


    } catch (e) {
      console.error('loginByOpenId error', e);
      this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '登录失败', icon: 'error' });
    } finally {
      $page.setState({ loggingIn: false });
    }

}