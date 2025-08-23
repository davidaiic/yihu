// cloudfunctions/updateUserProfile/index.js
'use strict';
const cloudbase = require('@cloudbase/node-sdk');

// 初始化当前环境
const app = cloudbase.init({ env: cloudbase.SYMBOL_CURRENT_ENV });
const db = app.database();

exports.main = async (event, context) => {
  const { avatar_url, nickname } = event;
  const userInfo = app.auth().getUserInfo() || {};
  const uid = userInfo.uid;
  if (!uid) {
    return { success: false, error: '未登录或身份验证失败' };
  }

  try {
    // 按 openid（_openid）字段匹配，而不是 doc(uid)
    const users = db.collection('Users');
    // 更新 avatar_url 和 nickname
    await users
      .where({ openid: uid })
      .update({
        avatar_url,
        nickname
      });

    // 再取回最新一条记录，返回给前端
    const getRes = await users
      .where({ openid: uid })
      .get();
    const updatedUser = getRes.data[0] || {};

    return {
      success: true,
      user: updatedUser
    };
  } catch (e) {
    console.error('更新用户资料失败', e);
    return { success: false, error: '数据库更新失败' };
  }
};

