import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanlderhandleSubmit from './lowcode/handler/handleSubmit' 
import _hanlderloadMore from './lowcode/handler/loadMore' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  handleSubmit: _hanlderhandleSubmit, 
  loadMore: _hanlderloadMore, 
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
      "padding": "12px",
      "minHeight": "100vh",
      "background": "#f5f7fa"
    },
    "classList": [],
    "_parentId": "container1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container3": {
    "style": {
      "padding": "16px",
      "background": "#fff",
      "borderRadius": "8px",
      "marginBottom": "16px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container5": {
    "style": {
      "gap": "8px",
      "display": "flex",
      "marginBottom": "12px"
    },
    "classList": [],
    "_parentId": "container3",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "input1": {
    "style": {
      "flex": "1",
      "border": "1px solid #e4e7ed",
      "padding": "8px 12px",
      "borderRadius": "6px"
    },
    "classList": [],
    "label": "标题",
    "status": "edit",
    "template": "inputBox",
    "inputValue": "",
    "prefixIcon": "success",
    "prefixType": "",
    "suffixIcon": "success",
    "suffixType": "",
    "placeholder": "请输入申请理由",
    "requiredMsg": "该项为必填项",
    "labelVisible": false,
    "_parentId": "container5",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "button1": {
    "style": {
      "color": "#fff",
      "padding": "8px 16px",
      "background": "#0052d9",
      "borderRadius": "6px"
    },
    "classList": [],
    "text": "提交申请",
    "_parentId": "container5",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container6": {
    "style": {
      "gap": "8px",
      "display": "grid",
      "gridTemplateColumns": "repeat(3,1fr)"
    },
    "classList": [],
    "_parentId": "container3",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "button2": {
    "style": {
      "color": "#0052d9",
      "padding": "6px 12px",
      "borderColor": "#0052d9"
    },
    "classList": [],
    "text": "开始服务",
    "variant": "outline",
    "_parentId": "container6",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button3": {
    "style": {
      "color": "#0052d9",
      "padding": "6px 12px",
      "borderColor": "#0052d9"
    },
    "classList": [],
    "text": "结束服务",
    "variant": "outline",
    "_parentId": "container6",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button4": {
    "style": {
      "color": "#0052d9",
      "padding": "6px 12px",
      "borderColor": "#0052d9"
    },
    "classList": [],
    "text": "紧急维护",
    "variant": "outline",
    "_parentId": "container6",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "scrollView1": {
    "style": {
      "height": "70vh"
    },
    "classList": [],
    "scrollY": true,
    "_parentId": "container2",
    "_order": 1,
    "widgetType": "gsd-h5-react:ScrollView"
  },
  "container7": {
    "style": {
      "gap": "12px",
      "display": "grid"
    },
    "classList": [],
    "_parentId": "scrollView1",
    "_order": 0,
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
      "background": "#fff",
      "borderRadius": "8px"
    },
    "classList": [],
    "_parentId": "repeater1_item",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container9": {
    "style": {
      "display": "flex",
      "marginBottom": "12px",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "container8",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text3": {
    "style": {
      "color": "#1d2129",
      "display": "inline-block",
      "fontSize": "16px",
      "fontWeight": "500"
    },
    "classList": [],
    "_parentId": "container9",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container12": {
    "style": {},
    "classList": [],
    "_parentId": "container9",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "container10": {
    "style": {
      "gap": "8px",
      "display": "grid",
      "marginBottom": "16px"
    },
    "classList": [],
    "_parentId": "container8",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "container13": {
    "style": {
      "gap": "8px",
      "display": "flex",
      "alignItems": "center"
    },
    "classList": [],
    "_parentId": "container10",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon1": {
    "style": {
      "color": "#8c8c8c",
      "fontSize": "14px"
    },
    "classList": [],
    "name": "td:user-circle",
    "_parentId": "container13",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text4": {
    "style": {
      "color": "#4e5969",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "container13",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container14": {
    "style": {
      "gap": "8px",
      "display": "flex",
      "alignItems": "center"
    },
    "classList": [],
    "_parentId": "container10",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon2": {
    "style": {
      "color": "#8c8c8c",
      "fontSize": "14px"
    },
    "classList": [],
    "name": "td:calendar-1",
    "_parentId": "container14",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text5": {
    "style": {
      "color": "#4e5969",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "container14",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text1": {
    "style": {
      "color": "inherit",
      "display": "inline-block"
    },
    "classList": [],
    "text": "输入服务确认码",
    "maxLines": "1",
    "_parentId": "container8",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container11": {
    "style": {
      "gap": "8px",
      "display": "flex",
      "padding": "12px",
      "alignItems": "center",
      "background": "#f5f7fa",
      "borderRadius": "6px"
    },
    "classList": [],
    "_parentId": "container8",
    "_order": 3,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon3": {
    "style": {
      "color": "#00b42a",
      "fontSize": "16px"
    },
    "classList": [],
    "name": "td:verified",
    "_parentId": "container11",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text6": {
    "style": {
      "color": "#00b42a",
      "display": "inline-block",
      "fontWeight": "500"
    },
    "classList": [],
    "_parentId": "container11",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container16": {
    "style": {
      "gap": "8px",
      "display": "flex",
      "padding": "12px",
      "alignItems": "center",
      "background": "#f5f7fa",
      "borderRadius": "6px"
    },
    "classList": [],
    "_parentId": "container8",
    "_order": 4,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon5": {
    "style": {
      "color": "#00b42a",
      "fontSize": "16px"
    },
    "classList": [],
    "name": "td:verified",
    "_parentId": "container16",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text8": {
    "style": {
      "color": "#00b42a",
      "display": "inline-block",
      "fontWeight": "500"
    },
    "classList": [],
    "_parentId": "container16",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "input2": {
    "style": {
      "flex": "1",
      "border": "1px solid #e4e7ed",
      "padding": "8px 12px",
      "borderRadius": "6px"
    },
    "classList": [],
    "label": "标题",
    "status": "edit",
    "template": "inputBox",
    "inputValue": "",
    "prefixIcon": "success",
    "prefixType": "",
    "suffixIcon": "success",
    "suffixType": "",
    "placeholder": "输入服务确认码",
    "requiredMsg": "该项为必填项",
    "labelVisible": false,
    "_parentId": "container16",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "button7": {
    "style": {
      "color": "#fff",
      "padding": "8px 16px",
      "background": "#0052d9",
      "borderRadius": "6px"
    },
    "classList": [],
    "icon": "success",
    "text": "提交",
    "_parentId": "container16",
    "_order": 3,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "text2": {
    "style": {
      "color": "inherit",
      "display": "inline-block"
    },
    "classList": [],
    "text": "状态",
    "maxLines": "1",
    "_parentId": "container8",
    "_order": 5,
    "widgetType": "gsd-h5-react:WdText"
  },
  "button5": {
    "style": {
      "color": "#0052d9",
      "marginTop": "16px"
    },
    "classList": [],
    "variant": "text",
    "_parentId": "scrollView1",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container4": {
    "style": {
      "right": "20px",
      "bottom": "20px",
      "position": "fixed"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "button6": {
    "style": {
      "width": "40px",
      "height": "40px",
      "boxShadow": "0 2px 8px rgba(0,0,0,0.1)",
      "background": "#fff"
    },
    "classList": [],
    "icon": "td:chevron-left",
    "iconType": "icon-only",
    "_parentId": "container4",
    "_order": 0,
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
  input1: { 'value': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.filter.newCode
    )}
  },
  repeater1: { 'data': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.codeList
    )}
  },
  repeater1_item: { '_waFor': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.codeList
    )}
  },
  text3: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.reason
    )}
  },
  container12: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ({
  "approved": "已通过",
  "rejected": "已拒绝",
  "pending": "审核中"
})[$w.item_repeater1.status]
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.container12.style, ...(
`{{: {{`
)}
    )}
  },
  text4: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `申请人：${$w.item_repeater1.requester}`
    )}
  },
  text5: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `请求时间：${$w.item_repeater1.createTime}`
    )}
  },
  text6: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `确认码：${$w.item_repeater1.code}`
    )}
  },
  text8: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `确认码：${$w.item_repeater1.code}`
    )}
  },
  input2: { 'value': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.filter.newCode
    )}
  },
  button5: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.pagination.hasMore ? "加载更多" : "没有更多数据"
    )},'disabled': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      !$comp.dataset.state.pagination.hasMore
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
    "filter": {
      "name": "filter",
      "varType": "state",
      "dataType": "object",
      "initialValue": {
        "newCode": "",
        "searchKey": ""
      }
    },
    "codeList": {
      "name": "codeList",
      "label": "",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        {
          "id": "SC2024071401",
          "code": "",
          "reason": "开始订单服务",
          "status": "pending",
          "requester": "张伟",
          "createTime": "2024-07-14 09:30"
        },
        {
          "id": "SC2024071302",
          "code": "1234",
          "reason": "购买大和米蕈",
          "status": "approved",
          "requester": "李娜",
          "createTime": "2024-07-13 14:15"
        },
        {
          "id": "SC2024071203",
          "code": "",
          "reason": "提前下班申请",
          "status": "rejected",
          "requester": "王强",
          "createTime": "2024-07-12 16:45"
        }
      ],
      "enableSyncLocal": false
    },
    "pagination": {
      "name": "pagination",
      "varType": "state",
      "dataType": "object",
      "initialValue": {
        "page": 1,
        "hasMore": true,
        "pageSize": 10
      }
    }
  },
  "params": {}
};

createComponent({
  key: 'block:9krWJbkWu_lu_ru_fu_wu_que_ren',
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
