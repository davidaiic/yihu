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

/* tools/cacheSMHL.js */
// 缓存键 & 失效时间
export const CACHE_KEY = 'cacheShangmenHuliServices';
export const HOUR = 3600_000;

// 取得整个缓存对象
export function getCache() {
  return this.$WEAPPS_COMP.__internal__?.$w?.app.dataset.state[CACHE_KEY] || { lastUpdate: 0, cityMap: {} };
}

// 覆盖写入
export function setCache(obj) {
  this.$WEAPPS_COMP.__internal__?.$w?.app.setState({ [CACHE_KEY]: obj });
}

// 判定是否过期
export function isExpired() {
  return Date.now() - getCache().lastUpdate > HOUR;
}

// 读取某城市
export function getCityData(cityVal) {
  return getCache().cityMap?.[cityVal];
}

// 写入 / 更新某城市
export function upsertCityData(cityVal, list, selectedService) {
  const cache = getCache();
  cache.lastUpdate = Date.now();
  cache.cityMap = cache.cityMap || {};
  cache.cityMap[cityVal] = { list, selectedService };
  setCache(cache);
}
