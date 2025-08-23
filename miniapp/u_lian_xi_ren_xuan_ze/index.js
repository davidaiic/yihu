import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanlderloadContacts from './lowcode/handler/loadContacts' 
import _hanlderonNameInput from './lowcode/handler/onNameInput' 
import _hanlderonPhoneInput from './lowcode/handler/onPhoneInput' 
import _hanlderonSave from './lowcode/handler/onSave' 
import _hanlderonDelete from './lowcode/handler/onDelete' 
import _hanlderonChoose from './lowcode/handler/onChoose' 
import _hanlderbackOrJump from './lowcode/handler/backOrJump' 
import _hanlderonCancel from './lowcode/handler/onCancel' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  loadContacts: _hanlderloadContacts, 
  onNameInput: _hanlderonNameInput, 
  onPhoneInput: _hanlderonPhoneInput, 
  onSave: _hanlderonSave, 
  onDelete: _hanlderonDelete, 
  onChoose: _hanlderonChoose, 
  backOrJump: _hanlderbackOrJump, 
  onCancel: _hanlderonCancel, 
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
  "container3": {
    "style": {
      "textAlign": "center",
      "marginBottom": "24px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text2": {
    "style": {
      "color": "#212121",
      "display": "block",
      "fontSize": "20px",
      "fontWeight": "600"
    },
    "classList": [],
    "text": "联系人管理",
    "level": "title-4",
    "_parentId": "container3",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text3": {
    "style": {
      "color": "#757575",
      "display": "inline-block",
      "fontSize": "14px",
      "marginTop": "8px"
    },
    "classList": [],
    "text": "添加或选择联系人",
    "_parentId": "container3",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "card1": {
    "style": {
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "borderRadius": "12px",
      "marginBottom": "24px"
    },
    "classList": [],
    "showFooter": true,
    "_parentId": "container2",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdCard"
  },
  "text4": {
    "style": {
      "color": "#424242",
      "display": "block",
      "fontSize": "16px",
      "fontWeight": "500"
    },
    "classList": [],
    "text": "添加新联系人",
    "level": "title-5",
    "_parentId": "card1",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container5": {
    "style": {
      "marginBottom": "16px"
    },
    "classList": [],
    "_parentId": "card1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text5": {
    "style": {
      "color": "#616161",
      "display": "block",
      "fontSize": "14px",
      "marginBottom": "8px"
    },
    "classList": [],
    "text": "姓名",
    "_parentId": "container5",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "input1": {
    "style": {
      "border": "1px solid #e0e0e0",
      "padding": "12px",
      "fontSize": "14px",
      "borderRadius": "8px"
    },
    "classList": [],
    "placeholder": "请输入姓名",
    "labelVisible": false,
    "_parentId": "container5",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "container6": {
    "style": {
      "marginBottom": "16px"
    },
    "classList": [],
    "_parentId": "card1",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "container7": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "marginBottom": "8px",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "container6",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text6": {
    "style": {
      "color": "#616161",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "text": "手机号",
    "_parentId": "container7",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "phone1": {
    "style": {
      "top": "0px",
      "right": "0",
      "width": "250rpx",
      "height": "64rpx",
      "fontSize": "28rpx",
      "position": "relative",
      "background": "none"
    },
    "classList": [],
    "size": "mini",
    "text": "获取手机号",
    "type": "default",
    "_parentId": "container7",
    "_order": 1,
    "widgetType": "gsd-h5-react:Phone"
  },
  "input2": {
    "style": {
      "border": "1px solid #e0e0e0",
      "padding": "12px",
      "fontSize": "14px",
      "borderRadius": "8px"
    },
    "classList": [],
    "type": "number",
    "placeholder": "请输入手机号",
    "labelVisible": false,
    "_parentId": "container6",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "button2": {
    "style": {
      "flex": "1",
      "border": "1px solid #e0e0e0",
      "padding": "10px 20px",
      "background": "initial",
      "marginRight": "8px",
      "borderRadius": "8px"
    },
    "classList": [],
    "text": "取消",
    "_parentId": "card1",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button3": {
    "style": {
      "flex": "1",
      "color": "white",
      "padding": "10px 20px",
      "marginLeft": "8px",
      "borderRadius": "8px",
      "backgroundColor": "#1976d2"
    },
    "classList": [],
    "text": "保存",
    "_parentId": "card1",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "text1": {
    "style": {
      "color": "#424242",
      "display": "block",
      "fontSize": "16px",
      "fontWeight": "500",
      "marginBottom": "16px"
    },
    "classList": [],
    "text": "已存联系人",
    "level": "title-5",
    "_parentId": "container2",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container4": {
    "style": {},
    "classList": [],
    "_parentId": "container2",
    "_order": 3,
    "widgetType": "gsd-h5-react:Container"
  },
  "container12": {
    "style": {
      "height": "400rpx",
      "display": "flex",
      "padding": "0px 32px",
      "alignItems": "center",
      "flexDirection": "column",
      "justifyContent": "center",
      "backgroundColor": "#f8f9fa"
    },
    "classList": [],
    "_parentId": "container4",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container13": {
    "style": {
      "display": "flex",
      "maxWidth": "400px",
      "textAlign": "center",
      "alignItems": "center",
      "flexDirection": "column"
    },
    "classList": [],
    "_parentId": "container12",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon1": {
    "style": {
      "color": "#e0e0e0",
      "fontSize": "64px",
      "marginBottom": "24px"
    },
    "classList": [],
    "name": "td:user-circle",
    "_parentId": "container13",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text9": {
    "style": {
      "color": "#424242",
      "display": "block",
      "fontSize": "20px",
      "fontWeight": "600",
      "marginBottom": "8px"
    },
    "classList": [],
    "text": "暂无联系人",
    "level": "title-5",
    "_parentId": "container13",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text10": {
    "style": {
      "color": "#757575",
      "display": "inline-block",
      "fontSize": "14px",
      "marginBottom": "24px"
    },
    "classList": [],
    "text": "您还没有添加任何联系人，请在上方添加",
    "maxLines": "1",
    "_parentId": "container13",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdText"
  },
  "repeater1": {
    "style": {},
    "classList": [],
    "suffix": "repeater1",
    "forItem": "item_repeater1",
    "forIndex": "index_repeater1",
    "_parentId": "container4",
    "_order": 1,
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
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "borderRadius": "12px",
      "marginBottom": "16px"
    },
    "classList": [],
    "showHeader": false,
    "_parentId": "repeater1_item",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdCard"
  },
  "container8": {
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
  "container9": {
    "style": {},
    "classList": [],
    "_parentId": "container8",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text7": {
    "style": {
      "color": "#212121",
      "display": "inline-block",
      "fontSize": "16px",
      "fontWeight": "500",
      "marginBottom": "4px"
    },
    "classList": [],
    "_parentId": "container9",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text8": {
    "style": {
      "color": "#757575",
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
      "display": "flex"
    },
    "classList": [],
    "_parentId": "container8",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "button4": {
    "style": {
      "color": "#f44336",
      "minHeight": "initial",
      "marginRight": "12px"
    },
    "classList": [],
    "icon": "td:remove",
    "variant": "text",
    "iconType": "icon-only",
    "_parentId": "container10",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button5": {
    "style": {
      "color": "#4caf50",
      "minHeight": "initial"
    },
    "classList": [],
    "icon": "td:internet",
    "variant": "text",
    "iconType": "icon-only",
    "_parentId": "container10",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  }
}





const evtListeners = {"oninput1$change": [
      {
          key: 'wriiengjw8l',
          sourceKey: 'u_lian_xi_ren_xuan_ze:onNameInput',
          handler: handlers.onNameInput,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onphone1$phonesuccess": [
      {
          key: 'wl39re4dnqt',
          sourceKey: 'platform:_setStateVal',
          handler: function({data, $w}) { return $app._setStateVal(data, $w);},
          args: {
  "params": [
    {
      "varPath": "$comp.newContact_phone"
    }
  ]
},
          argsBinds: {'params.0.val': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      event.detail.purePhoneNumber
    )}}
        }
    ],"oninput2$change": [
      {
          key: 'w7igi768t19',
          sourceKey: 'u_lian_xi_ren_xuan_ze:onPhoneInput',
          handler: handlers.onPhoneInput,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton2$tap": [
      {
          key: 'w5w1sv9zct9',
          sourceKey: 'u_lian_xi_ren_xuan_ze:onCancel',
          handler: handlers.onCancel,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton3$tap": [
      {
          key: 'wdx3ukoad6t',
          sourceKey: 'u_lian_xi_ren_xuan_ze:onSave',
          handler: handlers.onSave,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton4$tap": [
      {
          key: 'w7yzqtvh9lm',
          sourceKey: 'u_lian_xi_ren_xuan_ze:onDelete',
          handler: handlers.onDelete,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {'params.0.target': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ({
  targetContact: $w.item_repeater1 
})
    )}}
        }
    ],"onbutton5$tap": [
      {
          key: 'wj08gkkutpm',
          sourceKey: 'u_lian_xi_ren_xuan_ze:onChoose',
          handler: handlers.onChoose,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {'params.0.target': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ({
  targetContact: $w.item_repeater1 
})
    )}}
        }
    ],}

const behaviors = []

const properties = {
}

const events = [
]



const dataBinds = {
  input1: { 'value': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.newContact.name
    )},'inputValue': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.newContact_name
    )}
  },
  input2: { 'value': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.newContact.phone
    )},'inputValue': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.newContact_phone
    )}
  },
  container12: { '_waDisplay': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.contacts.length === 0
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ((display)=>{ const style = {...widgetProps.container12.style}; if(!display) {style.display = "none"}; return style })((
$comp.dataset.state.contacts.length === 0
))
    )}
  },
  repeater1: { 'data': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.contacts
    )}
  },
  repeater1_item: { '_waFor': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.contacts
    )}
  },
  text7: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.name
    )}
  },
  text8: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.phone
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
    "contacts": {
      "name": "contacts",
      "label": "",
      "varType": "state",
      "dataType": "object",
      "initialValue": [],
      "enableSyncLocal": false
    },
    "frompage": {
      "name": "frompage",
      "label": "",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "newContact_name": {
      "name": "newContact_name",
      "label": "",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "newContact_phone": {
      "name": "newContact_phone",
      "label": "",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    }
  },
  "params": {}
};

createComponent({
  key: 'block:u_lian_xi_ren_xuan_ze',
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
