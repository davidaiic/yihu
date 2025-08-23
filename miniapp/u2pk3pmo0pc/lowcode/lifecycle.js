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
    //console.log('---------> LifeCycle onPageLoad', query)
  },
  onPageShow() {

    this.$WEAPPS_COMP.handler.onLoad({});
    const { user } = this.$WEAPPS_COMP.__internal__?.$w?.app.dataset.state;
    $page.setState({ userInfo : user });
    console.log('个人中心页-> LifeCycle onPageShow userInfo',this.$WEAPPS_COMP.dataset.state.userInfo);
    
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