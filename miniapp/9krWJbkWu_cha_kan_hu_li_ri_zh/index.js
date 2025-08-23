import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanldercreateNewLog from './lowcode/handler/createNewLog' 
import _hanlderonLiuyan_textarea_change from './lowcode/handler/onLiuyan_textarea_change' 
import _hanlderhandleFocus from './lowcode/handler/handleFocus' 
import _hanlderhandleBlur from './lowcode/handler/handleBlur' 
import _hanldersendMessage from './lowcode/handler/sendMessage' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  createNewLog: _hanldercreateNewLog, 
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
      "display": "flex",
      "alignItems": "center",
      "marginBottom": "16px",
      "flexDirection": "row"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon1": {
    "style": {
      "color": "#2d8cf0",
      "fontSize": "24px",
      "marginRight": "8px"
    },
    "classList": [],
    "name": "td:chevron-left",
    "_parentId": "container3",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text1": {
    "style": {
      "color": "#17233d",
      "display": "block",
      "fontSize": "18px"
    },
    "classList": [],
    "text": "护理日志管理",
    "level": "title-5",
    "_parentId": "container3",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "card1": {
    "style": {
      "borderRadius": "8px",
      "marginBottom": "16px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdCard"
  },
  "container5": {
    "style": {
      "display": "flex",
      "flexDirection": "row",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "card1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container6": {
    "style": {},
    "classList": [],
    "_parentId": "container5",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text2": {
    "style": {
      "color": "#808695",
      "display": "block"
    },
    "classList": [],
    "text": "订单号：HL202407141234",
    "level": "title-6",
    "_parentId": "container6",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container7": {
    "style": {
      "display": "flex",
      "marginTop": "8px",
      "flexDirection": "row"
    },
    "classList": [],
    "_parentId": "container6",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "tag1": {
    "style": {},
    "classList": [],
    "range": [
      {
        "color": "#2d8cf0",
        "label": "住院护理",
        "value": "hospital"
      }
    ],
    "_parentId": "container7",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdTag"
  },
  "tag2": {
    "style": {},
    "classList": [],
    "range": [
      {
        "color": "#ed4014",
        "label": "紧急",
        "value": "urgent"
      }
    ],
    "_parentId": "container7",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdTag"
  },
  "icon2": {
    "style": {
      "color": "#19be6b",
      "fontSize": "32px"
    },
    "classList": [],
    "name": "td:verified",
    "_parentId": "container5",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "container8": {
    "style": {
      "marginBottom": "8px"
    },
    "classList": [],
    "_parentId": "card1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text3": {
    "style": {
      "color": "#808695",
      "display": "inline-block"
    },
    "classList": [],
    "text": "患者：",
    "_parentId": "container8",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text4": {
    "style": {
      "color": "#17233d",
      "display": "inline-block",
      "marginLeft": "8px"
    },
    "classList": [],
    "text": "张伟",
    "_parentId": "container8",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container9": {
    "style": {
      "marginBottom": "8px"
    },
    "classList": [],
    "_parentId": "card1",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon3": {
    "style": {
      "color": "#2d8cf0",
      "fontSize": "16px",
      "marginRight": "4px"
    },
    "classList": [],
    "name": "td:calendar-1",
    "_parentId": "container9",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text5": {
    "style": {
      "color": "#17233d",
      "display": "inline-block"
    },
    "classList": [],
    "text": "护理时间：2024-07-15 至 2024-07-22",
    "_parentId": "container9",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container10": {
    "style": {},
    "classList": [],
    "_parentId": "card1",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon4": {
    "style": {
      "color": "#2d8cf0",
      "fontSize": "16px",
      "marginRight": "4px"
    },
    "classList": [],
    "name": "td:location",
    "_parentId": "container10",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text6": {
    "style": {
      "color": "#17233d",
      "display": "inline-block"
    },
    "classList": [],
    "text": "北京市朝阳区协和医院住院部3楼12床",
    "_parentId": "container10",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container4": {
    "style": {},
    "classList": [],
    "_parentId": "container2",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "container11": {
    "style": {
      "display": "flex",
      "marginBottom": "16px",
      "flexDirection": "row",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "container4",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text7": {
    "style": {
      "color": "#17233d",
      "display": "block"
    },
    "classList": [],
    "text": "护理记录（3条）",
    "level": "title-6",
    "_parentId": "container11",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "button1": {
    "style": {
      "color": "white",
      "padding": "8px 16px",
      "background": "#2d8cf0",
      "borderRadius": "20px"
    },
    "classList": [],
    "icon": "td:add",
    "text": "新建记录",
    "iconType": "text-with-icon",
    "_parentId": "container11",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container12": {
    "style": {},
    "classList": [],
    "_parentId": "container4",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "repeater1": {
    "style": {},
    "classList": [],
    "suffix": "repeater1",
    "forItem": "item_repeater1",
    "forIndex": "index_repeater1",
    "_parentId": "container12",
    "_order": 0,
    "widgetType": "gsd-h5-react:Repeater"
  },
  "repeater1_item": {
    "style": {},
    "classList": [],
    "_parentId": "repeater1",
    "widgetType": "gsd-h5-react:RepeaterItem"
  },
  "card2": {
    "style": {
      "borderRadius": "8px",
      "marginBottom": "12px"
    },
    "classList": [],
    "_parentId": "repeater1_item",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdCard"
  },
  "container13": {
    "style": {
      "display": "flex",
      "flexDirection": "row",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "card2",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text8": {
    "style": {
      "color": "#808695",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "container13",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text9": {
    "style": {
      "color": "inherit",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "container13",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container14": {
    "style": {
      "marginBottom": "8px"
    },
    "classList": [],
    "_parentId": "card2",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon5": {
    "style": {
      "color": "#2d8cf0",
      "fontSize": "16px",
      "marginRight": "4px"
    },
    "classList": [],
    "name": "td:user-circle",
    "_parentId": "container14",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text11": {
    "style": {
      "color": "#17233d",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "container14",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text10": {
    "style": {
      "color": "#515a6e",
      "display": "inline-block",
      "lineHeight": "1.5em"
    },
    "classList": [],
    "_parentId": "card2",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container15": {
    "style": {
      "marginBottom": "24px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 3,
    "widgetType": "gsd-h5-react:Container"
  },
  "repeater2": {
    "style": {},
    "classList": [],
    "suffix": "repeater2",
    "forItem": "item_repeater2",
    "forIndex": "index_repeater2",
    "_parentId": "container15",
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
  "image1": {
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
  "text13": {
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
  "text12": {
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
  "container20": {
    "style": {
      "height": "100px"
    },
    "classList": [],
    "data": {},
    "_parentId": "container2",
    "_order": 4,
    "widgetType": "gsd-h5-react:Container"
  },
  "container21": {
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
    "_order": 5,
    "widgetType": "gsd-h5-react:Container"
  },
  "container22": {
    "style": {
      "gap": "8px",
      "display": "flex",
      "alignItems": "flex-end"
    },
    "classList": [],
    "_parentId": "container21",
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
    "_parentId": "container22",
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
    "_parentId": "container22",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  }
}





const evtListeners = {"onbutton1$tap": [
      {
          key: 'wBMHaG9go',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "createNewLog";
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
    ],"oncard2$tap": [
      {
          key: 'wgoyy7gcanc',
          sourceKey: 'platform:navigateTo',
          handler: function({args}){ return $app.navigateTo(...args)},
          args: {
  "params": [
    {
      "mode": "weDa",
      "pageId": "u_hu_li_ri_zhi_xiang_",
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
          sourceKey: '9krWJbkWu_cha_kan_hu_li_ri_zh:onLiuyan_textarea_change',
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
  repeater1: { 'data': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.logs
    )}
  },
  repeater1_item: { '_waFor': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.logs
    )}
  },
  text8: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.date
    )}
  },
  text9: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.status === "completed" ? "已完成" : "进行中"
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.text9.style, ...(
`color: ${$w.item_repeater1.status === "completed" ? "#19be6b" : "#2d8cf0"}`
)}
    )}
  },
  text11: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.nurse
    )}
  },
  text10: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.content
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
`flex-direction: ${$w.item_repeater2.sender === "doctor" ? "row-reverse" : "row"}`
)}
    )}
  },
  image1: { 'src': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater2.sender === "patient" ? "avatar_female" : "avatar_male"
    )}
  },
  container19: { 'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.container19.style, ...(
`background-color: ${$w.item_repeater2.sender === "patient" ? "#E3F2FD" : "#F5F5F5"}`
)}
    )}
  },
  text13: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater2.content
    )}
  },
  text12: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater2.time
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.text12.style, ...(
`text-align: ${$w.item_repeater2.sender === "patient" ? "right" : "left"}`
)}
    )}
  },
  container21: { 'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.container21.style, ...(
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
    "logs": {
      "name": "logs",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        {
          "date": "2024-07-15 09:00",
          "nurse": "李护士",
          "status": "completed",
          "content": "测量生命体征：血压120/80mmHg，心率78次/分，体温36.5℃"
        },
        {
          "date": "2024-07-15 14:30",
          "nurse": "王护士",
          "status": "in-progress",
          "content": "伤口换药护理，观察愈合情况良好"
        },
        {
          "date": "2024-07-16 10:00",
          "nurse": "张护士",
          "status": "pending",
          "content": "静脉输液护理，患者无不良反应"
        }
      ]
    },
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
        "type": "hospital",
        "nurse": "王丽娟",
        "address": "北京市朝阳区协和医院住院部3楼12床",
        "orderNo": "HL202407141234",
        "patient": "张伟",
        "duration": "2024-07-15 至 2024-07-22"
      }
    },
    "isExpanded": {
      "name": "isExpanded",
      "varType": "state",
      "dataType": "boolean",
      "initialValue": false
    }
  },
  "params": {}
};

createComponent({
  key: 'block:9krWJbkWu_cha_kan_hu_li_ri_zh',
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
