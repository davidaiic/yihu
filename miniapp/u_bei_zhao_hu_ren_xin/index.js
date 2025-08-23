import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanlderonLoad from './lowcode/handler/onLoad' 
import _hanlderselectGender from './lowcode/handler/selectGender' 
import _hanlderonSave from './lowcode/handler/onSave' 
import _hanlderonRelationshipInputChange from './lowcode/handler/onRelationshipInputChange' 
import _hanlderonNameInputChange from './lowcode/handler/onNameInputChange' 
import _hanlderonAgeInputChange from './lowcode/handler/onAgeInputChange' 
import _hanlderonWeightInputChange from './lowcode/handler/onWeightInputChange' 
import _hanlderonConditionInputChange from './lowcode/handler/onConditionInputChange' 
import _hanlderonHosnumberInputChange from './lowcode/handler/onHosnumberInputChange' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  onLoad: _hanlderonLoad, 
  selectGender: _hanlderselectGender, 
  onSave: _hanlderonSave, 
  onRelationshipInputChange: _hanlderonRelationshipInputChange, 
  onNameInputChange: _hanlderonNameInputChange, 
  onAgeInputChange: _hanlderonAgeInputChange, 
  onWeightInputChange: _hanlderonWeightInputChange, 
  onConditionInputChange: _hanlderonConditionInputChange, 
  onHosnumberInputChange: _hanlderonHosnumberInputChange, 
}

const widgetProps = {
  "comtainer_u_bei_zhao_hu_ren_xin": {
    "style": {},
    "classList": [],
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container1": {
    "style": {},
    "classList": [
      "ai-generate-wrapper"
    ],
    "data": {},
    "_parentId": "comtainer_u_bei_zhao_hu_ren_xin",
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
  "container3": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "marginBottom": "24px",
      "flexDirection": "row"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "button2": {
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
      "color": "#374151",
      "display": "block",
      "fontSize": "20px",
      "fontWeight": "600"
    },
    "classList": [],
    "text": "被照护人信息",
    "level": "title-4",
    "_parentId": "container3",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container4": {
    "style": {
      "padding": "20px",
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "borderRadius": "12px",
      "backgroundColor": "white"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "container5": {
    "style": {
      "marginBottom": "16px"
    },
    "classList": [],
    "_parentId": "container4",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text2": {
    "style": {
      "color": "#6b7280",
      "display": "block",
      "fontSize": "14px",
      "marginBottom": "8px"
    },
    "classList": [],
    "text": "与本人关系",
    "_parentId": "container5",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "select1": {
    "style": {
      "width": "100%",
      "border": "1px solid #e5e7eb",
      "padding": "10px",
      "borderRadius": "8px"
    },
    "classList": [],
    "range": [
      {
        "label": "本人",
        "value": "本人"
      },
      {
        "label": "配偶",
        "value": "配偶"
      },
      {
        "label": "父母",
        "value": "父母"
      },
      {
        "label": "子女",
        "value": "子女"
      },
      {
        "label": "其他亲属",
        "value": "其他亲属"
      }
    ],
    "labelVisible": false,
    "_parentId": "container5",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdSelect"
  },
  "container6": {
    "style": {
      "marginBottom": "16px"
    },
    "classList": [],
    "_parentId": "container4",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text3": {
    "style": {
      "color": "#6b7280",
      "display": "block",
      "fontSize": "14px",
      "marginBottom": "8px"
    },
    "classList": [],
    "text": "姓名/称呼",
    "_parentId": "container6",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "input1": {
    "style": {
      "width": "100%",
      "border": "1px solid #e5e7eb",
      "padding": "10px",
      "borderRadius": "8px"
    },
    "classList": [],
    "placeholder": "请输入姓名或称呼",
    "labelVisible": false,
    "_parentId": "container6",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "text4": {
    "style": {
      "color": "#6b7280",
      "display": "block",
      "fontSize": "14px",
      "marginBottom": "8px"
    },
    "classList": [],
    "text": "选择性别",
    "maxLines": "1",
    "_parentId": "container4",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container13": {
    "style": {
      "border": "1px dashed rgba(0, 0, 0, 0.25)",
      "height": "90px",
      "margin": "0px 0px 16px",
      "padding": "16px",
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "borderRadius": "12px",
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "_parentId": "container4",
    "_order": 3,
    "widgetType": "gsd-h5-react:Container"
  },
  "container14": {
    "style": {
      "gap": "12px",
      "display": "flex"
    },
    "classList": [],
    "_parentId": "container13",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container15": {
    "style": {
      "flex": "1",
      "borderRadius": "8px"
    },
    "classList": [],
    "_parentId": "container14",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container17": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "flexDirection": "column",
      "justifyContent": "center"
    },
    "classList": [],
    "_parentId": "container15",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon1": {
    "style": {
      "fontSize": "32px",
      "marginBottom": "8px"
    },
    "classList": [],
    "name": "td:user-circle",
    "_parentId": "container17",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text10": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "text": "男性",
    "_parentId": "container17",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container16": {
    "style": {
      "flex": "1",
      "borderRadius": "8px"
    },
    "classList": [],
    "_parentId": "container14",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "container18": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "flexDirection": "column",
      "justifyContent": "center"
    },
    "classList": [],
    "_parentId": "container16",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon2": {
    "style": {
      "fontSize": "32px",
      "marginBottom": "8px"
    },
    "classList": [],
    "name": "td:user-circle",
    "_parentId": "container18",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text11": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "text": "女性",
    "_parentId": "container18",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container8": {
    "style": {
      "marginBottom": "16px"
    },
    "classList": [],
    "_parentId": "container4",
    "_order": 4,
    "widgetType": "gsd-h5-react:Container"
  },
  "text5": {
    "style": {
      "color": "#6b7280",
      "display": "block",
      "fontSize": "14px",
      "marginBottom": "8px"
    },
    "classList": [],
    "text": "年龄",
    "_parentId": "container8",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "input2": {
    "style": {
      "width": "100%",
      "border": "1px solid #e5e7eb",
      "padding": "10px",
      "borderRadius": "8px"
    },
    "classList": [],
    "placeholder": "请输入年龄",
    "labelVisible": false,
    "_parentId": "container8",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "container9": {
    "style": {
      "marginBottom": "16px"
    },
    "classList": [],
    "_parentId": "container4",
    "_order": 5,
    "widgetType": "gsd-h5-react:Container"
  },
  "text6": {
    "style": {
      "color": "#6b7280",
      "display": "block",
      "fontSize": "14px",
      "marginBottom": "8px"
    },
    "classList": [],
    "text": "体重(kg)",
    "_parentId": "container9",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "input3": {
    "style": {
      "width": "100%",
      "border": "1px solid #e5e7eb",
      "padding": "10px",
      "borderRadius": "8px"
    },
    "classList": [],
    "placeholder": "请输入体重",
    "labelVisible": false,
    "_parentId": "container9",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "container10": {
    "style": {
      "marginBottom": "16px"
    },
    "classList": [],
    "_parentId": "container4",
    "_order": 6,
    "widgetType": "gsd-h5-react:Container"
  },
  "text7": {
    "style": {
      "color": "#6b7280",
      "display": "block",
      "fontSize": "14px",
      "marginBottom": "8px"
    },
    "classList": [],
    "text": "身体情况",
    "_parentId": "container10",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "textarea1": {
    "style": {
      "width": "100%",
      "border": "1px solid #e5e7eb",
      "padding": "10px",
      "minHeight": "80px",
      "borderRadius": "8px"
    },
    "classList": [],
    "placeholder": "请描述被照护人的身体状况",
    "labelVisible": false,
    "_parentId": "container10",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdTextarea"
  },
  "container11": {
    "style": {
      "marginBottom": "24px"
    },
    "classList": [],
    "_parentId": "container4",
    "_order": 7,
    "widgetType": "gsd-h5-react:Container"
  },
  "text8": {
    "style": {
      "color": "#6b7280",
      "display": "block",
      "fontSize": "14px",
      "marginBottom": "8px"
    },
    "classList": [],
    "text": "住院号",
    "_parentId": "container11",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "input4": {
    "style": {
      "width": "100%",
      "border": "1px solid #e5e7eb",
      "padding": "10px",
      "borderRadius": "8px"
    },
    "classList": [],
    "placeholder": "请输入住院号",
    "labelVisible": false,
    "_parentId": "container11",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "button1": {
    "style": {
      "color": "white",
      "width": "100%",
      "padding": "12px",
      "borderRadius": "8px",
      "backgroundColor": "#3b82f6"
    },
    "classList": [],
    "icon": "success",
    "text": "保存信息并返回",
    "_parentId": "container4",
    "_order": 8,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container12": {
    "style": {},
    "classList": [],
    "data": {},
    "_parentId": "comtainer_u_bei_zhao_hu_ren_xin",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  }
}





const evtListeners = {"onbutton2$tap": [
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
    ],"onselect1$change": [
      {
          key: 'wgt4h6i5knd',
          sourceKey: 'u_bei_zhao_hu_ren_xin:onRelationshipInputChange',
          handler: handlers.onRelationshipInputChange,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"oninput1$change": [
      {
          key: 'wu1a9g7k7up',
          sourceKey: 'u_bei_zhao_hu_ren_xin:onNameInputChange',
          handler: handlers.onNameInputChange,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"oncontainer15$tap": [
      {
          key: 'wks7B2kks',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "selectGender";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        gender: "male",
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
    ],"oncontainer16$tap": [
      {
          key: 'wTBGzk1nk',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "selectGender";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        gender: "female",
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
    ],"oninput2$change": [
      {
          key: 'wp6vybzv27z',
          sourceKey: 'u_bei_zhao_hu_ren_xin:onAgeInputChange',
          handler: handlers.onAgeInputChange,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"oninput3$change": [
      {
          key: 'w0xvdrh4qc0',
          sourceKey: 'u_bei_zhao_hu_ren_xin:onWeightInputChange',
          handler: handlers.onWeightInputChange,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"ontextarea1$change": [
      {
          key: 'w6ob3ip67z6',
          sourceKey: 'u_bei_zhao_hu_ren_xin:onConditionInputChange',
          handler: handlers.onConditionInputChange,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"oninput4$change": [
      {
          key: 'wlfiles7g9c',
          sourceKey: 'u_bei_zhao_hu_ren_xin:onHosnumberInputChange',
          handler: handlers.onHosnumberInputChange,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton1$tap": [
      {
          key: 'wb7thdckj7h',
          sourceKey: 'u_bei_zhao_hu_ren_xin:onSave',
          handler: handlers.onSave,
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
  select1: { 'value': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.relationship
    )}
  },
  input1: { 'value': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.name
    )},'inputValue': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.name
    )}
  },
  container15: { 'data': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ({
  "component": "WdButton",
  "variant": "outline"
})
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.container15.style, ...(
`border-color: ${$comp.dataset.state.selectedGender === "male" ? "#3a86ff" : "#e0e0e0"}; background-color: ${$comp.dataset.state.selectedGender === "male" ? "#f5f9ff" : "#ffffff"}`
)}
    )}
  },
  icon1: { 'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.icon1.style, ...(
`color: ${$comp.dataset.state.selectedGender === "male" ? "#3a86ff" : "#757575"}`
)}
    )}
  },
  text10: { 'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.text10.style, ...(
`color: ${$comp.dataset.state.selectedGender === "male" ? "#3a86ff" : "#757575"}`
)}
    )}
  },
  container16: { 'data': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ({
  "component": "WdButton",
  "variant": "outline"
})
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.container16.style, ...(
`border-color: ${$comp.dataset.state.selectedGender === "female" ? "#ff006e" : "#e0e0e0"}; background-color: ${$comp.dataset.state.selectedGender === "female" ? "#fff5f9" : "#ffffff"}`
)}
    )}
  },
  icon2: { 'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.icon2.style, ...(
`color: ${$comp.dataset.state.selectedGender === "female" ? "#ff006e" : "#757575"}`
)}
    )}
  },
  text11: { 'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.text11.style, ...(
`color: ${$comp.dataset.state.selectedGender === "female" ? "#ff006e" : "#757575"}`
)}
    )}
  },
  input2: { 'value': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.age
    )},'inputValue': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.age
    )}
  },
  input3: { 'value': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.weight
    )},'inputValue': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.weight
    )}
  },
  textarea1: { 'value': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.condition
    )}
  },
  input4: { 'value': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.hospitalNumber
    )},'inputValue': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.hospitalNumber
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
    "age": {
      "name": "age",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "name": {
      "name": "name",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "weight": {
      "name": "weight",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "condition": {
      "name": "condition",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "relationship": {
      "name": "relationship",
      "varType": "state",
      "dataType": "string",
      "initialValue": "本人"
    },
    "hospitalNumber": {
      "name": "hospitalNumber",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "selectedGender": {
      "name": "selectedGender",
      "label": "",
      "varType": "state",
      "dataType": "string",
      "initialValue": "",
      "enableSyncLocal": false
    }
  },
  "params": {}
};

createComponent({
  key: 'block:u_bei_zhao_hu_ren_xin',
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
