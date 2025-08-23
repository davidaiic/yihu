import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanlderselectAccompanimentMethod from './lowcode/handler/selectAccompanimentMethod' 
import _hanldertoggleVipService from './lowcode/handler/toggleVipService' 
import _hanlderselectGender from './lowcode/handler/selectGender' 
import _hanldertoggleService from './lowcode/handler/toggleService' 
import _hanlderselectDuration from './lowcode/handler/selectDuration' 
import _hanldertoggleAgreeTerms from './lowcode/handler/toggleAgreeTerms' 
import _hanldersubmitOrder from './lowcode/handler/submitOrder' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  selectAccompanimentMethod: _hanlderselectAccompanimentMethod, 
  toggleVipService: _hanldertoggleVipService, 
  selectGender: _hanlderselectGender, 
  toggleService: _hanldertoggleService, 
  selectDuration: _hanlderselectDuration, 
  toggleAgreeTerms: _hanldertoggleAgreeTerms, 
  submitOrder: _hanldersubmitOrder, 
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
      "backgroundColor": "#f8f9fa"
    },
    "classList": [],
    "_parentId": "container1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container25": {
    "style": {
      "display": "flex",
      "flexDirection": "row"
    },
    "classList": [],
    "data": {},
    "_parentId": "container2",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "button20": {
    "style": {
      "color": "#333",
      "fontSize": "20px",
      "minHeight": "initial"
    },
    "classList": [],
    "_staticResourceAttribute": [
      "sendMessageImg",
      "iconSrc"
    ],
    "icon": "td:arrow-left",
    "text": "按钮",
    "variant": "text",
    "iconType": "icon-only",
    "_parentId": "container25",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "text14": {
    "style": {
      "color": "#374151",
      "margin": "0px 0px 10px",
      "display": "block",
      "fontWeight": "600"
    },
    "classList": [],
    "text": "医院陪诊服务",
    "level": "title-4",
    "maxLines": "1",
    "_parentId": "container25",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container3": {
    "style": {
      "padding": "16px",
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "borderRadius": "12px",
      "marginBottom": "24px",
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text1": {
    "style": {
      "color": "#333",
      "display": "block",
      "fontWeight": "600",
      "marginBottom": "12px"
    },
    "classList": [],
    "text": "选择陪诊师方式",
    "level": "title-5",
    "_parentId": "container3",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container14": {
    "style": {
      "gap": "12px",
      "display": "flex",
      "flexDirection": "column"
    },
    "classList": [],
    "_parentId": "container3",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "button1": {
    "style": {
      "width": "100%",
      "padding": "12px",
      "textAlign": "left",
      "borderRadius": "8px",
      "justifyContent": "flex-start"
    },
    "classList": [],
    "text": "平台指定",
    "_parentId": "container14",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button2": {
    "style": {
      "width": "100%",
      "padding": "12px",
      "textAlign": "left",
      "borderRadius": "8px",
      "justifyContent": "flex-start"
    },
    "classList": [],
    "text": "附近陪诊师",
    "_parentId": "container14",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button3": {
    "style": {
      "width": "100%",
      "padding": "12px",
      "textAlign": "left",
      "borderRadius": "8px",
      "justifyContent": "flex-start"
    },
    "classList": [],
    "text": "按名称查找",
    "_parentId": "container14",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container4": {
    "style": {
      "padding": "16px",
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "borderRadius": "12px",
      "marginBottom": "24px",
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "text2": {
    "style": {
      "color": "#333",
      "display": "block",
      "fontWeight": "600",
      "marginBottom": "12px"
    },
    "classList": [],
    "text": "被陪诊者基本信息",
    "level": "title-5",
    "maxLines": "1",
    "_parentId": "container4",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "input1": {
    "style": {
      "marginBottom": "12px"
    },
    "classList": [],
    "name": "",
    "label": "姓名",
    "status": "edit",
    "template": "inputBox",
    "prefixIcon": "success",
    "prefixType": "",
    "suffixIcon": "success",
    "suffixType": "",
    "placeholder": "请输入",
    "requiredMsg": "该项为必填项",
    "_parentId": "container4",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "input2": {
    "style": {
      "marginBottom": "12px"
    },
    "classList": [],
    "type": "number",
    "label": "电话",
    "status": "edit",
    "template": "inputBox",
    "inputValue": "",
    "prefixIcon": "success",
    "prefixType": "",
    "suffixIcon": "success",
    "suffixType": "",
    "placeholder": "请输入",
    "requiredMsg": "该项为必填项",
    "_parentId": "container4",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "input3": {
    "style": {
      "marginBottom": "12px"
    },
    "classList": [],
    "type": "number",
    "label": "年龄",
    "placeholder": "请输入年龄",
    "_parentId": "container4",
    "_order": 3,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "input4": {
    "style": {
      "marginBottom": "12px"
    },
    "classList": [],
    "label": "科室",
    "placeholder": "请输入科室",
    "_parentId": "container4",
    "_order": 4,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "container5": {
    "style": {
      "padding": "16px",
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "borderRadius": "12px",
      "marginBottom": "24px",
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 3,
    "widgetType": "gsd-h5-react:Container"
  },
  "text3": {
    "style": {
      "color": "#333",
      "display": "block",
      "fontWeight": "600",
      "marginBottom": "12px"
    },
    "classList": [],
    "text": "VIP接送服务 3元/公里",
    "level": "title-5",
    "_parentId": "container5",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container15": {
    "style": {
      "gap": "8px",
      "display": "flex",
      "flexWrap": "wrap"
    },
    "classList": [],
    "_parentId": "container5",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "button4": {
    "style": {
      "flex": "1",
      "padding": "8px",
      "minWidth": "80px",
      "borderRadius": "20px"
    },
    "classList": [],
    "text": "否",
    "_parentId": "container15",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button5": {
    "style": {
      "flex": "1",
      "padding": "8px",
      "minWidth": "80px",
      "borderRadius": "20px"
    },
    "classList": [],
    "text": "要接",
    "_parentId": "container15",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button6": {
    "style": {
      "flex": "1",
      "padding": "8px",
      "minWidth": "80px",
      "borderRadius": "20px"
    },
    "classList": [],
    "text": "要送",
    "_parentId": "container15",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button7": {
    "style": {
      "flex": "1",
      "padding": "8px",
      "minWidth": "80px",
      "borderRadius": "20px"
    },
    "classList": [],
    "text": "要接送",
    "_parentId": "container15",
    "_order": 3,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container6": {
    "style": {
      "padding": "16px",
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "borderRadius": "12px",
      "marginBottom": "24px",
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 4,
    "widgetType": "gsd-h5-react:Container"
  },
  "text4": {
    "style": {
      "color": "#333",
      "display": "block",
      "fontWeight": "600",
      "marginBottom": "12px"
    },
    "classList": [],
    "text": "陪诊师性别",
    "level": "title-5",
    "_parentId": "container6",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container16": {
    "style": {
      "gap": "8px",
      "display": "flex",
      "flexWrap": "wrap"
    },
    "classList": [],
    "_parentId": "container6",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "button8": {
    "style": {
      "flex": "1",
      "padding": "8px",
      "minWidth": "80px",
      "borderRadius": "20px"
    },
    "classList": [],
    "text": "不限",
    "_parentId": "container16",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button9": {
    "style": {
      "flex": "1",
      "padding": "8px",
      "minWidth": "80px",
      "borderRadius": "20px"
    },
    "classList": [],
    "text": "男",
    "_parentId": "container16",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button10": {
    "style": {
      "flex": "1",
      "padding": "8px",
      "minWidth": "80px",
      "borderRadius": "20px"
    },
    "classList": [],
    "text": "女",
    "_parentId": "container16",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container7": {
    "style": {
      "padding": "16px",
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "borderRadius": "12px",
      "marginBottom": "24px",
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 5,
    "widgetType": "gsd-h5-react:Container"
  },
  "text5": {
    "style": {
      "color": "#333",
      "display": "block",
      "fontWeight": "600",
      "marginBottom": "12px"
    },
    "classList": [],
    "text": "服务内容",
    "level": "title-5",
    "_parentId": "container7",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container17": {
    "style": {
      "gap": "8px",
      "display": "flex",
      "flexWrap": "wrap"
    },
    "classList": [],
    "_parentId": "container7",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "button11": {
    "style": {
      "padding": "8px 12px",
      "borderRadius": "20px"
    },
    "classList": [],
    "text": "挂号取号",
    "_parentId": "container17",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button12": {
    "style": {
      "padding": "8px 12px",
      "borderRadius": "20px"
    },
    "classList": [],
    "text": "诊前提醒",
    "_parentId": "container17",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container8": {
    "style": {
      "padding": "16px",
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "borderRadius": "12px",
      "marginBottom": "24px",
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 6,
    "widgetType": "gsd-h5-react:Container"
  },
  "text6": {
    "style": {
      "color": "#333",
      "display": "block",
      "fontWeight": "600",
      "marginBottom": "12px"
    },
    "classList": [],
    "text": "服务时长",
    "level": "title-5",
    "_parentId": "container8",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container18": {
    "style": {
      "gap": "8px",
      "display": "flex",
      "flexDirection": "column"
    },
    "classList": [],
    "_parentId": "container8",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "button13": {
    "style": {
      "padding": "12px",
      "textAlign": "left",
      "borderRadius": "8px",
      "justifyContent": "space-between"
    },
    "classList": [],
    "text": "半天陪诊 4h ¥278",
    "_parentId": "container18",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button14": {
    "style": {
      "padding": "12px",
      "textAlign": "left",
      "borderRadius": "8px",
      "justifyContent": "space-between"
    },
    "classList": [],
    "text": "全天陪诊 8h ¥476",
    "_parentId": "container18",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container9": {
    "style": {
      "padding": "16px",
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "borderRadius": "12px",
      "marginBottom": "24px",
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 7,
    "widgetType": "gsd-h5-react:Container"
  },
  "text7": {
    "style": {
      "color": "#333",
      "display": "block",
      "fontWeight": "600",
      "marginBottom": "12px"
    },
    "classList": [],
    "text": "必填就诊信息",
    "level": "title-5",
    "_parentId": "container9",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "button15": {
    "style": {
      "color": "#1890ff",
      "padding": "12px 0",
      "textAlign": "left"
    },
    "classList": [],
    "text": "接送地址",
    "variant": "text",
    "_parentId": "container9",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "input5": {
    "style": {
      "marginBottom": "12px"
    },
    "classList": [],
    "label": "就诊医院",
    "placeholder": "请输入医院名称",
    "_parentId": "container9",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "date1": {
    "style": {},
    "classList": [],
    "_staticResourceAttribute": [
      "suffixSrc",
      "prefixSrc"
    ],
    "mode": "day",
    "name": "date1",
    "label": "就诊时间",
    "start": "2025-07-10",
    "value": "2025-07-10",
    "status": "edit",
    "borderedH5": false,
    "prefixIcon": "success",
    "prefixType": "",
    "suffixIcon": "td:calendar",
    "suffixType": "inner",
    "placeholder": "请选择",
    "requiredMsg": "该项为必填项",
    "_parentId": "container9",
    "_order": 3,
    "widgetType": "gsd-h5-react:WdDate"
  },
  "input6": {
    "style": {},
    "classList": [],
    "type": "date",
    "label": "就诊时间",
    "status": "edit",
    "template": "inputBox",
    "inputValue": "",
    "prefixIcon": "success",
    "prefixType": "",
    "suffixIcon": "success",
    "suffixType": "",
    "placeholder": "请输入",
    "requiredMsg": "该项为必填项",
    "_parentId": "container9",
    "_order": 4,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "container10": {
    "style": {
      "padding": "16px",
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "borderRadius": "12px",
      "marginBottom": "24px",
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 8,
    "widgetType": "gsd-h5-react:Container"
  },
  "text8": {
    "style": {
      "color": "#333",
      "display": "block",
      "fontWeight": "600",
      "marginBottom": "12px"
    },
    "classList": [],
    "text": "其他备注",
    "level": "title-5",
    "_parentId": "container10",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "textarea1": {
    "style": {
      "minHeight": "80px"
    },
    "classList": [],
    "placeholder": "如果您是替别人下单请填写您的联系方式...平台自动退款到您的微信",
    "labelVisible": false,
    "_parentId": "container10",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdTextarea"
  },
  "container11": {
    "style": {
      "padding": "16px",
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "borderRadius": "12px",
      "marginBottom": "24px",
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 9,
    "widgetType": "gsd-h5-react:Container"
  },
  "text9": {
    "style": {
      "color": "#333",
      "display": "block",
      "fontWeight": "600",
      "marginBottom": "12px"
    },
    "classList": [],
    "text": "优惠券",
    "level": "title-5",
    "_parentId": "container11",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "button16": {
    "style": {
      "color": "#1890ff",
      "textAlign": "left"
    },
    "classList": [],
    "icon": "td:wallet",
    "text": "选择优惠券",
    "variant": "text",
    "iconType": "text-with-icon",
    "_parentId": "container11",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container12": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "marginBottom": "24px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 10,
    "widgetType": "gsd-h5-react:Container"
  },
  "switch1": {
    "style": {
      "width": "auto",
      "marginRight": "8px"
    },
    "classList": [],
    "labelVisible": false,
    "_parentId": "container12",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdSwitch"
  },
  "text10": {
    "style": {
      "color": "inherit",
      "display": "inline-block"
    },
    "classList": [],
    "text": "已阅读并同意",
    "_parentId": "container12",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "button17": {
    "style": {
      "color": "#1890ff",
      "padding": "0"
    },
    "classList": [],
    "text": "《服务条款同意书》",
    "variant": "text",
    "_parentId": "container12",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container21": {
    "style": {},
    "classList": [
      "ai-generate-wrapper"
    ],
    "data": {},
    "_parentId": "container2",
    "_order": 11,
    "widgetType": "gsd-h5-react:Container"
  },
  "container22": {
    "style": {
      "display": "flex",
      "padding": "16px",
      "marginTop": "24px",
      "alignItems": "center",
      "flexDirection": "column",
      "justifyContent": "center"
    },
    "classList": [],
    "_parentId": "container21",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container23": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "marginBottom": "8px"
    },
    "classList": [],
    "_parentId": "container22",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon1": {
    "style": {
      "color": "#9E9E9E",
      "fontSize": "16px",
      "marginRight": "8px"
    },
    "classList": [],
    "name": "td:verified",
    "_parentId": "container23",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text13": {
    "style": {
      "color": "#9E9E9E",
      "display": "inline-block"
    },
    "classList": [],
    "text": "我是有底线的",
    "level": "body-sm",
    "_parentId": "container23",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container24": {
    "style": {
      "width": "100%",
      "height": "1px",
      "backgroundColor": "#EEEEEE"
    },
    "classList": [],
    "_parentId": "container22",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "container13": {
    "style": {
      "left": "0",
      "right": "0",
      "bottom": "0",
      "display": "flex",
      "padding": "12px 16px",
      "position": "fixed",
      "boxShadow": "0 -2px 8px rgba(0,0,0,0.05)",
      "alignItems": "center",
      "justifyContent": "space-between",
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 12,
    "widgetType": "gsd-h5-react:Container"
  },
  "container19": {
    "style": {
      "flex": "1"
    },
    "classList": [],
    "_parentId": "container13",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text11": {
    "style": {
      "color": "#333",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "text": "合计:",
    "_parentId": "container19",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text12": {
    "style": {
      "color": "#f5222d",
      "display": "inline-block",
      "fontSize": "18px",
      "fontWeight": "600"
    },
    "classList": [],
    "text": "¥278",
    "_parentId": "container19",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container20": {
    "style": {
      "gap": "12px",
      "display": "flex"
    },
    "classList": [],
    "_parentId": "container13",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "button18": {
    "style": {
      "width": "120px"
    },
    "classList": [],
    "text": "放弃返回",
    "variant": "outline",
    "_parentId": "container20",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button19": {
    "style": {
      "color": "#ffffff",
      "width": "120px",
      "backgroundColor": "#1890ff"
    },
    "classList": [],
    "text": "立即下单",
    "_parentId": "container20",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  }
}





const evtListeners = {"onbutton20$tap": [
      {
          key: 'w8mj9zyc7z7',
          sourceKey: 'platform:navigateBack',
          handler: function({args}){ return $app.navigateBack(...args)},
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton1$tap": [
      {
          key: 'wLnYvvKmA',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "selectAccompanimentMethod";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        params: {
          "method": "platform"
        },
        id: event.currentTarget.id
      }
    }
  });
}
)({event}) },
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton2$tap": [
      {
          key: 'wg7ebqsls',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "selectAccompanimentMethod";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        params: {
          "method": "nearby"
        },
        id: event.currentTarget.id
      }
    }
  });
}
)({event}) },
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton3$tap": [
      {
          key: 'wi6sX2enz',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "selectAccompanimentMethod";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        params: {
          "method": "search"
        },
        id: event.currentTarget.id
      }
    }
  });
}
)({event}) },
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton4$tap": [
      {
          key: 'w0qeFm4Lz',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "toggleVipService";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        params: {
          "service": "none"
        },
        id: event.currentTarget.id
      }
    }
  });
}
)({event}) },
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton5$tap": [
      {
          key: 'wlAHpgEbJ',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "toggleVipService";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        params: {
          "service": "pickup"
        },
        id: event.currentTarget.id
      }
    }
  });
}
)({event}) },
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton6$tap": [
      {
          key: 'wCjvY7aAO',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "toggleVipService";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        params: {
          "service": "dropoff"
        },
        id: event.currentTarget.id
      }
    }
  });
}
)({event}) },
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton7$tap": [
      {
          key: 'wYddnqGXn',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "toggleVipService";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        params: {
          "service": "both"
        },
        id: event.currentTarget.id
      }
    }
  });
}
)({event}) },
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton8$tap": [
      {
          key: 'wRQXWinx7',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "selectGender";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        params: {
          "gender": "any"
        },
        id: event.currentTarget.id
      }
    }
  });
}
)({event}) },
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton9$tap": [
      {
          key: 'wLwj1FyFU',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "selectGender";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        params: {
          "gender": "male"
        },
        id: event.currentTarget.id
      }
    }
  });
}
)({event}) },
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton10$tap": [
      {
          key: 'wx0Bg9pcj',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "selectGender";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        params: {
          "gender": "female"
        },
        id: event.currentTarget.id
      }
    }
  });
}
)({event}) },
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton11$tap": [
      {
          key: 'wSI8BoJxL',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "toggleService";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        params: {
          "service": "register"
        },
        id: event.currentTarget.id
      }
    }
  });
}
)({event}) },
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton12$tap": [
      {
          key: 'wplKnjDUT',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "toggleService";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        params: {
          "service": "reminder"
        },
        id: event.currentTarget.id
      }
    }
  });
}
)({event}) },
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton13$tap": [
      {
          key: 'wzAY0DNWQ',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "selectDuration";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        params: {
          "duration": "halfDay"
        },
        id: event.currentTarget.id
      }
    }
  });
}
)({event}) },
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton14$tap": [
      {
          key: 'wRn2o6j5C',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "selectDuration";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        params: {
          "duration": "fullDay"
        },
        id: event.currentTarget.id
      }
    }
  });
}
)({event}) },
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onswitch1$change": [
      {
          key: 'wtmbUjJIp',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "toggleAgreeTerms";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        id: event.currentTarget.id
      }
    }
  });
}
)({event}) },
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton18$tap": [
      {
          key: 'w0j4ak4olde',
          sourceKey: 'platform:navigateBack',
          handler: function({args}){ return $app.navigateBack(...args)},
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton19$tap": [
      {
          key: 'wNhsZ8vwJ',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "submitOrder";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        id: event.currentTarget.id
      }
    }
  });
}
)({event}) },
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],}

const behaviors = []

const properties = {
}

const events = [
]



const dataBinds = {
  button1: { 'variant': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.accompanimentMethod === "platform" ? "base" : "outline"
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.button1.style, ...(
`background-color: ${$comp.dataset.state.accompanimentMethod === "platform" ? "#e6f7ff" : "transparent"}; border-color: ${$comp.dataset.state.accompanimentMethod === "platform" ? "#1890ff" : "#d9d9d9"}`
)}
    )}
  },
  button2: { 'variant': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.accompanimentMethod === "nearby" ? "base" : "outline"
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.button2.style, ...(
`background-color: ${$comp.dataset.state.accompanimentMethod === "nearby" ? "#e6f7ff" : "transparent"}; border-color: ${$comp.dataset.state.accompanimentMethod === "nearby" ? "#1890ff" : "#d9d9d9"}`
)}
    )}
  },
  button3: { 'variant': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.accompanimentMethod === "search" ? "base" : "outline"
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.button3.style, ...(
`background-color: ${$comp.dataset.state.accompanimentMethod === "search" ? "#e6f7ff" : "transparent"}; border-color: ${$comp.dataset.state.accompanimentMethod === "search" ? "#1890ff" : "#d9d9d9"}`
)}
    )}
  },
  input1: { 'inputValue': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.name
    )}
  },
  button4: { 'variant': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.vipService === "none" ? "base" : "outline"
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.button4.style, ...(
`background-color: ${$comp.dataset.state.vipService === "none" ? "#e6f7ff" : "transparent"}; border-color: ${$comp.dataset.state.vipService === "none" ? "#1890ff" : "#d9d9d9"}`
)}
    )}
  },
  button5: { 'variant': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.vipService === "pickup" ? "base" : "outline"
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.button5.style, ...(
`background-color: ${$comp.dataset.state.vipService === "pickup" ? "#e6f7ff" : "transparent"}; border-color: ${$comp.dataset.state.vipService === "pickup" ? "#1890ff" : "#d9d9d9"}`
)}
    )}
  },
  button6: { 'variant': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.vipService === "dropoff" ? "base" : "outline"
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.button6.style, ...(
`background-color: ${$comp.dataset.state.vipService === "dropoff" ? "#e6f7ff" : "transparent"}; border-color: ${$comp.dataset.state.vipService === "dropoff" ? "#1890ff" : "#d9d9d9"}`
)}
    )}
  },
  button7: { 'variant': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.vipService === "both" ? "base" : "outline"
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.button7.style, ...(
`background-color: ${$comp.dataset.state.vipService === "both" ? "#e6f7ff" : "transparent"}; border-color: ${$comp.dataset.state.vipService === "both" ? "#1890ff" : "#d9d9d9"}`
)}
    )}
  },
  button8: { 'variant': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.genderPreference === "any" ? "base" : "outline"
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.button8.style, ...(
`background-color: ${$comp.dataset.state.genderPreference === "any" ? "#e6f7ff" : "transparent"}; border-color: ${$comp.dataset.state.genderPreference === "any" ? "#1890ff" : "#d9d9d9"}`
)}
    )}
  },
  button9: { 'variant': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.genderPreference === "male" ? "base" : "outline"
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.button9.style, ...(
`background-color: ${$comp.dataset.state.genderPreference === "male" ? "#e6f7ff" : "transparent"}; border-color: ${$comp.dataset.state.genderPreference === "male" ? "#1890ff" : "#d9d9d9"}`
)}
    )}
  },
  button10: { 'variant': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.genderPreference === "female" ? "base" : "outline"
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.button10.style, ...(
`background-color: ${$comp.dataset.state.genderPreference === "female" ? "#e6f7ff" : "transparent"}; border-color: ${$comp.dataset.state.genderPreference === "female" ? "#1890ff" : "#d9d9d9"}`
)}
    )}
  },
  button11: { 'variant': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.services.includes("register") ? "base" : "outline"
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.button11.style, ...(
`background-color: ${$comp.dataset.state.services.includes("register") ? "#e6f7ff" : "transparent"}; border-color: ${$comp.dataset.state.services.includes("register") ? "#1890ff" : "#d9d9d9"}`
)}
    )}
  },
  button12: { 'variant': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.services.includes("reminder") ? "base" : "outline"
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.button12.style, ...(
`background-color: ${$comp.dataset.state.services.includes("reminder") ? "#e6f7ff" : "transparent"}; border-color: ${$comp.dataset.state.services.includes("reminder") ? "#1890ff" : "#d9d9d9"}`
)}
    )}
  },
  button13: { 'variant': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.duration === "halfDay" ? "base" : "outline"
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.button13.style, ...(
`background-color: ${$comp.dataset.state.duration === "halfDay" ? "#e6f7ff" : "transparent"}; border-color: ${$comp.dataset.state.duration === "halfDay" ? "#1890ff" : "#d9d9d9"}`
)}
    )}
  },
  button14: { 'variant': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.duration === "fullDay" ? "base" : "outline"
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.button14.style, ...(
`background-color: ${$comp.dataset.state.duration === "fullDay" ? "#e6f7ff" : "transparent"}; border-color: ${$comp.dataset.state.duration === "fullDay" ? "#1890ff" : "#d9d9d9"}`
)}
    )}
  },
  date1: { '_waDisplay': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      false
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ((display)=>{ const style = {...widgetProps.date1.style}; if(!display) {style.display = "none"}; return style })((
false
))
    )}
  },
  input6: { 'value': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.startDate
    )}
  },
  switch1: { 'checked': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.agreeTerms
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
    "age": {
      "name": "age",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "name": {
      "name": "name",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "notes": {
      "name": "notes",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "phone": {
      "name": "phone",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "coupon": {
      "name": "coupon",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "address": {
      "name": "address",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "duration": {
      "name": "duration",
      "varType": "state",
      "dataType": "string",
      "initialValue": "halfDay"
    },
    "hospital": {
      "name": "hospital",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "services": {
      "name": "services",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        "register",
        "reminder",
        "accompany",
        "counseling",
        "exam",
        "medicine",
        "procedure",
        "report",
        "care",
        "transport"
      ]
    },
    "agreeTerms": {
      "name": "agreeTerms",
      "varType": "state",
      "dataType": "boolean",
      "initialValue": false
    },
    "department": {
      "name": "department",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "vipService": {
      "name": "vipService",
      "varType": "state",
      "dataType": "string",
      "initialValue": "none"
    },
    "appointmentTime": {
      "name": "appointmentTime",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "genderPreference": {
      "name": "genderPreference",
      "varType": "state",
      "dataType": "string",
      "initialValue": "any"
    },
    "accompanimentMethod": {
      "name": "accompanimentMethod",
      "varType": "state",
      "dataType": "string",
      "initialValue": "platform"
    }
  },
  "params": {}
};

createComponent({
  key: 'block:u_yi_yuan_pei_zhen_xi',
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
