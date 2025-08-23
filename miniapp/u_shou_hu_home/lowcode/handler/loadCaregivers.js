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

  //console.log(data);

  // 1. 从入参中解构 caregiverCategory
  const { caregiverCategory } = data.target; 
  //    — 使用 data.target 获取绑定事件时传入的参数 :contentReference[oaicite:0]{index=0}

  // 2. 若未定义，则弹窗提示并退出
  if (typeof caregiverCategory === 'undefined') {
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showModal({
      title: '提示',
      content: '未获取到护理员类别，操作已取消'
    });
    return;
  }

  // 3. 校验是否为合法的五种类别之一
  const validCategories = ['nearby', 'ward', 'companion', 'home', 'maternity'];
  if (!validCategories.includes(caregiverCategory)) {
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showModal({
      title: '提示',
      content: `护理员类别不正确，请选择：${validCategories.join('、')}`
    });
    return;
  }

  // 4. 校验通过，保存到页面状态
  $page.setState({ caregiverCategory });
  //console.log(caregiverCategory);
  
  const currentPage = this.$WEAPPS_COMP.dataset.state.currentPage || 1;
  const pageSize = this.$WEAPPS_COMP.dataset.state.pageSize || 5;

  this.$WEAPPS_COMP.__internal__?.$w?.utils.showLoading({ title: '加载护理员中...' });

  try {
    const res = await this.$WEAPPS_COMP.__internal__?.$w?.cloud.callFunction({
      name: 'listCaregiversByType',
      data: { type: caregiverCategory, page: currentPage, pageSize }
    });
    
    const result = res.result || {};

    if (result.success) {
      $page.setState({
        viewType: 'caregiver',
        caregivers: result.data,
        currentPage: result.pagination.currentPage,
        pageSize: result.pagination.pageSize,
        totalPages: result.pagination.totalPages
      });
    } else {
      this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '护理员加载失败', icon: 'none' });
      console.error('后端返回失败：', result);
    }

  } catch (err) {
    console.error('调用失败', err);
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '网络或服务异常', icon: 'none' });
  } finally {
    this.$WEAPPS_COMP.__internal__?.$w?.utils.hideLoading();
  }

}