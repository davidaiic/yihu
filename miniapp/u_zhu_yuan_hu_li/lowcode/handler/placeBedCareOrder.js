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
export default async function ({ event, data }) {
  // 1. 页面 / 全局数据
  const {
    selectedBedId, selectedItem, patientInfo,
    days, notes, startDate, hospitalName,
    contactName, contactPhone, extraBedNo, selectedLevel
  } = this.$WEAPPS_COMP.dataset.state;

  // 提取仅需字段
  const {
    _id, name, nickname, avatar_url, mobile, gender
  } = this.$WEAPPS_COMP.__internal__?.$w?.app.dataset.state.user || {};
  const userSnapshot = { _id, name, nickname, avatar_url, mobile, gender };   // 👈 精简

  // 2. 基本校验
  if (!selectedBedId || !selectedItem || !days || !startDate || !hospitalName) {
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '请完整填写必填项', icon: 'none' });
    return;
  }
  if (!contactName || !contactPhone) {
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '请填写联系人姓名和电话', icon: 'none' });
    return;
  }

  try {
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showLoading({ title: '提交订单…' });

    /* 3-A. 创建订单（新增快照字段） */
    const { result: { orderId, amount } } = await this.$WEAPPS_COMP.__internal__?.$w?.cloud.callFunction({
      name: 'createOrderByOpenId',
      data: {
        type: 'inHospital',
        serviceItemId: selectedItem._id,
        deptId:  selectedBedId,
        hospitalName,
        extraBedNo,
        selectedLevel,
        quantity:      days,
        startDate,
        remark:        notes,
        userSnapshot,                              // ✅ 精简后的用户快照
        contactSnapshot: { name: contactName, phone: contactPhone },
        selectedItem,
        patientInfo
      }
    });
    console.log('[placeBedCareOrder] 新订单', orderId, amount);

    /* 3-B. 预支付 */
    //const total_fee = Math.round(Number(amount) * 100);
    const total_fee = Math.round(Number(amount) * 0.01);

    const payRes = await this.$WEAPPS_COMP.__internal__?.$w?.cloud.callFunction({
      name: 'wxpayBedCareOrder',
      data: {
        out_trade_no: orderId,
        total_fee,
        body: selectedItem.name,
        deptId:        selectedBedId,
        serviceItemId: selectedItem.serviceItemId,
        quantity:      days,
        startDate,
        remark:        notes
      }
    });

    /* 4. 微信支付 */
    const pd = payRes.result.data;
    await new Promise((resolve, reject) => {
      wx.requestPayment({
        timeStamp: String(pd.timeStamp),
        nonceStr:  String(pd.nonceStr),
        package:   String(pd.packageVal),
        signType:  String(pd.signType),
        paySign:   String(pd.paySign),
        success: resolve,
        fail:    reject
      });
    });

    /* 5. 成功提示并跳转 */
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '支付成功', icon: 'success' });
    setTimeout(() => {
      this.$WEAPPS_COMP.__internal__?.$w?.utils.navigateTo({ pageId: 'u_shou_hu_home' });
    }, 800);

  } catch (err) {
    console.error('支付流程出错：', err);
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '支付失败，请重试', icon: 'none' });
  } finally {
    this.$WEAPPS_COMP.__internal__?.$w?.utils.hideLoading();
  }
}
