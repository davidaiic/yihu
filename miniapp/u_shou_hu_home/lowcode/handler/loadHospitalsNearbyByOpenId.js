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

  const latitude = this.$WEAPPS_COMP.dataset.state.lat;
  const longitude = this.$WEAPPS_COMP.dataset.state.lng;
  const radius = this.$WEAPPS_COMP.dataset.state.radius;
  
  const currentPage = data.currentPage || 1;
  const pageSize    = data.pageSize    || 5;

  if (typeof latitude !== 'number' || typeof longitude !== 'number') {
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '定位信息错误', icon: 'none' });
    return;
  }

  this.$WEAPPS_COMP.__internal__?.$w?.utils.showLoading({ title: '定位搜索中...' });

  try {
    const res = await this.$WEAPPS_COMP.__internal__?.$w?.cloud.callFunction({
      name: 'listHospitalsNearbyByOpenId',
      data: {
        latitude,
        longitude,
        radius: radius || 10000,
        page: currentPage,
        pageSize
      }
    });
    const result = res.result || {};

    if (result.success) {
      const { data: hospitals, pagination } = result;
      $page.setState({
        viewType:   'nearby',
        lat:        latitude,
        lng:        longitude,
        radius:     radius || 10000,
        hospitals,
        currentPage:pagination.currentPage,
        pageSize:   pagination.pageSize,
        totalPages: pagination.totalPages
      });
    } else {
      console.error('附近查询失败：', result);
      this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '查询失败', icon: 'none' });
    }
  } catch (err) {
    console.error('调用失败', err);
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '网络或服务异常', icon: 'none' });
  } finally {
    this.$WEAPPS_COMP.__internal__?.$w?.utils.hideLoading();
  }


}