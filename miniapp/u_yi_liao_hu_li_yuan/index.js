import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanlderselectService from './lowcode/handler/selectService' 
import _hanlderselectPayment from './lowcode/handler/selectPayment' 
import _hanlderconfirmOrder from './lowcode/handler/confirmOrder' 
import _hanlderselectOption from './lowcode/handler/selectOption' 
import _hanldernavigateToNearby from './lowcode/handler/navigateToNearby' 
import _hanldernavigateToSearch from './lowcode/handler/navigateToSearch' 
import _hanlderselectMethod from './lowcode/handler/selectMethod' 
import _hanldersearchByName from './lowcode/handler/searchByName' 
import _hanldersearchNearby from './lowcode/handler/searchNearby' 
import _hanldernavigateToEdit from './lowcode/handler/navigateToEdit' 
import _hanldernavigateToCreate from './lowcode/handler/navigateToCreate' 
import _hanlderonPageShow from './lowcode/handler/onPageShow' 
import _hanlderonLoadFetchServices from './lowcode/handler/onLoadFetchServices' 
import _hanlderonPageLoad from './lowcode/handler/onPageLoad' 
import _hanldergoToLocationAuth from './lowcode/handler/goToLocationAuth' 
import _hanlderhandleCityChange from './lowcode/handler/handleCityChange' 
import _hanlderfunction1 from './lowcode/handler/function1' 
import _hanlderloadServices from './lowcode/handler/loadServices' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  selectService: _hanlderselectService, 
  selectPayment: _hanlderselectPayment, 
  confirmOrder: _hanlderconfirmOrder, 
  selectOption: _hanlderselectOption, 
  navigateToNearby: _hanldernavigateToNearby, 
  navigateToSearch: _hanldernavigateToSearch, 
  selectMethod: _hanlderselectMethod, 
  searchByName: _hanldersearchByName, 
  searchNearby: _hanldersearchNearby, 
  navigateToEdit: _hanldernavigateToEdit, 
  navigateToCreate: _hanldernavigateToCreate, 
  onPageShow: _hanlderonPageShow, 
  onLoadFetchServices: _hanlderonLoadFetchServices, 
  onPageLoad: _hanlderonPageLoad, 
  goToLocationAuth: _hanldergoToLocationAuth, 
  handleCityChange: _hanlderhandleCityChange, 
  function1: _hanlderfunction1, 
  loadServices: _hanlderloadServices, 
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
  "container49": {
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
  "button5": {
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
    "_parentId": "container49",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "text1": {
    "style": {
      "color": "#374151",
      "margin": "0px 0px 10px",
      "display": "block",
      "fontWeight": "600"
    },
    "classList": [],
    "text": "医疗护理上门服务",
    "level": "title-4",
    "_parentId": "container49",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container4": {
    "style": {
      "marginBottom": "24px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "container51": {
    "style": {
      "padding": "16px",
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "borderRadius": "8px",
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "_parentId": "container4",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text43": {
    "style": {
      "color": "#333333",
      "display": "block",
      "fontWeight": "600",
      "marginBottom": "12px"
    },
    "classList": [],
    "text": "选择服务城市",
    "level": "title-5",
    "maxLines": "1",
    "_parentId": "container51",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container52": {
    "style": {
      "gap": "8px",
      "display": "flex",
      "alignItems": "center"
    },
    "classList": [],
    "_parentId": "container51",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "container53": {
    "style": {
      "flex": "1",
      "border": "1px solid #e0e0e0",
      "padding": "8px 12px",
      "borderRadius": "6px"
    },
    "classList": [],
    "_parentId": "container52",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container54": {
    "style": {},
    "classList": [],
    "data": {},
    "_parentId": "container53",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text45": {
    "style": {
      "color": "#333333",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "container54",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container55": {
    "style": {},
    "classList": [],
    "_parentId": "container53",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "select1": {
    "style": {
      "border": "none",
      "padding": "0"
    },
    "classList": [],
    "placeholder": "请选择城市",
    "labelVisible": false,
    "_parentId": "container55",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdSelect"
  },
  "button6": {
    "style": {
      "color": "#0052d9",
      "width": "40px",
      "height": "40px",
      "minHeight": "initial",
      "borderRadius": "20px",
      "backgroundColor": "#f5f7fa"
    },
    "classList": [],
    "icon": "td:location",
    "variant": "text",
    "iconType": "icon-only",
    "_parentId": "container52",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "text44": {
    "style": {
      "color": "#757575",
      "display": "inline-block",
      "marginTop": "8px"
    },
    "classList": [],
    "level": "body-sm",
    "_parentId": "container51",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container3": {
    "style": {
      "marginBottom": "24px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "text2": {
    "style": {
      "color": "#4b5563",
      "display": "inline-block",
      "marginBottom": "12px"
    },
    "classList": [],
    "text": "选择服务项目",
    "level": "body-lg",
    "_parentId": "container3",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container7": {
    "style": {
      "gap": "12px",
      "display": "grid",
      "gridTemplateColumns": "repeat(auto-fill, minmax(120px, 1fr))"
    },
    "classList": [],
    "_parentId": "container3",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "repeater1": {
    "style": {},
    "classList": [],
    "suffix": "repeater1",
    "forItem": "item_repeater1",
    "forIndex": "index_repeater1",
    "_parentId": "container7",
    "_order": 0,
    "widgetType": "gsd-h5-react:Repeater"
  },
  "repeater1_item": {
    "style": {},
    "classList": [],
    "_parentId": "repeater1",
    "widgetType": "gsd-h5-react:RepeaterItem"
  },
  "container8": {
    "style": {
      "padding": "16px",
      "boxShadow": "0 1px 3px rgba(0,0,0,0.1)",
      "textAlign": "center",
      "borderRadius": "8px",
      "backgroundColor": "white"
    },
    "classList": [],
    "_parentId": "repeater1_item",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon1": {
    "style": {
      "color": "#3b82f6",
      "fontSize": "24px",
      "marginBottom": "8px"
    },
    "classList": [],
    "_parentId": "container8",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text3": {
    "style": {
      "color": "#111827",
      "display": "block",
      "fontSize": "14px",
      "marginBottom": "4px"
    },
    "classList": [],
    "_parentId": "container8",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text4": {
    "style": {
      "color": "#6b7280",
      "display": "block",
      "fontSize": "12px",
      "marginBottom": "8px"
    },
    "classList": [],
    "_parentId": "container8",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text5": {
    "style": {
      "color": "#10b981",
      "display": "block",
      "fontSize": "16px",
      "fontWeight": "600"
    },
    "classList": [],
    "_parentId": "container8",
    "_order": 3,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container37": {
    "style": {
      "margin": "10px 0px 0px"
    },
    "classList": [
      "ai-generate-wrapper"
    ],
    "data": {},
    "_parentId": "container2",
    "_order": 3,
    "widgetType": "gsd-h5-react:Container"
  },
  "container38": {
    "style": {
      "padding": "16px",
      "borderRadius": "12px",
      "marginBottom": "20px",
      "backgroundColor": "#f8f9fa"
    },
    "classList": [],
    "_parentId": "container37",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container39": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "marginBottom": "16px",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "container38",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text28": {
    "style": {
      "color": "#333",
      "display": "block",
      "fontWeight": "600"
    },
    "classList": [],
    "text": "被照护人信息",
    "level": "title-5",
    "_parentId": "container39",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container42": {
    "style": {
      "gap": "8px",
      "display": "flex"
    },
    "classList": [],
    "_parentId": "container39",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "button3": {
    "style": {
      "color": "#1976d2",
      "minHeight": "initial"
    },
    "classList": [],
    "icon": "td:add",
    "variant": "text",
    "iconType": "icon-only",
    "_parentId": "container42",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button4": {
    "style": {
      "color": "#1976d2",
      "minHeight": "initial"
    },
    "classList": [],
    "icon": "td:edit-1",
    "variant": "text",
    "iconType": "icon-only",
    "_parentId": "container42",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container40": {
    "style": {
      "gap": "12px",
      "display": "grid",
      "gridTemplateColumns": "repeat(2, 1fr)"
    },
    "classList": [],
    "_parentId": "container38",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "container43": {
    "style": {},
    "classList": [],
    "_parentId": "container40",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text29": {
    "style": {
      "color": "#666",
      "display": "inline-block"
    },
    "classList": [],
    "text": "与本人关系",
    "level": "body-sm",
    "_parentId": "container43",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text30": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "marginTop": "4px"
    },
    "classList": [],
    "_parentId": "container43",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container44": {
    "style": {},
    "classList": [],
    "_parentId": "container40",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text31": {
    "style": {
      "color": "#666",
      "display": "inline-block"
    },
    "classList": [],
    "text": "姓名/称呼",
    "level": "body-sm",
    "_parentId": "container44",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text32": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "marginTop": "4px"
    },
    "classList": [],
    "_parentId": "container44",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container45": {
    "style": {},
    "classList": [],
    "_parentId": "container40",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "text33": {
    "style": {
      "color": "#666",
      "display": "inline-block"
    },
    "classList": [],
    "text": "性别",
    "level": "body-sm",
    "_parentId": "container45",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text34": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "marginTop": "4px"
    },
    "classList": [],
    "_parentId": "container45",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container46": {
    "style": {},
    "classList": [],
    "_parentId": "container40",
    "_order": 3,
    "widgetType": "gsd-h5-react:Container"
  },
  "text35": {
    "style": {
      "color": "#666",
      "display": "inline-block"
    },
    "classList": [],
    "text": "年龄",
    "level": "body-sm",
    "_parentId": "container46",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text36": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "marginTop": "4px"
    },
    "classList": [],
    "_parentId": "container46",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container47": {
    "style": {},
    "classList": [],
    "_parentId": "container40",
    "_order": 4,
    "widgetType": "gsd-h5-react:Container"
  },
  "text37": {
    "style": {
      "color": "#666",
      "display": "inline-block"
    },
    "classList": [],
    "text": "体重",
    "level": "body-sm",
    "_parentId": "container47",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text38": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "marginTop": "4px"
    },
    "classList": [],
    "_parentId": "container47",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container48": {
    "style": {},
    "classList": [],
    "_parentId": "container40",
    "_order": 5,
    "widgetType": "gsd-h5-react:Container"
  },
  "text39": {
    "style": {
      "color": "#666",
      "display": "inline-block"
    },
    "classList": [],
    "text": "住院号",
    "level": "body-sm",
    "_parentId": "container48",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text40": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "marginTop": "4px"
    },
    "classList": [],
    "_parentId": "container48",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container41": {
    "style": {
      "marginTop": "12px"
    },
    "classList": [],
    "_parentId": "container38",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "text41": {
    "style": {
      "color": "#666",
      "display": "inline-block"
    },
    "classList": [],
    "text": "身体情况",
    "level": "body-sm",
    "_parentId": "container41",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text42": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "marginTop": "4px"
    },
    "classList": [],
    "_parentId": "container41",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container5": {
    "style": {},
    "classList": [
      "ai-generate-wrapper"
    ],
    "data": {},
    "_parentId": "container2",
    "_order": 4,
    "widgetType": "gsd-h5-react:Container"
  },
  "container11": {
    "style": {
      "padding": "16px",
      "boxShadow": "0 2px 8px rgba(0,0,0,0.08)",
      "borderRadius": "12px",
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "_parentId": "container5",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text8": {
    "style": {
      "color": "#333333",
      "display": "block",
      "fontWeight": "500",
      "marginBottom": "16px"
    },
    "classList": [],
    "text": "已选择医疗护理员",
    "level": "title-5",
    "maxLines": "1",
    "_parentId": "container11",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container12": {
    "style": {
      "marginBottom": "24px"
    },
    "classList": [],
    "_parentId": "container11",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "container19": {
    "style": {
      "display": "flex",
      "padding": "12px",
      "alignItems": "center",
      "borderRadius": "8px",
      "marginBottom": "12px"
    },
    "classList": [],
    "_parentId": "container12",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon2": {
    "style": {
      "color": "#0052D9",
      "fontSize": "20px",
      "marginRight": "12px"
    },
    "classList": [],
    "name": "td:verified",
    "_parentId": "container19",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "container22": {
    "style": {
      "flex": "1"
    },
    "classList": [],
    "_parentId": "container19",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text9": {
    "style": {
      "color": "#333333",
      "display": "inline-block",
      "fontWeight": "500"
    },
    "classList": [],
    "text": "平台推荐护理员",
    "_parentId": "container22",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text13": {
    "style": {
      "color": "#666666",
      "display": "inline-block",
      "marginTop": "4px"
    },
    "classList": [],
    "text": "系统将根据您的需求智能匹配最合适的护理员",
    "level": "body-sm",
    "_parentId": "container22",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "icon3": {
    "style": {
      "fontSize": "20px"
    },
    "classList": [],
    "name": "td:notification-filled",
    "_parentId": "container19",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "container20": {
    "style": {
      "display": "flex",
      "padding": "12px",
      "alignItems": "center",
      "borderRadius": "8px",
      "marginBottom": "12px"
    },
    "classList": [],
    "data": {},
    "_parentId": "container12",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon5": {
    "style": {
      "color": "#0052D9",
      "fontSize": "20px",
      "marginRight": "12px"
    },
    "classList": [],
    "name": "td:location",
    "_parentId": "container20",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "container23": {
    "style": {
      "flex": "1"
    },
    "classList": [],
    "_parentId": "container20",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text14": {
    "style": {
      "color": "#333333",
      "display": "inline-block",
      "fontWeight": "500"
    },
    "classList": [],
    "text": "附近护理员",
    "_parentId": "container23",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text15": {
    "style": {
      "color": "#666666",
      "display": "inline-block",
      "marginTop": "4px"
    },
    "classList": [],
    "text": "查看您附近的可用护理员",
    "level": "body-sm",
    "_parentId": "container23",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "icon6": {
    "style": {
      "color": "#999999",
      "fontSize": "20px"
    },
    "classList": [],
    "name": "td:chevron-right",
    "_parentId": "container20",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "container21": {
    "style": {
      "display": "flex",
      "padding": "12px",
      "alignItems": "center",
      "borderRadius": "8px"
    },
    "classList": [],
    "data": {},
    "_parentId": "container12",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon7": {
    "style": {
      "color": "#0052D9",
      "fontSize": "20px",
      "marginRight": "12px"
    },
    "classList": [],
    "name": "td:search",
    "_parentId": "container21",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "container24": {
    "style": {
      "flex": "1"
    },
    "classList": [],
    "_parentId": "container21",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text16": {
    "style": {
      "color": "#333333",
      "display": "inline-block",
      "fontWeight": "500"
    },
    "classList": [],
    "text": "按名称查找",
    "_parentId": "container24",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text17": {
    "style": {
      "color": "#666666",
      "display": "inline-block",
      "marginTop": "4px"
    },
    "classList": [],
    "text": "输入护理员姓名进行精确查找",
    "level": "body-sm",
    "_parentId": "container24",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "icon8": {
    "style": {
      "color": "#999999",
      "fontSize": "20px"
    },
    "classList": [],
    "name": "td:chevron-right",
    "_parentId": "container21",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "container18": {
    "style": {
      "borderTop": "1px solid #EEEEEE",
      "paddingTop": "16px"
    },
    "classList": [],
    "_parentId": "container11",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "text18": {
    "style": {
      "color": "#999999",
      "display": "inline-block",
      "marginBottom": "8px"
    },
    "classList": [],
    "text": "当前选择",
    "_parentId": "container18",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container28": {
    "style": {},
    "classList": [
      "ai-generate-wrapper"
    ],
    "data": {},
    "_parentId": "container18",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "container29": {
    "style": {
      "padding": "16px",
      "boxShadow": "0 2px 10px rgba(0,0,0,0.05)",
      "borderRadius": "12px",
      "marginBottom": "20px",
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "_parentId": "container28",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container30": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "marginBottom": "12px"
    },
    "classList": [],
    "_parentId": "container29",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "image1": {
    "style": {
      "width": "60px",
      "height": "60px",
      "marginRight": "12px",
      "borderRadius": "50%"
    },
    "classList": [],
    "fit": "cover",
    "_parentId": "container30",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdImage"
  },
  "container33": {
    "style": {
      "flex": "1"
    },
    "classList": [],
    "_parentId": "container30",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text21": {
    "style": {
      "color": "inherit",
      "display": "block",
      "fontWeight": "600",
      "marginBottom": "4px"
    },
    "classList": [],
    "level": "title-5",
    "_parentId": "container33",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text22": {
    "style": {
      "color": "#666666",
      "display": "inline-block",
      "fontSize": "12px"
    },
    "classList": [],
    "_parentId": "container33",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container34": {
    "style": {
      "display": "flex",
      "alignItems": "center"
    },
    "classList": [],
    "_parentId": "container30",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon10": {
    "style": {
      "color": "#FFC107",
      "fontSize": "16px",
      "marginRight": "4px"
    },
    "classList": [],
    "name": "td:star-filled",
    "_parentId": "container34",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text23": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "fontWeight": "600"
    },
    "classList": [],
    "_parentId": "container34",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container31": {
    "style": {
      "padding": "12px",
      "borderRadius": "8px",
      "marginBottom": "12px",
      "backgroundColor": "#F8F9FA"
    },
    "classList": [],
    "_parentId": "container29",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text24": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "fontWeight": "500",
      "marginBottom": "4px"
    },
    "classList": [],
    "text": "推荐语",
    "_parentId": "container31",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text25": {
    "style": {
      "color": "#666666",
      "display": "inline-block",
      "fontSize": "13px",
      "lineHeight": "1.5em"
    },
    "classList": [],
    "_parentId": "container31",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container32": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "container29",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "container35": {
    "style": {
      "display": "flex",
      "alignItems": "center"
    },
    "classList": [],
    "_parentId": "container32",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon11": {
    "style": {
      "color": "#4CAF50",
      "fontSize": "14px",
      "marginRight": "4px"
    },
    "classList": [],
    "name": "td:verified",
    "_parentId": "container35",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text26": {
    "style": {
      "color": "#666666",
      "display": "inline-block",
      "fontSize": "12px"
    },
    "classList": [],
    "_parentId": "container35",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container36": {
    "style": {},
    "classList": [],
    "_parentId": "container32",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text27": {
    "style": {
      "color": "#2196F3",
      "display": "inline-block",
      "fontSize": "16px",
      "fontWeight": "600"
    },
    "classList": [],
    "_parentId": "container36",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container25": {
    "style": {
      "display": "flex",
      "padding": "12px",
      "alignItems": "center",
      "borderRadius": "8px",
      "flexDirection": "column",
      "justifyContent": "flex-start",
      "backgroundColor": "#F7F7F7"
    },
    "classList": [],
    "_parentId": "container18",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "container27": {
    "style": {
      "width": "100%"
    },
    "classList": [],
    "data": {},
    "_parentId": "container25",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon9": {
    "style": {
      "color": "#0052D9",
      "fontSize": "24px",
      "marginRight": "12px"
    },
    "classList": [],
    "name": "td:user-circle",
    "_parentId": "container27",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text19": {
    "style": {
      "color": "#333333",
      "display": "inline-block",
      "fontWeight": "500"
    },
    "classList": [],
    "_parentId": "container27",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container26": {
    "style": {
      "width": "100%"
    },
    "classList": [],
    "data": {},
    "_parentId": "container25",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text20": {
    "style": {
      "color": "#666666",
      "width": "100%",
      "display": "inline-block",
      "textAlign": "left"
    },
    "classList": [],
    "_parentId": "container26",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container14": {
    "style": {},
    "classList": [
      "ai-generate-wrapper"
    ],
    "data": {},
    "_parentId": "container2",
    "_order": 5,
    "widgetType": "gsd-h5-react:Container"
  },
  "container15": {
    "style": {
      "display": "flex",
      "padding": "16px",
      "marginTop": "24px",
      "alignItems": "center",
      "flexDirection": "column",
      "justifyContent": "center"
    },
    "classList": [],
    "_parentId": "container14",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container16": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "marginBottom": "8px"
    },
    "classList": [],
    "_parentId": "container15",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon4": {
    "style": {
      "color": "#9E9E9E",
      "fontSize": "16px",
      "marginRight": "8px"
    },
    "classList": [],
    "name": "td:verified",
    "_parentId": "container16",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text12": {
    "style": {
      "color": "#9E9E9E",
      "display": "inline-block"
    },
    "classList": [],
    "text": "我是有底线的",
    "level": "body-sm",
    "_parentId": "container16",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container17": {
    "style": {
      "width": "100%",
      "height": "100px",
      "background": "none",
      "backgroundColor": "#EEEEEE"
    },
    "classList": [],
    "_parentId": "container15",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "container6": {
    "style": {
      "left": "0",
      "right": "0",
      "bottom": "0",
      "padding": "16px",
      "position": "fixed",
      "boxShadow": "0 -1px 3px rgba(0,0,0,0.1)",
      "backgroundColor": "white"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 6,
    "widgetType": "gsd-h5-react:Container"
  },
  "container13": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "marginBottom": "12px",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "container6",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text10": {
    "style": {
      "color": "#6b7280",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "text": "合计金额",
    "_parentId": "container13",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text11": {
    "style": {
      "color": "#ef4444",
      "display": "inline-block",
      "fontSize": "18px",
      "fontWeight": "600"
    },
    "classList": [],
    "_parentId": "container13",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "button2": {
    "style": {
      "color": "white",
      "width": "100%",
      "borderRadius": "8px",
      "backgroundColor": "#3b82f6"
    },
    "classList": [],
    "text": "立即预约",
    "_parentId": "container6",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  }
}





const evtListeners = {"onbutton5$tap": [
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
    ],"oncontainer8$tap": [
      {
          key: 'wMCrZ6EU9',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "selectService";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        service: $w.item_repeater1,
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
          key: 'ws4corua139',
          sourceKey: 'platform:navigateTo',
          handler: function({args}){ return $app.navigateTo(...args)},
          args: {
  "params": [
    {
      "mode": "weDa",
      "pageId": "u_bei_zhao_hu_ren_xin",
      "params": {},
      "packageName": ""
    }
  ]
},
          argsBinds: {}
        }
    ],"onbutton4$tap": [
      {
          key: 'w1mr64g7cwn',
          sourceKey: 'platform:navigateTo',
          handler: function({args}){ return $app.navigateTo(...args)},
          args: {
  "params": [
    {
      "mode": "weDa",
      "pageId": "u_bei_zhao_hu_ren_xua",
      "params": {},
      "packageName": ""
    }
  ]
},
          argsBinds: {}
        }
    ],"oncontainer19$tap": [
      {
          key: 'wp77UOBZF',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "selectMethod";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        method: "platform",
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
    ],"oncontainer20$tap": [
      {
          key: 'w6CZwqeD4',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "searchNearby";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        method: "nearby",
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
    ],"oncontainer21$tap": [
      {
          key: 'wD39DbNzq',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "searchByName";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        method: "byname",
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
          key: 'wwsLceO9x',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "confirmOrder";
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
    ],"on__comp__$show": [
      {
          key: 'wu9de75mpiy',
          sourceKey: 'u_yi_liao_hu_li_yuan:onPageShow',
          handler: handlers.onPageShow,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"on__comp__$attached": [
      {
          key: 'wft5uzvfnqq',
          sourceKey: 'u_yi_liao_hu_li_yuan:onPageLoad',
          handler: handlers.onPageLoad,
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
  container54: { 'if': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.location
    )}
  },
  text45: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.addressText
    )}
  },
  container55: { 'if': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      !$comp.dataset.state.location
    )}
  },
  select1: { 'range': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.cityList
    )},'value': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.selectedCity
    )}
  },
  text44: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      "开启定位获取更精准的服务"
    )},'_waDisplay': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      !$w.app.dataset.state.location || Object.keys($w.app.dataset.state.location || {}).length === 0
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ((display)=>{ const style = {...widgetProps.text44.style}; if(!display) {style.display = "none"}; return style })((
!$w.app.dataset.state.location || Object.keys($w.app.dataset.state.location || {}).length === 0
))
    )}
  },
  repeater1: { 'data': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.services
    )}
  },
  repeater1_item: { '_waFor': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.services
    )}
  },
  container8: { 'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.container8.style, ...(
`border: ${$comp.dataset.state.selectedService && $comp.dataset.state.selectedService.serviceItemId === $w.item_repeater1.serviceItemId ? "1px solid #3b82f6" : "1px solid #e5e7eb"}`
)}
    )}
  },
  icon1: { 'name': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.icon
    )}
  },
  text3: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.name
    )}
  },
  text4: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.duration
    )}
  },
  text5: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `¥${$w.item_repeater1.unitPrice}`
    )}
  },
  text30: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.patientInfo.relationship
    )}
  },
  text32: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.patientInfo.name
    )}
  },
  text34: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.patientInfo.gender
    )}
  },
  text36: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `${$comp.dataset.state.patientInfo.age}岁`
    )}
  },
  text38: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `${$comp.dataset.state.patientInfo.weight}kg`
    )}
  },
  text40: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.patientInfo.hospitalId
    )}
  },
  text42: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.patientInfo.condition
    )}
  },
  container19: { 'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.container19.style, ...(
`background-color: ${$comp.dataset.state.selectedMethod === "platform" ? "#F0F7FF" : "#FAFAFA"}`
)}
    )}
  },
  icon3: { 'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.icon3.style, ...(
`color: ${$comp.dataset.state.selectedMethod === "platform" ? "#0052D9" : "transparent"}`
)}
    )}
  },
  container20: { '_waDisplay': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      false
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ((display)=>{ const style = {...widgetProps.container20.style, ...(
`background-color: ${$comp.dataset.state.selectedMethod === "nearby" ? "#F0F7FF" : "#FAFAFA"}`
)}; if(!display) {style.display = "none"}; return style })((()=>{const $for = forItems; const $index=lists?.[0]?.currentIndex;
 return (
false
)})())
    )}
  },
  container21: { '_waDisplay': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      false
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ((display)=>{ const style = {...widgetProps.container21.style, ...(
`background-color: ${$comp.dataset.state.selectedMethod === "name" ? "#F0F7FF" : "#FAFAFA"}`
)}; if(!display) {style.display = "none"}; return style })((()=>{const $for = forItems; const $index=lists?.[0]?.currentIndex;
 return (
false
)})())
    )}
  },
  container28: { '_waDisplay': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.selectedMethod === "nearby" ||  $comp.dataset.state.selectedMethod === "byname"
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ((display)=>{ const style = {...widgetProps.container28.style}; if(!display) {style.display = "none"}; return style })((
$comp.dataset.state.selectedMethod === "nearby" ||  $comp.dataset.state.selectedMethod === "byname"
))
    )}
  },
  image1: { 'src': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.selectedNurse.avatar
    )}
  },
  text21: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.selectedNurse.name
    )}
  },
  text22: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.selectedNurse.hospital
    )}
  },
  text23: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.selectedNurse.rating
    )}
  },
  text25: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.selectedNurse.recommendation
    )}
  },
  text26: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `已服务${$comp.dataset.state.selectedNurse.serviceCount}次`
    )}
  },
  text27: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `¥${$comp.dataset.state.selectedNurse.price}/次`
    )}
  },
  container25: { '_waDisplay': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.selectedMethod==="platform"
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ((display)=>{ const style = {...widgetProps.container25.style}; if(!display) {style.display = "none"}; return style })((
$comp.dataset.state.selectedMethod==="platform"
))
    )}
  },
  text19: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.selectedMethod === "platform" ? "平台智能推荐护理员" : $comp.dataset.state.selectedMethod === "nearby" ? "附近护理员" : "按名称查找护理员"
    )}
  },
  text20: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      "专业认证 三甲品质 认真负责 务实可靠"
    )}
  },
  text11: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.selectedService ? "¥" + $comp.dataset.state.selectedService.unitPrice : "请选择服务"
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
    "address": {
      "name": "address",
      "varType": "state",
      "dataType": "string",
      "initialValue": "请选择服务地址"
    },
    "cityList": {
      "name": "cityList",
      "label": "",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        {
          "label": "北京",
          "value": "beijing"
        },
        {
          "label": "上海",
          "value": "shanghai"
        }
      ],
      "enableSyncLocal": false
    },
    "location": {
      "name": "location",
      "varType": "state",
      "dataType": "object",
      "initialValue": null
    },
    "services": {
      "name": "services",
      "label": "",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        {
          "icon": "td:heart-filled",
          "name": "标准基础护理",
          "duration": "60分钟",
          "unitPrice": 199,
          "serviceItemId": 1
        },
        {
          "icon": "td:verified",
          "name": "标准专业康复",
          "duration": "90分钟",
          "unitPrice": 299,
          "serviceItemId": 2
        },
        {
          "icon": "td:notification-filled",
          "name": "标准24小时陪护",
          "duration": "全天",
          "unitPrice": 599,
          "serviceItemId": 3
        }
      ],
      "enableSyncLocal": false
    },
    "addressText": {
      "name": "addressText",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "patientInfo": {
      "name": "patientInfo",
      "label": "  \"age\": 68,   \"name\": \"张伟\",   \"gender\": \"男\",   \"weight\": 65,   \"condition\": \"高血压、糖尿病\",   \"relationship\": \"本人\",   \"hospitalNumber\": \"20230715001\"",
      "varType": "state",
      "dataType": "object",
      "initialValue": {
        "age": "",
        "name": "",
        "gender": "",
        "weight": "",
        "condition": "",
        "hospitalId": "",
        "relationship": ""
      },
      "enableSyncLocal": false
    },
    "selectedCity": {
      "name": "selectedCity",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "caregiverName": {
      "name": "caregiverName",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "selectedNurse": {
      "name": "selectedNurse",
      "varType": "state",
      "dataType": "object",
      "initialValue": {
        "id": "nurse001",
        "name": "张护士",
        "price": 299,
        "avatar": "avatar_female",
        "rating": 4.8,
        "hospital": "北京协和医院",
        "serviceCount": 235,
        "recommendation": "拥有10年护理经验，特别擅长老年护理和术后康复"
      }
    },
    "paymentMethods": {
      "name": "paymentMethods",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        {
          "id": 1,
          "icon": "td:logo-wechat",
          "name": "微信支付"
        },
        {
          "id": 2,
          "icon": "td:wallet",
          "name": "支付宝"
        },
        {
          "id": 3,
          "icon": "td:wallet",
          "name": "银行卡"
        }
      ]
    },
    "selectedMethod": {
      "name": "selectedMethod",
      "varType": "state",
      "dataType": "string",
      "initialValue": "platform"
    },
    "selectedPayment": {
      "name": "selectedPayment",
      "varType": "state",
      "dataType": "object",
      "initialValue": null
    },
    "selectedService": {
      "name": "selectedService",
      "varType": "state",
      "dataType": "object",
      "initialValue": null
    }
  },
  "params": {}
};

createComponent({
  key: 'block:u_yi_liao_hu_li_yuan',
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
