import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanlderonLoad from './lowcode/handler/onLoad' 
import _hanldersetStartDate from './lowcode/handler/setStartDate' 
import _hanldersetDays from './lowcode/handler/setDays' 
import _hanldersetNotes from './lowcode/handler/setNotes' 
import _hanldersubmitOrder from './lowcode/handler/submitOrder' 
import _hanldergoBack from './lowcode/handler/goBack' 
import _hanldereditPatientInfo from './lowcode/handler/editPatientInfo' 
import _hanlderselectByName from './lowcode/handler/selectByName' 
import _hanlderselectByDistance from './lowcode/handler/selectByDistance' 
import _hanlderonPageShow from './lowcode/handler/onPageShow' 
import _hanlderonWardChange from './lowcode/handler/onWardChange' 
import _hanlderonRoomChange from './lowcode/handler/onRoomChange' 
import _hanlderonBedChange from './lowcode/handler/onBedChange' 
import _hanlderplaceBedCareOrder from './lowcode/handler/placeBedCareOrder' 
import _hanlderonUnload from './lowcode/handler/onUnload' 
import _hanlderselectLevel from './lowcode/handler/selectLevel' 
import _hanlderselectContact from './lowcode/handler/selectContact' 
import _hanlderonExtraBedNoChange from './lowcode/handler/onExtraBedNoChange' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  onLoad: _hanlderonLoad, 
  setStartDate: _hanldersetStartDate, 
  setDays: _hanldersetDays, 
  setNotes: _hanldersetNotes, 
  submitOrder: _hanldersubmitOrder, 
  goBack: _hanldergoBack, 
  editPatientInfo: _hanldereditPatientInfo, 
  selectByName: _hanlderselectByName, 
  selectByDistance: _hanlderselectByDistance, 
  onPageShow: _hanlderonPageShow, 
  onWardChange: _hanlderonWardChange, 
  onRoomChange: _hanlderonRoomChange, 
  onBedChange: _hanlderonBedChange, 
  placeBedCareOrder: _hanlderplaceBedCareOrder, 
  onUnload: _hanlderonUnload, 
  selectLevel: _hanlderselectLevel, 
  selectContact: _hanlderselectContact, 
  onExtraBedNoChange: _hanlderonExtraBedNoChange, 
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
  "container3": {
    "style": {
      "padding": "16px",
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "borderRadius": "8px",
      "marginBottom": "24px",
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text1": {
    "style": {
      "color": "#757575",
      "display": "block",
      "marginBottom": "8px"
    },
    "classList": [],
    "text": "当前医院",
    "level": "title-5",
    "_parentId": "container3",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container10": {
    "style": {
      "display": "flex",
      "alignItems": "center"
    },
    "classList": [],
    "_parentId": "container3",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon1": {
    "style": {
      "color": "#2196F3",
      "fontSize": "20px",
      "marginRight": "8px"
    },
    "classList": [],
    "_staticResourceAttribute": [
      "src"
    ],
    "name": "td:hospital-1",
    "_parentId": "container10",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text2": {
    "style": {
      "color": "#212121",
      "display": "block"
    },
    "classList": [],
    "level": "title-4",
    "_parentId": "container10",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container20": {
    "style": {
      "padding": "16px",
      "borderRadius": "12px",
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "_parentId": "container3",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "text19": {
    "style": {
      "color": "#333333",
      "display": "block",
      "fontWeight": "600",
      "marginBottom": "16px"
    },
    "classList": [],
    "text": "选择医院：",
    "level": "title-9",
    "maxLines": "1",
    "_parentId": "container20",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container21": {
    "style": {
      "gap": "12px",
      "display": "flex"
    },
    "classList": [],
    "_parentId": "container20",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "button4": {
    "style": {
      "flex": "1",
      "height": "48px",
      "borderRadius": "8px"
    },
    "classList": [],
    "icon": "td:search",
    "text": "名字查找",
    "iconType": "text-with-icon",
    "_parentId": "container21",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button5": {
    "style": {
      "flex": "1",
      "height": "48px",
      "borderRadius": "8px"
    },
    "classList": [],
    "icon": "td:location",
    "text": "附近医院",
    "iconType": "text-with-icon",
    "_parentId": "container21",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "text20": {
    "style": {
      "color": "#666666",
      "display": "inline-block",
      "fontSize": "12px",
      "marginTop": "12px"
    },
    "classList": [],
    "text": "选择查找方式后，系统将为您展示匹配的医院列表",
    "_parentId": "container20",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container4": {
    "style": {
      "padding": "16px",
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "borderRadius": "8px",
      "marginBottom": "24px",
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text3": {
    "style": {
      "color": "#757575",
      "display": "block",
      "marginBottom": "12px"
    },
    "classList": [],
    "text": "选择病床",
    "level": "title-5",
    "_parentId": "container4",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container11": {
    "style": {
      "marginBottom": "16px"
    },
    "classList": [],
    "_parentId": "container4",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text4": {
    "style": {
      "color": "#212121",
      "display": "inline-block",
      "marginBottom": "8px"
    },
    "classList": [],
    "text": "病区",
    "_parentId": "container11",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "select1": {
    "style": {},
    "classList": [],
    "placeholder": "请选择病区",
    "labelVisible": false,
    "_parentId": "container11",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdSelect"
  },
  "container12": {
    "style": {
      "marginBottom": "16px"
    },
    "classList": [],
    "_parentId": "container4",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "text5": {
    "style": {
      "color": "#212121",
      "display": "inline-block",
      "marginBottom": "8px"
    },
    "classList": [],
    "text": "病房",
    "_parentId": "container12",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "select2": {
    "style": {},
    "classList": [],
    "placeholder": "请选择病房",
    "labelVisible": false,
    "_parentId": "container12",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdSelect"
  },
  "container13": {
    "style": {
      "margin": "0px 0px 16px"
    },
    "classList": [],
    "_parentId": "container4",
    "_order": 3,
    "widgetType": "gsd-h5-react:Container"
  },
  "text6": {
    "style": {
      "color": "#212121",
      "display": "inline-block",
      "marginBottom": "8px"
    },
    "classList": [],
    "text": "床位",
    "_parentId": "container13",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "select3": {
    "style": {},
    "classList": [],
    "placeholder": "请选择床位",
    "labelVisible": false,
    "_parentId": "container13",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdSelect"
  },
  "container35": {
    "style": {},
    "classList": [],
    "data": {},
    "_parentId": "container4",
    "_order": 4,
    "widgetType": "gsd-h5-react:Container"
  },
  "text38": {
    "style": {
      "color": "#212121",
      "display": "inline-block",
      "marginBottom": "8px"
    },
    "classList": [],
    "text": "填入加床床号",
    "maxLines": "1",
    "_parentId": "container35",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "input1": {
    "style": {},
    "classList": [],
    "_staticResourceAttribute": [
      "suffixSrc",
      "prefixSrc"
    ],
    "name": "input1",
    "label": "标题",
    "status": "edit",
    "template": "inputBox",
    "borderedH5": false,
    "prefixIcon": "success",
    "prefixType": "",
    "suffixIcon": "success",
    "suffixType": "",
    "placeholder": "请输入床号",
    "requiredMsg": "该项为必填项",
    "labelVisible": false,
    "_parentId": "container35",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "container28": {
    "style": {
      "margin": "0px 0px 24px",
      "padding": "16px 2px",
      "borderRadius": "12px",
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "data": {},
    "_parentId": "container2",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "text30": {
    "style": {
      "color": "#757575",
      "display": "block",
      "fontWeight": "600",
      "marginBottom": "16px"
    },
    "classList": [],
    "text": "选择护理等级",
    "level": "title-5",
    "_parentId": "container28",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container29": {
    "style": {
      "gap": "8px",
      "display": "flex",
      "justifyContent": "center"
    },
    "classList": [],
    "_parentId": "container28",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "button7": {
    "style": {
      "flex": "1",
      "width": "48rpx",
      "height": "48px",
      "fontWeight": "500",
      "borderRadius": "8px"
    },
    "classList": [],
    "text": "1级",
    "_parentId": "container29",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button8": {
    "style": {
      "flex": "1",
      "width": "48rpx",
      "height": "48px",
      "fontWeight": "500",
      "borderRadius": "8px"
    },
    "classList": [],
    "text": "2级",
    "_parentId": "container29",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button9": {
    "style": {
      "flex": "1",
      "width": "48rpx",
      "height": "48px",
      "fontWeight": "500",
      "borderRadius": "8px"
    },
    "classList": [],
    "text": "3级",
    "_parentId": "container29",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button10": {
    "style": {
      "flex": "1",
      "width": "48rpx",
      "height": "48px",
      "fontWeight": "500",
      "borderRadius": "8px"
    },
    "classList": [],
    "text": "4级",
    "_parentId": "container29",
    "_order": 3,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button11": {
    "style": {
      "flex": "1",
      "width": "48rpx",
      "height": "48px",
      "fontWeight": "500",
      "borderRadius": "8px"
    },
    "classList": [],
    "text": "5级",
    "_parentId": "container29",
    "_order": 4,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container30": {
    "style": {
      "padding": "12px",
      "marginTop": "16px",
      "borderRadius": "8px",
      "backgroundColor": "#f9fafb"
    },
    "classList": [],
    "_parentId": "container28",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "text31": {
    "style": {
      "color": "#6b7280",
      "display": "inline"
    },
    "classList": [],
    "text": "当前选择：",
    "_parentId": "container30",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text32": {
    "style": {
      "color": "#1f2937",
      "display": "inline",
      "fontWeight": "500"
    },
    "classList": [],
    "_parentId": "container30",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container8": {
    "style": {
      "padding": "16px",
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "borderRadius": "8px",
      "marginBottom": "24px",
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 3,
    "widgetType": "gsd-h5-react:Container"
  },
  "container14": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "marginBottom": "12px",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "container8",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text10": {
    "style": {
      "color": "#757575",
      "display": "block"
    },
    "classList": [],
    "text": "被照护人信息",
    "level": "title-5",
    "_parentId": "container14",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "button1": {
    "style": {
      "color": "#2196F3"
    },
    "classList": [],
    "_staticResourceAttribute": [
      "sendMessageImg",
      "iconSrc"
    ],
    "icon": "td:add",
    "size": "sm",
    "text": "选择",
    "variant": "text",
    "iconType": "text-with-icon",
    "_parentId": "container14",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button6": {
    "style": {
      "color": "#2196F3"
    },
    "classList": [],
    "icon": "td:edit-1",
    "size": "sm",
    "text": "新增",
    "variant": "text",
    "iconType": "text-with-icon",
    "_parentId": "container14",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container15": {
    "style": {
      "display": "flex",
      "marginBottom": "8px"
    },
    "classList": [],
    "_parentId": "container8",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text11": {
    "style": {
      "color": "#757575",
      "width": "80px",
      "display": "inline-block"
    },
    "classList": [],
    "text": "姓名：",
    "_parentId": "container15",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text12": {
    "style": {
      "color": "#212121",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "container15",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container16": {
    "style": {
      "display": "flex",
      "marginBottom": "8px"
    },
    "classList": [],
    "_parentId": "container8",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "text13": {
    "style": {
      "color": "#757575",
      "width": "80px",
      "display": "inline-block"
    },
    "classList": [],
    "text": "性别：",
    "_parentId": "container16",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text14": {
    "style": {
      "color": "#212121",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "container16",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container17": {
    "style": {
      "display": "flex",
      "marginBottom": "8px"
    },
    "classList": [],
    "_parentId": "container8",
    "_order": 3,
    "widgetType": "gsd-h5-react:Container"
  },
  "text15": {
    "style": {
      "color": "#757575",
      "width": "80px",
      "display": "inline-block"
    },
    "classList": [],
    "text": "年龄：",
    "_parentId": "container17",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text16": {
    "style": {
      "color": "#212121",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "container17",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container18": {
    "style": {
      "display": "flex"
    },
    "classList": [],
    "_parentId": "container8",
    "_order": 4,
    "widgetType": "gsd-h5-react:Container"
  },
  "text17": {
    "style": {
      "color": "#757575",
      "width": "80px",
      "display": "inline-block"
    },
    "classList": [],
    "text": "住院号：",
    "maxLines": "1",
    "_parentId": "container18",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text18": {
    "style": {
      "color": "#212121",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "container18",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container31": {
    "style": {
      "margin": "0px 0px 24px",
      "padding": "16px",
      "boxShadow": "0 4px 12px rgba(0,0,0,0.05)",
      "borderRadius": "12px",
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 4,
    "widgetType": "gsd-h5-react:Container"
  },
  "container32": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "marginBottom": "20px"
    },
    "classList": [],
    "_parentId": "container31",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text33": {
    "style": {
      "color": "#757575",
      "display": "block",
      "fontWeight": "600"
    },
    "classList": [],
    "text": "当前联系人",
    "level": "title-5",
    "_parentId": "container32",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container33": {
    "style": {
      "padding": "12px",
      "borderRadius": "8px",
      "marginBottom": "16px",
      "backgroundColor": "#f8f9fe"
    },
    "classList": [],
    "_parentId": "container31",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text34": {
    "style": {
      "color": "#8898aa",
      "display": "inline-block",
      "fontSize": "12px",
      "marginBottom": "4px"
    },
    "classList": [],
    "text": "姓名",
    "_parentId": "container33",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text35": {
    "style": {
      "color": "#525f7f",
      "display": "inline-block",
      "fontWeight": "500"
    },
    "classList": [],
    "level": "body-lg",
    "_parentId": "container33",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container34": {
    "style": {
      "padding": "12px",
      "borderRadius": "8px",
      "marginBottom": "24px",
      "backgroundColor": "#f8f9fe"
    },
    "classList": [],
    "_parentId": "container31",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "text36": {
    "style": {
      "color": "#8898aa",
      "display": "inline-block",
      "fontSize": "12px",
      "marginBottom": "4px"
    },
    "classList": [],
    "text": "手机号码",
    "_parentId": "container34",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text37": {
    "style": {
      "color": "#525f7f",
      "display": "inline-block",
      "fontWeight": "500"
    },
    "classList": [],
    "level": "body-lg",
    "_parentId": "container34",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "button12": {
    "style": {
      "color": "#ffffff",
      "width": "100%",
      "padding": "12px",
      "borderRadius": "8px",
      "backgroundColor": "#5e72e4"
    },
    "classList": [],
    "icon": "td:chevron-right",
    "text": "选择联系人",
    "iconType": "text-with-icon",
    "_parentId": "container31",
    "_order": 3,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container5": {
    "style": {
      "padding": "16px",
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "borderRadius": "8px",
      "marginBottom": "24px",
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 5,
    "widgetType": "gsd-h5-react:Container"
  },
  "text7": {
    "style": {
      "color": "#757575",
      "display": "block",
      "marginBottom": "12px"
    },
    "classList": [],
    "text": "选择开始日期",
    "level": "title-5",
    "_parentId": "container5",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
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
    "label": "日期时间",
    "status": "edit",
    "borderedH5": false,
    "prefixIcon": "success",
    "prefixType": "",
    "suffixIcon": "td:calendar",
    "suffixType": "inner",
    "placeholder": "请选择",
    "requiredMsg": "该项为必填项",
    "labelVisible": false,
    "_parentId": "container5",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdDate"
  },
  "container6": {
    "style": {
      "padding": "16px",
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "borderRadius": "8px",
      "marginBottom": "24px",
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 6,
    "widgetType": "gsd-h5-react:Container"
  },
  "text8": {
    "style": {
      "color": "#757575",
      "display": "block",
      "marginBottom": "12px"
    },
    "classList": [],
    "text": "服务天数",
    "level": "title-5",
    "_parentId": "container6",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "select4": {
    "style": {},
    "classList": [],
    "labelVisible": false,
    "_parentId": "container6",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdSelect"
  },
  "container7": {
    "style": {
      "padding": "16px",
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "borderRadius": "8px",
      "marginBottom": "24px",
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 7,
    "widgetType": "gsd-h5-react:Container"
  },
  "text9": {
    "style": {
      "color": "#757575",
      "display": "block",
      "marginBottom": "12px"
    },
    "classList": [],
    "text": "订单备注",
    "level": "title-5",
    "_parentId": "container7",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "textarea1": {
    "style": {},
    "classList": [],
    "placeholder": "请输入备注信息（140字以内）",
    "labelVisible": false,
    "_parentId": "container7",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdTextarea"
  },
  "container19": {
    "style": {
      "margin": "0px 0px 24px",
      "padding": "16px",
      "boxShadow": "0 4px 20px rgba(0,0,0,0.05)",
      "borderRadius": "12px",
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 8,
    "widgetType": "gsd-h5-react:Container"
  },
  "container22": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "marginBottom": "20px",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "container19",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text21": {
    "style": {
      "color": "#1a1a1a",
      "display": "block",
      "fontSize": "18px",
      "fontWeight": "600"
    },
    "classList": [],
    "text": "住院费用明细",
    "level": "title-4",
    "_parentId": "container22",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "icon2": {
    "style": {
      "color": "#0052d9",
      "fontSize": "24px"
    },
    "classList": [],
    "name": "td:verified",
    "_parentId": "container22",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "container23": {
    "style": {
      "borderBottom": "1px solid #f0f0f0",
      "marginBottom": "16px",
      "paddingBottom": "16px"
    },
    "classList": [],
    "_parentId": "container19",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text22": {
    "style": {
      "color": "#666666",
      "display": "inline-block",
      "fontSize": "14px",
      "marginBottom": "8px"
    },
    "classList": [],
    "text": "服务项目",
    "_parentId": "container23",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text23": {
    "style": {
      "color": "#1a1a1a",
      "display": "block",
      "fontSize": "16px",
      "fontWeight": "500"
    },
    "classList": [],
    "level": "title-5",
    "_parentId": "container23",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container24": {
    "style": {
      "display": "flex",
      "marginBottom": "24px",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "container19",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "container26": {
    "style": {},
    "classList": [],
    "_parentId": "container24",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text24": {
    "style": {
      "color": "#666666",
      "display": "inline-block",
      "fontSize": "14px",
      "marginBottom": "8px"
    },
    "classList": [],
    "text": "起始日期",
    "_parentId": "container26",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text25": {
    "style": {
      "color": "#1a1a1a",
      "display": "inline-block",
      "fontSize": "16px",
      "fontWeight": "500"
    },
    "classList": [],
    "_parentId": "container26",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container27": {
    "style": {},
    "classList": [],
    "_parentId": "container24",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text26": {
    "style": {
      "color": "#666666",
      "display": "inline-block",
      "fontSize": "14px",
      "marginBottom": "8px"
    },
    "classList": [],
    "text": "住院天数",
    "_parentId": "container27",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text27": {
    "style": {
      "color": "#1a1a1a",
      "display": "inline-block",
      "fontSize": "16px",
      "fontWeight": "500"
    },
    "classList": [],
    "_parentId": "container27",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container25": {
    "style": {
      "display": "flex",
      "padding": "16px",
      "alignItems": "center",
      "borderRadius": "8px",
      "justifyContent": "space-between",
      "backgroundColor": "#f9f9ff"
    },
    "classList": [],
    "_parentId": "container19",
    "_order": 3,
    "widgetType": "gsd-h5-react:Container"
  },
  "text28": {
    "style": {
      "color": "#1a1a1a",
      "display": "inline-block",
      "fontSize": "16px",
      "fontWeight": "500"
    },
    "classList": [],
    "text": "总费用",
    "_parentId": "container25",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text29": {
    "style": {
      "color": "#0052d9",
      "display": "block",
      "fontSize": "24px",
      "fontWeight": "700"
    },
    "classList": [],
    "level": "title-4",
    "_parentId": "container25",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container9": {
    "style": {
      "display": "flex",
      "marginTop": "24px",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 9,
    "widgetType": "gsd-h5-react:Container"
  },
  "button2": {
    "style": {
      "color": "#757575",
      "width": "48%",
      "borderColor": "#757575"
    },
    "classList": [],
    "icon": "success",
    "text": "清空并返回",
    "variant": "outline",
    "_parentId": "container9",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button3": {
    "style": {
      "color": "#ffffff",
      "width": "48%",
      "backgroundColor": "#2196F3"
    },
    "classList": [],
    "text": "下单并支付",
    "_parentId": "container9",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  }
}





const evtListeners = {"onbutton4$tap": [
      {
          key: 'weUtUPxQz',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "selectByName";
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
    ],"onbutton5$tap": [
      {
          key: 'w2b32qWll',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "selectByDistance";
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
    ],"onselect1$change": [
      {
          key: 'wvzb2egawe6',
          sourceKey: 'u_zhu_yuan_hu_li:onWardChange',
          handler: handlers.onWardChange,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onselect2$change": [
      {
          key: 'weei72rtiav',
          sourceKey: 'u_zhu_yuan_hu_li:onRoomChange',
          handler: handlers.onRoomChange,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onselect3$change": [
      {
          key: 'wjecku914dc',
          sourceKey: 'u_zhu_yuan_hu_li:onBedChange',
          handler: handlers.onBedChange,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"oninput1$change": [
      {
          key: 'wbpnca214dg',
          sourceKey: 'u_zhu_yuan_hu_li:onExtraBedNoChange',
          handler: handlers.onExtraBedNoChange,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton7$tap": [
      {
          key: 'wvcobTYb4',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "selectLevel";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        level: "1",
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
          key: 'wlxS0Du3x',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "selectLevel";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        level: "2",
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
          key: 'wvcnSiXZD',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "selectLevel";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        level: "3",
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
          key: 'wyFPuhHA4',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "selectLevel";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        level: "4",
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
          key: 'wTp0xv9kL',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "selectLevel";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        level: "5",
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
    ],"onbutton1$tap": [
      {
          key: 'ww1j1m6v4mv',
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
    ],"onbutton6$tap": [
      {
          key: 'ww1j1m6v4mv',
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
    ],"onbutton12$tap": [
      {
          key: 'w82f1Jphn',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "selectContact";
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
    ],"ondate1$change": [
      {
          key: 'wffobbjhg08',
          sourceKey: 'u_zhu_yuan_hu_li:setStartDate',
          handler: handlers.setStartDate,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onselect4$change": [
      {
          key: 'wnfujj5rddr',
          sourceKey: 'u_zhu_yuan_hu_li:setDays',
          handler: handlers.setDays,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"ontextarea1$change": [
      {
          key: 'wgb47g3xo60',
          sourceKey: 'u_zhu_yuan_hu_li:setNotes',
          handler: handlers.setNotes,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton2$tap": [
      {
          key: 'wzkdoonkkpb',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({event}) => {
  //console.log('event', event);
  //console.log('$w', $w);

  // 更新选中值 & 清空下级
  $w.page.setState({
    selectedWardId: '',
    selectedRoomId: '',
    selectedBedId: '',
    wardOptions: [],
    roomOptions: [],
    bedOptions: [],
    selectedItem : {},
  });

  // 更新选中值 & 清空下级
  $w.app.setState({
    cacheHospitalOrderByHospital : {},
    current_hospital_dept : {},
    current_patient_info : {}
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
    ],"onbutton2$wzkdoonkkpb_success": [
      {
          key: 'w5g17jo28fu',
          sourceKey: 'platform:navigateBack',
          handler: function({args}){ return $app.navigateBack(...args)},
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton3$tap": [
      {
          key: 'w1dhy4gnfip',
          sourceKey: 'u_zhu_yuan_hu_li:placeBedCareOrder',
          handler: handlers.placeBedCareOrder,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"on__comp__$show": [
      {
          key: 'w82x4tgyy63',
          sourceKey: 'u_zhu_yuan_hu_li:onPageShow',
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
          key: 'wd8ufufpzob',
          sourceKey: 'u_zhu_yuan_hu_li:onLoad',
          handler: handlers.onLoad,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"on__comp__$detached": [
      {
          key: 'wn4hj8ppj83',
          sourceKey: 'u_zhu_yuan_hu_li:onUnload',
          handler: handlers.onUnload,
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
  text2: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.hospitalName
    )}
  },
  button4: { 'variant': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.selectedMethod === "byName" ? "base" : "outline"
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.button4.style, ...(
`background-color: ${$comp.dataset.state.selectedMethod === "byName" ? "#e6f7ff" : "transparent"}; border-color: ${$comp.dataset.state.selectedMethod === "byName" ? "#0052d9" : "#d9d9d9"}`
)}
    )}
  },
  button5: { 'variant': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.selectedMethod === "byDistance" ? "base" : "outline"
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.button5.style, ...(
`background-color: ${$comp.dataset.state.selectedMethod === "byDistance" ? "#e6f7ff" : "transparent"}; border-color: ${$comp.dataset.state.selectedMethod === "byDistance" ? "#0052d9" : "#d9d9d9"}`
)}
    )}
  },
  select1: { 'range': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.wardOptions.map((item) => ({label: item['label'],value: item['value'],}))
    )},'value': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.selectedWardId
    )}
  },
  select2: { 'range': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.roomOptions.map((item) => ({label: item['label'],value: item['value'],}))
    )},'value': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.selectedRoomId
    )}
  },
  select3: { 'range': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.bedOptions.map((item) => ({label: item['label'],value: item['value'],}))
    )},'value': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.selectedBedId
    )}
  },
  container35: { '_waDisplay': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.extraisExtra
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ((display)=>{ const style = {...widgetProps.container35.style}; if(!display) {style.display = "none"}; return style })((
$comp.dataset.state.extraisExtra
))
    )}
  },
  input1: { 'inputValue': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.extraBedNo
    )}
  },
  button7: { 'variant': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.selectedLevel === 1 ? "base" : "outline"
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.button7.style, ...(
`background-color: ${$comp.dataset.state.selectedLevel === 1 ? "#f0f7ff" : "#ffffff"}; border-color: ${$comp.dataset.state.selectedLevel === 1 ? "#3b82f6" : "#e5e7eb"}; color: ${$comp.dataset.state.selectedLevel === 1 ? "#2563eb" : "#4b5563"}`
)}
    )}
  },
  button8: { 'variant': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.selectedLevel === 2 ? "base" : "outline"
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.button8.style, ...(
`background-color: ${$comp.dataset.state.selectedLevel === 2 ? "#f0f7ff" : "#ffffff"}; border-color: ${$comp.dataset.state.selectedLevel === 2 ? "#3b82f6" : "#e5e7eb"}; color: ${$comp.dataset.state.selectedLevel === 2 ? "#2563eb" : "#4b5563"}`
)}
    )}
  },
  button9: { 'variant': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.selectedLevel === 3 ? "base" : "outline"
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.button9.style, ...(
`background-color: ${$comp.dataset.state.selectedLevel === 3 ? "#f0f7ff" : "#ffffff"}; border-color: ${$comp.dataset.state.selectedLevel === 3 ? "#3b82f6" : "#e5e7eb"}; color: ${$comp.dataset.state.selectedLevel === 3 ? "#2563eb" : "#4b5563"}`
)}
    )}
  },
  button10: { 'variant': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.selectedLevel === 4 ? "base" : "outline"
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.button10.style, ...(
`background-color: ${$comp.dataset.state.selectedLevel === 4 ? "#f0f7ff" : "#ffffff"}; border-color: ${$comp.dataset.state.selectedLevel === 4 ? "#3b82f6" : "#e5e7eb"}; color: ${$comp.dataset.state.selectedLevel === 4 ? "#2563eb" : "#4b5563"}`
)}
    )}
  },
  button11: { 'variant': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.selectedLevel === 5 ? "base" : "outline"
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.button11.style, ...(
`background-color: ${$comp.dataset.state.selectedLevel === 5 ? "#f0f7ff" : "#ffffff"}; border-color: ${$comp.dataset.state.selectedLevel === 5 ? "#3b82f6" : "#e5e7eb"}; color: ${$comp.dataset.state.selectedLevel === 5 ? "#2563eb" : "#4b5563"}`
)}
    )}
  },
  text32: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `${$comp.dataset.state.selectedLevel}级护理`
    )}
  },
  text12: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.patientInfo.name
    )}
  },
  text14: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.patientInfo.gender
    )}
  },
  text16: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.patientInfo.age
    )}
  },
  text18: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.patientInfo.hospitalId
    )}
  },
  text35: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.contactName
    )}
  },
  text37: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.contactPhone
    )}
  },
  date1: { 'value': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.startDate
    )}
  },
  select4: { 'range': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      Array.from({
  "length": 14
}, (_, i) => ({
  "label": `${i + 1}天`,
  "value": i + 1
}))
    )},'value': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.days
    )}
  },
  textarea1: { 'value': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.notes
    )}
  },
  text23: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.selectedItem.name
    )}
  },
  text25: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.startDate ? $w.DateText($comp.dataset.state.startDate, 'YYYY-MM-DD') : ""
    )}
  },
  text27: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `${$comp.dataset.state.days}天`
    )}
  },
  text29: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      "¥" + $comp.dataset.state.selectedItem.unitPrice * $comp.dataset.state.days
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
    "days": {
      "name": "days",
      "varType": "state",
      "dataType": "number",
      "initialValue": 1
    },
    "notes": {
      "name": "notes",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "startDate": {
      "name": "startDate",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "bedOptions": {
      "name": "bedOptions",
      "label": "",
      "varType": "state",
      "dataType": "array",
      "initialValue": [],
      "enableSyncLocal": false
    },
    "extraBedNo": {
      "name": "extraBedNo",
      "label": "",
      "varType": "state",
      "dataType": "string",
      "initialValue": "''",
      "enableSyncLocal": false
    },
    "contactName": {
      "name": "contactName",
      "label": "",
      "varType": "state",
      "dataType": "string",
      "initialValue": "请选择联系人",
      "enableSyncLocal": false
    },
    "patientInfo": {
      "name": "patientInfo",
      "label": "",
      "varType": "state",
      "dataType": "object",
      "initialValue": {
        "age": 0,
        "name": "",
        "gender": "",
        "hospitalId": ""
      },
      "enableSyncLocal": false
    },
    "roomOptions": {
      "name": "roomOptions",
      "label": "",
      "varType": "state",
      "dataType": "array",
      "initialValue": [],
      "enableSyncLocal": false
    },
    "wardOptions": {
      "name": "wardOptions",
      "label": "",
      "varType": "state",
      "dataType": "array",
      "initialValue": [],
      "enableSyncLocal": false
    },
    "contactPhone": {
      "name": "contactPhone",
      "label": "",
      "varType": "state",
      "dataType": "string",
      "initialValue": "请选择联系人",
      "enableSyncLocal": false
    },
    "extraisExtra": {
      "name": "extraisExtra",
      "label": "",
      "varType": "state",
      "dataType": "boolean",
      "initialValue": false,
      "enableSyncLocal": false
    },
    "hospitalName": {
      "name": "hospitalName",
      "label": "",
      "varType": "state",
      "dataType": "string",
      "initialValue": "未选择",
      "enableSyncLocal": false
    },
    "selectedItem": {
      "name": "selectedItem",
      "label": "",
      "varType": "state",
      "dataType": "object",
      "initialValue": {
        "name": "请选择医院和病区病房病床",
        "unitPrice": 0
      },
      "enableSyncLocal": false
    },
    "selectedBedId": {
      "name": "selectedBedId",
      "label": "",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "selectedLevel": {
      "name": "selectedLevel",
      "varType": "state",
      "dataType": "number",
      "initialValue": 1
    },
    "selectedMethod": {
      "name": "selectedMethod",
      "varType": "state",
      "dataType": "string",
      "initialValue": "byName"
    },
    "selectedRoomId": {
      "name": "selectedRoomId",
      "label": "",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "selectedWardId": {
      "name": "selectedWardId",
      "label": "",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "showExtraDialog": {
      "name": "showExtraDialog",
      "label": "",
      "varType": "state",
      "dataType": "boolean",
      "initialValue": false,
      "enableSyncLocal": false
    },
    "hospitalZYHLServiceItems": {
      "name": "hospitalZYHLServiceItems",
      "label": "",
      "varType": "state",
      "dataType": "array",
      "initialValue": [],
      "enableSyncLocal": false
    }
  },
  "params": {}
};

createComponent({
  key: 'block:u_zhu_yuan_hu_li',
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
