import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanldernavigateToHospital from './lowcode/handler/navigateToHospital' 
import _hanldernavigateToWard from './lowcode/handler/navigateToWard' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  navigateToHospital: _hanldernavigateToHospital, 
  navigateToWard: _hanldernavigateToWard, 
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
      "backgroundColor": "#f8f9fa"
    },
    "classList": [],
    "_parentId": "container1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "card1": {
    "style": {
      "overflow": "hidden",
      "borderRadius": "12px",
      "marginBottom": "16px"
    },
    "classList": [],
    "showContent": false,
    "_parentId": "container2",
    "_order": 0,
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
  "image1": {
    "style": {
      "width": "80px",
      "height": "80px",
      "marginRight": "16px",
      "borderRadius": "40px"
    },
    "classList": [],
    "alt": "护理员头像",
    "fit": "cover",
    "_parentId": "container4",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdImage"
  },
  "container5": {
    "style": {
      "flex": "1"
    },
    "classList": [],
    "_parentId": "container4",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text1": {
    "style": {
      "color": "inherit",
      "display": "block",
      "fontSize": "18px",
      "fontWeight": "600",
      "marginBottom": "4px"
    },
    "classList": [],
    "level": "title-4",
    "_parentId": "container5",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container6": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "marginBottom": "4px"
    },
    "classList": [],
    "_parentId": "container5",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon1": {
    "style": {
      "color": "#ffc107",
      "fontSize": "16px"
    },
    "classList": [],
    "name": "td:star-filled",
    "_parentId": "container6",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text3": {
    "style": {
      "color": "#ffc107",
      "display": "inline-block",
      "fontSize": "14px",
      "marginLeft": "4px"
    },
    "classList": [],
    "_parentId": "container6",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text4": {
    "style": {
      "color": "#757575",
      "display": "inline-block",
      "fontSize": "14px",
      "marginLeft": "8px"
    },
    "classList": [],
    "_parentId": "container6",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text2": {
    "style": {
      "color": "#616161",
      "display": "inline-block",
      "fontSize": "14px",
      "lineHeight": "1.5em"
    },
    "classList": [],
    "_parentId": "container5",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdText"
  },
  "card2": {
    "style": {
      "borderRadius": "12px",
      "marginBottom": "16px"
    },
    "classList": [],
    "showHeader": false,
    "_parentId": "container2",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdCard"
  },
  "container7": {
    "style": {
      "marginBottom": "12px"
    },
    "classList": [],
    "_parentId": "card2",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text5": {
    "style": {
      "color": "inherit",
      "display": "block",
      "fontSize": "16px",
      "fontWeight": "600",
      "marginBottom": "8px"
    },
    "classList": [],
    "text": "所在医院",
    "level": "title-5",
    "_parentId": "container7",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "button1": {
    "style": {
      "width": "100%",
      "display": "flex",
      "padding": "0",
      "alignItems": "center",
      "justifyContent": "space-between"
    },
    "classList": [],
    "icon": "td:chevron-right",
    "variant": "text",
    "iconType": "text-with-icon",
    "_parentId": "container7",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container8": {
    "style": {},
    "classList": [],
    "_parentId": "card2",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text6": {
    "style": {
      "color": "inherit",
      "display": "block",
      "fontSize": "16px",
      "fontWeight": "600",
      "marginBottom": "8px"
    },
    "classList": [],
    "text": "所在病区",
    "level": "title-5",
    "_parentId": "container8",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "button2": {
    "style": {
      "width": "100%",
      "display": "flex",
      "padding": "0",
      "alignItems": "center",
      "justifyContent": "space-between"
    },
    "classList": [],
    "icon": "td:chevron-right",
    "variant": "text",
    "iconType": "text-with-icon",
    "_parentId": "container8",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "card3": {
    "style": {
      "borderRadius": "12px",
      "marginBottom": "16px"
    },
    "classList": [],
    "showHeader": false,
    "_parentId": "container2",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdCard"
  },
  "text7": {
    "style": {
      "color": "inherit",
      "display": "block",
      "fontSize": "16px",
      "fontWeight": "600",
      "marginBottom": "12px"
    },
    "classList": [],
    "text": "提供服务",
    "level": "title-5",
    "_parentId": "card3",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container9": {
    "style": {
      "gap": "8px",
      "display": "flex",
      "flexWrap": "wrap"
    },
    "classList": [],
    "_parentId": "card3",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "container10": {
    "style": {
      "padding": "8px 12px",
      "borderRadius": "16px",
      "backgroundColor": "#e3f2fd"
    },
    "classList": [],
    "_parentId": "container9",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text8": {
    "style": {
      "color": "#1976d2",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "text": "住院护理",
    "_parentId": "container10",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container11": {
    "style": {
      "padding": "8px 12px",
      "borderRadius": "16px",
      "backgroundColor": "#e8f5e9"
    },
    "classList": [],
    "_parentId": "container9",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text9": {
    "style": {
      "color": "#2e7d32",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "text": "上门护理",
    "_parentId": "container11",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container12": {
    "style": {
      "padding": "8px 12px",
      "borderRadius": "16px",
      "backgroundColor": "#fff8e1"
    },
    "classList": [],
    "_parentId": "container9",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "text10": {
    "style": {
      "color": "#ff8f00",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "text": "医院陪诊",
    "_parentId": "container12",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "card4": {
    "style": {
      "borderRadius": "12px",
      "marginBottom": "16px"
    },
    "classList": [],
    "showHeader": false,
    "_parentId": "container2",
    "_order": 3,
    "widgetType": "gsd-h5-react:WdCard"
  },
  "text11": {
    "style": {
      "color": "inherit",
      "display": "block",
      "fontSize": "16px",
      "fontWeight": "600",
      "marginBottom": "12px"
    },
    "classList": [],
    "text": "资质认证",
    "level": "title-5",
    "_parentId": "card4",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container13": {
    "style": {
      "gap": "8px",
      "display": "flex",
      "flexDirection": "column"
    },
    "classList": [],
    "_parentId": "card4",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "container14": {
    "style": {
      "display": "flex",
      "alignItems": "center"
    },
    "classList": [],
    "_parentId": "container13",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon2": {
    "style": {
      "color": "#1976d2",
      "fontSize": "16px",
      "marginRight": "8px"
    },
    "classList": [],
    "name": "td:verified",
    "_parentId": "container14",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text12": {
    "style": {
      "color": "#212121",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "text": "护士执业证",
    "_parentId": "container14",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container15": {
    "style": {
      "display": "flex",
      "alignItems": "center"
    },
    "classList": [],
    "_parentId": "container13",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon3": {
    "style": {
      "color": "#1976d2",
      "fontSize": "16px",
      "marginRight": "8px"
    },
    "classList": [],
    "name": "td:verified",
    "_parentId": "container15",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text13": {
    "style": {
      "color": "#212121",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "text": "老年护理认证",
    "_parentId": "container15",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container3": {
    "style": {
      "gap": "12px",
      "display": "flex",
      "marginTop": "24px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 4,
    "widgetType": "gsd-h5-react:Container"
  },
  "button3": {
    "style": {
      "flex": "1",
      "color": "#ffffff",
      "backgroundColor": "#1976d2"
    },
    "classList": [],
    "icon": "td:call-1",
    "text": "联系护理员",
    "iconType": "text-with-icon",
    "_parentId": "container3",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button4": {
    "style": {
      "flex": "1",
      "color": "#1976d2",
      "borderColor": "#1976d2"
    },
    "classList": [],
    "icon": "td:calendar-1",
    "text": "预约服务",
    "variant": "outline",
    "iconType": "text-with-icon",
    "_parentId": "container3",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  }
}





const evtListeners = {"onbutton1$tap": [
      {
          key: 'wr40kp5on6y',
          sourceKey: 'platform:navigateTo',
          handler: function({args}){ return $app.navigateTo(...args)},
          args: {
  "params": [
    {
      "mode": "weDa",
      "pageId": "u_yi_yuan_xiang_qing",
      "params": {},
      "packageName": ""
    }
  ]
},
          argsBinds: {}
        }
    ],"onbutton2$tap": [
      {
          key: 'wxaY97sj6',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "navigateToWard";
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
  image1: { 'src': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.caregiver.avatar
    )}
  },
  text1: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.caregiver.name
    )}
  },
  text3: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.caregiver.rating
    )}
  },
  text4: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `| ${$comp.dataset.state.caregiver.serviceYears}年经验`
    )}
  },
  text2: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.caregiver.description
    )}
  },
  button1: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.caregiver.hospital
    )}
  },
  button2: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `${$comp.dataset.state.caregiver.department} ${$comp.dataset.state.caregiver.ward}`
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
    "caregiver": {
      "name": "caregiver",
      "varType": "state",
      "dataType": "object",
      "initialValue": {
        "name": "张护士",
        "ward": "3病区502室",
        "avatar": "avatar_female",
        "rating": 4.8,
        "hospital": "北京协和医院",
        "services": [
          "住院护理",
          "上门护理",
          "医院陪诊"
        ],
        "department": "内科",
        "description": "拥有5年临床护理经验，擅长老年病护理和术后康复护理。工作认真负责，深受患者好评。",
        "serviceYears": 5,
        "certification": [
          "护士执业证",
          "老年护理认证"
        ]
      }
    }
  },
  "params": {}
};

createComponent({
  key: 'block:u_yi_hu_yuan_detail',
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
