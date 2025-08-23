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

 /* handler：chooseQuickService */

export default function (options) {
  if (typeof options === 'object' && options !== null && !Array.isArray(options)) {
    const { event, data, params } = options || {};
    return __internal__({ event, params: params || data?.target });
  }
  return __internal__(options);
}

const __internal__ = (_opts => {
  const { params } = _opts || {};
  const selectedService = params?.service;
  if (!selectedService?._id) {
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '缺少服务信息', icon: 'error' });
    return;
  }

  // ① 写入本页状态
  $page.setState({ selectedService });

  // ② 写入全局订单缓存
  const orderCache = this.$WEAPPS_COMP.__internal__?.$w?.app.dataset.state.cacheShangmenHuliOrder || {};
  orderCache.selectedService = selectedService;
  this.$WEAPPS_COMP.__internal__?.$w?.app.setState({ cacheShangmenHuliOrder: orderCache });

  // ③ 同步到城市级服务缓存（保持一致）
  const {
    getCache,
    upsertCityData
  } = this.$WEAPPS_COMP.__internal__?.$w?.app.common.cacheSMHL;

  const cityVal = this.$WEAPPS_COMP.dataset.state.selectedCity;       // 当前城市 value
  if (cityVal) {
    const list = getCache().cityMap?.[cityVal]?.list || [];
    upsertCityData(cityVal, list, selectedService);
  }

  console.log('[chooseQuickService] 已选', selectedService);
});
