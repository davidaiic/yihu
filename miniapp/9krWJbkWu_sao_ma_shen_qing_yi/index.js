import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanlderhandleSelectHospital from './lowcode/handler/handleSelectHospital' 
import _hanlderhandleGetPhone from './lowcode/handler/handleGetPhone' 
import _hanlderhandleSubmit from './lowcode/handler/handleSubmit' 
import _hanlderselectHospital from './lowcode/handler/selectHospital' 
import _hanlderselectWard from './lowcode/handler/selectWard' 
import _hanlderselectRoom from './lowcode/handler/selectRoom' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  handleSelectHospital: _hanlderhandleSelectHospital, 
  handleGetPhone: _hanlderhandleGetPhone, 
  handleSubmit: _hanlderhandleSubmit, 
  selectHospital: _hanlderselectHospital, 
  selectWard: _hanlderselectWard, 
  selectRoom: _hanlderselectRoom, 
}

const widgetProps = {
  "comtainer_9krWJbkWu_sao_ma_shen_qing_yi": {
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
    "_parentId": "comtainer_9krWJbkWu_sao_ma_shen_qing_yi",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container2": {
    "style": {
      "padding": "16px",
      "minHeight": "100vh",
      "background": "#f8f9fa"
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
  "text1": {
    "style": {
      "color": "#2d3436",
      "display": "block",
      "fontSize": "20px",
      "fontWeight": "600"
    },
    "classList": [],
    "text": "医疗护理员申请",
    "level": "title-5",
    "_parentId": "container3",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text2": {
    "style": {
      "color": "#636e72",
      "display": "inline-block",
      "marginTop": "8px"
    },
    "classList": [],
    "text": "加入专业护理团队 传递温暖关怀",
    "_parentId": "container3",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "card1": {
    "style": {
      "boxShadow": "0 2px 8px rgba(0,0,0,0.1)",
      "borderRadius": "12px",
      "marginBottom": "16px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdCard"
  },
  "container6": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "flexDirection": "row"
    },
    "classList": [],
    "_parentId": "card1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon1": {
    "style": {
      "color": "#0984e3",
      "fontSize": "20px",
      "marginRight": "8px"
    },
    "classList": [],
    "name": "td:houses",
    "_parentId": "container6",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text3": {
    "style": {
      "color": "inherit",
      "display": "block",
      "fontSize": "16px"
    },
    "classList": [],
    "text": "目标病房选择",
    "level": "title-6",
    "_parentId": "container6",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container7": {
    "style": {
      "gap": "12px",
      "display": "flex",
      "marginTop": "12px",
      "flexDirection": "row"
    },
    "classList": [],
    "_parentId": "card1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "button1": {
    "style": {
      "flex": "1",
      "borderColor": "#74b9ff"
    },
    "classList": [],
    "text": "按名称查找医院",
    "variant": "outline",
    "_parentId": "container7",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button2": {
    "style": {
      "flex": "1",
      "borderColor": "#74b9ff"
    },
    "classList": [],
    "text": "附近医院",
    "variant": "outline",
    "_parentId": "container7",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container8": {
    "style": {
      "marginTop": "16px"
    },
    "classList": [],
    "_parentId": "card1",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text4": {
    "style": {
      "color": "#636e72",
      "display": "inline-block"
    },
    "classList": [],
    "text": "已选择：",
    "_parentId": "container8",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text5": {
    "style": {
      "color": "#2d3436",
      "display": "inline-block",
      "marginTop": "4px"
    },
    "classList": [],
    "_parentId": "container8",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text6": {
    "style": {
      "color": "#2d3436",
      "display": "inline-block",
      "marginTop": "4px"
    },
    "classList": [],
    "_parentId": "container8",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container4": {
    "style": {
      "gap": "16px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "container9": {
    "style": {
      "margin": "0px 0px 16px",
      "padding": "16px",
      "boxShadow": "0 2px 8px rgba(0,0,0,0.1)",
      "borderRadius": "12px",
      "backgroundColor": "white"
    },
    "classList": [],
    "_parentId": "container4",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container10": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "marginBottom": "12px",
      "flexDirection": "row"
    },
    "classList": [],
    "_parentId": "container9",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon2": {
    "style": {
      "color": "#00b894",
      "fontSize": "20px",
      "marginRight": "8px"
    },
    "classList": [],
    "name": "td:call-1",
    "_parentId": "container10",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text8": {
    "style": {
      "color": "inherit",
      "display": "block",
      "fontSize": "16px"
    },
    "classList": [],
    "text": "联系方式",
    "level": "title-6",
    "_parentId": "container10",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container11": {
    "style": {
      "gap": "12px",
      "display": "flex",
      "flexDirection": "row"
    },
    "classList": [],
    "_parentId": "container9",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "button3": {
    "style": {
      "flex": "1",
      "backgroundColor": "#00b89420"
    },
    "classList": [],
    "icon": "td:logo-wechat",
    "text": "微信授权",
    "iconType": "text-with-icon",
    "_parentId": "container11",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button4": {
    "style": {
      "flex": "1"
    },
    "classList": [],
    "text": "手动输入",
    "variant": "outline",
    "_parentId": "container11",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "text7": {
    "style": {
      "color": "#636e72",
      "display": "inline-block",
      "marginTop": "12px"
    },
    "classList": [],
    "_parentId": "container9",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdText"
  },
  "input1": {
    "style": {
      "padding": "12px",
      "borderRadius": "12px",
      "backgroundColor": "white"
    },
    "classList": [],
    "label": "姓名",
    "placeholder": "请输入真实姓名",
    "_parentId": "container4",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "input2": {
    "style": {
      "padding": "12px",
      "borderRadius": "12px",
      "backgroundColor": "white"
    },
    "classList": [],
    "label": "推荐代码（选填）",
    "placeholder": "如有推荐人请输入代码",
    "_parentId": "container4",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "container5": {
    "style": {
      "gap": "16px",
      "display": "flex",
      "marginTop": "32px",
      "flexDirection": "row"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 3,
    "widgetType": "gsd-h5-react:Container"
  },
  "button5": {
    "style": {
      "flex": "1",
      "backgroundColor": "#d63031"
    },
    "classList": [],
    "text": "放弃返回",
    "_parentId": "container5",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button6": {
    "style": {
      "flex": "1",
      "backgroundColor": "#00b894"
    },
    "classList": [],
    "text": "提交申请",
    "_parentId": "container5",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container12": {
    "style": {},
    "classList": [
      "ai-generate-wrapper"
    ],
    "data": {},
    "_parentId": "comtainer_9krWJbkWu_sao_ma_shen_qing_yi",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "container13": {
    "style": {
      "padding": "16px",
      "minHeight": "100vh",
      "background": "#f8fafc"
    },
    "classList": [],
    "_parentId": "container12",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container14": {
    "style": {
      "marginBottom": "24px"
    },
    "classList": [],
    "_parentId": "container13",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text9": {
    "style": {
      "color": "#1e293b",
      "display": "block",
      "fontSize": "16px",
      "marginBottom": "12px"
    },
    "classList": [],
    "text": "选择医院",
    "level": "title-5",
    "_parentId": "container14",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container17": {
    "style": {
      "gap": "12px",
      "display": "grid",
      "gridTemplateColumns": "repeat(2,1fr)"
    },
    "classList": [],
    "_parentId": "container14",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "repeater1": {
    "style": {},
    "classList": [],
    "suffix": "repeater1",
    "forItem": "item_repeater1",
    "forIndex": "index_repeater1",
    "_parentId": "container17",
    "_order": 0,
    "widgetType": "gsd-h5-react:Repeater"
  },
  "repeater1_item": {
    "style": {},
    "classList": [],
    "_parentId": "repeater1",
    "widgetType": "gsd-h5-react:RepeaterItem"
  },
  "container18": {
    "style": {
      "height": "80px",
      "borderColor": "#bae6fd"
    },
    "classList": [],
    "_parentId": "repeater1_item",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container19": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "flexDirection": "column"
    },
    "classList": [],
    "_parentId": "container18",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon3": {
    "style": {
      "color": "#0ea5e9",
      "fontSize": "24px",
      "marginBottom": "8px"
    },
    "classList": [],
    "name": "td:houses",
    "_parentId": "container19",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text10": {
    "style": {
      "color": "#1e293b",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "_parentId": "container19",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container15": {
    "style": {
      "marginBottom": "24px"
    },
    "classList": [],
    "_parentId": "container13",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text11": {
    "style": {
      "color": "#1e293b",
      "display": "block",
      "fontSize": "16px",
      "marginBottom": "12px"
    },
    "classList": [],
    "text": "选择病区",
    "level": "title-5",
    "_parentId": "container15",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "scrollView1": {
    "style": {
      "height": "initial",
      "whiteSpace": "nowrap"
    },
    "classList": [],
    "scrollX": true,
    "_parentId": "container15",
    "_order": 1,
    "widgetType": "gsd-h5-react:ScrollView"
  },
  "repeater2": {
    "style": {},
    "classList": [],
    "suffix": "repeater2",
    "forItem": "item_repeater2",
    "forIndex": "index_repeater2",
    "_parentId": "scrollView1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Repeater"
  },
  "repeater2_item": {
    "style": {},
    "classList": [],
    "_parentId": "repeater2",
    "widgetType": "gsd-h5-react:RepeaterItem"
  },
  "container20": {
    "style": {
      "width": "160px",
      "height": "60px",
      "borderColor": "#bae6fd",
      "marginRight": "12px"
    },
    "classList": [],
    "_parentId": "repeater2_item",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container21": {
    "style": {
      "display": "flex",
      "alignItems": "center"
    },
    "classList": [],
    "_parentId": "container20",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon4": {
    "style": {
      "color": "#0ea5e9",
      "fontSize": "20px",
      "marginRight": "8px"
    },
    "classList": [],
    "name": "td:view-list",
    "_parentId": "container21",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text12": {
    "style": {
      "color": "#1e293b",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "_parentId": "container21",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container16": {
    "style": {},
    "classList": [],
    "_parentId": "container13",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "text13": {
    "style": {
      "color": "#1e293b",
      "display": "block",
      "fontSize": "16px",
      "marginBottom": "12px"
    },
    "classList": [],
    "text": "选择病房",
    "level": "title-5",
    "_parentId": "container16",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container22": {
    "style": {
      "gap": "12px",
      "display": "grid",
      "gridTemplateColumns": "repeat(2,1fr)"
    },
    "classList": [],
    "_parentId": "container16",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "repeater3": {
    "style": {},
    "classList": [],
    "suffix": "repeater3",
    "forItem": "item_repeater3",
    "forIndex": "index_repeater3",
    "_parentId": "container22",
    "_order": 0,
    "widgetType": "gsd-h5-react:Repeater"
  },
  "repeater3_item": {
    "style": {},
    "classList": [],
    "_parentId": "repeater3",
    "widgetType": "gsd-h5-react:RepeaterItem"
  },
  "container23": {
    "style": {
      "height": "60px",
      "borderColor": "#bae6fd"
    },
    "classList": [],
    "_parentId": "repeater3_item",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container24": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "flexDirection": "column"
    },
    "classList": [],
    "_parentId": "container23",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon5": {
    "style": {
      "fontSize": "20px",
      "marginBottom": "4px"
    },
    "classList": [],
    "name": "td:verified",
    "_parentId": "container24",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text14": {
    "style": {
      "color": "#1e293b",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "_parentId": "container24",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text15": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "fontSize": "12px"
    },
    "classList": [],
    "_parentId": "container24",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdText"
  }
}





const evtListeners = {"onbutton1$tap": [
      {
          key: 'wKsF81NBp',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "handleSelectHospital";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        type: "name",
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
          key: 'wJafDgpnz',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "handleSelectHospital";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        type: "nearby",
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
          key: 'wmifm0VaK',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "handleGetPhone";
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
    ],"onbutton4$tap": [
      {
          key: 'wIHD7YSOk',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "$w.app.navigateTo({pageId:'phone-input'})";
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
    ],"onbutton6$tap": [
      {
          key: 'w6j4NhI6q',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "handleSubmit";
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
    ],"oncontainer18$tap": [
      {
          key: 'wYbkuqjbC',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "selectHospital";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        hospital: $w.item_repeater1,
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
    ],"oncontainer20$tap": [
      {
          key: 'wn9paTcIl',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "selectWard";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        ward: $w.item_repeater2,
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
    ],"oncontainer23$tap": [
      {
          key: 'wrNJ2Y93Q',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "selectRoom";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        room: $w.item_repeater3,
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
  text5: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.hospital || "暂未选择"
    )}
  },
  text6: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.ward ? "病房：" + $comp.dataset.state.ward : ""
    )}
  },
  text7: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.phone || "尚未获取手机号"
    )}
  },
  container12: { '_waDisplay': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      false
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ((display)=>{ const style = {...widgetProps.container12.style}; if(!display) {style.display = "none"}; return style })((
false
))
    )}
  },
  repeater1: { 'data': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.hospitals
    )}
  },
  repeater1_item: { '_waFor': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.hospitals
    )}
  },
  container18: { 'data': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ({
  "component": "WdButton",
  ":variant": "$comp.dataset.state.selectedHospital?.id === $w.item_repeater1.id ? \"base\" : \"outline\""
})
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.container18.style, ...(
`background: ${$comp.dataset.state.selectedHospital?.id === $w.item_repeater1.id ? "#e0f2fe" : "#fff"}`
)}
    )}
  },
  text10: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.name
    )}
  },
  container15: { '_waIf': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.selectedHospital
    )}
  },
  repeater2: { 'data': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.selectedHospital.wards
    )}
  },
  repeater2_item: { '_waFor': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.selectedHospital.wards
    )}
  },
  container20: { 'data': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ({
  "component": "WdButton",
  ":variant": "$comp.dataset.state.selectedWard?.id === $w.item_repeater2.id ? \"base\" : \"outline\""
})
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.container20.style, ...(
`background: ${$comp.dataset.state.selectedWard?.id === $w.item_repeater2.id ? "#e0f2fe" : "#fff"}`
)}
    )}
  },
  text12: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater2.name
    )}
  },
  container16: { '_waIf': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.selectedWard
    )}
  },
  repeater3: { 'data': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.selectedWard.rooms
    )}
  },
  repeater3_item: { '_waFor': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.selectedWard.rooms
    )}
  },
  container23: { 'data': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ({
  "component": "WdButton",
  ":variant": "$comp.dataset.state.selectedRoom?.id === $w.item_repeater3.id ? \"base\" : \"outline\""
})
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.container23.style, ...(
`background: ${$comp.dataset.state.selectedRoom?.id === $w.item_repeater3.id ? "#e0f2fe" : "#fff"}`
)}
    )}
  },
  icon5: { 'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.icon5.style, ...(
`color: ${$w.item_repeater3.status === "available" ? "#10b981" : "#ef4444"}`
)}
    )}
  },
  text14: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater3.name
    )}
  },
  text15: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater3.status === "available" ? "可预约" : "已占用"
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.text15.style, ...(
`color: ${$w.item_repeater3.status === "available" ? "#10b981" : "#ef4444"}`
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
    "name": {
      "name": "name",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "ward": {
      "name": "ward",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "phone": {
      "name": "phone",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "hospital": {
      "name": "hospital",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "hospitals": {
      "name": "hospitals",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        {
          "id": 1,
          "name": "仁和医院",
          "wards": [
            {
              "id": 101,
              "name": "心血管病区",
              "rooms": [
                {
                  "id": 1001,
                  "name": "VIP病房",
                  "status": "available"
                },
                {
                  "id": 1002,
                  "name": "标准病房",
                  "status": "available"
                }
              ]
            },
            {
              "id": 102,
              "name": "神经外科病区",
              "rooms": [
                {
                  "id": 2001,
                  "name": "术后观察室",
                  "status": "occupied"
                },
                {
                  "id": 2002,
                  "name": "重症监护室",
                  "status": "available"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "协和分院",
          "wards": [
            {
              "id": 201,
              "name": "儿科病区",
              "rooms": [
                {
                  "id": 3001,
                  "name": "儿童单人间",
                  "status": "available"
                },
                {
                  "id": 3002,
                  "name": "家庭病房",
                  "status": "available"
                }
              ]
            }
          ]
        }
      ]
    },
    "referralCode": {
      "name": "referralCode",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    }
  },
  "params": {}
};

createComponent({
  key: 'block:9krWJbkWu_sao_ma_shen_qing_yi',
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
