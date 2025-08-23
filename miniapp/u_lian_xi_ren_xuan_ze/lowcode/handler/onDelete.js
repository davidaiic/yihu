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
 * 删除联系人
 * 绑定：减号按钮 tap → onDelete
 * 入参：({ id: this.$WEAPPS_COMP.__internal__?.$w?.item_repeater1._id, name: this.$WEAPPS_COMP.__internal__?.$w?.item_repeater1.name })
 */

export default function({ event, data }) {
  const contact = data.target.targetContact || {};
  const id   = contact._id;
  const name = contact.name || '';

  if (!id) {
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '没有 ID', icon: 'error' });
    return;
  }

  // ✅ 用 WeDa 封装的 showModal，跨端可弹
  this.$WEAPPS_COMP.__internal__?.$w?.utils.showModal({
    title  : '确认删除？',
    content: `确定要删除联系人「${name}」吗？`,   // 必须是字符串
    success(res) {
      if (res.confirm) doDelete(id);
    }
  });
}

async function doDelete(id) {
  try {
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showLoading({ title: '正在删除...' });
    await this.$WEAPPS_COMP.__internal__?.$w?.cloud.callFunction({ name: 'contactsCrud', data: { action: 'delete', id } });
    this.$WEAPPS_COMP.handler.loadContacts && await this.$WEAPPS_COMP.handler.loadContacts({});
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '已删除', icon: 'success' });
  } catch (e) {
    console.error('[TODO-REMOVE] doDelete err', e);
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '删除失败', icon: 'error' });
  } finally {
    this.$WEAPPS_COMP.__internal__?.$w?.utils.hideLoading();
  }
}
