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
      "boxShadow": "0 2px 8px rgba(0,0,0,0.1)",
      "marginBottom": "24px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdCard"
  },
  "container3": {
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
      "color": "#2ba471",
      "fontSize": "24px"
    },
    "classList": [],
    "name": "td:verified",
    "_parentId": "container3",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text1": {
    "style": {
      "color": "#2d3748",
      "display": "block"
    },
    "classList": [],
    "text": "当前护理订单",
    "level": "title-5",
    "_parentId": "container3",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container4": {
    "style": {
      "gap": "12px",
      "display": "grid"
    },
    "classList": [],
    "_parentId": "card1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container5": {
    "style": {
      "gap": "8px",
      "display": "flex",
      "alignItems": "center"
    },
    "classList": [],
    "_parentId": "container4",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "tag1": {
    "style": {
      "display": "inline-flex",
      "--wd-tag-font-size-md": "14px"
    },
    "classList": [],
    "_parentId": "container5",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdTag"
  },
  "text2": {
    "style": {
      "color": "#718096",
      "width": "80px",
      "display": "inline-block"
    },
    "classList": [],
    "text": "服务类型",
    "_parentId": "container5",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text3": {
    "style": {
      "color": "#2d3748",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "container5",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container6": {
    "style": {
      "gap": "8px",
      "display": "flex",
      "alignItems": "center"
    },
    "classList": [],
    "_parentId": "container4",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon2": {
    "style": {
      "color": "#718096",
      "fontSize": "20px"
    },
    "classList": [],
    "name": "td:user-circle",
    "_parentId": "container6",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text4": {
    "style": {
      "color": "#718096",
      "width": "80px",
      "display": "inline-block"
    },
    "classList": [],
    "text": "患者姓名",
    "_parentId": "container6",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text5": {
    "style": {
      "color": "#2d3748",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "container6",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container7": {
    "style": {
      "gap": "8px",
      "display": "flex",
      "alignItems": "center"
    },
    "classList": [],
    "_parentId": "container4",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon3": {
    "style": {
      "color": "#718096",
      "fontSize": "20px"
    },
    "classList": [],
    "name": "td:calendar-1",
    "_parentId": "container7",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text6": {
    "style": {
      "color": "#718096",
      "width": "80px",
      "display": "inline-block"
    },
    "classList": [],
    "text": "服务时间",
    "_parentId": "container7",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text7": {
    "style": {
      "color": "#2d3748",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "container7",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdText"
  },
  "card2": {
    "style": {
      "boxShadow": "0 2px 8px rgba(0,0,0,0.1)"
    },
    "classList": [],
    "showFooter": true,
    "_parentId": "container2",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdCard"
  },
  "container8": {
    "style": {
      "gap": "12px",
      "display": "flex",
      "alignItems": "center"
    },
    "classList": [],
    "_parentId": "card2",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon4": {
    "style": {
      "color": "#4299e1",
      "fontSize": "24px"
    },
    "classList": [],
    "name": "td:edit-1",
    "_parentId": "container8",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text8": {
    "style": {
      "color": "#2d3748",
      "display": "block"
    },
    "classList": [],
    "text": "护理记录",
    "level": "title-5",
    "_parentId": "container8",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "scrollView1": {
    "style": {
      "height": "560px"
    },
    "classList": [],
    "scrollY": true,
    "_parentId": "card2",
    "_order": 0,
    "widgetType": "gsd-h5-react:ScrollView"
  },
  "container9": {
    "style": {
      "gap": "16px",
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
    "_parentId": "container9",
    "_order": 0,
    "widgetType": "gsd-h5-react:Repeater"
  },
  "repeater1_item": {
    "style": {},
    "classList": [],
    "_parentId": "repeater1",
    "widgetType": "gsd-h5-react:RepeaterItem"
  },
  "card3": {
    "style": {
      "borderRadius": "8px",
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "showHeader": false,
    "_parentId": "repeater1_item",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdCard"
  },
  "container10": {
    "style": {
      "gap": "16px",
      "display": "flex"
    },
    "classList": [],
    "_parentId": "card3",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container11": {
    "style": {
      "width": "80px",
      "position": "relative"
    },
    "classList": [],
    "_parentId": "container10",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text9": {
    "style": {
      "color": "#718096",
      "display": "inline-block"
    },
    "classList": [],
    "level": "body-sm",
    "_parentId": "container11",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container13": {
    "style": {
      "top": "28px",
      "left": "24px",
      "width": "2px",
      "bottom": "0",
      "position": "absolute",
      "backgroundColor": "#e2e8f0"
    },
    "classList": [],
    "_parentId": "container11",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "container12": {
    "style": {
      "flex": "1"
    },
    "classList": [],
    "_parentId": "container10",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text10": {
    "style": {
      "color": "#2d3748",
      "display": "inline-block",
      "marginBottom": "8px"
    },
    "classList": [],
    "_parentId": "container12",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container14": {
    "style": {
      "padding": "8px",
      "borderRadius": "4px",
      "marginBottom": "8px",
      "backgroundColor": "#f7fafc"
    },
    "classList": [],
    "_parentId": "container12",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text11": {
    "style": {
      "color": "#718096",
      "display": "inline-block"
    },
    "classList": [],
    "level": "body-sm",
    "_parentId": "container14",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container15": {
    "style": {
      "gap": "4px",
      "display": "flex",
      "alignItems": "center",
      "marginBottom": "4px"
    },
    "classList": [],
    "_parentId": "container12",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon5": {
    "style": {
      "color": "#48bb78",
      "fontSize": "16px"
    },
    "classList": [],
    "name": "td:error-circle-filled",
    "_parentId": "container15",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text12": {
    "style": {
      "color": "#48bb78",
      "display": "inline-block"
    },
    "classList": [],
    "level": "body-sm",
    "_parentId": "container15",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container16": {
    "style": {
      "gap": "4px",
      "display": "flex",
      "alignItems": "center"
    },
    "classList": [],
    "_parentId": "container12",
    "_order": 3,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon6": {
    "style": {
      "color": "#4299e1",
      "fontSize": "16px"
    },
    "classList": [],
    "name": "td:chat-bubble-1",
    "_parentId": "container16",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text13": {
    "style": {
      "color": "#4299e1",
      "display": "inline-block"
    },
    "classList": [],
    "level": "body-sm",
    "_parentId": "container16",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container17": {
    "style": {
      "marginBottom": "24px"
    },
    "classList": [],
    "_parentId": "card2",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "repeater2": {
    "style": {},
    "classList": [],
    "suffix": "repeater2",
    "forItem": "item_repeater2",
    "forIndex": "index_repeater2",
    "_parentId": "container17",
    "_order": 0,
    "widgetType": "gsd-h5-react:Repeater"
  },
  "repeater2_item": {
    "style": {},
    "classList": [],
    "_parentId": "repeater2",
    "widgetType": "gsd-h5-react:RepeaterItem"
  },
  "container18": {
    "style": {
      "marginBottom": "12px"
    },
    "classList": [],
    "_parentId": "repeater2_item",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container19": {
    "style": {
      "display": "flex",
      "alignItems": "flex-start"
    },
    "classList": [],
    "_parentId": "container18",
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
    "_parentId": "container19",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdImage"
  },
  "container20": {
    "style": {
      "maxWidth": "70%"
    },
    "classList": [],
    "_parentId": "container19",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "container21": {
    "style": {
      "padding": "8px 12px",
      "borderRadius": "12px",
      "marginBottom": "4px"
    },
    "classList": [],
    "_parentId": "container20",
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
    "_parentId": "container21",
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
    "_parentId": "container20",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container24": {
    "style": {
      "height": "100px"
    },
    "classList": [],
    "data": {},
    "_parentId": "card2",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "container22": {
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
    "_parentId": "card2",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "container23": {
    "style": {
      "gap": "8px",
      "display": "flex",
      "alignItems": "flex-end"
    },
    "classList": [],
    "_parentId": "container22",
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
    "_parentId": "container23",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdTextarea"
  },
  "button1": {
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
    "_parentId": "container23",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  }
}





const evtListeners = {"oncard3$tap": [
      {
          key: 'wch3c51evdq',
          sourceKey: 'platform:navigateTo',
          handler: function({args}){ return $app.navigateTo(...args)},
          args: {
  "params": [
    {
      "mode": "weDa",
      "pageId": "u_hu_li_ri_zhi_xiang_",
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
          sourceKey: 'u_hu_li_ri_zhi:onLiuyan_textarea_change',
          handler: handlers.onLiuyan_textarea_change,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton1$tap": [
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
  "label": $comp.dataset.state.orderInfo.orderType === "hospital" ? "住院护理" : $comp.dataset.state.orderInfo.orderType === "home" ? "上门护理" : $comp.dataset.state.orderInfo.orderType === "accompany" ? "医院陪诊" : "月嫂上门",
  "value": "type",
  "color": $comp.dataset.state.orderInfo.orderType === "hospital" ? "#2ba471" : "#4299e1"
}]
    )}
  },
  text3: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.orderInfo.orderType === "hospital" ? "住院护理" : "上门护理"
    )}
  },
  text5: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.orderInfo.patientName
    )}
  },
  text7: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.orderInfo.serviceTime
    )}
  },
  repeater1: { 'data': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.logs
    )}
  },
  repeater1_item: { '_waFor': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.logs
    )}
  },
  text9: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.time
    )}
  },
  text10: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.content
    )}
  },
  container14: { '_waIf': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.vitalSigns
    )}
  },
  text11: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `生命体征：${$w.item_repeater1.vitalSigns}`
    )}
  },
  container15: { '_waIf': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.medication
    )}
  },
  text12: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.medication
    )}
  },
  container16: { '_waIf': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.remarks
    )}
  },
  text13: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.remarks
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
  container19: { 'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.container19.style, ...(
`flex-direction: ${$w.item_repeater2.sender === "patient" ? "row-reverse" : "row"}`
)}
    )}
  },
  image1: { 'src': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater2.sender === "patient" ? "avatar_female" : "avatar_male"
    )}
  },
  container21: { 'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.container21.style, ...(
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
  container22: { 'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.container22.style, ...(
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
          "time": "09:30",
          "content": "完成静脉输液，患者无不良反应",
          "vitalSigns": "血压 120/80mmHg，心率 78次/分"
        },
        {
          "time": "11:15",
          "content": "协助患者进行术后康复训练",
          "medication": "口服止痛片1粒"
        },
        {
          "time": "14:00",
          "content": "更换伤口敷料，伤口愈合情况良好",
          "remarks": "患者主诉轻微疼痛，已记录"
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
        "contact": "138-1234-5678",
        "nurseName": "李护士长",
        "orderType": "hospital",
        "patientName": "王美丽",
        "serviceTime": "2025-07-15 09:00"
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
  key: 'block:u_hu_li_ri_zhi',
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
