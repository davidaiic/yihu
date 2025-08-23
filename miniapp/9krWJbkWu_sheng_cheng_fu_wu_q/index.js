import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanldergenerateCode from './lowcode/handler/generateCode' 
import _hanldercopyToClipboard from './lowcode/handler/copyToClipboard' 
import _hanlderloadMore from './lowcode/handler/loadMore' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  generateCode: _hanldergenerateCode, 
  copyToClipboard: _hanldercopyToClipboard, 
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
      "padding": "16px",
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
      "marginBottom": "24px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "button1": {
    "style": {
      "color": "#2d8cf0",
      "fontSize": "20px",
      "minHeight": "initial",
      "paddingRight": "12px"
    },
    "classList": [],
    "icon": "td:chevron-left",
    "variant": "text",
    "iconType": "icon-only",
    "_parentId": "container3",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "text1": {
    "style": {
      "color": "#1a1a1a",
      "display": "block",
      "fontWeight": "600"
    },
    "classList": [],
    "text": "服务确认码管理",
    "level": "title-5",
    "_parentId": "container3",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "scrollView1": {
    "style": {
      "height": "calc(100vh - 120px)"
    },
    "classList": [],
    "scrollY": true,
    "_parentId": "container2",
    "_order": 1,
    "widgetType": "gsd-h5-react:ScrollView"
  },
  "repeater1": {
    "style": {},
    "classList": [],
    "suffix": "repeater1",
    "forItem": "item_repeater1",
    "forIndex": "index_repeater1",
    "_parentId": "scrollView1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Repeater"
  },
  "repeater1_item": {
    "style": {},
    "classList": [],
    "_parentId": "repeater1",
    "widgetType": "gsd-h5-react:RepeaterItem"
  },
  "card1": {
    "style": {
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "borderRadius": "8px",
      "marginBottom": "12px"
    },
    "classList": [],
    "showHeader": false,
    "_parentId": "repeater1_item",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdCard"
  },
  "container5": {
    "style": {
      "display": "flex",
      "padding": "16px",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "card1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container6": {
    "style": {
      "flex": "1"
    },
    "classList": [],
    "_parentId": "container5",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container9": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "marginBottom": "8px"
    },
    "classList": [],
    "_parentId": "container6",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "image1": {
    "style": {
      "width": "32px",
      "height": "32px",
      "marginRight": "8px",
      "borderRadius": "16px"
    },
    "classList": [],
    "fit": "cover",
    "_parentId": "container9",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdImage"
  },
  "text4": {
    "style": {
      "color": "#333",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "_parentId": "container9",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text2": {
    "style": {
      "color": "#666",
      "display": "inline-block",
      "fontSize": "12px",
      "marginBottom": "4px"
    },
    "classList": [],
    "_parentId": "container6",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text3": {
    "style": {
      "color": "#999",
      "display": "inline-block",
      "fontSize": "12px"
    },
    "classList": [],
    "_parentId": "container6",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container7": {
    "style": {
      "display": "flex",
      "alignItems": "flex-end",
      "marginLeft": "16px",
      "flexDirection": "column"
    },
    "classList": [],
    "_parentId": "container5",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "container10": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "marginBottom": "8px"
    },
    "classList": [],
    "_parentId": "container7",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text5": {
    "style": {
      "color": "#2d8cf0",
      "display": "inline-block",
      "fontSize": "18px",
      "fontFamily": "monospace",
      "marginRight": "8px"
    },
    "classList": [],
    "_parentId": "container10",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "button2": {
    "style": {
      "color": "#2d8cf0",
      "fontSize": "16px",
      "minHeight": "initial"
    },
    "classList": [],
    "icon": "td:copy",
    "variant": "text",
    "iconType": "icon-only",
    "_parentId": "container10",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container11": {
    "style": {
      "gap": "8px",
      "display": "flex"
    },
    "classList": [],
    "_parentId": "container7",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "button3": {
    "style": {
      "padding": "4px 8px",
      "fontSize": "12px"
    },
    "classList": [],
    "_parentId": "container11",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button4": {
    "style": {
      "color": "#ff4d4f",
      "fontSize": "16px",
      "minHeight": "initial"
    },
    "classList": [],
    "icon": "td:close",
    "variant": "text",
    "iconType": "icon-only",
    "_parentId": "container11",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container8": {
    "style": {
      "top": "12px",
      "right": "12px",
      "position": "absolute"
    },
    "classList": [],
    "_parentId": "container5",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "text6": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "padding": "2px 8px",
      "fontSize": "12px",
      "borderRadius": "4px"
    },
    "classList": [],
    "maxLines": "1",
    "_parentId": "container8",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container4": {
    "style": {
      "padding": "16px 0",
      "textAlign": "center"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "button5": {
    "style": {
      "color": "#2d8cf0",
      "fontSize": "14px"
    },
    "classList": [],
    "text": "加载更多",
    "_parentId": "container4",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  }
}





const evtListeners = {"onbutton1$tap": [
      {
          key: 'w3vW3ONbP',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "$w.app.navigateBack";
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
    ],"onbutton2$tap": [
      {
          key: 'wgDp6QGtK',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "copyToClipboard";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        code: $w.item_repeater1.code,
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
          key: 'wWP8cronX',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "generateCode";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        id: $w.item_repeater1.id
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
          key: 'wFIpqRaJ9',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "loadMore";
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
      $comp.dataset.state.codeList
    )}
  },
  repeater1_item: { '_waFor': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.codeList
    )}
  },
  image1: { 'src': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.avatar
    )}
  },
  text4: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.requester
    )}
  },
  text2: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.reason
    )}
  },
  text3: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.time
    )}
  },
  text5: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.code
    )}
  },
  button3: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.code === "待生成" ? "生成" : "重新生成"
    )},'_waDisplay': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.code === "待生成"
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ((display)=>{ const style = {...widgetProps.button3.style, ...(
`background: ${$w.item_repeater1.code === "生成" ? "#2d8cf0" : "#f5f7fa"}; color: ${$w.item_repeater1.code === "生成" ? "#fff" : "#2d8cf0"}`
)}; if(!display) {style.display = "none"}; return style })((()=>{const $for = forItems; const $index=lists?.[0]?.currentIndex;
 return (
$w.item_repeater1.code === "待生成"
)})())
    )}
  },
  button4: { '_waDisplay': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.code !== "已拒绝"
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ((display)=>{ const style = {...widgetProps.button4.style}; if(!display) {style.display = "none"}; return style })((
$w.item_repeater1.code !== "已拒绝"
))
    )}
  },
  text6: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.status === "approved" ? "已批准" : $w.item_repeater1.status === "pending" ? "待处理" : "已拒绝"
    )},'_waDisplay': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      false
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ((display)=>{ const style = {...widgetProps.text6.style, ...(
`background: ${{
  "approved": "#f6ffed",
  "pending": "#fffbe6",
  "rejected": "#fff1f0"
}[$w.item_repeater1.status]}; color: ${{
  "approved": "#52c41a",
  "pending": "#faad14",
  "rejected": "#ff4d4f"
}[$w.item_repeater1.status]}`
)}; if(!display) {style.display = "none"}; return style })((()=>{const $for = forItems; const $index=lists?.[0]?.currentIndex;
 return (
false
)})())
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
    "codeList": {
      "name": "codeList",
      "label": "",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        {
          "id": "SC001",
          "code": "已拒绝",
          "time": "2024-02-20 14:30",
          "avatar": "avatar_male",
          "reason": "上门开始服务打卡",
          "status": "rejected",
          "requester": "张伟"
        },
        {
          "id": "SC002",
          "code": "待生成",
          "time": "2024-02-20 15:15",
          "avatar": "avatar_female",
          "reason": "收工打卡",
          "status": "pending",
          "requester": "李娜"
        },
        {
          "id": "SC003",
          "code": "7691",
          "time": "2024-02-20 16:00",
          "avatar": "avatar_male",
          "reason": "开始订单服务",
          "status": "approved",
          "requester": "王强"
        }
      ],
      "enableSyncLocal": false
    }
  },
  "params": {}
};

createComponent({
  key: 'block:9krWJbkWu_sheng_cheng_fu_wu_q',
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
