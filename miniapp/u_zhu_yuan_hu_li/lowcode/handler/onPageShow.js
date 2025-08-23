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

  console.log('住院护理下单及支付页面 onPageShow ');

  /* ── 恢复 startDate ── */
  let gStart = this.$WEAPPS_COMP.__internal__?.$w?.app.dataset.state.current_zyhlorder_startDate;

  if (typeof gStart === 'number') {                 // 老数据仍是时间戳 → 转换
    gStart = new Date(gStart).toISOString().split('T')[0];
    // 同步修正全局，避免二次转换
    this.$WEAPPS_COMP.__internal__?.$w?.app.setState({ current_zyhlorder_startDate: gStart });
  }

  if (typeof gStart === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(gStart)) {
    this.$WEAPPS_COMP.__internal__?.$w?.page.setState({ startDate: gStart });
  }

  /* ── 若全局无值，则保持初始化 today ── */
  if (!gStart) {
    const today = new Date().toISOString().split('T')[0];
    this.$WEAPPS_COMP.__internal__?.$w?.page.setState({ startDate: today });
    this.$WEAPPS_COMP.__internal__?.$w?.app.setState({ current_zyhlorder_startDate: today });
  }

  /* ───── ① 恢复两条全局字段 ───── */
  const gDays  = this.$WEAPPS_COMP.__internal__?.$w?.app.dataset.state.current_zyhlorder_days;
  const gNotes = this.$WEAPPS_COMP.__internal__?.$w?.app.dataset.state.current_zyhlorder_notes;

  this.$WEAPPS_COMP.__internal__?.$w?.page.setState({
    ...(gDays  ? { days:      gDays  } : {}),
    ...(gNotes ? { notes:     gNotes } : {})
  });

  // 获取全局科室对象
  const dept = this.$WEAPPS_COMP.__internal__?.$w?.app.dataset.state.current_hospital_dept;
  //console.log(dept);
  // 判断是否存在 officialName
  if (dept && dept.officialName) {
    // 使用 setState 更新页面状态变量 hospitalName
    
    this.$WEAPPS_COMP.__internal__?.$w?.page.setState({ 
      hospitalName: dept.officialName, 
      selectedLevel: this.$WEAPPS_COMP.__internal__?.$w?.app.dataset.state.current_zyhlorder_selectedLevel
    });

    const hospitalId = dept.deptId;     // 当前医院
    const all = this.$WEAPPS_COMP.__internal__?.$w?.app.dataset.state.cacheHospitalOrderByHospital || {};
    const cache = all[hospitalId];
    //console.log('cache=',cache);
    
    if (cache) {

      this.$WEAPPS_COMP.__internal__?.$w?.page.setState(cache);                        // 只有医院匹配才恢复

      //console.log(cache);

        // 已有缓存时：同步加床相关变量               /* --- 新增 --- */
      this.$WEAPPS_COMP.__internal__?.$w?.page.setState({
        extraisExtra: cache.extraisExtra ?? false,
        extraBedNo  : cache.extraBedNo   ?? ''
      });

    } else {

      // 新医院没有缓存 -> 下拉为空，等待用户重新选择
      this.$WEAPPS_COMP.__internal__?.$w?.page.setState({
        selectedLevel: 1,
        selectedWardId: '',
        selectedRoomId: '',
        selectedBedId: '',
        wardOptions: [],
        roomOptions: [],
        bedOptions: [],
        contactName: '',
        contactPhone: '',
        selectedItem : {
          "name": "请先选择医院和病区病房病床",
          "unitPrice": 0
        },
        extraisExtra: false, 
        extraBedNo: ''
      });
    }

    const res = await this.$WEAPPS_COMP.__internal__?.$w?.cloud.callFunction({
      name: 'listDepartmentsByParentByOpenId',
      data: { parentId: dept.deptId }
    });

    this.$WEAPPS_COMP.__internal__?.$w?.page.setState({
      wardOptions: (res.result?.result || [])
                    .map(d => ({ label: d.name, value: d.deptId }))
    });

  }
  
  const patient = this.$WEAPPS_COMP.__internal__?.$w?.app.dataset.state.current_patient_info;
  if (patient && patient.name) {
    // 更新选中值 & 清空下级
    this.$WEAPPS_COMP.__internal__?.$w?.page.setState({
      patientInfo: patient
    });

  }

  const contact = this.$WEAPPS_COMP.__internal__?.$w?.app.dataset.state.selectedContact;
  if (contact && contact.name) {

    this.$WEAPPS_COMP.__internal__?.$w?.page.setState({
      contactName: contact.name,
      contactPhone: contact.phone
    });

  }

  const sLevel = this.$WEAPPS_COMP.__internal__?.$w?.app.dataset.state.current_zyhlorder_selectedLevel;
  if (sLevel > 0 && sLevel < 6 ) {

    this.$WEAPPS_COMP.__internal__?.$w?.page.setState({
      selectedLevel: sLevel
    });

  }

}