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

  // 1. 取出待删除记录 id -----------------------------------------------
  const { id } = data?.target?.targetAddress ?? {};
  if (!id) {
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '无法获取地址记录 ID', icon: 'error' });
    return;
  }

  // 2. 询问用户是否确认删除 ---------------------------------------------
  const { confirm } = await this.$WEAPPS_COMP.__internal__?.$w?.utils.showModal({
    title      : '确认删除',
    content    : '确定要删除该地址吗？此操作无法撤销。',
    confirmText: '删除',
    cancelText : '取消'
  });                                                          // showModal 用法:contentReference[oaicite:1]{index=1}
  if (!confirm) return;        // 用户点了“取消”——直接退出

  // 3. 调用云函数，后端删除 ---------------------------------------------
  try {
    await this.$WEAPPS_COMP.__internal__?.$w?.cloud.callFunction({
      name: 'addrCrud',
      data: { action: 'remove', id }
    });                                                          // 云函数调用:contentReference[oaicite:2]{index=2}

    // 4. 前端同步更新列表，避免闪烁 --------------------------------------
    const list = [...(this.$WEAPPS_COMP.dataset.state.savedLocations || [])]
                   .filter(item => item.id !== id);
    this.$WEAPPS_COMP.__internal__?.$w?.page.setState({ savedLocations: list });

    this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '删除成功', icon: 'success', duration: 1500 });
  } catch (err) {
    console.error(err);
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '删除失败，请稍后重试', icon: 'error' });
  }

}