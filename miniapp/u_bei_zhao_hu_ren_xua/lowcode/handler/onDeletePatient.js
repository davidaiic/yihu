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

  const { _id } = data.target.targetPatient;

  //console.log(data.target.targetPatient);

  //const target = data?.target?.targetPatient;
  //const _id    = target?._id;



    // 2️⃣ 防出错：无 _id 直接返回
  if (!_id) {
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '无法获取记录 ID', icon: 'error' });
    return;
  }

  // 3️⃣ 弹出加载中的提示
  this.$WEAPPS_COMP.__internal__?.$w?.utils.showLoading({ title: '删除中…' });

  try {
    // 4️⃣ 调用云函数执行删除
    await this.$WEAPPS_COMP.__internal__?.$w?.cloud.callFunction({
      name: 'careRecipients',
      data: {
        action: 'delete',
        id: _id
      }
    });

    // 5️⃣ 前端同步更新状态：从 patientList 中移除已删项
    const { patientList = [] } = this.$WEAPPS_COMP.dataset.state;
    const newList = patientList.filter(item => item._id !== _id);
    this.$WEAPPS_COMP.__internal__?.$w?.page.setState({ patientList: newList });

    // 6️⃣ 完成提示
    this.$WEAPPS_COMP.__internal__?.$w?.utils.hideLoading();
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '删除成功', icon: 'success' });

  } catch (err) {
    // 7️⃣ 错误处理
    console.error('删除失败', err);
    this.$WEAPPS_COMP.__internal__?.$w?.utils.hideLoading();
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '删除失败，请重试', icon: 'error' });
  }


}