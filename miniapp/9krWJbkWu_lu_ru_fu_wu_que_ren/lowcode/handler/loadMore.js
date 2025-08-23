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
() => {
  if (this.$WEAPPS_COMP.dataset.state.pagination.hasMore) {
    // 模拟加载更多数据
    const newData = Array.from({
      "length": 5
    }, (_, i) => ({
      "id": `SC2024071${400 + i}`,
      "reason": ["系统维护", "数据备份", "安全审计"][i % 3],
      "requester": ["技术部", "运维组", "安全中心"][i % 3],
      "createTime": `2024-07-${14 + i % 5} ${10 + i % 12}:${i % 60}`,
      "status": ["pending", "approved", "rejected"][i % 3],
      "code": i % 2 ? `CODE-${Math.random().toString(36).slice(2, 8).toUpperCase()}` : ""
    }));
    this.$WEAPPS_COMP.dataset.state.codeList = [...$comp.dataset.state.codeList, ...newData];
    this.$WEAPPS_COMP.dataset.state.pagination.page += 1;
    this.$WEAPPS_COMP.dataset.state.pagination.hasMore = this.$WEAPPS_COMP.dataset.state.pagination.page < 3;
  }
}
)