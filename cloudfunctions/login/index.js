// cloudfunctions/login/index.js
'use strict';

const cloudbase = require('@cloudbase/node-sdk');
const bcrypt = require('bcryptjs');

exports.main = async (event, context) => {
  // 1. 初始化 CloudBase 环境和数据库引用
  const app = cloudbase.init({ env: cloudbase.SYMBOL_CURRENT_ENV });
  const db = app.database();
  const dbCmd = db.command;

  console.log('login event payload:', event);
  const { grantType, username, name, password, mobile, code } = event;
  console.log('params → name:', name, ', password:', password, ', mobile:', mobile, ', code:', code);

  // 2. 取 openid：预览用 mockOpenId，真机用 getUserInfo().uid
  const mockOpenId = event.mockOpenId;
  const authInfo = app.auth().getUserInfo() || {};
  const realUid = authInfo.uid;
  const openid = mockOpenId || realUid || '';
  console.log('using openid:', openid);

  let userDoc;

  // 1. 用户名+密码 WEB管理端登录
  if (grantType === 'password') {


    console.log('web后台登录时的 openid=', openid);

    if (!username || !password) {
      return { success: false, error: '请提供用户名和密码' };
    }

    // 小程序业务端用的是name，而web管理端用的是username，未来需要统一；
    const name = username;
    const res = await db.collection('Users').where({ name }).get();
    if (res.data.length === 0 || !bcrypt.compareSync(password, res.data[0].passwordHash)) {
      return { success: false, error: '用户名或密码错误' };
    }
    const user = res.data[0];
    // 写审计日志
    await db.collection('AuditLogs').add({
      action: 'LOGIN',
      collection: 'Users',
      recordId: user._id,
      operator: user.openid,
      operatorName: user.name,
      timestamp: new Date(),
      detail: {}
    });
    return { success: true, data: user };
  }

  // —— 分支 1：用户名 + 密码 —— 
  if (name && password) {
    // 1) 先按 name 查
    const qr = await db.collection('Users')
      .where({ name })
      .limit(1)
      .get();

    if (qr.data.length === 0) {
      // 没有找到同名账号 → 给“当前 openid”用户绑定 name/password
      // 1.1 计算 hash
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      // 1.2 按 openid 查当前用户
      const meQr = await db.collection('Users')
        .where({ openid })
        .limit(1)
        .get();

      if (meQr.data.length > 0) {
        // 更新现有用户
        await db.collection('Users').doc(meQr.data[0]._id).update({
          name,
          passwordHash: hash,
          updatedAt: new Date()
        });
        userDoc = {
          _id: meQr.data[0]._id,
          openid,
          name,
          passwordHash: hash,
          // 其余字段可从 meQr.data[0] 拷贝
        };
        console.log('绑定用户名/密码到当前用户：', userDoc);
      } else {
        // 理论上不会走到，保险起见可新建
        const doc = {
          openid,
          name,
          passwordHash: hash,
          mobile: '',
          roles: [],
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        };
        const addRes = await db.collection('Users').add(doc);
        userDoc = { _id: addRes.id, ...doc };
        console.log('未找到 openid 用户，新建并绑定：', userDoc);
      }

    } else {
      // 原有流程：找到了同名账号，就校验密码……
      userDoc = qr.data[0];
      if (!bcrypt.compareSync(password, userDoc.passwordHash || '')) {
        throw new Error('用户名或密码错误');
      }
      // （可选）校验通过后，不修改 openid
      console.log('按用户名登录成功：', userDoc);
    }
  }
  else if (mobile && code) {
    // 校验短信验证码
    const smsAppId = process.env.SMS_SDK_APP_ID;
    const smsRes = await app.openapi.sms.checkSmsCode({
      mobile,
      code,
      smsSdkAppId: smsAppId
    });
    if (smsRes.errorCode !== 0) {
      console.log('短信验证码校验失败:', smsRes);
      throw new Error('验证码校验失败');
    }

    // 只按手机号查，不涉及 openid
    const qr = await db.collection('Users')
      .where({ mobile })
      .limit(1)
      .get();

    if (qr.data.length === 0) {
      console.log('手机号不存在:', mobile);
      throw new Error('手机号未注册');
    }

    userDoc = qr.data[0];
    console.log('found user by mobile:', userDoc);

    // 同理，不修改 openid

    // —— 分支 3：纯 openid 一键登录 —— 
  } else if (openid) {
    const qr = await db.collection('Users')
      .where({ openid })
      .limit(1)
      .get();

    if (qr.data.length > 0) {
      userDoc = qr.data[0];
      console.log('found user by openid:', userDoc);
    } else {
      // 新用户：只创建和你当前 openid 绑定的“自己账号”
      const doc = {
        openid,
        name: '',
        passwordHash: '',
        mobile: '',
        roles: [],
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      const addRes = await db.collection('Users').add(doc);
      userDoc = { _id: addRes.id, ...doc };
      console.log('created new user via openid:', userDoc);
    }

  } else {
    console.log('登录参数不足');
    throw new Error('登录参数不足');
  }

  // 3. 安全：不返还 passwordHash
  delete userDoc.passwordHash;

  console.log('login success, returning user:', userDoc);
  return { user: userDoc };
};
