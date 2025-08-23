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

  const { addressname, addressDetail } = this.$WEAPPS_COMP.dataset.state || {};
  /* ---------- 校验：两字段任一为空就提示并返回 ---------- */
  if (!addressDetail || !addressname) {
    // Toast（非阻断式）
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({
      title: '请先填写完整地址信息',
      icon: 'none',           // 纯文本提示
      duration: 2000          // 2 秒
    });                       // showToast API :contentReference[oaicite:1]{index=1}
    return;
  }

  // label → icon 对照
  const iconMap = {
    '住宅': 'td:houses',
    '康复中心': 'td:hospital-1',
    '护理院': 'td:hospital',
    '养老院': 'td:usergroup',
    '老年公寓': 'td:building-1',
    '福利院': 'td:gift',
    '社区服务中心': 'td:app',
    '日间照料中心': 'td:time',
    '酒店': 'td:hotel-1',
    '农村等偏远地区住所': 'td:map',
    '其它': 'td:more',
  }; // icon names come from TDesign icon set :contentReference[oaicite:3]{index=3}

  await this.$WEAPPS_COMP.__internal__?.$w?.cloud.callFunction({           // Weda front-end SDK
    name: 'addrCrud',
    data: {
      action: 'create',
      data: {
        id       : Date.now(),
        icon     : iconMap[addressname] || 'td:location',
        name     : addressname,
        address  : addressDetail,
        isDefault: false
      }
    }
  }); 

  // 可选：刷新列表
  await this.$WEAPPS_COMP.handler.loadMyAddresses({});


}