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

export default async function({ event, data }) {

  console.log('开始按距离查找医院');
  
  const loc = this.$WEAPPS_COMP.__internal__?.$w?.app.dataset.state.location;
  const pageSize = this.$WEAPPS_COMP.dataset.state.pageSize;
  const currentPage = this.$WEAPPS_COMP.dataset.state.currentPage || 1;

  console.log(loc);

  if (!loc) {
    return this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '获取定位失败', icon: 'none' });
  }

  this.$WEAPPS_COMP.__internal__?.$w?.utils.showLoading({ title: '定位搜索中...' });
  try {
    const res = await this.$WEAPPS_COMP.__internal__?.$w?.cloud.callFunction({
      name: 'listHospitalsNearbyByOpenId',
      data: {
        latitude: loc.latitude,
        longitude: loc.longitude,
        radius: 10000,
        page: currentPage,
        pageSize
      }
    });
    const { data: hospitals, pagination } = res.result;

    console.log(res.result);

    $page.setState({
      viewType: 'nearby',
      lat: loc.latitude,
      lng: loc.longitude,
      radius: 10000,
      hospitals,
      currentPage: pagination.currentPage,
      pageSize: pagination.pageSize,
      totalPages: pagination.totalPages
    });

  } catch (e) {
    console.error('附近搜索失败', e);
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '附近搜索失败', icon: 'none' });
  } finally {
    this.$WEAPPS_COMP.__internal__?.$w?.utils.hideLoading();
  }
}
