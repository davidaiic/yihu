const tcb = require('@cloudbase/node-sdk');
const app = tcb.init({ env: process.env.TCB_ENV || process.env.SCF_NAMESPACE });
const db = app.database();

const now = () => Date.now();

// Fill with your uploaded icon URLs
const ICON_BASE_URL = "https://636c-cloud1-2gnnlh5lf122b60b-1357073446.tcb.qcloud.la/icon/";

const templates = [
  { _id:'home_nursing_senior_chronic', name:'老年慢病管理型患者', typeCode:'chronic',
    defaultBilling:['per_visit','per_month','per_month_24h'], tags:['血压','血糖','周报'],
    desc:'慢病老人生命体征监测与药物管理', sopHints:['测压','测糖','记录','医嘱沟通'],
    iconUrl: ICON_BASE_URL + 'heart-pulse.svg' },
  { _id:'home_nursing_bedridden', name:'半失能/卧床护理', typeCode:'bedridden',
    defaultBilling:['per_visit','per_month','per_month_24h'], tags:['翻身','拍背','关节活动'],
    desc:'卧床/全失能护理', sopHints:['翻身','防压疮'], iconUrl: ICON_BASE_URL + 'bed.svg' },
  { _id:'home_nursing_post_op', name:'术后康复期护理', typeCode:'post_op',
    defaultBilling:['per_visit','per_week','per_month'], tags:['换药','康复训练'],
    desc:'术后基础换药与康复辅助', sopHints:['换药','并发症观察'], iconUrl: ICON_BASE_URL + 'bandage.svg' },
  { _id:'home_nursing_dementia', name:'认知障碍/阿尔茨海默', typeCode:'dementia',
    defaultBilling:['single','per_month_day','per_month_24h'], tags:['防走失','起夜'],
    desc:'情绪管理与安全看护', sopHints:['安全巡查'], iconUrl: ICON_BASE_URL + 'brain.svg' },
  { _id:'home_maternity_nanny', name:'母婴/产后护理（月嫂）', typeCode:'maternity',
    defaultBilling:['per_month_level'], tags:['母乳','黄疸观察'],
    desc:'产后母婴护理', sopHints:['膳食','喂养'], iconUrl: ICON_BASE_URL + 'baby.svg' },
  { _id:'home_nursing_palliative', name:'癌症/临终关怀护理', typeCode:'palliative',
    defaultBilling:['single','per_day','per_month_24h'], tags:['镇痛','导尿管'],
    desc:'缓和医疗护理', sopHints:['镇痛评估'], iconUrl: ICON_BASE_URL + 'heart-handshake.svg' },
  { _id:'home_nursing_pediatric_rehab', name:'儿童康复/特殊儿童照护', typeCode:'pediatric',
    defaultBilling:['per_month_level'], tags:['康复','看护'],
    desc:'特殊儿童康复照护', sopHints:['个训配合'], iconUrl: ICON_BASE_URL + 'accessibility.svg' },
  { _id:'telemed_doctor_online', name:'医生在线问诊支持', typeCode:'telemed',
    defaultBilling:['per_month_fixed'], tags:['视频问诊'],
    desc:'每周1次视频问诊+病历分析', sopHints:['随访记录'], iconUrl: ICON_BASE_URL + 'stethoscope.svg' },
  { _id:'care_plan_custom', name:'个性化护理计划', typeCode:'care_plan',
    defaultBilling:['per_month_fixed'], tags:['定制方案'],
    desc:'医生团队制定月度护理方案', sopHints:['目标设定'], iconUrl: ICON_BASE_URL + 'clipboard-list.svg' },
  { _id:'mental_counseling_online', name:'心理咨询服务', typeCode:'mental',
    defaultBilling:['per_session_fixed'], tags:['情绪疏导'],
    desc:'线上心理咨询30分钟', sopHints:['量表评估'], iconUrl: ICON_BASE_URL + 'message-circle.svg' },
  { _id:'home_lab_visit', name:'上门采血/检测', typeCode:'lab',
    defaultBilling:['per_visit_fixed'], tags:['采血','体征'],
    desc:'上门血样采集/体征检测', sopHints:['核对试剂'], iconUrl: ICON_BASE_URL + 'test-tube.svg' }
];

const priceMap = {
  chronic: { per_visit: 120, per_month: 2000, per_month_24h: 15000 },
  bedridden: { per_visit: 160, per_month: 3200, per_month_24h: 19800 },
  post_op: { per_visit: 180, per_week: 980, per_month: 3600 },
  dementia: { single: 200, per_month_day: 6800, per_month_24h: 20800 },
  maternity: { per_month_level: { L1: 6800, L2: 8800, L3: 11800 } },
  palliative: { single: 260, per_day: 980, per_month_24h: 23800 },
  pediatric: { per_month_level: { L1: 4800, L2: 6800 } },
  telemed: { per_month_fixed: 100 },
  care_plan: { per_month_fixed: 200 },
  mental: { per_session_fixed: 30 },
  lab: { per_visit_fixed: 50 }
};

const upsert = async (col, where, doc) => {
  const coll = db.collection(col);
  const { data } = await coll.where(where).get();
  if (data && data.length) {
    await coll.doc(data[0]._id).update({ ...doc, updatedAt: now() });
    return { op: 'update', id: data[0]._id };
  } else {
    const add = await coll.add({ ...doc, createdAt: now(), updatedAt: now() });
    return { op: 'insert', id: add.id };
  }
};

exports.main = async () => {
  try {
    for (const t of templates) {
      await upsert('ServiceTemplates', { _id: t._id }, t);
    }
    // Optional: you can also mass-enable items for stations later via the other seed
    return { code:'OK', data: { templates: templates.length } };
  } catch (e) {
    return { code:'SYS_ERR', message: e.message, stack: String(e.stack||e) };
  }
};
