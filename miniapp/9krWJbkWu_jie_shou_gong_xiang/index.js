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
      "backgroundColor": "#f8f9fa"
    },
    "classList": [],
    "_parentId": "container1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text1": {
    "style": {
      "color": "#2d3436",
      "display": "block",
      "fontSize": "20px",
      "marginBottom": "24px"
    },
    "classList": [],
    "text": "共享订单管理",
    "level": "title-4",
    "_parentId": "container2",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "repeater1": {
    "style": {},
    "classList": [],
    "suffix": "repeater1",
    "forItem": "item_repeater1",
    "forIndex": "index_repeater1",
    "_parentId": "container2",
    "_order": 1,
    "widgetType": "gsd-h5-react:Repeater"
  },
  "repeater1_item": {
    "style": {},
    "classList": [],
    "_parentId": "repeater1",
    "widgetType": "gsd-h5-react:RepeaterItem"
  },
  "container3": {
    "style": {
      "marginBottom": "16px"
    },
    "classList": [],
    "_parentId": "repeater1_item",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "card1": {
    "style": {
      "boxShadow": "0 2px 8px rgba(0,0,0,0.1)",
      "borderRadius": "8px"
    },
    "classList": [],
    "showFooter": true,
    "_parentId": "container3",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdCard"
  },
  "container4": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "flexDirection": "row",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "card1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container5": {
    "style": {},
    "classList": [],
    "_parentId": "container4",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text2": {
    "style": {
      "color": "#636e72",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "_parentId": "container5",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text3": {
    "style": {
      "color": "#636e72",
      "display": "inline-block",
      "fontSize": "12px",
      "marginTop": "4px"
    },
    "classList": [],
    "_parentId": "container5",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "tag1": {
    "style": {
      "padding": "4px 8px",
      "--wd-tag-font-size-md": "14px"
    },
    "classList": [],
    "_parentId": "container4",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdTag"
  },
  "repeater2": {
    "style": {},
    "classList": [],
    "suffix": "repeater2",
    "forItem": "item_repeater2",
    "forIndex": "index_repeater2",
    "_parentId": "card1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Repeater"
  },
  "repeater2_item": {
    "style": {},
    "classList": [],
    "_parentId": "repeater2",
    "widgetType": "gsd-h5-react:RepeaterItem"
  },
  "container7": {
    "style": {
      "marginBottom": "8px"
    },
    "classList": [],
    "_parentId": "repeater2_item",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text4": {
    "style": {
      "color": "inherit",
      "display": "inline-block"
    },
    "classList": [],
    "text": "接受后，可以查看该订单的全部健康档案和护理日志并留言。",
    "maxLines": "1",
    "_parentId": "container7",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container6": {
    "style": {
      "borderTop": "1px solid #dfe6e9",
      "marginTop": "12px",
      "paddingTop": "12px"
    },
    "classList": [],
    "_parentId": "card1",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "container10": {
    "style": {
      "display": "flex",
      "flexDirection": "row",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "container6",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text6": {
    "style": {
      "color": "inherit",
      "display": "inline-block"
    },
    "classList": [],
    "text": "共享时间",
    "_parentId": "container10",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text7": {
    "style": {
      "color": "#636e72",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "container10",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container12": {
    "style": {
      "gap": "8px",
      "display": "flex",
      "flexDirection": "row",
      "justifyContent": "flex-end"
    },
    "classList": [],
    "_parentId": "card1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "button1": {
    "style": {
      "color": "#ff7675",
      "borderColor": "#ff7675"
    },
    "classList": [],
    "size": "sm",
    "text": "拒绝",
    "variant": "outline",
    "_parentId": "container12",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button2": {
    "style": {
      "color": "white",
      "backgroundColor": "#0984e3"
    },
    "classList": [],
    "size": "sm",
    "text": "接受共享",
    "_parentId": "container12",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button3": {
    "style": {
      "color": "#636e72"
    },
    "classList": [],
    "size": "sm",
    "text": "取消共享",
    "variant": "text",
    "_parentId": "container12",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdButton"
  }
}





const evtListeners = {"onbutton1$tap": [
      {
          key: 'waSwjjOWl',
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
        orderId: $w.item_repeater1.id,
        action: "reject",
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
          key: 'wUNxOey1J',
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
        orderId: $w.item_repeater1.id,
        action: "accept",
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
          key: 'wZA7DxasO',
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
        orderId: $w.item_repeater1.id,
        action: "cancel",
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
      $comp.dataset.state.orders
    )}
  },
  repeater1_item: { '_waFor': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.orders
    )}
  },
  text2: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `共享人：${$w.item_repeater1.sharer}`
    )}
  },
  text3: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `订单号：${$w.item_repeater1.orderNo}`
    )}
  },
  tag1: { 'range': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.status === "pending" ? [{
  "label": "待处理",
  "value": "pending",
  "color": "#fdcb6e"
}] : [{
  "label": "已接受",
  "value": "accepted",
  "color": "#00b894"
}]
    )}
  },
  repeater2: { 'data': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.products
    )}
  },
  repeater2_item: { '_waFor': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.products
    )}
  },
  text7: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.shareTime
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
      "label": "",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        {
          "id": "20240715001",
          "total": 2497,
          "sharer": "李华",
          "status": "pending",
          "orderNo": "DD20240715001",
          "products": [
            {
              "name": "居家护理",
              "image": "single_object",
              "price": 599,
              "quantity": 2
            }
          ],
          "shareTime": "2024-07-15 09:30"
        },
        {
          "id": "20240714005",
          "total": 2697,
          "sharer": "王小明",
          "status": "accepted",
          "orderNo": "DD20240714005",
          "products": [
            {
              "name": "月嫂上门",
              "image": "photo_of_a_building",
              "price": 899,
              "quantity": 3
            }
          ],
          "shareTime": "2024-07-14 14:20"
        }
      ],
      "enableSyncLocal": false
    }
  },
  "params": {}
};

createComponent({
  key: 'block:9krWJbkWu_jie_shou_gong_xiang',
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
