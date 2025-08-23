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

    const {
      loginMethod, name, password,
      mobile, smsCode, mockOpenId
    } = this.$WEAPPS_COMP.dataset.state;

    // 校验，短信未开通，返回。
    if (loginMethod === 'sms'){
      return this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '短信尚未开通', icon: 'error' });
    }

    // 校验
    if (loginMethod === 'password' && (!name || !password)) {
      return this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '请输入用户名和密码', icon: 'none' });
    }
    if (loginMethod === 'sms' && (!mobile || !smsCode)) {
      return this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '请输入手机号和验证码', icon: 'none' });
    }
    
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showLoading({ title: '登录中...' });
    try {
      // 构造调用数据，三种方式都带 mockOpenId
      const fnData = {
        ...(loginMethod === 'password' && { name, password }),
        ...(loginMethod === 'sms'      && { mobile, code: smsCode }),
        mockOpenId
      };

      const res = await this.$WEAPPS_COMP.__internal__?.$w?.cloud.callFunction({
        name: 'login',
        data: fnData
      });
      this.$WEAPPS_COMP.__internal__?.$w?.utils.hideLoading();

      console.log('云函数返回res=',res);

      const user = res.result.user;
      if (!user) {
        return this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '登录失败，请重试', icon: 'none' });
      }

      console.log('准备存入本地',user);
      // 存一份本地
      wx.setStorageSync('userInfo', user);

      this.$WEAPPS_COMP.__internal__?.$w?.app.dataset.state.user = user;
      // 如果没绑定手机号 → 也不强制去编辑页，为了符合微信小程序代码审核规范
      // if (!user.mobile) {
      //   return this.$WEAPPS_COMP.__internal__?.$w?.utils.navigateTo({ pageId: 'editProfile' });
      // }
      // 去个人中心
      console.log('准备去个人中心，全局user=',this.$WEAPPS_COMP.__internal__?.$w?.app.dataset.state.user);
      this.$WEAPPS_COMP.__internal__?.$w?.utils.navigateTo({ pageId: 'u2pk3pmo0pc' });

    } catch (err) {
      this.$WEAPPS_COMP.__internal__?.$w?.utils.hideLoading();
      this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '登录异常', icon: 'error' });
    }


}