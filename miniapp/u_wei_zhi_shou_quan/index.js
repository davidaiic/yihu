import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanlderrequestPermission from './lowcode/handler/requestPermission' 
import _hanldersaveLocation from './lowcode/handler/saveLocation' 
import _hanldersetAddressName from './lowcode/handler/setAddressName' 
import _hanlderonNameInput from './lowcode/handler/onNameInput' 
import _hanlderonaddressDetailInput from './lowcode/handler/onaddressDetailInput' 
import _hanlderfastadd_addressDetail from './lowcode/handler/fastadd_addressDetail' 
import _hanlderonSaveClick from './lowcode/handler/onSaveClick' 
import _hanlderloadMyAddresses from './lowcode/handler/loadMyAddresses' 
import _hanlderonDeleteClick from './lowcode/handler/onDeleteClick' 
import _hanlderonChooseandback from './lowcode/handler/onChooseandback' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  requestPermission: _hanlderrequestPermission, 
  saveLocation: _hanldersaveLocation, 
  setAddressName: _hanldersetAddressName, 
  onNameInput: _hanlderonNameInput, 
  onaddressDetailInput: _hanlderonaddressDetailInput, 
  fastadd_addressDetail: _hanlderfastadd_addressDetail, 
  onSaveClick: _hanlderonSaveClick, 
  loadMyAddresses: _hanlderloadMyAddresses, 
  onDeleteClick: _hanlderonDeleteClick, 
  onChooseandback: _hanlderonChooseandback, 
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
      "padding": "24px",
      "minHeight": "100vh",
      "background": "#f5f7fa"
    },
    "classList": [],
    "_parentId": "container1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container13": {
    "style": {
      "display": "flex",
      "flexDirection": "row"
    },
    "classList": [],
    "data": {},
    "_parentId": "container2",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "button4": {
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
    "_parentId": "container13",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "text1": {
    "style": {
      "color": "#1a1a1a",
      "display": "block",
      "fontSize": "22px",
      "fontWeight": "600",
      "letterSpacing": "0.5px"
    },
    "classList": [],
    "text": "位置授权和地址管理",
    "level": "title-4",
    "maxLines": "1",
    "_parentId": "container13",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container3": {
    "style": {
      "marginBottom": "32px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text2": {
    "style": {
      "color": "#7a7a7a",
      "display": "inline-block",
      "fontSize": "14px",
      "marginTop": "8px"
    },
    "classList": [],
    "text": "管理您的位置权限和常用地址",
    "_parentId": "container3",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "card1": {
    "style": {
      "boxShadow": "0 4px 12px rgba(0,0,0,0.03)",
      "background": "white",
      "borderRadius": "16px",
      "marginBottom": "24px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdCard"
  },
  "container4": {
    "style": {
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
      "color": "#0052d9",
      "fontSize": "22px",
      "marginRight": "12px"
    },
    "classList": [],
    "name": "td:location",
    "_parentId": "container4",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text3": {
    "style": {
      "color": "#333",
      "display": "block",
      "fontSize": "17px",
      "fontWeight": "500"
    },
    "classList": [],
    "level": "title-5",
    "_parentId": "container4",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text4": {
    "style": {
      "color": "#444",
      "display": "inline-block",
      "fontSize": "15px",
      "lineHeight": "1.5em",
      "marginBottom": "16px"
    },
    "classList": [],
    "_parentId": "card1",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "button1": {
    "style": {
      "color": "white",
      "width": "100%",
      "height": "48px",
      "background": "linear-gradient(135deg, #0052d9, #1a73e8)",
      "borderRadius": "8px"
    },
    "classList": [],
    "_staticResourceAttribute": [
      "sendMessageImg",
      "iconSrc"
    ],
    "icon": "success",
    "size": "lg",
    "text": "刷新位置或启用位置服务",
    "openType": "",
    "_parentId": "card1",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "card2": {
    "style": {
      "boxShadow": "0 4px 12px rgba(0,0,0,0.03)",
      "background": "white",
      "borderRadius": "16px",
      "marginBottom": "24px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 3,
    "widgetType": "gsd-h5-react:WdCard"
  },
  "container5": {
    "style": {
      "display": "flex",
      "alignItems": "center"
    },
    "classList": [],
    "_parentId": "card2",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon2": {
    "style": {
      "color": "#0052d9",
      "fontSize": "22px",
      "marginRight": "12px"
    },
    "classList": [],
    "name": "td:add",
    "_parentId": "container5",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text5": {
    "style": {
      "color": "#333",
      "display": "block",
      "fontSize": "17px",
      "fontWeight": "500"
    },
    "classList": [],
    "text": "添加新地址",
    "level": "title-5",
    "_parentId": "container5",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container15": {
    "style": {
      "padding": "16px",
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "borderRadius": "8px",
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "_parentId": "card2",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text9": {
    "style": {
      "color": "#424242",
      "display": "block",
      "fontWeight": "600",
      "marginBottom": "12px"
    },
    "classList": [],
    "text": "地址名称",
    "level": "title-5",
    "_parentId": "container15",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "input3": {
    "style": {
      "background": "#f9f9f9",
      "borderRadius": "8px",
      "marginBottom": "16px"
    },
    "classList": [],
    "label": "名称",
    "status": "edit",
    "template": "inputBox",
    "prefixIcon": "success",
    "prefixType": "",
    "suffixIcon": "success",
    "suffixType": "",
    "placeholder": "可在下方选择",
    "requiredMsg": "该项为必填项",
    "_parentId": "container15",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "text10": {
    "style": {
      "color": "#757575",
      "display": "inline-block",
      "marginBottom": "12px"
    },
    "classList": [],
    "text": "快速选择",
    "_parentId": "container15",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container16": {
    "style": {
      "gap": "8px",
      "display": "flex",
      "flexWrap": "wrap"
    },
    "classList": [],
    "_parentId": "container15",
    "_order": 3,
    "widgetType": "gsd-h5-react:Container"
  },
  "button5": {
    "style": {
      "padding": "6px 12px",
      "borderColor": "#e0e0e0",
      "borderRadius": "16px"
    },
    "classList": [],
    "text": "住宅",
    "variant": "outline",
    "_parentId": "container16",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button6": {
    "style": {
      "padding": "6px 12px",
      "borderColor": "#e0e0e0",
      "borderRadius": "16px"
    },
    "classList": [],
    "text": "康复中心",
    "variant": "outline",
    "_parentId": "container16",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button7": {
    "style": {
      "padding": "6px 12px",
      "borderColor": "#e0e0e0",
      "borderRadius": "16px"
    },
    "classList": [],
    "text": "护理院",
    "variant": "outline",
    "_parentId": "container16",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button8": {
    "style": {
      "padding": "6px 12px",
      "borderColor": "#e0e0e0",
      "borderRadius": "16px"
    },
    "classList": [],
    "text": "养老院",
    "variant": "outline",
    "_parentId": "container16",
    "_order": 3,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button9": {
    "style": {
      "padding": "6px 12px",
      "borderColor": "#e0e0e0",
      "borderRadius": "16px"
    },
    "classList": [],
    "text": "老年公寓",
    "variant": "outline",
    "_parentId": "container16",
    "_order": 4,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button10": {
    "style": {
      "padding": "6px 12px",
      "borderColor": "#e0e0e0",
      "borderRadius": "16px"
    },
    "classList": [],
    "text": "福利院",
    "variant": "outline",
    "_parentId": "container16",
    "_order": 5,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button11": {
    "style": {
      "padding": "6px 12px",
      "borderColor": "#e0e0e0",
      "borderRadius": "16px"
    },
    "classList": [],
    "text": "社区服务中心",
    "variant": "outline",
    "_parentId": "container16",
    "_order": 6,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button12": {
    "style": {
      "padding": "6px 12px",
      "borderColor": "#e0e0e0",
      "borderRadius": "16px"
    },
    "classList": [],
    "text": "日间照料中心",
    "variant": "outline",
    "_parentId": "container16",
    "_order": 7,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button13": {
    "style": {
      "padding": "6px 12px",
      "borderColor": "#e0e0e0",
      "borderRadius": "16px"
    },
    "classList": [],
    "text": "酒店",
    "variant": "outline",
    "_parentId": "container16",
    "_order": 8,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button14": {
    "style": {
      "padding": "6px 12px",
      "borderColor": "#e0e0e0",
      "borderRadius": "16px"
    },
    "classList": [],
    "text": "农村等偏远地区住所",
    "variant": "outline",
    "_parentId": "container16",
    "_order": 9,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button15": {
    "style": {
      "padding": "6px 12px",
      "borderColor": "#e0e0e0",
      "borderRadius": "16px"
    },
    "classList": [],
    "text": "其它",
    "variant": "outline",
    "_parentId": "container16",
    "_order": 10,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "input1": {
    "style": {
      "height": "100rpx",
      "background": "#f9f9f9",
      "borderRadius": "8px",
      "marginBottom": "16px"
    },
    "classList": [],
    "label": "地址",
    "status": "edit",
    "template": "inputBox",
    "prefixIcon": "success",
    "prefixType": "",
    "suffixIcon": "success",
    "suffixType": "",
    "placeholder": "被照护人详细地址",
    "requiredMsg": "该项为必填项",
    "_parentId": "card2",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "button2": {
    "style": {
      "color": "#0052d9",
      "width": "100%",
      "height": "48px",
      "borderColor": "#0052d9",
      "borderRadius": "8px"
    },
    "classList": [],
    "icon": "success",
    "size": "lg",
    "text": "保存到我常用地址",
    "variant": "outline",
    "_parentId": "card2",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "card3": {
    "style": {
      "boxShadow": "0 4px 12px rgba(0,0,0,0.03)",
      "background": "white",
      "borderRadius": "16px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 4,
    "widgetType": "gsd-h5-react:WdCard"
  },
  "container6": {
    "style": {
      "display": "flex",
      "alignItems": "center"
    },
    "classList": [],
    "_parentId": "card3",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon3": {
    "style": {
      "color": "#0052d9",
      "fontSize": "22px",
      "marginRight": "12px"
    },
    "classList": [],
    "name": "td:bookmark-checked",
    "_parentId": "container6",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text6": {
    "style": {
      "color": "#333",
      "display": "block",
      "fontSize": "17px",
      "fontWeight": "500"
    },
    "classList": [],
    "text": "常用地址",
    "level": "title-5",
    "_parentId": "container6",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container14": {
    "style": {},
    "classList": [],
    "data": {},
    "_parentId": "card3",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text11": {
    "style": {
      "textAlign": "center"
    },
    "classList": [],
    "text": "当前没有地址，可以添加新地址",
    "maxLines": "1",
    "inheritColor": true,
    "_parentId": "container14",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container7": {
    "style": {},
    "classList": [],
    "_parentId": "card3",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "repeater1": {
    "style": {},
    "classList": [],
    "suffix": "repeater1",
    "forItem": "item_repeater1",
    "forIndex": "index_repeater1",
    "_parentId": "container7",
    "_order": 0,
    "widgetType": "gsd-h5-react:Repeater"
  },
  "repeater1_item": {
    "style": {},
    "classList": [],
    "_parentId": "repeater1",
    "widgetType": "gsd-h5-react:RepeaterItem"
  },
  "container8": {
    "style": {
      "padding": "20px",
      "borderBottom": "1px solid #f0f0f0"
    },
    "classList": [],
    "_parentId": "repeater1_item",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container9": {
    "style": {
      "display": "flex",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "container8",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "button3": {
    "style": {
      "color": "#0052d9",
      "alignSelf": "center",
      "minHeight": "initial"
    },
    "classList": [],
    "_staticResourceAttribute": [
      "sendMessageImg",
      "iconSrc"
    ],
    "icon": "td:close",
    "text": "按钮",
    "variant": "text",
    "iconType": "icon-only",
    "_parentId": "container9",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container10": {
    "style": {
      "display": "flex",
      "alignItems": "flex-start"
    },
    "classList": [],
    "_parentId": "container9",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon4": {
    "style": {
      "color": "#666",
      "fontSize": "20px",
      "marginTop": "2px",
      "marginRight": "16px"
    },
    "classList": [],
    "_parentId": "container10",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "container11": {
    "style": {},
    "classList": [],
    "_parentId": "container10",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "container12": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "marginBottom": "6px"
    },
    "classList": [],
    "_parentId": "container11",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text8": {
    "style": {
      "color": "#1a1a1a",
      "display": "inline-block",
      "fontSize": "16px",
      "fontWeight": "500",
      "marginRight": "8px"
    },
    "classList": [],
    "_parentId": "container12",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text7": {
    "style": {
      "color": "#666",
      "display": "inline-block",
      "fontSize": "14px",
      "lineHeight": "1.5em"
    },
    "classList": [],
    "_parentId": "container11",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "button16": {
    "style": {
      "color": "#0052d9",
      "alignSelf": "center",
      "minHeight": "initial"
    },
    "classList": [],
    "_staticResourceAttribute": [
      "sendMessageImg",
      "iconSrc"
    ],
    "icon": "td:arrow-right",
    "text": "选择",
    "variant": "text",
    "iconType": "text-with-icon",
    "iconPosition": "after",
    "_parentId": "container9",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdButton"
  }
}





const evtListeners = {"onbutton4$tap": [
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
    ],"oncontainer4$tap": [
      {
          key: 'wg9bvga7fj2',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "requestPermission";
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
    ],"onbutton1$tap": [
      {
          key: 'wWl8azIoI',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "requestPermission";
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
    ],"oncontainer5$tap": [
      {
          key: 'ws08odb11gf',
          sourceKey: 'u_wei_zhi_shou_quan:fastadd_addressDetail',
          handler: handlers.fastadd_addressDetail,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"oninput3$change": [
      {
          key: 'w2pps2h1n80',
          sourceKey: 'u_wei_zhi_shou_quan:onNameInput',
          handler: handlers.onNameInput,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton5$tap": [
      {
          key: 'wy7iNUayx',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "setAddressName";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        value: "住宅",
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
    ],"onbutton6$tap": [
      {
          key: 'wza4DzgGy',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "setAddressName";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        value: "康复中心",
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
    ],"onbutton7$tap": [
      {
          key: 'w4EAKO1ZH',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "setAddressName";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        value: "护理院",
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
    ],"onbutton8$tap": [
      {
          key: 'wO2QWOpeg',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "setAddressName";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        value: "养老院",
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
    ],"onbutton9$tap": [
      {
          key: 'wmT074nwd',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "setAddressName";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        value: "老年公寓",
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
    ],"onbutton10$tap": [
      {
          key: 'wBYiKNbUd',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "setAddressName";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        value: "福利院",
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
    ],"onbutton11$tap": [
      {
          key: 'wJhIHMdot',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "setAddressName";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        value: "社区服务中心",
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
    ],"onbutton12$tap": [
      {
          key: 'w7J6uzuua',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "setAddressName";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        value: "日间照料中心",
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
    ],"onbutton13$tap": [
      {
          key: 'wiu5jtoXI',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "setAddressName";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        value: "酒���",
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
    ],"onbutton14$tap": [
      {
          key: 'wWGcCbs5V',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "setAddressName";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        value: "农村等偏远地区住所",
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
    ],"onbutton15$tap": [
      {
          key: 'wRPrJIFy2',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "setAddressName";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        value: "其它",
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
    ],"oninput1$change": [
      {
          key: 'we1hrl8ot6p',
          sourceKey: 'u_wei_zhi_shou_quan:onaddressDetailInput',
          handler: handlers.onaddressDetailInput,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton2$tap": [
      {
          key: 'wwUC6QI4U',
          sourceKey: 'u_wei_zhi_shou_quan:onSaveClick',
          handler: handlers.onSaveClick,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton3$tap": [
      {
          key: 'wkrwpmdd5bg',
          sourceKey: 'u_wei_zhi_shou_quan:onDeleteClick',
          handler: handlers.onDeleteClick,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {'params.0.target': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ({
  targetAddress: $w.item_repeater1
})
    )}}
        }
    ],"onbutton16$tap": [
      {
          key: 'wkrwpmdd5bg',
          sourceKey: 'u_wei_zhi_shou_quan:onChooseandback',
          handler: handlers.onChooseandback,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {'params.0.target': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ({
  targetAddress: $w.item_repeater1
})
    )}}
        }
    ],"on__comp__$attached": [
      {
          key: 'wbz9o7x9tmz',
          sourceKey: 'u_wei_zhi_shou_quan:loadMyAddresses',
          handler: handlers.loadMyAddresses,
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
      "当前位置"
    )}
  },
  text4: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.app.dataset.state.addressText ? $w.app.dataset.state.addressText : "未授权"
    )}
  },
  input3: { 'inputValue': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.addressname
    )}
  },
  input1: { 'inputValue': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.addressDetail
    )}
  },
  container14: { '_waDisplay': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.savedLocations?.length === 0
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ((display)=>{ const style = {...widgetProps.container14.style}; if(!display) {style.display = "none"}; return style })((
$comp.dataset.state.savedLocations?.length === 0
))
    )}
  },
  repeater1: { 'data': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.savedLocations
    )}
  },
  repeater1_item: { '_waFor': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.savedLocations
    )}
  },
  icon4: { 'name': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.icon
    )}
  },
  text8: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.name
    )}
  },
  text7: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.address
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
    "addressText": {
      "name": "addressText",
      "label": "",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "addressname": {
      "name": "addressname",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "addressDetail": {
      "name": "addressDetail",
      "label": "",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "savedLocations": {
      "name": "savedLocations",
      "label": "",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        {
          "id": 1,
          "icon": "td:houses",
          "name": "住宅",
          "address": "示例：上海市9999号",
          "isDefault": true
        }
      ],
      "enableSyncLocal": false
    },
    "currentLocation": {
      "name": "currentLocation",
      "varType": "state",
      "dataType": "object",
      "initialValue": {
        "address": "上海市静安区南京西路1266号",
        "latitude": 31.2304,
        "longitude": 121.4737
      }
    }
  },
  "params": {}
};

createComponent({
  key: 'block:u_wei_zhi_shou_quan',
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
