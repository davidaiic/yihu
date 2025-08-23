import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanlderonLoad from './lowcode/handler/onLoad' 
import _hanlderselectPatient from './lowcode/handler/selectPatient' 
import _hanlderonPageLoad from './lowcode/handler/onPageLoad' 
import _hanlderonDeletePatient from './lowcode/handler/onDeletePatient' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  onLoad: _hanlderonLoad, 
  selectPatient: _hanlderselectPatient, 
  onPageLoad: _hanlderonPageLoad, 
  onDeletePatient: _hanlderonDeletePatient, 
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
      "margin": "0px 0px 24px",
      "padding": "16px",
      "minHeight": "100vh",
      "backgroundColor": "#f8f9fa"
    },
    "classList": [],
    "_parentId": "container1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container3": {
    "style": {
      "margin": "0px 0px 0px",
      "display": "flex",
      "textAlign": "center",
      "flexDirection": "row"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "button1": {
    "style": {
      "color": "#333",
      "fontSize": "20px",
      "minHeight": "initial"
    },
    "classList": [],
    "_staticResourceAttribute": [
      "sendMessageImg",
      "iconSrc"
    ],
    "icon": "td:arrow-left",
    "text": "按钮",
    "variant": "text",
    "iconType": "icon-only",
    "_parentId": "container3",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "text1": {
    "style": {
      "color": "#212121",
      "display": "block",
      "fontSize": "20px",
      "fontWeight": "600"
    },
    "classList": [],
    "text": "选择被照护人",
    "level": "title-4",
    "_parentId": "container3",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container14": {
    "style": {
      "margin": "0px 0px 24px"
    },
    "classList": [],
    "data": {},
    "_parentId": "container2",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text2": {
    "style": {
      "color": "#757575",
      "display": "inline-block",
      "fontSize": "14px",
      "marginTop": "8px"
    },
    "classList": [],
    "text": "请选择需要查看或管理的被照护人",
    "_parentId": "container14",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container4": {
    "style": {
      "gap": "16px",
      "display": "grid",
      "gridTemplateColumns": "repeat(auto-fill, minmax(300px, 1fr))"
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
  "container6": {
    "style": {
      "padding": "20px",
      "boxShadow": "0 4px 12px rgba(0, 0, 0, 0.05)",
      "transition": "all 0.3s ease",
      "borderRadius": "12px",
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "_parentId": "repeater1_item",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container7": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "marginBottom": "16px"
    },
    "classList": [],
    "_parentId": "container6",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon1": {
    "style": {
      "color": "#5e7ce0",
      "fontSize": "20px",
      "marginRight": "8px"
    },
    "classList": [],
    "name": "td:user-circle",
    "_parentId": "container7",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text3": {
    "style": {
      "color": "#5e7ce0",
      "display": "inline-block",
      "fontSize": "16px",
      "fontWeight": "600"
    },
    "classList": [],
    "_parentId": "container7",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text16": {
    "style": {},
    "classList": [],
    "text": "                     ",
    "maxLines": "1",
    "inheritColor": true,
    "_parentId": "container7",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdText"
  },
  "button2": {
    "style": {
      "color": "#2196F3"
    },
    "classList": [],
    "_staticResourceAttribute": [
      "sendMessageImg",
      "iconSrc"
    ],
    "icon": "td:delete-1",
    "size": "sm",
    "text": "删除",
    "variant": "text",
    "iconType": "text-with-icon",
    "_parentId": "container7",
    "_order": 3,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container8": {
    "style": {
      "marginBottom": "12px"
    },
    "classList": [],
    "_parentId": "container6",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text4": {
    "style": {
      "color": "#757575",
      "width": "80px",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "text": "姓名/称呼：",
    "_parentId": "container8",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text5": {
    "style": {
      "color": "#212121",
      "display": "inline-block",
      "fontSize": "14px",
      "fontWeight": "500"
    },
    "classList": [],
    "_parentId": "container8",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container9": {
    "style": {
      "marginBottom": "12px"
    },
    "classList": [],
    "_parentId": "container6",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "text6": {
    "style": {
      "color": "#757575",
      "width": "80px",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "text": "性别/年龄：",
    "_parentId": "container9",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text7": {
    "style": {
      "color": "#212121",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "_parentId": "container9",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container10": {
    "style": {
      "marginBottom": "12px"
    },
    "classList": [],
    "_parentId": "container6",
    "_order": 3,
    "widgetType": "gsd-h5-react:Container"
  },
  "text8": {
    "style": {
      "color": "#757575",
      "width": "80px",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "text": "体重：",
    "_parentId": "container10",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text9": {
    "style": {
      "color": "#212121",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "_parentId": "container10",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container11": {
    "style": {
      "marginBottom": "16px"
    },
    "classList": [],
    "_parentId": "container6",
    "_order": 4,
    "widgetType": "gsd-h5-react:Container"
  },
  "text10": {
    "style": {
      "color": "#757575",
      "width": "80px",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "text": "身体情况：",
    "_parentId": "container11",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text11": {
    "style": {
      "color": "#212121",
      "display": "inline-block",
      "fontSize": "14px",
      "lineHeight": "1.5em"
    },
    "classList": [],
    "_parentId": "container11",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container12": {
    "style": {
      "padding": "8px 12px",
      "borderRadius": "8px",
      "backgroundColor": "#f0f5ff"
    },
    "classList": [],
    "_parentId": "container6",
    "_order": 5,
    "widgetType": "gsd-h5-react:Container"
  },
  "text12": {
    "style": {
      "color": "#5e7ce0",
      "width": "60px",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "text": "住院号：",
    "_parentId": "container12",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text13": {
    "style": {
      "color": "#5e7ce0",
      "display": "inline-block",
      "fontSize": "14px",
      "fontWeight": "500"
    },
    "classList": [],
    "_parentId": "container12",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container5": {
    "style": {},
    "classList": [],
    "_parentId": "container4",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "container13": {
    "style": {
      "padding": "32px",
      "textAlign": "center",
      "gridColumn": "1 / -1",
      "borderRadius": "12px",
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "_parentId": "container5",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon2": {
    "style": {
      "color": "#e0e0e0",
      "fontSize": "48px",
      "marginBottom": "16px"
    },
    "classList": [],
    "name": "td:notification-filled",
    "_parentId": "container13",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text14": {
    "style": {
      "color": "#757575",
      "display": "block",
      "fontSize": "16px",
      "fontWeight": "500",
      "marginBottom": "8px"
    },
    "classList": [],
    "text": "暂无被照护人信息",
    "_parentId": "container13",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text15": {
    "style": {
      "color": "#bdbdbd",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "text": "请添加被照护人信息以开始管理",
    "_parentId": "container13",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdText"
  }
}





const evtListeners = {"onbutton1$tap": [
      {
          key: 'w8mj9zyc7z7',
          sourceKey: 'platform:navigateBack',
          handler: function({args}){ return $app.navigateBack(...args)},
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"oncontainer6$tap": [
      {
          key: 'wDZASjjQV',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "selectPatient";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        index: $w.index_repeater1,
        hoverClass: "hover-card",
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
          key: 'w6uusjbkx4y',
          sourceKey: 'u_bei_zhao_hu_ren_xua:onDeletePatient',
          handler: handlers.onDeletePatient,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {'params.0.target': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ({
  targetPatient: $w.item_repeater1
})
    )}}
        }
    ],"on__comp__$attached": [
      {
          key: 'wanx5ff8r22',
          sourceKey: 'u_bei_zhao_hu_ren_xua:onPageLoad',
          handler: handlers.onPageLoad,
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
      $comp.dataset.state.patientList
    )}
  },
  repeater1_item: { '_waFor': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.patientList
    )}
  },
  text3: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.relation
    )}
  },
  text5: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.name
    )}
  },
  text7: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `${$w.item_repeater1.gender}，${$w.item_repeater1.age}岁`
    )}
  },
  text9: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `${$w.item_repeater1.weight}kg`
    )}
  },
  text11: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.condition
    )}
  },
  text13: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.hospitalId
    )}
  },
  container5: { '_waIf': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.patientList.length === 0
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
    "patientList": {
      "name": "patientList",
      "label": "",
      "varType": "state",
      "dataType": "object",
      "initialValue": [],
      "enableSyncLocal": false
    }
  },
  "params": {}
};

createComponent({
  key: 'block:u_bei_zhao_hu_ren_xua',
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
