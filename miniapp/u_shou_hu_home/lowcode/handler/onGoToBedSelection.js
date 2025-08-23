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

  // 从 dataset 里取出本项的 deptId
  //const deptId = event.currentTarget.dataset.deptId;
  // 把整个 target 拿出来
  const targetItem = data.target;
  const deptId = targetItem.deptId;

  console.log('点击医院卡片', deptId);

  // 跳转到床位下单页，并将 deptId 作为 URL 参数
  this.$WEAPPS_COMP.__internal__?.$w?.utils.navigateTo({
    pageId: 'u_bed_selection_page',
    params: {       // ← 注意这里用 params 而不是 query
      parentId: deptId
    }
  });


}