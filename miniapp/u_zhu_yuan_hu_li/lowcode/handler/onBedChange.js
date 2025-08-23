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

// onBedChange  (COMPONENT: bed_select)
export default async function ({ event }) {
  /* ---------- 取值与判定 ---------- */
  const { value } = event.detail;
  const label =
        event?.detail?.context?.option?.label ??
        event?.detail?.context?.options?.[0]?.label ?? '';
  const isExtra = label.includes('加床') || value === 'Extra_bed_in_room';

  /* ---------- 新增：更新页面变量 & 全局缓存 ---------- */
  const tenantId = this.$WEAPPS_COMP.__internal__?.$w?.app.dataset.state.current_hospital_dept?.deptId;
  if (!tenantId) {
    return this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '未选择医院', icon: 'error' });
  }

  // 临时创建或合并全局缓存对象
  const allCache = this.$WEAPPS_COMP.__internal__?.$w?.app.dataset.state.cacheHospitalOrderByHospital || {};
  const current = allCache[tenantId] || {};

  if (isExtra) {
    // 进入“加床”流程：仅要求输入床号
    this.$WEAPPS_COMP.__internal__?.$w?.page.setState({ extraisExtra: true, extraBedNo: '' });            /* --- 新增 --- */
    allCache[tenantId] = { ...current, extraisExtra: true, extraBedNo: '' }; /* --- 新增 --- */
    this.$WEAPPS_COMP.__internal__?.$w?.app.setState({ cacheHospitalOrderByHospital: allCache });
    // 提前返回；“加床”不需加载护理服务
    //return;
  } else {
    // 选择普通病床：清空加床标记
    this.$WEAPPS_COMP.__internal__?.$w?.page.setState({ extraisExtra: false, extraBedNo: '' });           /* --- 新增 --- */
    allCache[tenantId] = { ...current, extraisExtra: false, extraBedNo: '' };/* --- 新增 --- */
    this.$WEAPPS_COMP.__internal__?.$w?.app.setState({ cacheHospitalOrderByHospital: allCache });
  }

  /* ---------- 继续原有普通病床逻辑 ---------- */
  this.$WEAPPS_COMP.__internal__?.$w?.page.setState({ selectedBedId: value });

  let serviceList = Array.isArray(this.$WEAPPS_COMP.dataset.state.hospitalZYHLServiceItems)
                  ? this.$WEAPPS_COMP.dataset.state.hospitalZYHLServiceItems
                  : [];

  if (!serviceList.length || serviceList[0]?.tenantId !== tenantId) {
    const { result, error } = await this.$WEAPPS_COMP.__internal__?.$w?.cloud.callFunction({
      name: 'getZYHLServiceItem',
      data: { tenantId }
    });
    if (error) {
      console.error('getZYHLServiceItem error', error);
      return this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '加载服务项失败', icon: 'error' });
    }
    serviceList = Array.isArray(result?.data) ? result.data
              : Array.isArray(result?.result) ? result.result
              : Array.isArray(result) ? result : [];
    this.$WEAPPS_COMP.__internal__?.$w?.page.setState({ hospitalZYHLServiceItems: serviceList });
  }

  const level = Number(this.$WEAPPS_COMP.dataset.state.selectedLevel || 1);
  const tplId = `bed_care_L${level}`;
  const selectedItem = serviceList.find(s => s.templateId === tplId)
                    || serviceList[0] || { name: '未配置护理服务', unitPrice: 0 };
  this.$WEAPPS_COMP.__internal__?.$w?.page.setState({ selectedItem });

  allCache[tenantId] = {
    ...$comp.dataset.state,
    selectedBedId: value,
    hospitalZYHLServiceItems: serviceList,
    selectedItem
  };
  this.$WEAPPS_COMP.__internal__?.$w?.app.setState({ cacheHospitalOrderByHospital: allCache });
}
