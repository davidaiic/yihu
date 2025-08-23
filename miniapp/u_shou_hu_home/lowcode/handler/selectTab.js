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
export default function(options) {
  if(typeof options === 'object' && options!==null && !Array.isArray(options)) {
    const { event, data, params } = options || {};
    return __internal__({event, params: params || data?.target})
  }
  return __internal__(options)
}

const __internal__ = (
_opts => {
  const {
    "event": event,
    "params": params
  } = typeof _opts === "object" && _opts !== null ? _opts : {};

  // 1. 更新当前激活的 tab 并收起更多标签
  this.$WEAPPS_COMP.dataset.state.activeTab = params.tab;
  this.$WEAPPS_COMP.dataset.state.showAllTabs = false;

  // 2. 在页面状态里添加 tab → pageId 的映射表
  this.$WEAPPS_COMP.dataset.state.tabPageMap = {
    "按名字查医院": "u_cha_zhao_yi_yuan",
    "附近的医院": "u_fu_jin_de_yi_yuan",
    "按名字查护理员": "u_an_ming_zi_cha_zhao",
    "附近的护理员": "NearbyCaregiversPage",
    "按名字查月嫂": "u_cha_zhao_yue_sao",
    "按名字查陪诊师": "u_cha_zhao_pei_zhen_shi",
    "附近的月嫂": "NearbyMaternityNursePage",
    "附近的陪诊师": "NearbyAccompanimentPage",
    "北京医院": "BeijingHospitalsPage",
    "上海医院": "ShanghaiHospitalsPage",
    "南京医院": "NanjingHospitalsPage",
    "广州医院": "GuangzhouHospitalsPage",
    "杭州医院": "HangzhouHospitalsPage",
    "知名肿瘤医院": "FamousOncologyHospitalsPage"
  };

  // 3. 按映射表跳转到对应 pageId
  const targetPageId = this.$WEAPPS_COMP.dataset.state.tabPageMap[params.tab];
  if (targetPageId) {

    if ( targetPageId === 'u_cha_zhao_yi_yuan')
    { 
      this.$WEAPPS_COMP.__internal__?.$w?.utils.navigateTo({ pageId:'u_cha_zhao_yi_yuan',

        params: {       // ← 注意这里用 params 而不是 query
          backpageId:'u_shou_hu_home'
        }
      
      });

    }
    else
    {
      // 如果你在微搭里使用的是微信小程序导航 API：
      this.$WEAPPS_COMP.__internal__?.$w?.utils.navigateTo({
        pageId: targetPageId
      });
    }

  }

}
)