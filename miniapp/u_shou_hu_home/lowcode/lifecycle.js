import { getWedaAPI } from '@cloudbase/weda-client';
const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});
const $w = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.$w?.[prop] }});
/*
* 可通过 $page 获取或修改当前页面的 变量 状态 handler lifecycle 等信息
* 可通过 app 获取或修改全局应用的 变量 状态 等信息
* 具体可以 console.info 在编辑器Console面板查看更多信息
* 如果需要 async-await，请在方法前 async
* 生命周期文档请参考：https://cloud.tencent.com/document/product/1301/71504
*/

export default {
  onPageLoad(query) {

    console.log('首页预约页[onPageLoad]');

    // const { hospitalInfo } = query;

    // 只有当 hospitalInfo 已定义且有值时才进入后续逻辑
    // if (typeof hospitalInfo !== 'undefined' && hospitalInfo !== null && hospitalInfo !== '') {
    //   // 1. 解析列表页传来的 hospitalInfo（可能是字符串）
    //   let hospitalInfoParse = hospitalInfo;
    //   if (typeof hospitalInfoParse === 'string') {
    //     try {
    //       hospitalInfoParse = JSON.parse(hospitalInfoParse);
    //       console.log('解析 hospitalInfoParse 成功：', hospitalInfoParse);
    //     } catch (e) {
    //       console.error('解析 hospitalInfoParse 失败：', e);
    //       hospitalInfoParse = {};
    //     }
    //   }

      // 2. 解析成功后，把需要的值写入页面状态（示例用 deptId）
      // if (hospitalInfoParse.deptId) {
      //   $page.setState({ hospitalInfo: hospitalInfoParse.deptId });
      //   console.log('设置页面状态 hospitalInfo：', hospitalInfoParse.deptId);
      // } else {
      //   console.warn('hospitalInfoParse 中没有 deptId 字段');
      // }

    // } else {
    //   // hospitalInfo 不存在或为空时的兜底逻辑
    //   console.log('没有传入 hospitalInfo，跳过解析');
    // }

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
                const component = resp.data.result.address_component;
                //console.log('resp.data.result=',resp.data.result);
                const city = component?.city || '中国';
                
                //console.log('解析到完整的地址：', component);
                $page.setState({ addressText: city });

                const address = resp.data.result.address;
                this.$WEAPPS_COMP.__internal__?.$w?.app.setState({ 
                  addressText: address,
                  currentCity:city 
                });

              } else {
                console.log('逆地址解析失败，status：', resp.data.status, resp.data.message);
                $page.setState({ addressText: '中国' });
              }
            },
            fail: (err) => {
              console.log('HTTP 请求失败：', err);
              $page.setState({ addressText: '中国' });
            }
          });

        },
        fail(locErr) {
          console.error('获取位置失败：', locErr);
          $page.setState({ addressText: '中国' });
        }
      });
    }

  },
  onPageShow() {
    //console.log('---------> LifeCycle onPageShow')
  },
  onPageReady() {
    //console.log('---------> LifeCycle onPageReady')
  },
  onPageHide() {
    //console.log('---------> LifeCycle onPageHide')
  },
  onPageUnload() {
    //console.log('---------> LifeCycle onPageUnload')
  },
}