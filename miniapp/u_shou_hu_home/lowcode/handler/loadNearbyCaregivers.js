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
 // 页面脚本：caregiver_list_page.js
export default async function({event, data}) {

  console.log('▶▶▶ loadNearbyCaregivers start');

  this.$WEAPPS_COMP.__internal__?.$w?.utils.showLoading({ title: '加载附近护理员...' });

  try {
    // 1. 保存选择类型
    $page.setState({ caregiverCategory: 'nearby' });

    // 2. 从全局 state 读取定位信息
    const appState = this.$WEAPPS_COMP.__internal__?.$w?.app.dataset.state;
    const loc = appState.location;
    console.log('全局 location:', loc);

    let latitude, longitude;
    // 2.1 如果 loc.coordinates 是数组
    if (loc && Array.isArray(loc.coordinates)) {
      [ longitude, latitude ] = loc.coordinates;
    }
    // 2.2 否则，如果直接有 lat/lng 字段
    else if (loc && typeof loc.latitude === 'number' && typeof loc.longitude === 'number') {
      latitude = loc.latitude;
      longitude = loc.longitude;
    }
    // 2.3 都不是，就提示并退出
    else {
      console.error('❌ 定位信息无法解析', loc);
      this.$WEAPPS_COMP.__internal__?.$w?.utils.showModal({
        title: '定位失败',
        content: '未获取到有效定位信息，请检查定位权限或刷新页面'
      });
      return;
    }

    console.log('解析到经纬度：', { latitude, longitude });

    // 3. 调用云函数
    const page = this.$WEAPPS_COMP.dataset.state.currentPage || 1;
    const pageSize = this.$WEAPPS_COMP.dataset.state.pageSize || 10;
    const callData = { latitude, longitude, page, pageSize };
    console.log('调用 listCaregiversByProximity 参数：', callData);

    const res = await this.$WEAPPS_COMP.__internal__?.$w?.cloud.callFunction({
      name: 'listCaregiversByProximity',
      data: callData
    });
    console.log('云函数返回：', res);

    const result = res.result || {};
    if (result.success) {
      console.log('✅ 护理员列表：', result.data);
      $page.setState({
        viewType:     'caregiver',
        caregivers:   result.data,
        currentPage:  result.pagination.page,
        pageSize:     result.pagination.pageSize,
        totalPages:   result.pagination.totalPages
      });
    } else {
      console.warn('⚠️ 云函数失败：', result.message);
      this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({
        title: result.message || '加载失败',
        icon: 'none'
      });
    }

  } catch (err) {
    console.error('❌ 调用异常：', err);
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '网络或服务异常', icon: 'none' });
  } finally {
    this.$WEAPPS_COMP.__internal__?.$w?.utils.hideLoading();
    console.log('▶▶▶ loadNearbyCaregivers end');
  }

}