import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanlderselectService from './lowcode/handler/selectService' 
import _hanlderchangeDuration from './lowcode/handler/changeDuration' 
import _hanlderselectPayment from './lowcode/handler/selectPayment' 
import _hanldertoggleCoupon from './lowcode/handler/toggleCoupon' 
import _hanldersubmitOrder from './lowcode/handler/submitOrder' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  selectService: _hanlderselectService, 
  changeDuration: _hanlderchangeDuration, 
  selectPayment: _hanlderselectPayment, 
  toggleCoupon: _hanldertoggleCoupon, 
  submitOrder: _hanldersubmitOrder, 
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
  "container24": {
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
  "button9": {
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
    "_parentId": "container24",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "text21": {
    "style": {
      "color": "#374151",
      "margin": "0px 0px 10px",
      "display": "block",
      "fontWeight": "600"
    },
    "classList": [],
    "text": "月嫂上门服务",
    "level": "title-4",
    "maxLines": "1",
    "_parentId": "container24",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container3": {
    "style": {
      "padding": "16px",
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "background": "white",
      "borderRadius": "12px",
      "marginBottom": "24px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text1": {
    "style": {
      "color": "#333",
      "display": "block",
      "fontWeight": "600",
      "marginBottom": "16px"
    },
    "classList": [],
    "text": "选择服务类型",
    "level": "title-5",
    "_parentId": "container3",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container8": {
    "style": {
      "gap": "12px",
      "display": "flex",
      "marginBottom": "16px"
    },
    "classList": [],
    "_parentId": "container3",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "button2": {
    "style": {
      "flex": "1"
    },
    "classList": [],
    "text": "标准月嫂",
    "_parentId": "container8",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button3": {
    "style": {
      "flex": "1"
    },
    "classList": [],
    "text": "高级月嫂",
    "_parentId": "container8",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container9": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "marginBottom": "16px",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "container3",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "text2": {
    "style": {
      "color": "#666",
      "display": "inline-block"
    },
    "classList": [],
    "text": "服务天数",
    "_parentId": "container9",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container10": {
    "style": {
      "gap": "8px",
      "display": "flex",
      "alignItems": "center"
    },
    "classList": [],
    "_parentId": "container9",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "button4": {
    "style": {
      "color": "#0052d9",
      "width": "32px",
      "height": "32px",
      "minHeight": "initial"
    },
    "classList": [],
    "icon": "td:remove",
    "variant": "text",
    "iconType": "icon-only",
    "_parentId": "container10",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "text3": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "fontSize": "16px",
      "fontWeight": "500"
    },
    "classList": [],
    "_parentId": "container10",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "button5": {
    "style": {
      "color": "#0052d9",
      "width": "32px",
      "height": "32px",
      "minHeight": "initial"
    },
    "classList": [],
    "icon": "td:add",
    "variant": "text",
    "iconType": "icon-only",
    "_parentId": "container10",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container4": {
    "style": {
      "padding": "16px",
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "background": "white",
      "borderRadius": "12px",
      "marginBottom": "24px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "text4": {
    "style": {
      "color": "#333",
      "display": "block",
      "fontWeight": "600",
      "marginBottom": "16px"
    },
    "classList": [],
    "text": "联系信息",
    "level": "title-5",
    "_parentId": "container4",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "input1": {
    "style": {
      "marginBottom": "12px"
    },
    "classList": [],
    "label": "联系人",
    "_parentId": "container4",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "input2": {
    "style": {
      "marginBottom": "12px"
    },
    "classList": [],
    "label": "联系电话",
    "_parentId": "container4",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "input3": {
    "style": {},
    "classList": [],
    "label": "服务地址",
    "status": "edit",
    "template": "inputBox",
    "inputValue": "",
    "prefixIcon": "success",
    "prefixType": "",
    "suffixIcon": "success",
    "suffixType": "",
    "placeholder": "请输入",
    "requiredMsg": "该项为必填项",
    "_parentId": "container4",
    "_order": 3,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "container21": {
    "style": {
      "marginBottom": "24px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 3,
    "widgetType": "gsd-h5-react:Container"
  },
  "container22": {
    "style": {
      "padding": "16px",
      "boxShadow": "0 1px 3px rgba(0,0,0,0.1)",
      "borderRadius": "8px",
      "backgroundColor": "white"
    },
    "classList": [],
    "_parentId": "container21",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text19": {
    "style": {
      "color": "#4b5563",
      "display": "inline-block",
      "fontWeight": "bolder",
      "marginBottom": "12px"
    },
    "classList": [],
    "text": "服务地址",
    "level": "body-lg",
    "_parentId": "container22",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container23": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "container22",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text20": {
    "style": {
      "color": "#111827",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "_parentId": "container23",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "button8": {
    "style": {
      "color": "#3b82f6",
      "minHeight": "initial"
    },
    "classList": [],
    "icon": "td:location",
    "variant": "text",
    "iconType": "icon-only",
    "_parentId": "container23",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container5": {
    "style": {
      "padding": "16px",
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "background": "white",
      "borderRadius": "12px",
      "marginBottom": "24px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 4,
    "widgetType": "gsd-h5-react:Container"
  },
  "text5": {
    "style": {
      "color": "#333",
      "display": "block",
      "fontWeight": "600",
      "marginBottom": "16px"
    },
    "classList": [],
    "text": "支付方式",
    "level": "title-5",
    "_parentId": "container5",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container11": {
    "style": {
      "display": "flex",
      "padding": "12px",
      "alignItems": "center",
      "borderRadius": "8px",
      "marginBottom": "12px",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "container5",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "container13": {
    "style": {
      "gap": "8px",
      "display": "flex",
      "alignItems": "center"
    },
    "classList": [],
    "_parentId": "container11",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon1": {
    "style": {
      "color": "#07C160",
      "fontSize": "20px"
    },
    "classList": [],
    "name": "td:logo-wechat",
    "_parentId": "container13",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text6": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "text": "微信支付",
    "_parentId": "container13",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "button6": {
    "style": {
      "width": "24px",
      "height": "24px",
      "minHeight": "initial"
    },
    "classList": [],
    "icon": "td:verified",
    "variant": "text",
    "iconType": "icon-only",
    "_parentId": "container11",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container12": {
    "style": {
      "display": "flex",
      "padding": "12px",
      "alignItems": "center",
      "borderRadius": "8px",
      "justifyContent": "space-between"
    },
    "classList": [],
    "data": {},
    "_parentId": "container5",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "container14": {
    "style": {
      "gap": "8px",
      "display": "flex",
      "alignItems": "center"
    },
    "classList": [],
    "_parentId": "container12",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon2": {
    "style": {
      "color": "#1677FF",
      "fontSize": "20px"
    },
    "classList": [],
    "name": "td:wallet",
    "_parentId": "container14",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text7": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "text": "支付宝",
    "_parentId": "container14",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "button7": {
    "style": {
      "width": "24px",
      "height": "24px",
      "minHeight": "initial"
    },
    "classList": [],
    "icon": "td:verified",
    "variant": "text",
    "iconType": "icon-only",
    "_parentId": "container12",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container6": {
    "style": {
      "padding": "16px",
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "background": "white",
      "borderRadius": "12px",
      "marginBottom": "24px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 5,
    "widgetType": "gsd-h5-react:Container"
  },
  "container15": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "container6",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text9": {
    "style": {
      "color": "#333",
      "display": "block",
      "fontWeight": "600"
    },
    "classList": [],
    "text": "优惠券",
    "level": "title-5",
    "_parentId": "container15",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "switch1": {
    "style": {
      "width": "auto"
    },
    "classList": [],
    "labelVisible": false,
    "_parentId": "container15",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdSwitch"
  },
  "text8": {
    "style": {
      "color": "#999",
      "display": "inline-block",
      "fontSize": "12px",
      "marginTop": "4px"
    },
    "classList": [],
    "_parentId": "container6",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container7": {
    "style": {
      "padding": "16px",
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "background": "white",
      "borderRadius": "12px",
      "marginBottom": "24px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 6,
    "widgetType": "gsd-h5-react:Container"
  },
  "text10": {
    "style": {
      "color": "#333",
      "display": "block",
      "fontWeight": "600",
      "marginBottom": "16px"
    },
    "classList": [],
    "text": "订单汇总",
    "level": "title-5",
    "_parentId": "container7",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container16": {
    "style": {
      "display": "flex",
      "marginBottom": "8px",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "container7",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text11": {
    "style": {
      "color": "#666",
      "display": "inline-block"
    },
    "classList": [],
    "text": "服务费用",
    "_parentId": "container16",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text12": {
    "style": {
      "color": "#333",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "container16",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container17": {
    "style": {
      "display": "flex",
      "marginBottom": "8px",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "container7",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "text13": {
    "style": {
      "color": "#666",
      "display": "inline-block"
    },
    "classList": [],
    "text": "服务天数",
    "_parentId": "container17",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text14": {
    "style": {
      "color": "#333",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "container17",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container18": {
    "style": {
      "display": "flex",
      "marginBottom": "8px",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "container7",
    "_order": 3,
    "widgetType": "gsd-h5-react:Container"
  },
  "text15": {
    "style": {
      "color": "#666",
      "display": "inline-block"
    },
    "classList": [],
    "text": "优惠减免",
    "_parentId": "container18",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text16": {
    "style": {
      "color": "#F56C6C",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "container18",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container19": {
    "style": {
      "height": "1px",
      "margin": "12px 0",
      "backgroundColor": "#f0f0f0"
    },
    "classList": [],
    "_parentId": "container7",
    "_order": 4,
    "widgetType": "gsd-h5-react:Container"
  },
  "container20": {
    "style": {
      "display": "flex",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "container7",
    "_order": 5,
    "widgetType": "gsd-h5-react:Container"
  },
  "text17": {
    "style": {
      "color": "#333",
      "display": "inline-block",
      "fontWeight": "600"
    },
    "classList": [],
    "text": "应付总额",
    "_parentId": "container20",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text18": {
    "style": {
      "color": "#F56C6C",
      "display": "inline-block",
      "fontSize": "18px",
      "fontWeight": "600"
    },
    "classList": [],
    "_parentId": "container20",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "button1": {
    "style": {
      "color": "white",
      "width": "100%",
      "height": "48px",
      "fontSize": "16px",
      "fontWeight": "500",
      "borderRadius": "8px",
      "backgroundColor": "#0052d9"
    },
    "classList": [],
    "text": "确认支付",
    "_parentId": "container2",
    "_order": 7,
    "widgetType": "gsd-h5-react:WdButton"
  }
}





const evtListeners = {"onbutton9$tap": [
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
    ],"onbutton2$tap": [
      {
          key: 'wZ5DqRr4C',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "selectService";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        type: "standard",
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
          key: 'w4xqBuwiS',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "selectService";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        type: "premium",
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
    ],"onbutton4$tap": [
      {
          key: 'wskZoFfzd',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "changeDuration";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        days: $comp.dataset.state.serviceDuration - 1,
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
    ],"onbutton5$tap": [
      {
          key: 'wLOaeFUbI',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "changeDuration";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        days: $comp.dataset.state.serviceDuration + 1,
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
          key: 'w68QxXIOZ',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "selectPayment";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        method: "wechat",
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
          key: 'wMsLUUEQg',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "selectPayment";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        method: "alipay",
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
    ],"onswitch1$change": [
      {
          key: 'wVq1UjqJG',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "toggleCoupon";
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
          key: 'w8UMpfwRG',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "submitOrder";
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
  button2: { 'variant': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.selectedService === "standard" ? "base" : "outline"
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.button2.style, ...(
`background-color: ${$comp.dataset.state.selectedService === "standard" ? "#f0f7ff" : "transparent"}; border-color: ${$comp.dataset.state.selectedService === "standard" ? "#0052d9" : "#e0e0e0"}`
)}
    )}
  },
  button3: { 'variant': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.selectedService === "premium" ? "base" : "outline"
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.button3.style, ...(
`background-color: ${$comp.dataset.state.selectedService === "premium" ? "#f0f7ff" : "transparent"}; border-color: ${$comp.dataset.state.selectedService === "premium" ? "#0052d9" : "#e0e0e0"}`
)}
    )}
  },
  text3: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.serviceDuration + "天"
    )}
  },
  input1: { 'value': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.contactName
    )}
  },
  input2: { 'value': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.contactPhone
    )}
  },
  input3: { 'value': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.address
    )},'_waDisplay': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      false
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ((display)=>{ const style = {...widgetProps.input3.style}; if(!display) {style.display = "none"}; return style })((
false
))
    )}
  },
  text20: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.address
    )}
  },
  container11: { 'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.container11.style, ...(
`background-color: ${$comp.dataset.state.paymentMethod === "wechat" ? "#f0f7ff" : "transparent"}`
)}
    )}
  },
  button6: { 'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.button6.style, ...(
`color: ${$comp.dataset.state.paymentMethod === "wechat" ? "#0052d9" : "#e0e0e0"}`
)}
    )}
  },
  container12: { '_waDisplay': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      false
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ((display)=>{ const style = {...widgetProps.container12.style, ...(
`background-color: ${$comp.dataset.state.paymentMethod === "alipay" ? "#f0f7ff" : "transparent"}`
)}; if(!display) {style.display = "none"}; return style })((()=>{const $for = forItems; const $index=lists?.[0]?.currentIndex;
 return (
false
)})())
    )}
  },
  button7: { 'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.button7.style, ...(
`color: ${$comp.dataset.state.paymentMethod === "alipay" ? "#0052d9" : "#e0e0e0"}`
)}
    )}
  },
  switch1: { 'checked': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.couponSelected
    )}
  },
  text8: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.couponAvailable ? "可用1张优惠券" : "暂无可用优惠券"
    )}
  },
  text12: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.selectedService === "standard" ? "¥388/天" : "¥588/天"
    )}
  },
  text14: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.serviceDuration + "天"
    )}
  },
  text16: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.couponSelected ? "-¥50" : "-¥0"
    )}
  },
  text18: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      "¥" + ($comp.dataset.state.selectedService === "standard" ? 388 : 588) * $comp.dataset.state.serviceDuration - ($comp.dataset.state.couponSelected ? 50 : 0)
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
    "address": {
      "name": "address",
      "varType": "state",
      "dataType": "string",
      "initialValue": "北京市朝阳区建国路88号"
    },
    "contactName": {
      "name": "contactName",
      "varType": "state",
      "dataType": "string",
      "initialValue": "张女士"
    },
    "contactPhone": {
      "name": "contactPhone",
      "varType": "state",
      "dataType": "string",
      "initialValue": "13800138000"
    },
    "paymentMethod": {
      "name": "paymentMethod",
      "varType": "state",
      "dataType": "string",
      "initialValue": "wechat"
    },
    "couponSelected": {
      "name": "couponSelected",
      "varType": "state",
      "dataType": "boolean",
      "initialValue": false
    },
    "couponAvailable": {
      "name": "couponAvailable",
      "varType": "state",
      "dataType": "boolean",
      "initialValue": true
    },
    "selectedService": {
      "name": "selectedService",
      "varType": "state",
      "dataType": "string",
      "initialValue": "standard"
    },
    "serviceDuration": {
      "name": "serviceDuration",
      "varType": "state",
      "dataType": "number",
      "initialValue": 30
    }
  },
  "params": {}
};

createComponent({
  key: 'block:u_yue_sao_shang_men',
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
