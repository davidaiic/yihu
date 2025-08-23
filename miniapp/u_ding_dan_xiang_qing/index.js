import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanlderhandleAction from './lowcode/handler/handleAction' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  handleAction: _hanlderhandleAction, 
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
      "background": "#F5F7FA"
    },
    "classList": [],
    "_parentId": "container1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container3": {
    "style": {
      "marginBottom": "24px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text1": {
    "style": {
      "color": "#1A1A1A",
      "display": "block",
      "fontSize": "20px"
    },
    "classList": [],
    "text": "共享订单管理",
    "level": "title-4",
    "_parentId": "container3",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text2": {
    "style": {
      "color": "#666",
      "display": "inline-block",
      "marginTop": "8px"
    },
    "classList": [],
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
    "_parentId": "container2",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "repeater1": {
    "style": {},
    "classList": [],
    "suffix": "repeater1",
    "forItem": "item_repeater1",
    "forIndex": "index_repeater1",
    "_parentId": "container4",
    "_order": 0,
    "widgetType": "gsd-h5-react:Repeater"
  },
  "repeater1_item": {
    "style": {},
    "classList": [],
    "_parentId": "repeater1",
    "widgetType": "gsd-h5-react:RepeaterItem"
  },
  "container5": {
    "style": {
      "padding": "16px",
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "background": "white",
      "borderRadius": "12px"
    },
    "classList": [],
    "_parentId": "repeater1_item",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container6": {
    "style": {
      "display": "flex",
      "marginBottom": "12px",
      "flexDirection": "row",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "container5",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container9": {
    "style": {
      "gap": "8px",
      "display": "flex",
      "flexDirection": "row"
    },
    "classList": [],
    "_parentId": "container6",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "tag1": {
    "style": {
      "--wd-tag-font-size-md": "14px"
    },
    "classList": [],
    "_parentId": "container9",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdTag"
  },
  "tag2": {
    "style": {
      "--wd-tag-font-size-md": "14px"
    },
    "classList": [],
    "_parentId": "container9",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdTag"
  },
  "icon1": {
    "style": {
      "color": "#666",
      "fontSize": "20px"
    },
    "classList": [],
    "name": "td:share",
    "_parentId": "container6",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "container7": {
    "style": {
      "gap": "8px"
    },
    "classList": [],
    "_parentId": "container5",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "container10": {
    "style": {
      "gap": "12px",
      "display": "flex",
      "flexDirection": "row"
    },
    "classList": [],
    "_parentId": "container7",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "image1": {
    "style": {
      "width": "48px",
      "height": "48px",
      "borderRadius": "24px"
    },
    "classList": [],
    "fit": "cover",
    "_parentId": "container10",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdImage"
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
  "text3": {
    "style": {
      "color": "#333",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "container12",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text4": {
    "style": {
      "color": "#666",
      "display": "inline-block",
      "marginTop": "4px"
    },
    "classList": [],
    "_parentId": "container12",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container11": {
    "style": {
      "borderTop": "1px solid #EEE",
      "marginTop": "12px",
      "paddingTop": "12px"
    },
    "classList": [],
    "_parentId": "container7",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text5": {
    "style": {
      "color": "#666",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "container11",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text6": {
    "style": {
      "color": "#666",
      "display": "inline-block",
      "marginTop": "8px"
    },
    "classList": [],
    "_parentId": "container11",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container8": {
    "style": {
      "gap": "8px",
      "display": "flex",
      "marginTop": "16px",
      "flexDirection": "row",
      "justifyContent": "flex-end"
    },
    "classList": [],
    "_parentId": "container5",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "button1": {
    "style": {
      "color": "white",
      "padding": "8px 16px",
      "background": "#4A90E2",
      "borderRadius": "6px"
    },
    "classList": [],
    "text": "接受",
    "_parentId": "container8",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button2": {
    "style": {
      "color": "#F5A623",
      "padding": "8px 16px",
      "borderColor": "#F5A623",
      "borderRadius": "6px"
    },
    "classList": [],
    "text": "拒绝",
    "variant": "outline",
    "_parentId": "container8",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button3": {
    "style": {
      "color": "#666",
      "padding": "8px 16px"
    },
    "classList": [],
    "text": "取消共享",
    "variant": "text",
    "_parentId": "container8",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdButton"
  }
}





const evtListeners = {"onbutton1$tap": [
      {
          key: 'wgbcemDdU',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "handleAction";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        id: $w.item_repeater1.id,
        action: "accept"
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
          key: 'wnknOKLfR',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "handleAction";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        id: $w.item_repeater1.id,
        action: "reject"
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
          key: 'wN4pjvSIE',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "handleAction";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        id: $w.item_repeater1.id,
        action: "cancel"
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
  text2: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `共${$comp.dataset.state.orders.length}条共享订单`
    )}
  },
  repeater1: { 'data': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.orders
    )}
  },
  repeater1_item: { '_waFor': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.orders
    )}
  },
  tag1: { 'range': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      [{
  "label": ["住院护理", "上门护理", "医院陪诊", "月嫂上门"][["hospital", "home", "clinic", "maternity"].indexOf($w.item_repeater1.type)],
  "value": "",
  "color": ["#4A90E2", "#50B97A", "#F5A623", "#BD10E0"][["hospital", "home", "clinic", "maternity"].indexOf($w.item_repeater1.type)]
}]
    )}
  },
  tag2: { 'range': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      [{
  "label": {
    "pending": "待接受",
    "accepted": "进行中",
    "completed": "已完成"
  }[$w.item_repeater1.status],
  "value": "",
  "color": {
    "pending": "#F5A623",
    "accepted": "#4A90E2",
    "completed": "#50B97A"
  }[$w.item_repeater1.status]
}]
    )}
  },
  icon1: { '_waIf': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.shared
    )}
  },
  image1: { 'src': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ["silhouette_female", "silhouette_male"][$w.index_repeater1 % 2]
    )}
  },
  text3: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `服务时间：${$w.item_repeater1.time}`
    )}
  },
  text4: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `护理人员：${$w.item_repeater1.nurse}`
    )}
  },
  text5: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `📍 ${$w.item_repeater1.address}`
    )}
  },
  text6: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `⏳ 服务时长：${$w.item_repeater1.duration}`
    )}
  },
  button1: { '_waIf': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.status === "pending"
    )}
  },
  button2: { '_waIf': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.status === "pending"
    )}
  },
  button3: { '_waIf': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.status === "accepted"
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
    "orders": {
      "name": "orders",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        {
          "id": "20240715001",
          "time": "2024-07-15 09:00",
          "type": "hospital",
          "nurse": "王护士",
          "price": "¥980.00",
          "shared": true,
          "status": "pending",
          "address": "北京协和医院住院部3楼302室",
          "duration": "3天"
        },
        {
          "id": "20240715002",
          "time": "2024-07-16 14:30",
          "type": "home",
          "nurse": "李护理师",
          "price": "¥299.00",
          "shared": false,
          "status": "accepted",
          "address": "朝阳区光华路8号",
          "duration": "2小时"
        }
      ]
    }
  },
  "params": {}
};

createComponent({
  key: 'block:u_ding_dan_xiang_qing',
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
