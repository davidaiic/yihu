import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanldercontactService from './lowcode/handler/contactService' 
import _hanldercancelOrder from './lowcode/handler/cancelOrder' 
import _hanldermakePayment from './lowcode/handler/makePayment' 
import _hanlderhandlePaymentChange from './lowcode/handler/handlePaymentChange' 
import _hanlderhandleConfirmPayment from './lowcode/handler/handleConfirmPayment' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  contactService: _hanldercontactService, 
  cancelOrder: _hanldercancelOrder, 
  makePayment: _hanldermakePayment, 
  handlePaymentChange: _hanlderhandlePaymentChange, 
  handleConfirmPayment: _hanlderhandleConfirmPayment, 
}

const widgetProps = {
  "container15": {
    "style": {
      "padding": "16px",
      "minHeight": "100vh",
      "background": "#f5f7fa"
    },
    "classList": [],
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container16": {
    "style": {
      "padding": "20px",
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "background": "#fff",
      "borderRadius": "12px",
      "marginBottom": "24px"
    },
    "classList": [],
    "_parentId": "container15",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container21": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "marginBottom": "12px",
      "flexDirection": "row"
    },
    "classList": [],
    "_parentId": "container16",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon5": {
    "style": {
      "color": "#2d8cf0",
      "fontSize": "20px",
      "marginRight": "8px"
    },
    "classList": [],
    "name": "td:verified",
    "_parentId": "container21",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text9": {
    "style": {
      "color": "#2d8cf0",
      "display": "inline-block",
      "fontSize": "18px",
      "fontWeight": "600"
    },
    "classList": [],
    "_parentId": "container21",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container22": {
    "style": {
      "display": "flex",
      "padding": "8px 12px",
      "alignItems": "center",
      "background": "#f0faff",
      "borderRadius": "6px",
      "{{dataset.state.isShared ? 'display": "flex' : 'display:none'}}"
    },
    "classList": [],
    "_parentId": "container16",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon6": {
    "style": {
      "color": "#2d8cf0",
      "fontSize": "16px",
      "marginRight": "6px"
    },
    "classList": [],
    "name": "td:share",
    "_parentId": "container22",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text10": {
    "style": {
      "color": "#2d8cf0",
      "display": "inline-block",
      "fontSize": "13px"
    },
    "classList": [],
    "text": "亲属共享订单",
    "_parentId": "container22",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container17": {
    "style": {
      "padding": "20px",
      "background": "#fff",
      "borderRadius": "12px",
      "marginBottom": "16px"
    },
    "classList": [],
    "_parentId": "container15",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text11": {
    "style": {
      "color": "inherit",
      "display": "block",
      "marginBottom": "16px"
    },
    "classList": [],
    "text": "订单信息",
    "level": "title-5",
    "_parentId": "container17",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container23": {
    "style": {
      "gap": "12px",
      "display": "grid",
      "gridTemplateColumns": "repeat(2,1fr)"
    },
    "classList": [],
    "_parentId": "container17",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "container24": {
    "style": {},
    "classList": [],
    "_parentId": "container23",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text12": {
    "style": {
      "color": "#909399",
      "display": "inline-block",
      "fontSize": "13px"
    },
    "classList": [],
    "text": "订单编号",
    "_parentId": "container24",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text13": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "fontSize": "14px",
      "marginTop": "4px"
    },
    "classList": [],
    "text": "DD202307161234",
    "_parentId": "container24",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container25": {
    "style": {},
    "classList": [],
    "_parentId": "container23",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text14": {
    "style": {
      "color": "#909399",
      "display": "inline-block",
      "fontSize": "13px"
    },
    "classList": [],
    "text": "服务类型",
    "_parentId": "container25",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text1": {
    "style": {
      "color": "#909399",
      "display": "inline-block",
      "fontSize": "13px"
    },
    "classList": [],
    "_parentId": "container25",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container18": {
    "style": {
      "padding": "20px",
      "background": "#fff",
      "borderRadius": "12px",
      "marginBottom": "16px"
    },
    "classList": [],
    "_parentId": "container15",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "text15": {
    "style": {
      "color": "inherit",
      "display": "block",
      "marginBottom": "16px"
    },
    "classList": [],
    "text": "服务详情",
    "level": "title-5",
    "_parentId": "container18",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container27": {
    "style": {
      "gap": "12px"
    },
    "classList": [],
    "_parentId": "container18",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "container28": {
    "style": {
      "display": "flex",
      "flexDirection": "row",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "container27",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text16": {
    "style": {
      "color": "#909399",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "text": "服务时间",
    "_parentId": "container28",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text17": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "_parentId": "container28",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container29": {
    "style": {
      "display": "flex",
      "flexDirection": "row",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "container27",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text18": {
    "style": {
      "color": "#909399",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "text": "服务地址",
    "_parentId": "container29",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text19": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "fontSize": "14px",
      "maxWidth": "200px",
      "textAlign": "right"
    },
    "classList": [],
    "_parentId": "container29",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container30": {
    "style": {
      "display": "flex",
      "flexDirection": "row",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "container27",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "text20": {
    "style": {
      "color": "#909399",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "text": "护理人员",
    "_parentId": "container30",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text21": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "_parentId": "container30",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container19": {
    "style": {
      "padding": "20px",
      "background": "#fff",
      "borderRadius": "12px"
    },
    "classList": [],
    "_parentId": "container15",
    "_order": 3,
    "widgetType": "gsd-h5-react:Container"
  },
  "text22": {
    "style": {
      "color": "inherit",
      "display": "block",
      "marginBottom": "16px"
    },
    "classList": [],
    "text": "支付信息",
    "level": "title-5",
    "_parentId": "container19",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container31": {
    "style": {
      "gap": "12px"
    },
    "classList": [],
    "_parentId": "container19",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "container32": {
    "style": {
      "display": "flex",
      "flexDirection": "row",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "container31",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text23": {
    "style": {
      "color": "#909399",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "text": "订单金额",
    "_parentId": "container32",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text24": {
    "style": {
      "color": "#fa541c",
      "display": "inline-block",
      "fontSize": "16px",
      "fontWeight": "500"
    },
    "classList": [],
    "_parentId": "container32",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container33": {
    "style": {
      "display": "flex",
      "flexDirection": "row",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "container31",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text25": {
    "style": {
      "color": "#909399",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "text": "支付方式",
    "_parentId": "container33",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container35": {
    "style": {
      "gap": "8px",
      "display": "flex",
      "alignItems": "center",
      "flexDirection": "row"
    },
    "classList": [],
    "_parentId": "container33",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon7": {
    "style": {
      "color": "#09bb07",
      "fontSize": "18px"
    },
    "classList": [],
    "name": "td:logo-wechat",
    "_parentId": "container35",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text26": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "_parentId": "container35",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container34": {
    "style": {
      "display": "flex",
      "flexDirection": "row",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "container31",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "text27": {
    "style": {
      "color": "#909399",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "text": "支付时间",
    "_parentId": "container34",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text28": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "_parentId": "container34",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container20": {
    "style": {
      "gap": "12px",
      "marginTop": "24px"
    },
    "classList": [],
    "_parentId": "container15",
    "_order": 4,
    "widgetType": "gsd-h5-react:Container"
  },
  "button3": {
    "style": {
      "color": "#fff",
      "width": "100%",
      "padding": "14px",
      "background": "#2d8cf0",
      "borderRadius": "8px"
    },
    "classList": [],
    "_parentId": "container20",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button4": {
    "style": {
      "color": "#606266",
      "width": "100%",
      "margin": "16px 0px 0px",
      "padding": "14px",
      "borderColor": "#dcdfe6",
      "borderRadius": "8px"
    },
    "classList": [],
    "variant": "outline",
    "_parentId": "container20",
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
  text9: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.orderStatus
    )}
  },
  container22: { '_waDisplay': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.isShared
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ((display)=>{ const style = {...widgetProps.container22.style}; if(!display) {style.display = "none"}; return style })((
$comp.dataset.state.isShared
))
    )}
  },
  text1: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.orderType
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.text1.style, ...(
({
  "display": "inline-block",
  "padding": "4px 8px",
  "borderRadius": "4px",
  "backgroundColor": $comp.dataset.state.orderType === "住院护理" ? "#e6f7ff" : $comp.dataset.state.orderType === "上门护理" ? "#f6ffed" : $comp.dataset.state.orderType === "医院陪诊" ? "#fff7e6" : "#f9f0ff",
  "color": $comp.dataset.state.orderType === "住院护理" ? "#1890ff" : $comp.dataset.state.orderType === "上门护理" ? "#52c41a" : $comp.dataset.state.orderType === "医院陪诊" ? "#fa8c16" : "#722ed1"
})
)}
    )}
  },
  text17: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.serviceDetails.date
    )}
  },
  text19: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.serviceDetails.address
    )}
  },
  text21: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.serviceDetails.nurse
    )}
  },
  text24: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.paymentInfo.amount
    )}
  },
  text26: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.paymentInfo.method
    )}
  },
  text28: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.paymentInfo.createTime
    )}
  },
  button3: { 'icon': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.orderStatus === "未支付" ? "td:wallet" : "td:call-1"
    )},'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.orderStatus === "未支付" ? "立即支付" : "联系客服"
    )},'iconType': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.orderStatus === "未支付" ? "text-with-icon" : "text-with-icon"
    )}
  },
  button4: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.orderStatus === "未支付" ? "取消订单" : "删除订单"
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
    "payment": {
      "name": "payment",
      "varType": "state",
      "dataType": "object",
      "initialValue": {
        "paid": 0,
        "total": 598,
        "paymentMethod": "微信支付"
      }
    },
    "isShared": {
      "name": "isShared",
      "label": "",
      "varType": "state",
      "dataType": "boolean",
      "initialValue": true,
      "enableSyncLocal": false
    },
    "orderType": {
      "name": "orderType",
      "varType": "state",
      "dataType": "string",
      "initialValue": "上门护理"
    },
    "orderStatus": {
      "name": "orderStatus",
      "varType": "state",
      "dataType": "string",
      "initialValue": "进行中"
    },
    "paymentInfo": {
      "name": "paymentInfo",
      "label": "",
      "varType": "state",
      "dataType": "object",
      "initialValue": {
        "amount": "¥ 598.00",
        "method": "微信支付",
        "createTime": "2025-07-16 14:30:00",
        "transactionId": "TX20230716123456"
      },
      "enableSyncLocal": false
    },
    "serviceInfo": {
      "name": "serviceInfo",
      "varType": "state",
      "dataType": "object",
      "initialValue": {
        "nurse": "王护士",
        "orderNo": "DD20240715001",
        "patient": "张伟（父亲）",
        "duration": "3小时",
        "hospital": "协和医院住院部3楼",
        "serviceTime": "2024-07-16 09:00"
      }
    },
    "serviceDetails": {
      "name": "serviceDetails",
      "varType": "state",
      "dataType": "object",
      "initialValue": {
        "date": "2023-07-18 09:00-12:00",
        "nurse": "王护士长（从业5年）",
        "address": "北京市朝阳区光华路8号",
        "contact": "李女士 138****5678"
      }
    }
  },
  "params": {}
};

createComponent({
  key: 'block:u_ding_dan_xiang_qing_1',
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
