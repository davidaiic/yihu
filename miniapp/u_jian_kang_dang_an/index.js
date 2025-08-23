import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanlderonLiuyan_textarea_change from './lowcode/handler/onLiuyan_textarea_change' 
import _hanlderhandleFocus from './lowcode/handler/handleFocus' 
import _hanlderhandleBlur from './lowcode/handler/handleBlur' 
import _hanldersendMessage from './lowcode/handler/sendMessage' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  onLiuyan_textarea_change: _hanlderonLiuyan_textarea_change, 
  handleFocus: _hanlderhandleFocus, 
  handleBlur: _hanlderhandleBlur, 
  sendMessage: _hanldersendMessage, 
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
      "marginBottom": "20px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdCard"
  },
  "container6": {
    "style": {
      "display": "flex",
      "alignItems": "center"
    },
    "classList": [],
    "_parentId": "card1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon1": {
    "style": {
      "color": "#4CAF50",
      "fontSize": "20px",
      "marginRight": "8px"
    },
    "classList": [],
    "name": "td:verified",
    "_parentId": "container6",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text3": {
    "style": {
      "color": "inherit",
      "display": "block",
      "fontWeight": "600"
    },
    "classList": [],
    "text": "医护订单信息",
    "level": "title-5",
    "_parentId": "container6",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container7": {
    "style": {
      "display": "flex",
      "marginBottom": "8px"
    },
    "classList": [],
    "_parentId": "card1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text4": {
    "style": {
      "color": "#757575",
      "width": "80px",
      "display": "inline-block"
    },
    "classList": [],
    "text": "订单类型：",
    "_parentId": "container7",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "tag1": {
    "style": {
      "display": "inline-flex",
      "--wd-tag-font-size-md": "14px"
    },
    "classList": [],
    "_parentId": "container7",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdTag"
  },
  "container8": {
    "style": {
      "display": "flex",
      "marginBottom": "8px"
    },
    "classList": [],
    "_parentId": "card1",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text5": {
    "style": {
      "color": "#757575",
      "width": "80px",
      "display": "inline-block"
    },
    "classList": [],
    "text": "患者姓名：",
    "_parentId": "container8",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text6": {
    "style": {
      "color": "inherit",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "container8",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container9": {
    "style": {
      "display": "flex",
      "marginBottom": "8px"
    },
    "classList": [],
    "_parentId": "card1",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "text7": {
    "style": {
      "color": "#757575",
      "width": "80px",
      "display": "inline-block"
    },
    "classList": [],
    "text": "服务周期：",
    "_parentId": "container9",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text8": {
    "style": {
      "color": "inherit",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "container9",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text1": {
    "style": {
      "color": "inherit",
      "display": "block",
      "fontWeight": "600",
      "marginBottom": "16px"
    },
    "classList": [],
    "text": "健康档案记录",
    "level": "title-5",
    "_parentId": "container2",
    "_order": 1,
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
  "repeater1": {
    "style": {},
    "classList": [],
    "suffix": "repeater1",
    "forItem": "item_repeater1",
    "forIndex": "index_repeater1",
    "_parentId": "container3",
    "_order": 0,
    "widgetType": "gsd-h5-react:Repeater"
  },
  "repeater1_item": {
    "style": {},
    "classList": [],
    "_parentId": "repeater1",
    "widgetType": "gsd-h5-react:RepeaterItem"
  },
  "container10": {
    "style": {
      "marginBottom": "16px"
    },
    "classList": [],
    "_parentId": "repeater1_item",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "card2": {
    "style": {
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "borderRadius": "12px"
    },
    "classList": [],
    "showFooter": true,
    "_parentId": "container10",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdCard"
  },
  "container11": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "card2",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container12": {
    "style": {
      "display": "flex",
      "alignItems": "center"
    },
    "classList": [],
    "_parentId": "container11",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "image1": {
    "style": {
      "width": "40px",
      "height": "40px",
      "marginRight": "12px",
      "borderRadius": "20px"
    },
    "classList": [],
    "fit": "cover",
    "_parentId": "container12",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdImage"
  },
  "container13": {
    "style": {},
    "classList": [],
    "_parentId": "container12",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text9": {
    "style": {
      "color": "inherit",
      "display": "block",
      "fontWeight": "500"
    },
    "classList": [],
    "_parentId": "container13",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text10": {
    "style": {
      "color": "#757575",
      "display": "inline-block",
      "fontSize": "12px"
    },
    "classList": [],
    "_parentId": "container13",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "tag2": {
    "style": {
      "display": "inline-flex",
      "--wd-tag-font-size-md": "14px"
    },
    "classList": [],
    "_parentId": "container11",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdTag"
  },
  "text11": {
    "style": {
      "color": "inherit",
      "display": "block",
      "lineHeight": "1.5em",
      "marginBottom": "12px"
    },
    "classList": [],
    "_parentId": "card2",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container14": {
    "style": {
      "display": "flex",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "card2",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text12": {
    "style": {
      "color": "#9E9E9E",
      "display": "inline-block",
      "fontSize": "12px"
    },
    "classList": [],
    "_parentId": "container14",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text13": {
    "style": {
      "color": "#9E9E9E",
      "display": "inline-block",
      "fontSize": "12px"
    },
    "classList": [],
    "_parentId": "container14",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container15": {
    "style": {
      "display": "flex",
      "justifyContent": "flex-end"
    },
    "classList": [],
    "_parentId": "card2",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "button1": {
    "style": {
      "marginRight": "8px"
    },
    "classList": [],
    "icon": "td:edit-1",
    "text": "查看详情",
    "variant": "text",
    "iconType": "text-with-icon",
    "_parentId": "container15",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "text2": {
    "style": {
      "color": "inherit",
      "display": "block",
      "fontWeight": "600",
      "marginBottom": "16px"
    },
    "classList": [],
    "text": "我的留言",
    "level": "title-5",
    "_parentId": "container2",
    "_order": 3,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container4": {
    "style": {
      "marginBottom": "24px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 4,
    "widgetType": "gsd-h5-react:Container"
  },
  "repeater2": {
    "style": {},
    "classList": [],
    "suffix": "repeater2",
    "forItem": "item_repeater2",
    "forIndex": "index_repeater2",
    "_parentId": "container4",
    "_order": 0,
    "widgetType": "gsd-h5-react:Repeater"
  },
  "repeater2_item": {
    "style": {},
    "classList": [],
    "_parentId": "repeater2",
    "widgetType": "gsd-h5-react:RepeaterItem"
  },
  "container16": {
    "style": {
      "marginBottom": "12px"
    },
    "classList": [],
    "_parentId": "repeater2_item",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container17": {
    "style": {
      "display": "flex",
      "alignItems": "flex-start"
    },
    "classList": [],
    "_parentId": "container16",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "image2": {
    "style": {
      "width": "36px",
      "height": "36px",
      "margin": "0 8px",
      "borderRadius": "18px"
    },
    "classList": [],
    "fit": "cover",
    "_parentId": "container17",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdImage"
  },
  "container18": {
    "style": {
      "maxWidth": "70%"
    },
    "classList": [],
    "_parentId": "container17",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "container19": {
    "style": {
      "padding": "8px 12px",
      "borderRadius": "12px",
      "marginBottom": "4px"
    },
    "classList": [],
    "_parentId": "container18",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text15": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "lineHeight": "1.5em"
    },
    "classList": [],
    "_parentId": "container19",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text14": {
    "style": {
      "color": "#9E9E9E",
      "display": "inline-block",
      "fontSize": "12px"
    },
    "classList": [],
    "_parentId": "container18",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container21": {
    "style": {
      "height": "100px"
    },
    "classList": [],
    "data": {},
    "_parentId": "container2",
    "_order": 5,
    "widgetType": "gsd-h5-react:Container"
  },
  "container5": {
    "style": {
      "left": "0",
      "right": "0",
      "bottom": "0",
      "padding": "12px",
      "position": "fixed",
      "boxShadow": "0 -2px 12px rgba(0,0,0,0.08)",
      "background": "#ffffff",
      "transition": "all 0.3s ease",
      "borderTopLeftRadius": "16px",
      "borderTopRightRadius": "16px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 6,
    "widgetType": "gsd-h5-react:Container"
  },
  "container20": {
    "style": {
      "gap": "8px",
      "display": "flex",
      "alignItems": "flex-end"
    },
    "classList": [],
    "_parentId": "container5",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "textarea1": {
    "style": {
      "flex": "1",
      "padding": "12px",
      "background": "#f5f5f5",
      "transition": "all 0.3s ease",
      "borderRadius": "8px"
    },
    "classList": [],
    "name": "",
    "label": "标题",
    "status": "edit",
    "autoHeight": false,
    "placeholder": "输入留言...",
    "requiredMsg": "该项为必填项",
    "labelVisible": false,
    "_parentId": "container20",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdTextarea"
  },
  "button2": {
    "style": {
      "color": "#2196F3",
      "width": "40px",
      "height": "40px",
      "minHeight": "initial",
      "marginBottom": "4px"
    },
    "classList": [],
    "icon": "td:send",
    "variant": "text",
    "iconType": "icon-only",
    "_parentId": "container20",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  }
}





const evtListeners = {"onbutton1$tap": [
      {
          key: 'w2223x6xxqo',
          sourceKey: 'platform:navigateTo',
          handler: function({args}){ return $app.navigateTo(...args)},
          args: {
  "params": [
    {
      "mode": "weDa",
      "pageId": "u_dang_an_xiangqing",
      "params": {},
      "jumpMethod": "page",
      "packageName": "9krWJbkW"
    }
  ]
},
          argsBinds: {}
        }
    ],"ontextarea1$focus": [
      {
          key: 'wmFrXqC0C',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "handleFocus";
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
    ],"ontextarea1$blur": [
      {
          key: 'wIUYAluP6',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "handleBlur";
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
    ],"ontextarea1$change": [
      {
          key: 'wlprvzdj3q4',
          sourceKey: 'u_jian_kang_dang_an:onLiuyan_textarea_change',
          handler: handlers.onLiuyan_textarea_change,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton2$tap": [
      {
          key: 'wIGKrt7Vc',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "sendMessage";
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
  tag1: { 'range': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      [{
  "label": $comp.dataset.state.orderInfo.type,
  "value": $comp.dataset.state.orderInfo.type,
  "color": "#2196F3"
}]
    )}
  },
  text6: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.orderInfo.patientName
    )}
  },
  text8: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `${$comp.dataset.state.orderInfo.startDate} 至 ${$comp.dataset.state.orderInfo.endDate}`
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
  image1: { 'src': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.doctor.avatar
    )}
  },
  text9: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.doctor.name
    )}
  },
  text10: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.doctor.title
    )}
  },
  tag2: { 'range': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      [{
  "label": $w.item_repeater1.version,
  "value": $w.item_repeater1.version,
  "color": $w.item_repeater1.status === "active" ? "#4CAF50" : "#9E9E9E"
}]
    )}
  },
  text11: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.content
    )}
  },
  text12: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `创建时间：${$w.item_repeater1.createTime}`
    )}
  },
  text13: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `更新时间：${$w.item_repeater1.updateTime}`
    )}
  },
  repeater2: { 'data': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.messages
    )}
  },
  repeater2_item: { '_waFor': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.messages
    )}
  },
  container17: { 'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.container17.style, ...(
`flex-direction: ${$w.item_repeater2.sender === "patient" ? "row-reverse" : "row"}`
)}
    )}
  },
  image2: { 'src': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater2.sender === "patient" ? "avatar_female" : "avatar_male"
    )}
  },
  container19: { 'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.container19.style, ...(
`background-color: ${$w.item_repeater2.sender === "patient" ? "#E3F2FD" : "#F5F5F5"}`
)}
    )}
  },
  text15: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater2.content
    )}
  },
  text14: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater2.time
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.text14.style, ...(
`text-align: ${$w.item_repeater2.sender === "patient" ? "right" : "left"}`
)}
    )}
  },
  container5: { 'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.container5.style, ...(
`height: ${$comp.dataset.state.isExpanded ? "220px" : "90px"}`
)}
    )}
  },
  textarea1: { 'value': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.message
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.textarea1.style, ...(
`height: ${$comp.dataset.state.isExpanded ? "120px" : "40px"}`
)}
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
    "message": {
      "name": "message",
      "label": "",
      "varType": "state",
      "dataType": "string",
      "initialValue": "",
      "enableSyncLocal": false
    },
    "messages": {
      "name": "messages",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        {
          "id": "MSG001",
          "read": true,
          "time": "2023-07-12 15:30",
          "sender": "patient",
          "content": "请问下次复查需要做哪些准备？"
        },
        {
          "id": "MSG002",
          "read": true,
          "time": "2023-07-12 16:45",
          "sender": "doctor",
          "content": "请空腹前来，带上所有正在服用的药物。"
        }
      ]
    },
    "orderInfo": {
      "name": "orderInfo",
      "varType": "state",
      "dataType": "object",
      "initialValue": {
        "type": "上门护理",
        "gender": "男",
        "endDate": "2023-07-20",
        "orderId": "ORD20230713001",
        "startDate": "2023-07-10",
        "patientAge": 45,
        "patientName": "张伟"
      }
    },
    "isExpanded": {
      "name": "isExpanded",
      "varType": "state",
      "dataType": "boolean",
      "initialValue": false
    },
    "healthRecords": {
      "name": "healthRecords",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        {
          "id": "HR001",
          "doctor": {
            "name": "李医生",
            "title": "主治医师",
            "avatar": "avatar_male"
          },
          "status": "active",
          "content": "患者血压稳定，血糖控制良好，建议继续当前用药方案。",
          "version": "v1.0",
          "createTime": "2023-07-10 09:30",
          "updateTime": "2023-07-12 14:15"
        },
        {
          "id": "HR002",
          "doctor": {
            "name": "王护士",
            "title": "高级护士",
            "avatar": "avatar_female"
          },
          "status": "archived",
          "content": "初步评估患者身体状况，制定护理计划。",
          "version": "v0.9",
          "createTime": "2023-07-08 11:20",
          "updateTime": "2023-07-08 11:20"
        }
      ]
    }
  },
  "params": {}
};

createComponent({
  key: 'block:u_jian_kang_dang_an',
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
