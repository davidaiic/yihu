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

  // 1⃣️ 安全读取全局位置信息
  const loc = this.$WEAPPS_COMP.__internal__?.$w?.app?.dataset?.state?.location;

  // 2⃣️ 判定 loc 是否“非空”：
  //    • loc 为真值（排除 undefined / null）
  //    • 且为对象；且包含至少 1 个自有可枚举属性
  const hasLocation =
    loc &&
    typeof loc === 'object' &&
    Object.keys(loc).length > 0;  // Object.keys 判空常用方法 :contentReference[oaicite:0]{index=0}

  // 3⃣️ 若有定位信息，则拉取附近数据
  if (hasLocation) {

    const { currentPage } = this.$WEAPPS_COMP.dataset.state;

    if (currentPage > 1) {
      $page.setState(
        { currentPage: currentPage - 1 }
      );

    await this.$WEAPPS_COMP.handler.fetchNearby({});
    }
  }
}