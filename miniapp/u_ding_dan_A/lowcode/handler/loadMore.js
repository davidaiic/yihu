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
export default function(options) {
  if(typeof options === 'object' && options!==null && !Array.isArray(options)) {
    const { event, data, params } = options || {};
    return __internal__({event, params: params || data?.target})
  }
  return __internal__(options)
}

const __internal__ = (
async _opts => {
  const {
    "event": event,
    "params": params
  } = typeof _opts === "object" && _opts !== null ? _opts : {};
  // 模拟加载更多数据
  const newOrders = [{
    "id": "order" + (Math.floor(Math.random() * 1000) + 5),
    "type": ["住院护理", "上门护理", "医院陪诊", "月嫂上门"][Math.floor(Math.random() * 4)],
    "title": "新增护理服务",
    "date": "2025-07-20",
    "status": params.tab,
    "price": "¥" + (Math.floor(Math.random() * 500) + 100) + (Math.random() > 0.5 ? "/天" : "/次"),
    "image": ["abstract_pattern", "cityscape", "forest"][Math.floor(Math.random() * 3)]
  }];
  if (params.tab === "processing") {
    this.$WEAPPS_COMP.dataset.state.processingOrders = [...$comp.dataset.state.processingOrders, ...newOrders];
  } else if (params.tab === "unpaid") {
    this.$WEAPPS_COMP.dataset.state.unpaidOrders = [...$comp.dataset.state.unpaidOrders, ...newOrders];
  } else {
    this.$WEAPPS_COMP.dataset.state.completedOrders = [...$comp.dataset.state.completedOrders, ...newOrders];
  }
}
)