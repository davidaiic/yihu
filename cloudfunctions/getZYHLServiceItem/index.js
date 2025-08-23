/**
 * getZYHLServiceItem   (住院护理 – 医院服务项查询)
 * 参数: { tenantId: string }  // 医院的 tenantId，例如 "hospital_301beijing"
 * 返回: { result: HospitalServiceItem[] }  // 最多 5 条，按 L1→L5 升序
 */
'use strict';
const cloudbase = require('@cloudbase/node-sdk');

exports.main = async (event, context) => {
  const { tenantId } = event || {};
  if (!tenantId) {
    return {              // ① 兜底防错
      error: 'MISSING_TENANT_ID',
      result: []
    };
  }

  const app = cloudbase.init({ env: cloudbase.SYMBOL_CURRENT_ENV }); // 当前环境自动选择 :contentReference[oaicite:0]{index=0}
  const db = app.database();
  const _ = db.command;

  try {
    // L1-L5 模板列表，也可以从ServiceTemplates通过读取typeCode为bed_care读取，此处处理办法为了提速。
    const templates = ['bed_care_L1', 'bed_care_L2', 'bed_care_L3', 'bed_care_L4', 'bed_care_L5'];

    const { data } = await db
      .collection('HospitalServiceItems')
      .where({
        tenantId,
        status: 'active',                           // 只取上架项 :contentReference[oaicite:1]{index=1}
        templateId: _.in(templates)                 // .in 查询写法 :contentReference[oaicite:2]{index=2}
      })
      .orderBy('templateId', 'asc')
      .get();

    return { result: data };

  } catch (err) {
    console.error('[getZYHLServiceItem] DB error', err);   // ⚠️ 调试打印，发布前可移除
    return { error: err.message, result: [] };
  }
};
