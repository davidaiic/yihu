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
export default function({event, data}) {


  // ④ 若全局缓存已有服务数据，直接写入本页
  const cacheSvc = this.$WEAPPS_COMP.__internal__?.$w?.app.dataset.state.cacheShangmenHuliOrder?.services;
  if (Array.isArray(cacheSvc) && cacheSvc.length) {
    this.$WEAPPS_COMP.__internal__?.$w?.page.setState({ services: cacheSvc });
  }

  // ④ 若全局缓存已有服务数据，直接写入本页
  //console.log(this.$WEAPPS_COMP.__internal__?.$w?.app.dataset.state.cacheShangmenHuliOrder);
  const cachesSvc = this.$WEAPPS_COMP.__internal__?.$w?.app.dataset.state.cacheShangmenHuliOrder?.selectedService;
  if ( cachesSvc && cachesSvc.name) {
    //console.log(cachesSvc);
    this.$WEAPPS_COMP.__internal__?.$w?.page.setState({ selectedService: cachesSvc });

  }  

  // ① 读取全局当前地址对象（可能不存在）
  const addrItem = this.$WEAPPS_COMP.__internal__?.$w?.app?.dataset?.state?.current_address_item; // 全局 state :contentReference[oaicite:0]{index=0}
  // ② 解构得到地址字段；如果没有则为 undefined / null / ''
  const pageAddress = addrItem?.address;
  // ③ 只有当 pageAddress 有值时才同步到本页
  if (pageAddress) {
    this.$WEAPPS_COMP.__internal__?.$w?.page.setState({ address: pageAddress }); // 页面级 setState :contentReference[oaicite:1]{index=1}
  }

  const patient = this.$WEAPPS_COMP.__internal__?.$w?.app.dataset.state.current_patient_info;
  if (patient && patient.name) {
    // 更新选中值 & 清空下级
    this.$WEAPPS_COMP.__internal__?.$w?.page.setState({
      patientInfo: patient
    });

  }  

}