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
export default async function({ event, data }) {
  const keyword = (this.$WEAPPS_COMP.dataset.state.searchKeyword || '').trim();

  if (!keyword) {
    return this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '请输入医院名称', icon: 'none' });
  }

  // 默认页码 & 每页条数，也可从页面状态中读取动态调整
  const page = 1;
  const pageSize = 5;

  this.$WEAPPS_COMP.__internal__?.$w?.utils.showLoading({ title: '搜索中...' });
  try {
    const res = await this.$WEAPPS_COMP.__internal__?.$w?.cloud.callFunction({
      name: 'listHospitalsByNameByOpenId',
      data: { keyword, page, pageSize }
    });
    const result = res.result || {};

    if (!result.success) {
      return this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: result.message || '搜索失败', icon: 'none' });
    }

    // 更新医院列表 + 分页状态
    const hospitals = result.data;
    const pagination = result.pagination;

    //console.log(hospitals);

    $page.setState({
      viewType: 'byName',
      searchKeywordlast: keyword,
      hospitals,
      currentPage: pagination.currentPage,
      totalPages: pagination.totalPages
    });
  } catch (e) {
    console.error('按名称搜索失败', e);
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '搜索失败，请重试', icon: 'none' });
  } finally {
    this.$WEAPPS_COMP.__internal__?.$w?.utils.hideLoading();
  }
}
