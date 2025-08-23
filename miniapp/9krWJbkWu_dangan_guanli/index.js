import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanlderaddHealthRecord from './lowcode/handler/addHealthRecord' 
import _hanlderonLiuyan_textarea_change from './lowcode/handler/onLiuyan_textarea_change' 
import _hanlderhandleFocus from './lowcode/handler/handleFocus' 
import _hanlderhandleBlur from './lowcode/handler/handleBlur' 
import _hanldersendMessage from './lowcode/handler/sendMessage' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  addHealthRecord: _hanlderaddHealthRecord, 
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
    "style": {},
    "classList": [],
    "_parentId": "container2",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdCard"
  },
  "container7": {
    "style": {
      "gap": "12px",
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
      "color": "#4a6bdf",
      "fontSize": "24px"
    },
    "classList": [],
    "name": "td:user-circle",
    "_parentId": "container7",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text1": {
    "style": {
      "color": "inherit",
      "display": "block"
    },
    "classList": [],
    "text": "患者基本信息",
    "level": "title-5",
    "_parentId": "container7",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container8": {
    "style": {
      "gap": "12px",
      "display": "grid",
      "gridTemplateColumns": "1fr 1fr"
    },
    "classList": [],
    "_parentId": "card1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container9": {
    "style": {},
    "classList": [],
    "_parentId": "container8",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text2": {
    "style": {
      "color": "inherit",
      "display": "inline-block"
    },
    "classList": [],
    "text": "姓名:",
    "level": "body-sm",
    "_parentId": "container9",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text3": {
    "style": {
      "color": "inherit",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "container9",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container10": {
    "style": {},
    "classList": [],
    "_parentId": "container8",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text4": {
    "style": {
      "color": "inherit",
      "display": "inline-block"
    },
    "classList": [],
    "text": "年龄:",
    "level": "body-sm",
    "_parentId": "container10",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text5": {
    "style": {
      "color": "inherit",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "container10",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container11": {
    "style": {},
    "classList": [],
    "_parentId": "container8",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "text6": {
    "style": {
      "color": "inherit",
      "display": "inline-block"
    },
    "classList": [],
    "text": "性别:",
    "level": "body-sm",
    "_parentId": "container11",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text7": {
    "style": {
      "color": "inherit",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "container11",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container3": {
    "style": {
      "gap": "8px",
      "marginBottom": "16px"
    },
    "classList": [],
    "_parentId": "container8",
    "_order": 3,
    "widgetType": "gsd-h5-react:Container"
  },
  "tag1": {
    "style": {
      "display": "inline-flex",
      "--wd-tag-font-size-md": "14px"
    },
    "classList": [],
    "range": [
      {
        "color": "#4a6bdf",
        "label": "住院护理",
        "value": "住院护理",
        "__sortid__": "bXibTJuk9s3NyZ5Rqum2a"
      }
    ],
    "tagStyleType": "light",
    "tagStyleWidthCols": 4,
    "_parentId": "container3",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdTag"
  },
  "container12": {
    "style": {},
    "classList": [],
    "_parentId": "container8",
    "_order": 4,
    "widgetType": "gsd-h5-react:Container"
  },
  "text8": {
    "style": {
      "color": "inherit",
      "display": "inline-block"
    },
    "classList": [],
    "text": "联系方式:",
    "level": "body-sm",
    "_parentId": "container12",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text9": {
    "style": {
      "color": "inherit",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "container12",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container13": {
    "style": {},
    "classList": [],
    "_parentId": "container8",
    "_order": 5,
    "widgetType": "gsd-h5-react:Container"
  },
  "text10": {
    "style": {
      "color": "inherit",
      "display": "inline-block"
    },
    "classList": [],
    "text": "紧急联系人:",
    "level": "body-sm",
    "_parentId": "container13",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text11": {
    "style": {
      "color": "inherit",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "container13",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container4": {
    "style": {
      "marginTop": "24px",
      "marginBottom": "16px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "container14": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "container4",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text12": {
    "style": {
      "color": "inherit",
      "display": "block"
    },
    "classList": [],
    "text": "健康档案",
    "level": "title-5",
    "_parentId": "container14",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "button1": {
    "style": {},
    "classList": [],
    "icon": "td:add",
    "text": "新建档案",
    "iconType": "text-with-icon",
    "_parentId": "container14",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container5": {
    "style": {
      "gap": "12px",
      "display": "grid"
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
    "_parentId": "container5",
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
    "style": {},
    "classList": [],
    "_parentId": "repeater1_item",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdCard"
  },
  "container15": {
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
  "text13": {
    "style": {
      "color": "inherit",
      "display": "block"
    },
    "classList": [],
    "level": "title-6",
    "_parentId": "container15",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text14": {
    "style": {
      "color": "inherit",
      "display": "inline-block"
    },
    "classList": [],
    "level": "body-sm",
    "_parentId": "container15",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container16": {
    "style": {},
    "classList": [],
    "_parentId": "card2",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text15": {
    "style": {
      "color": "inherit",
      "display": "inline-block"
    },
    "classList": [],
    "text": "主治医生:",
    "level": "body-sm",
    "_parentId": "container16",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text16": {
    "style": {
      "color": "inherit",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "container16",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container17": {
    "style": {
      "marginTop": "8px"
    },
    "classList": [],
    "_parentId": "card2",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text17": {
    "style": {
      "color": "inherit",
      "display": "inline-block"
    },
    "classList": [],
    "text": "摘要:",
    "level": "body-sm",
    "_parentId": "container17",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text18": {
    "style": {
      "color": "inherit",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "container17",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container6": {
    "style": {
      "marginTop": "24px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 3,
    "widgetType": "gsd-h5-react:Container"
  },
  "text19": {
    "style": {
      "color": "inherit",
      "display": "block"
    },
    "classList": [],
    "text": "留言沟通",
    "level": "title-5",
    "_parentId": "container6",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container18": {
    "style": {
      "marginBottom": "24px"
    },
    "classList": [],
    "_parentId": "container6",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "repeater2": {
    "style": {},
    "classList": [],
    "suffix": "repeater2",
    "forItem": "item_repeater2",
    "forIndex": "index_repeater2",
    "_parentId": "container18",
    "_order": 0,
    "widgetType": "gsd-h5-react:Repeater"
  },
  "repeater2_item": {
    "style": {},
    "classList": [],
    "_parentId": "repeater2",
    "widgetType": "gsd-h5-react:RepeaterItem"
  },
  "container19": {
    "style": {
      "marginBottom": "12px"
    },
    "classList": [],
    "_parentId": "repeater2_item",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container20": {
    "style": {
      "display": "flex",
      "alignItems": "flex-start"
    },
    "classList": [],
    "_parentId": "container19",
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
    "_parentId": "container20",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdImage"
  },
  "container21": {
    "style": {
      "maxWidth": "70%"
    },
    "classList": [],
    "_parentId": "container20",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "container22": {
    "style": {
      "padding": "8px 12px",
      "borderRadius": "12px",
      "marginBottom": "4px"
    },
    "classList": [],
    "_parentId": "container21",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text21": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "lineHeight": "1.5em"
    },
    "classList": [],
    "_parentId": "container22",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text20": {
    "style": {
      "color": "#9E9E9E",
      "display": "inline-block",
      "fontSize": "12px"
    },
    "classList": [],
    "_parentId": "container21",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container25": {
    "style": {
      "height": "100px"
    },
    "classList": [],
    "data": {},
    "_parentId": "container6",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "container23": {
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
    "_parentId": "container6",
    "_order": 3,
    "widgetType": "gsd-h5-react:Container"
  },
  "container24": {
    "style": {
      "gap": "8px",
      "display": "flex",
      "alignItems": "flex-end"
    },
    "classList": [],
    "_parentId": "container23",
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
    "_parentId": "container24",
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
    "_parentId": "container24",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  }
}





const evtListeners = {"onbutton1$tap": [
      {
          key: 'wQzXNs8ig',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "addHealthRecord";
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
          key: 'wlik696pqcv',
          sourceKey: 'platform:navigateTo',
          handler: function({args}){ return $app.navigateTo(...args)},
          args: {
  "params": [
    {
      "mode": "weDa",
      "pageId": "u_dang_an_xiangqing",
      "params": {},
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
          sourceKey: '9krWJbkWu_dangan_guanli:onLiuyan_textarea_change',
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
  text3: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.orderInfo.patientName
    )}
  },
  text5: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.orderInfo.patientAge
    )}
  },
  text7: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.orderInfo.gender
    )}
  },
  text9: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.orderInfo.contact
    )}
  },
  text11: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.orderInfo.emergencyContact
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
  text13: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.version
    )}
  },
  text14: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.date
    )}
  },
  text16: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.doctor
    )}
  },
  text18: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.summary
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
  container20: { 'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.container20.style, ...(
`flex-direction: ${$w.item_repeater2.sender === "doctor" ? "row-reverse" : "row"}`
)}
    )}
  },
  image1: { 'src': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater2.sender === "patient" ? "avatar_female" : "avatar_male"
    )}
  },
  container22: { 'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.container22.style, ...(
`background-color: ${$w.item_repeater2.sender === "patient" ? "#E3F2FD" : "#F5F5F5"}`
)}
    )}
  },
  text21: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater2.content
    )}
  },
  text20: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater2.time
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.text20.style, ...(
`text-align: ${$w.item_repeater2.sender === "patient" ? "right" : "left"}`
)}
    )}
  },
  container23: { 'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.container23.style, ...(
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
    "newReply": {
      "name": "newReply",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "orderInfo": {
      "name": "orderInfo",
      "varType": "state",
      "dataType": "object",
      "initialValue": {
        "gender": "男",
        "address": "北京市朝阳区建国路88号",
        "contact": "13800138000",
        "patientAge": 45,
        "patientName": "张伟",
        "emergencyContact": "李娜 (妻子) 13900139000"
      }
    },
    "orderType": {
      "name": "orderType",
      "varType": "state",
      "dataType": "string",
      "initialValue": "住院护理"
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
          "date": "2023-10-15",
          "doctor": "王医生",
          "summary": "初步体检报告，血压偏高，建议低盐饮食",
          "version": "v1.0"
        },
        {
          "date": "2023-11-20",
          "doctor": "李医生",
          "summary": "复查报告，血压控制良好，继续当前治疗方案",
          "version": "v2.0"
        }
      ]
    }
  },
  "params": {}
};

createComponent({
  key: 'block:9krWJbkWu_dangan_guanli',
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
