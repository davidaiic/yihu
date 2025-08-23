import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanlderaddSharing from './lowcode/handler/addSharing' 
import _hanlderremoveSharing from './lowcode/handler/removeSharing' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  addSharing: _hanlderaddSharing, 
  removeSharing: _hanlderremoveSharing, 
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
      "background": "#f8f9fa",
      "borderRadius": "12px"
    },
    "classList": [],
    "_parentId": "container1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container3": {
    "style": {
      "gap": "8px",
      "display": "flex",
      "alignItems": "center",
      "marginBottom": "24px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon1": {
    "style": {
      "color": "#2d8cf0",
      "fontSize": "20px"
    },
    "classList": [],
    "name": "td:share",
    "_parentId": "container3",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text1": {
    "style": {
      "color": "inherit",
      "display": "block",
      "fontSize": "18px",
      "fontWeight": "600"
    },
    "classList": [],
    "text": "订单共享管理",
    "level": "title-5",
    "_parentId": "container3",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "scrollView1": {
    "style": {
      "maxHeight": "400px",
      "marginBottom": "16px"
    },
    "classList": [],
    "scrollY": true,
    "_parentId": "container2",
    "_order": 1,
    "widgetType": "gsd-h5-react:ScrollView"
  },
  "container5": {
    "style": {
      "gap": "12px",
      "display": "flex",
      "flexDirection": "column"
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
  "card1": {
    "style": {
      "boxShadow": "0 2px 8px rgba(0,0,0,0.03)",
      "borderRadius": "8px"
    },
    "classList": [],
    "showHeader": false,
    "_parentId": "repeater1_item",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdCard"
  },
  "container6": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "card1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container7": {
    "style": {
      "gap": "12px",
      "display": "flex",
      "alignItems": "center"
    },
    "classList": [],
    "_parentId": "container6",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon2": {
    "style": {
      "color": "#2d8cf0",
      "fontSize": "24px"
    },
    "classList": [],
    "name": "td:user-circle",
    "_parentId": "container7",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "container8": {
    "style": {},
    "classList": [],
    "_parentId": "container7",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text2": {
    "style": {
      "color": "#17233d",
      "display": "inline-block",
      "fontSize": "16px"
    },
    "classList": [],
    "_parentId": "container8",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text3": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "fontSize": "12px"
    },
    "classList": [],
    "_parentId": "container8",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "button1": {
    "style": {
      "color": "#808695",
      "minHeight": "initial"
    },
    "classList": [],
    "icon": "td:close",
    "variant": "text",
    "iconType": "icon-only",
    "_parentId": "container6",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container4": {
    "style": {
      "gap": "8px",
      "display": "flex"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "input1": {
    "style": {
      "flex": "1"
    },
    "classList": [],
    "label": "添加共享手机号",
    "placeholder": "请输入亲属手机号码",
    "_parentId": "container4",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "button2": {
    "style": {
      "color": "white",
      "background": "#2d8cf0",
      "borderRadius": "6px"
    },
    "classList": [],
    "icon": "td:add",
    "text": "添加",
    "iconType": "text-with-icon",
    "_parentId": "container4",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  }
}





const evtListeners = {"onbutton1$tap": [
      {
          key: 'wsXOAFEM8',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "removeSharing";
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
    ],"oninput1$change": [
      {
          key: 'wDffpJEN6',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const params = {
    id: event.currentTarget.id
  };
  return (e => $comp.dataset.state.inputPhone = e.detail.value)(event);
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
          key: 'w07xX22si',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "addSharing";
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
      $comp.dataset.state.sharedList
    )}
  },
  repeater1_item: { '_waFor': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.sharedList
    )}
  },
  text2: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.phone
    )}
  },
  text3: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.status
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.text3.style, ...(
`color: #${$w.item_repeater1.status === "已共享" ? "19be6b" : "ff9900"}`
)}
    )}
  },
  input1: { 'value': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.inputPhone
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
    "inputPhone": {
      "name": "inputPhone",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "sharedList": {
      "name": "sharedList",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        {
          "id": 1,
          "phone": "138****1234",
          "status": "已共享"
        },
        {
          "id": 2,
          "phone": "159****5678",
          "status": "待确认"
        }
      ]
    }
  },
  "params": {}
};

createComponent({
  key: 'block:9krWJbkWu_chuang_jian_gong_xi',
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
