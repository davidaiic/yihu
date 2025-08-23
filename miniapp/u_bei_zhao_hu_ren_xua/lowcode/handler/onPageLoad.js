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

    /* ---------- 1. 显示全局加载 ---------- */
  this.$WEAPPS_COMP.__internal__?.$w?.utils.showLoading({ title: '加载中…' });          // showLoading API:contentReference[oaicite:0]{index=0}

  try {
    /* ---------- 2. 调用云函数获取数据 ---------- */
    const { result } = await this.$WEAPPS_COMP.__internal__?.$w?.cloud.callFunction({   // callFunction 用法:contentReference[oaicite:1]{index=1}
      name: 'careRecipients',
      data: { action: 'read' }                         // 后端会用 OPENID 做过滤
    });

    // ★ 不再手动挑字段，直接用云函数返回的完整数组
    const patientList = (result && result.data) || [];

    /* ---------- 4. 写入页面变量 ---------- */
    this.$WEAPPS_COMP.__internal__?.$w?.page.setState({ patientList });                 // page-level setState:contentReference[oaicite:2]{index=2}

    /* ---------- 5. 结束加载并提示 ---------- */
    this.$WEAPPS_COMP.__internal__?.$w?.utils.hideLoading();
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '加载成功', icon: 'success' }); // showToast API:contentReference[oaicite:3]{index=3}
  } catch (err) {
    console.error('获取被照护人失败', err);
    this.$WEAPPS_COMP.__internal__?.$w?.utils.hideLoading();
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '数据加载失败', icon: 'error' }); // 失败提示:contentReference[oaicite:4]{index=4}
  }

}