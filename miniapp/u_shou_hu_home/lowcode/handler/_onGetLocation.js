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

export default async function ({ event, data }) {

  console.log('[Home] 点击获取当前位置');
  this.$WEAPPS_COMP.__internal__?.$w?.utils.showLoading({ title: '获取当前位置...' });
  try {
    // 优先尝试 wx.getFuzzyLocation
    wx.getFuzzyLocation({
      type: 'wgs84',
      success: async (res) => {
        console.log('[Home] 模糊定位结果：', res);
        const { latitude, longitude } = res;
        // 调用云函数，拉取附近医院列表
        const fnRes = await this.$WEAPPS_COMP.__internal__?.$w?.cloud.callFunction({
          name: 'getNearbyStationsByOpenId',
          data: {
            latitude,
            longitude
          }
        });
        console.log('[Home] getNearbyStationsByOpenId 返回：', fnRes);
        const nearbyHospitals = fnRes.result.data || [];
        this.$WEAPPS_COMP.__internal__?.$w?.page.setState({
          nearbyHospitals,
          showOrderDetails: false
        });
        this.$WEAPPS_COMP.__internal__?.$w?.utils.hideLoading();
      },
      fail: (err) => {
        console.warn('[Home] 模糊定位失败，尝试精确定位：', err);
        wx.getLocation({
          type: 'wgs84',
          success: async (res2) => {
            console.log('[Home] 精确定位结果：', res2);
            const { latitude, longitude } = res2;
            const fnRes2 = await this.$WEAPPS_COMP.__internal__?.$w?.cloud.callFunction({
              name: 'getNearbyStationsByOpenId',
              data: { latitude, longitude }
            });
            const nearbyHospitals = fnRes2.result.data || [];
            this.$WEAPPS_COMP.__internal__?.$w?.page.setState({
              nearbyHospitals,
              showOrderDetails: false
            });
            this.$WEAPPS_COMP.__internal__?.$w?.utils.hideLoading();
          },
          fail: (err2) => {
            console.error('[Home] 定位均失败：', err2);
            this.$WEAPPS_COMP.__internal__?.$w?.utils.hideLoading();
            this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '无法获取定位，请检查授权', icon: 'none' });
          }
        });
      }
    });
  } catch (error) {
    console.error('[Home] onGetLocation 异常：', error);
    this.$WEAPPS_COMP.__internal__?.$w?.utils.hideLoading();
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '获取附近医院失败', icon: 'none' });
  }
  
}