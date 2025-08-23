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
/*  selectLevel  –  护理级别组件 onChange 绑定  */
export default function (options) {
  /* ---------- 0. 兼容两种调用签名 ---------- */
  if (typeof options === 'object' && options !== null && !Array.isArray(options)) {
    const { event, data, params } = options;
    return __internal__({ event, params: params || data?.target });
  }
  return __internal__(options);
}

const __internal__ = (_opts => {
  const { params } = typeof _opts === 'object' && _opts !== null ? _opts : {};
  //const level = parseInt(params.level);
  const level = Number(params?.level) || 1;                       // Fallback → L1

  /* ---------- 1. 更新 selectedLevel（页面 & 全局） ---------- */
  this.$WEAPPS_COMP.__internal__?.$w?.page.setState({ selectedLevel: level });                     // 每次切换都写入 page.state :contentReference[oaicite:0]{index=0}
  this.$WEAPPS_COMP.__internal__?.$w?.app.setState({ current_zyhlorder_selectedLevel: level });    // 全局变量示例 :contentReference[oaicite:1]{index=1}

  /* ---------- 2. 检查医院护理服务缓存 ---------- */
  const list = this.$WEAPPS_COMP.dataset.state.hospitalZYHLServiceItems;
  if (!Array.isArray(list) || !list.length) {
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '请先选择病床', icon: 'error' });   // 交互 API showToast :contentReference[oaicite:2]{index=2}
    return;
  }

  /* ---------- 3. 取出对应级别服务项 ---------- */
  const tpl = `bed_care_L${level}`;
  const selectedItem =
        list.find(it => it.templateId === tpl) ||
        { name: '未配置护理服务', unitPrice: 0 };                // 兜底对象，避免空引用

  /* ---------- 4. 写入页面状态并更新缓存 ---------- */
  this.$WEAPPS_COMP.__internal__?.$w?.page.setState({ selectedItem });                             // setState 写法 :contentReference[oaicite:3]{index=3}

  const selHospId = this.$WEAPPS_COMP.__internal__?.$w?.app.dataset.state.current_hospital_dept?.deptId;
  if (selHospId) {
    const oldCache = this.$WEAPPS_COMP.__internal__?.$w?.app.dataset.state.cacheHospitalOrderByHospital || {};
    this.$WEAPPS_COMP.__internal__?.$w?.app.setState({
      cacheHospitalOrderByHospital: {
        ...oldCache,
        [selHospId]: {
          ...(oldCache[selHospId] || {}),
          selectedLevel: level,
          selectedItem
        }
      }
    });                                                           // app.setState 全局缓存 :contentReference[oaicite:4]{index=4}
  }

  /* ---------- 5. 提示用户（开发期可保留打印） ---------- */
  console.log('[selectLevel] level =', level, 'item =', selectedItem);  // TODO: 发布前移除
});
