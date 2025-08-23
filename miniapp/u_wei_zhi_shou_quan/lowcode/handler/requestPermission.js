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
  if (typeof options === 'object' && options !== null && !Array.isArray(options)) {
    const { event, data, params } = options || {};
    return __internal__({ event, params: params || data?.target });
  }
  return __internal__(options);
}

//const __internal__ = (async () => {
// now an async function you can call
async function __internal__(ctx) {
  console.log("请求位置权限");

  // 1. 查询当前授权设置
  wx.getSetting({
    success(res) {
      const hasAuth = res.authSetting['scope.userLocation'];
      if (hasAuth) {
        // 已授权，直接获取位置
        fetchLocation();
      } else {
        // 未授权，主动请求
        wx.authorize({
          scope: 'scope.userLocation',
          success() {
            // 用户同意授权
            fetchLocation();
          },
          fail() {
            // 用户拒绝或未授权，提示并引导设置
            wx.showModal({
              title: '提示',
              content: '需要获取您的地理位置，请在“设置”中打开定位权限。',
              confirmText: '去设置',
              success(modalRes) {
                if (modalRes.confirm) {
                  wx.openSetting();
                }
              }
            });
          }
        });
      }
    },
    fail(err) {
      console.error('检查授权失败：', err);
    }
  });

  // 2. 获取地理位置的封装方法
  function fetchLocation() {
    wx.getLocation({
      type: 'wgs84',
      success(locRes) {
        console.log('当前位置：', locRes);
        // TODO: 将 locRes.latitude/longitude 写入页面状态或全局状态
                
        const lat = locRes.latitude;
        const lng = locRes.longitude;

        this.$WEAPPS_COMP.__internal__?.$w?.app.dataset.state.location = { latitude: locRes.latitude, longitude: locRes.longitude };

        const key = '5FQBZ-FLW6B-JF3UL-JEOOH-3XM7S-MRBER';  // 替换为你的 Key
        const url = `https://apis.map.qq.com/ws/geocoder/v1/?location=${lat},${lng}&key=${key}`;

        wx.request({
          url,
          method: 'GET',
          success: (resp) => {
            if (resp.statusCode === 200 && resp.data.status === 0) {
              const address = resp.data.result.address;
              //console.log('resp.data.result=',resp.data.result);
              const component = resp.data.result.address_component;
              const city = component?.city || '中国';
              //console.log('解析到完整的地址：', component);
              //this.$WEAPPS_COMP.__internal__?.$w?.app.setState({ addressText: address });
              this.$WEAPPS_COMP.__internal__?.$w?.app.setState({ 
                addressText: address,
                currentCity:city 
              });
            } else {
              console.log('逆地址解析失败，status：', resp.data.status, resp.data.message);
              this.$WEAPPS_COMP.__internal__?.$w?.app.setState({ addressText: '中国' });
            }
          },
          fail: (err) => {
            console.log('HTTP 请求失败：', err);
            this.$WEAPPS_COMP.__internal__?.$w?.app.setState({ addressText: '中国' });
          }
        });

      },
      fail(locErr) {
        console.error('获取位置失败：', locErr);
        this.$WEAPPS_COMP.__internal__?.$w?.app.setState({ addressText: '中国' });
      }
    });
  }
}
