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
export default function (value, formValues, key) {
  if (key === 'newPwdConfirm' && formValues.newPwd && formValues.newPwd !== formValues.newPwdConfirm) {
    return '与新密码输入不一致';
  }

  if (value?.length < 8 || value?.length > 32) {
    return '密码在8 ～ 32 位字符数以内（推荐12位以上）';
  }

  if (/^[\(\)\!\@\#\$\%\^\&\*\|\?\>\<\/]/.test(value?.charAt(0))) {
    return '密码不能以特殊字符开头';
  }

  if (Number(/[a-z]/g.test(value)) + Number(/[A-Z]/g.test(value)) + Number(/[0-9]/g.test(value)) + Number(/[()!@#$%^&*|?><]/g.test(value)) <= 2) {
    return '密码至少包含其中三项: 小写字母 a-z, 大写字母 A-Z, 数字 0-9, ()!@#$%^&*|?><';
  }

  if (formValues.newPwd === formValues.oldPwd) {
    return '新旧密码不能相同';
  }

  return undefined;
}