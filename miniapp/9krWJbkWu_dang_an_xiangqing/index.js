import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'


const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
}

const widgetProps = {
  "container1": {
    "style": {},
    "classList": [
      "ai-generate-wrapper"
    ],
    "data": {},
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container2": {
    "style": {
      "padding": "16px",
      "minHeight": "100vh",
      "backgroundColor": "#f8f9fa"
    },
    "classList": [],
    "_parentId": "container1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "card1": {
    "style": {
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "borderRadius": "12px",
      "marginBottom": "16px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdCard"
  },
  "container3": {
    "style": {
      "display": "flex",
      "alignItems": "center"
    },
    "classList": [],
    "_parentId": "card1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "image1": {
    "style": {
      "width": "60px",
      "height": "60px",
      "marginRight": "12px",
      "borderRadius": "30px"
    },
    "classList": [],
    "fit": "cover",
    "_parentId": "container3",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdImage"
  },
  "container4": {
    "style": {},
    "classList": [],
    "_parentId": "container3",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text1": {
    "style": {
      "color": "inherit",
      "display": "block",
      "fontSize": "18px",
      "fontWeight": "600"
    },
    "classList": [],
    "level": "title-5",
    "_parentId": "container4",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container5": {
    "style": {
      "display": "flex",
      "marginTop": "4px"
    },
    "classList": [],
    "_parentId": "container4",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text2": {
    "style": {
      "color": "#666",
      "display": "inline-block",
      "marginRight": "8px"
    },
    "classList": [],
    "_parentId": "container5",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text3": {
    "style": {
      "color": "#666",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "container5",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container6": {
    "style": {
      "gap": "12px",
      "display": "grid",
      "gridTemplateColumns": "repeat(2, 1fr)"
    },
    "classList": [],
    "_parentId": "card1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container7": {
    "style": {},
    "classList": [],
    "_parentId": "container6",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text4": {
    "style": {
      "color": "#999",
      "display": "inline-block",
      "fontSize": "12px"
    },
    "classList": [],
    "text": "身份证号",
    "_parentId": "container7",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text5": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "marginTop": "4px"
    },
    "classList": [],
    "_parentId": "container7",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container8": {
    "style": {},
    "classList": [],
    "_parentId": "container6",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text6": {
    "style": {
      "color": "#999",
      "display": "inline-block",
      "fontSize": "12px"
    },
    "classList": [],
    "text": "联系电话",
    "_parentId": "container8",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text7": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "marginTop": "4px"
    },
    "classList": [],
    "_parentId": "container8",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "card2": {
    "style": {
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "borderRadius": "12px",
      "marginBottom": "16px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdCard"
  },
  "text8": {
    "style": {
      "color": "inherit",
      "display": "block",
      "fontSize": "16px",
      "fontWeight": "600"
    },
    "classList": [],
    "text": "健康档案记录",
    "level": "title-5",
    "maxLines": "1",
    "_parentId": "card2",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "button5": {
    "style": {
      "color": "#0052d9",
      "minHeight": "initial"
    },
    "classList": [],
    "icon": "td:add",
    "variant": "text",
    "iconType": "icon-only",
    "_parentId": "card2",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container9": {
    "style": {
      "gap": "16px",
      "display": "grid",
      "textAlign": "center",
      "gridTemplateColumns": "repeat(3, 1fr)"
    },
    "classList": [],
    "_parentId": "card2",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container10": {
    "style": {},
    "classList": [],
    "_parentId": "container9",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text9": {
    "style": {
      "color": "#999",
      "display": "inline-block",
      "fontSize": "12px"
    },
    "classList": [],
    "text": "血压",
    "_parentId": "container10",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text10": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "fontSize": "14px",
      "marginTop": "8px",
      "fontWeight": "500"
    },
    "classList": [],
    "_parentId": "container10",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container11": {
    "style": {},
    "classList": [],
    "_parentId": "container9",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text11": {
    "style": {
      "color": "#999",
      "display": "inline-block",
      "fontSize": "12px"
    },
    "classList": [],
    "text": "心率",
    "_parentId": "container11",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text12": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "fontSize": "14px",
      "marginTop": "8px",
      "fontWeight": "500"
    },
    "classList": [],
    "_parentId": "container11",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container12": {
    "style": {},
    "classList": [],
    "_parentId": "container9",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "text13": {
    "style": {
      "color": "#999",
      "display": "inline-block",
      "fontSize": "12px"
    },
    "classList": [],
    "text": "体温",
    "_parentId": "container12",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text14": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "fontSize": "14px",
      "marginTop": "8px",
      "fontWeight": "500"
    },
    "classList": [],
    "_parentId": "container12",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container13": {
    "style": {},
    "classList": [],
    "_parentId": "container9",
    "_order": 3,
    "widgetType": "gsd-h5-react:Container"
  },
  "text15": {
    "style": {
      "color": "#999",
      "display": "inline-block",
      "fontSize": "12px"
    },
    "classList": [],
    "text": "体重",
    "_parentId": "container13",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text16": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "fontSize": "14px",
      "marginTop": "8px",
      "fontWeight": "500"
    },
    "classList": [],
    "_parentId": "container13",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container14": {
    "style": {},
    "classList": [],
    "_parentId": "container9",
    "_order": 4,
    "widgetType": "gsd-h5-react:Container"
  },
  "text17": {
    "style": {
      "color": "#999",
      "display": "inline-block",
      "fontSize": "12px"
    },
    "classList": [],
    "text": "身高",
    "_parentId": "container14",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text18": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "fontSize": "14px",
      "marginTop": "8px",
      "fontWeight": "500"
    },
    "classList": [],
    "_parentId": "container14",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container20": {
    "style": {
      "margin": "10px 0px 0px"
    },
    "classList": [],
    "data": {},
    "_parentId": "card2",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text26": {
    "style": {},
    "classList": [],
    "maxLines": "1",
    "inheritColor": true,
    "_parentId": "container20",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "card3": {
    "style": {
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "borderRadius": "12px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdCard"
  },
  "container15": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "card3",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text19": {
    "style": {
      "color": "inherit",
      "display": "block",
      "fontSize": "16px",
      "fontWeight": "600"
    },
    "classList": [],
    "text": "就诊记录",
    "level": "title-5",
    "_parentId": "container15",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "button1": {
    "style": {
      "color": "#0052d9",
      "minHeight": "initial"
    },
    "classList": [],
    "icon": "td:add",
    "variant": "text",
    "iconType": "icon-only",
    "_parentId": "container15",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container16": {
    "style": {},
    "classList": [],
    "_parentId": "card3",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "repeater1": {
    "style": {},
    "classList": [],
    "suffix": "repeater1",
    "forItem": "item_repeater1",
    "forIndex": "index_repeater1",
    "_parentId": "container16",
    "_order": 0,
    "widgetType": "gsd-h5-react:Repeater"
  },
  "repeater1_item": {
    "style": {},
    "classList": [],
    "_parentId": "repeater1",
    "widgetType": "gsd-h5-react:RepeaterItem"
  },
  "container17": {
    "style": {
      "padding": "16px",
      "borderBottom": "1px solid #eee"
    },
    "classList": [],
    "_parentId": "repeater1_item",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container18": {
    "style": {
      "display": "flex",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "container17",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text24": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "fontWeight": "500"
    },
    "classList": [],
    "_parentId": "container18",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text25": {
    "style": {
      "color": "#666",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "container18",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text20": {
    "style": {
      "color": "#666",
      "display": "inline-block",
      "marginTop": "8px"
    },
    "classList": [],
    "_parentId": "container17",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text21": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "marginTop": "8px",
      "fontWeight": "500"
    },
    "classList": [],
    "_parentId": "container17",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text22": {
    "style": {
      "color": "#666",
      "display": "inline-block",
      "marginTop": "4px"
    },
    "classList": [],
    "_parentId": "container17",
    "_order": 3,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text23": {
    "style": {
      "color": "#666",
      "display": "inline-block",
      "marginTop": "8px"
    },
    "classList": [],
    "_parentId": "container17",
    "_order": 4,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container19": {
    "style": {
      "display": "flex",
      "marginTop": "8px",
      "justifyContent": "flex-end"
    },
    "classList": [],
    "_parentId": "container17",
    "_order": 5,
    "widgetType": "gsd-h5-react:Container"
  },
  "button2": {
    "style": {
      "color": "#666",
      "minHeight": "initial",
      "marginRight": "8px"
    },
    "classList": [],
    "icon": "td:edit-1",
    "variant": "text",
    "iconType": "icon-only",
    "_parentId": "container19",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button3": {
    "style": {
      "color": "#f44336",
      "minHeight": "initial"
    },
    "classList": [],
    "icon": "td:remove",
    "variant": "text",
    "iconType": "icon-only",
    "_parentId": "container19",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  }
}





const evtListeners = {}

const behaviors = []

const properties = {
}

const events = [
]



const dataBinds = {
  image1: { 'src': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.patientInfo.avatar
    )}
  },
  text1: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.patientInfo.name
    )}
  },
  text2: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.patientInfo.gender
    )}
  },
  text3: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `${$comp.dataset.state.patientInfo.age}岁`
    )}
  },
  text5: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.patientInfo.idCard
    )}
  },
  text7: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.patientInfo.phone
    )}
  },
  text10: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `${$comp.dataset.state.vitalSigns.bloodPressure} mmHg`
    )}
  },
  text12: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `${$comp.dataset.state.vitalSigns.heartRate} 次/分`
    )}
  },
  text14: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `${$comp.dataset.state.vitalSigns.temperature} °C`
    )}
  },
  text16: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `${$comp.dataset.state.vitalSigns.weight} kg`
    )}
  },
  text18: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `${$comp.dataset.state.vitalSigns.height} cm`
    )}
  },
  text26: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.vitalSigns.desc
    )}
  },
  repeater1: { 'data': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.healthRecords
    )}
  },
  repeater1_item: { '_waFor': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.healthRecords
    )}
  },
  text24: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.date
    )}
  },
  text25: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.hospital
    )}
  },
  text20: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `${$w.item_repeater1.department} - ${$w.item_repeater1.doctor}`
    )}
  },
  text21: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `诊断: ${$w.item_repeater1.diagnosis}`
    )}
  },
  text22: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `用药: ${$w.item_repeater1.medication}`
    )}
  },
  text23: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `医嘱: ${$w.item_repeater1.note}`
    )}
  },
}

const query = {
}

const eventFlows = [
]

const config = {}
const datasetProfile = {
  "state": {
    "vitalSigns": {
      "name": "vitalSigns",
      "label": "",
      "varType": "state",
      "dataType": "object",
      "initialValue": {
        "desc": "主诉：咳嗽咳痰伴发热 3 天，体温最高 39.2℃。\n 现病史：咳嗽频繁，咳黄脓痰，伴胸闷乏力，无咯血。自服退烧药效果不佳。\n 既往史：否认慢性病，无手术史。 \n 过敏史：无药物食物过敏。 \n 入院查体：T38.5℃，双肺可闻及湿啰音，血常规白细胞 12.5×10⁹/L。 \n 初步诊断：社区获得性肺炎。",
        "height": "175",
        "weight": "68",
        "heartRate": "72",
        "temperature": "36.5",
        "bloodPressure": "125/80"
      },
      "enableSyncLocal": false
    },
    "patientInfo": {
      "name": "patientInfo",
      "varType": "state",
      "dataType": "object",
      "initialValue": {
        "age": 32,
        "name": "张伟",
        "phone": "138****5678",
        "avatar": "avatar_male",
        "gender": "男",
        "idCard": "310***********1234"
      }
    },
    "healthRecords": {
      "name": "healthRecords",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        {
          "date": "2025-07-10",
          "note": "血压控制良好，建议继续服药并定期复查",
          "doctor": "王医生",
          "hospital": "上海市第一人民医院",
          "diagnosis": "高血压",
          "department": "心血管内科",
          "medication": "络活喜 5mg qd"
        },
        {
          "date": "2025-06-15",
          "note": "各项指标正常，建议保持健康生活方式",
          "doctor": "李医生",
          "hospital": "上海市第一人民医院",
          "diagnosis": "年度体检",
          "department": "体检中心",
          "medication": "无"
        }
      ]
    }
  },
  "params": {}
};

createComponent({
  key: 'block:9krWJbkWu_dang_an_xiangqing',
  behaviors,
  properties,
  events,
  handler: handlers,
  dataBinds,
  evtListeners,
  widgetProps,
  lifeCycle,
  stateFn,
  computedFuncs,
  config,
  datasetProfile,
  query,
  eventFlows,
  nativeMode: !!1,
})
