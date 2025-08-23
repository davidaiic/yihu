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

/* handler：loadServices */

export default async function ({ event, data }) {
  const {
    getCityData,
    isExpired,
    upsertCityData
  } = this.$WEAPPS_COMP.__internal__?.$w?.app.common.cacheSMHL;          // ← 调整路径

  const cityVal = this.$WEAPPS_COMP.dataset.state.selectedCity;
  if (!cityVal) return;

  let cityData = getCityData(cityVal);

  try {
    // 缓存为空或过期 → 重新拉
    if (!cityData || isExpired()) {
      this.$WEAPPS_COMP.__internal__?.$w?.utils.showLoading({ title: '加载服务…' });

      const label = (this.$WEAPPS_COMP.dataset.state.cityList || [])
        .find(c => c.value === cityVal)?.label;

      const res = await this.$WEAPPS_COMP.__internal__?.$w?.cloud.callFunction({
        name: 'getSMHLServiceItembycity',
        data: { cityName: label }
      });
      this.$WEAPPS_COMP.__internal__?.$w?.utils.hideLoading();

      if (res.result?.code !== 'OK') {
        throw new Error(res.result?.message || '云函数失败');
      }

      cityData = { list: res.result.list };
      upsertCityData(cityVal, cityData.list);       // 同步写缓存
    }

    $page.setState({
      services: (cityData.list || []).slice(0, 4),
      selectedService: cityData.selectedService || null
    });
  } catch (e) {
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: e.message || '服务加载错误', icon: 'error' });
    console.error('[loadServices]', e);
  }
}
