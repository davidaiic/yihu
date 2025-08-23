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

  
  // 1️⃣ 拆解前端表单数据
  const {
    name,             // 姓名 / 称呼
    age,              // 年龄
    weight,           // 体重
    condition,        // 身体情况
    hospitalNumber,   // 住院号
    relationship,     // 与本人关系（默认“本人”）
    selectedGender    // male / female
  } = this.$WEAPPS_COMP.dataset.state || {};

  /* ---------- 2️⃣ 表单校验（防出错） ---------- */
  if (!name)  { this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '请输入姓名', icon: 'error' }); return; }
  if (!age || isNaN(age)) { this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '年龄无效', icon: 'error' }); return; }
  if (!selectedGender)  { this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '请选择性别', icon: 'error' }); return; }

  // 映射 gender：male → 男，female → 女
  const gender = selectedGender === 'male' ? '男'
               : selectedGender === 'female' ? '女'
               : '';

  /* ---------- 3️⃣ 调用云函数写入数据库 ---------- */
  try {
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showLoading({ title: '提交中…' });             // 全局 loading :contentReference[oaicite:0]{index=0}

    await this.$WEAPPS_COMP.__internal__?.$w?.cloud.callFunction({                           // 前端直接调用云函数 :contentReference[oaicite:1]{index=1}
      name: 'careRecipients',
      data: {
        action: 'create',
        data: {
          relation: relationship || '本人',
          name,
          gender,
          age: Number(age),
          weight: Number(weight),
          condition,
          hospitalId: hospitalNumber
        }
      }
    });                                                     // this.$WEAPPS_COMP.__internal__?.$w?.cloud.callFunction 返回 Promise :contentReference[oaicite:2]{index=2}

    // 先组装出 newPatient 对象
    const newPatient = {
      relation:  relationship || '本人',
      name,                       // 姓名 / 称呼
      gender,                     // 男 / 女
      age:      Number(age),      // 确保是数值
      weight:   Number(weight),   // 体重数值
      condition,                  // 身体情况
      hospitalId: hospitalNumber  // 住院号
    };

    // 再写入全局（或 App 级）状态
    this.$WEAPPS_COMP.__internal__?.$w?.app.setState({ current_patient_info: newPatient });

    this.$WEAPPS_COMP.__internal__?.$w?.utils.hideLoading();                                 // 关闭 loading :contentReference[oaicite:3]{index=3}
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '新增成功', icon: 'success' });  // 成功提示 :contentReference[oaicite:4]{index=4}

    this.$WEAPPS_COMP.__internal__?.$w?.utils.navigateBack({delta:1});

    // 👉 如需清空表单，可在此处 reset
    // this.$WEAPPS_COMP.__internal__?.$w?.form1.reset && this.$WEAPPS_COMP.__internal__?.$w?.form1.reset();

  } catch (err) {
    console.error('新增失败', err);
    this.$WEAPPS_COMP.__internal__?.$w?.utils.hideLoading();
    this.$WEAPPS_COMP.__internal__?.$w?.utils.showToast({ title: '提交失败', icon: 'error' });   // 失败提示 :contentReference[oaicite:5]{index=5}
  }

}