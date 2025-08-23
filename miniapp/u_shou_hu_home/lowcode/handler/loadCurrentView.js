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
export default function(page) {

  //console.log('page', page );

  const {
    viewType,
    pageSize,
    searchKeyword,
    lat, lng, radius,
    caregiverCategory
  } = this.$WEAPPS_COMP.dataset.state;

  switch (viewType) {
    case 'init':
      // 初始化医院列表
      this.$WEAPPS_COMP.handler.loadHospitals({
        event: {},
        data: { currentPage: page, pageSize }
      });
      break;

    case 'byName':
      // 按名称搜索医院
      this.$WEAPPS_COMP.handler.loadHospitalsByNameByOpenId({
        event: {},
        data: {
          keyword: searchKeyword,
          currentPage: page,
          pageSize
        }
      });
      break;

    case 'nearby':
      // 附近医院搜索
      this.$WEAPPS_COMP.handler.loadHospitalsNearbyByOpenId({
        event: {},
        data: {
          latitude: lat,
          longitude: lng,
          radius,
          currentPage: page,
          pageSize
        }
      });
      break;

    case 'caregiver':
      // 护理员列表分页
      if (typeof caregiverCategory === 'undefined') {
        this.$WEAPPS_COMP.__internal__?.$w?.utils.showModal({
          title: '提示',
          content: '无法获取护理员类别，请先选择后再翻页'
        });
        return;  // 中断，不调用 loadCaregivers
      }
      this.$WEAPPS_COMP.handler.loadCaregivers({
        event: {},
        data: {
          target: { caregiverCategory },
          currentPage: page,
          pageSize
        }
      });
      break;

    default:
      console.warn('未知 viewType:', viewType);
  }


}