// cloudfunctions/sendSms/index.js
'use strict';

const cloudbase = require('@cloudbase/node-sdk');

exports.main = async (event, context) => {
  // 1. 从前端接收手机号
  const { mobile } = event;
  if (!/^1[3-9]\d{9}$/.test(mobile)) {
    throw new Error('Invalid mobile number');
  }

  // 2. 初始化 CloudBase SDK
  const app = cloudbase.init({ env: cloudbase.SYMBOL_CURRENT_ENV });

  // 3. 准备短信下发参数（均从环境变量读取）
  const smsSdkAppId = process.env.SMS_SDK_APP_ID;
  const templateId = process.env.SMS_TEMPLATE_ID;
  const signName = process.env.SMS_SIGN_NAME;
  // 随机 6 位验证码
  const code = Math.floor(100000 + Math.random() * 900000).toString();

  // 4. 调用 OpenAPI 发送短信
  const smsRes = await app.openapi.sms.sendSms({
    // 以下字段名按照腾讯云 OpenAPI 要求
    SmsSdkAppid: smsSdkAppId,
    PhoneNumberSet: [`+86${mobile}`],
    TemplateId: templateId,
    TemplateParamSet: [code],
    SignName: signName
  });

  // 5. 返回结果（生产可去掉 code）
  return {
    success: true,
    code,       // 仅用于调试，生产可移除
    result: smsRes
  };
};
