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

/**
 * 保存联系人
 * 绑定：保存按钮 tap → onSave
 */
export default async function({ event, data }) {
  // ① 取值并保证为字符串，防止 .trim() 报错
  const nameRaw  = this.$WEAPPS_COMP.dataset.state.newContact_name;
  const phoneRaw = this.$WEAPPS_COMP.dataset.state.newContact_phone;

  const name  = (nameRaw  ?? '').toString().trim();
  const phone = (phoneRaw ?? '').toString().trim();

  // ② 基本校验
  if (!name || !phone) {
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '请先填写完整信息', icon: 'none' });
    return;
  }
  // 可选：手机号简单格式校验
  if (!/^\d{5,20}$/.test(phone)) {                 // 仅数字、5-20位
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '手机号格式不正确', icon: 'none' });
    return;
  }

  // ③ 调云函数
  try {
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showLoading({ title: '正在保存...' });

    await this.$WEAPPS_COMP.__internal__?.$w?.cloud.callFunction({
      name : 'contactsCrud',
      data : { action: 'add', name, phone },
    });

    // ④ 重新拉取联系人列表
    if (this.$WEAPPS_COMP.handler.loadContacts) {
      await this.$WEAPPS_COMP.handler.loadContacts({});
    }

    // ⑤ 清空输入框
    $page.setState({ newContact_name: '', newContact_phone: '' });

    this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '已保存', icon: 'success' });
  } catch (err) {
    console.error('[TODO-REMOVE] onSave error', err);   // TODO-REMOVE
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '保存失败', icon: 'error' });
  } finally {
    this.$WEAPPS_COMP.__internal__?.$w?.utils.hideLoading();        // 官方 hideLoading 接口 :contentReference[oaicite:2]{index=2}
  }
}
