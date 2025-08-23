import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanlderonEdit from './lowcode/handler/onEdit' 
import _hanlderonDelete from './lowcode/handler/onDelete' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  onEdit: _hanlderonEdit, 
  onDelete: _hanlderonDelete, 
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
      "background": "#f8f9fa"
    },
    "classList": [],
    "_parentId": "container1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "card1": {
    "style": {
      "boxShadow": "0 2px 8px rgba(0,0,0,0.1)",
      "borderRadius": "12px",
      "marginBottom": "16px"
    },
    "classList": [],
    "showFooter": true,
    "_parentId": "container2",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdCard"
  },
  "container3": {
    "style": {
      "display": "flex",
      "padding": "12px",
      "alignItems": "center"
    },
    "classList": [],
    "_parentId": "card1",
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
    "src": "https://weda.cloud.tencent.com/ai-photo/avatar_female_6.jpg?imageMogr2/quality/80%7CimageMogr2/crop/1200px",
    "_parentId": "container3",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdImage"
  },
  "container4": {
    "style": {
      "marginLeft": "12px"
    },
    "classList": [],
    "_parentId": "container3",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text1": {
    "style": {
      "color": "#2d3436",
      "display": "block",
      "fontSize": "18px"
    },
    "classList": [],
    "level": "title-5",
    "_parentId": "container4",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text2": {
    "style": {
      "color": "#636e72",
      "display": "inline-block",
      "marginTop": "4px"
    },
    "classList": [],
    "_parentId": "container4",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container5": {
    "style": {
      "position": "relative"
    },
    "classList": [],
    "_parentId": "card1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container6": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "marginBottom": "16px"
    },
    "classList": [],
    "_parentId": "container5",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon1": {
    "style": {
      "color": "#0984e3",
      "fontSize": "20px"
    },
    "classList": [],
    "name": "td:calendar-1",
    "_parentId": "container6",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text3": {
    "style": {
      "color": "#636e72",
      "display": "inline-block",
      "marginLeft": "8px"
    },
    "classList": [],
    "_parentId": "container6",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text4": {
    "style": {
      "color": "#636e72",
      "display": "inline-block",
      "marginLeft": "auto"
    },
    "classList": [],
    "_parentId": "container6",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container7": {
    "style": {
      "borderLeft": "2px solid #eee",
      "marginLeft": "9px"
    },
    "classList": [],
    "_parentId": "container5",
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
      "position": "relative",
      "paddingLeft": "24px",
      "marginBottom": "24px"
    },
    "classList": [],
    "_parentId": "repeater1_item",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container9": {
    "style": {
      "top": "4px",
      "left": "-8px",
      "width": "14px",
      "height": "14px",
      "position": "absolute",
      "background": "#0984e3",
      "borderRadius": "50%"
    },
    "classList": [],
    "_parentId": "container8",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
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
  "icon2": {
    "style": {
      "color": "#0984e3",
      "fontSize": "18px",
      "marginRight": "8px"
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
  "text5": {
    "style": {
      "color": "#2d3436",
      "display": "inline-block",
      "fontWeight": "500"
    },
    "classList": [],
    "_parentId": "container11",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text6": {
    "style": {
      "color": "#636e72",
      "display": "block",
      "marginTop": "4px"
    },
    "classList": [],
    "_parentId": "container11",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container13": {
    "style": {},
    "classList": [],
    "data": {},
    "_parentId": "card1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container14": {
    "style": {},
    "classList": [],
    "data": {},
    "_parentId": "container13",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text7": {
    "style": {
      "color": "#2d3436",
      "display": "block"
    },
    "classList": [],
    "text": "特别备注",
    "level": "title-6",
    "_parentId": "container14",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container15": {
    "style": {},
    "classList": [],
    "data": {},
    "_parentId": "container13",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text8": {
    "style": {
      "color": "#636e72",
      "display": "inline-block",
      "lineHeight": "1.6em"
    },
    "classList": [],
    "_parentId": "container15",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container12": {
    "style": {
      "gap": "12px",
      "margin": "16px 0px 0px",
      "display": "flex"
    },
    "classList": [],
    "_parentId": "card1",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "button1": {
    "style": {
      "flex": "1",
      "borderColor": "#0984e3"
    },
    "classList": [],
    "_staticResourceAttribute": [
      "sendMessageImg",
      "iconSrc"
    ],
    "icon": "td:arrow-left",
    "text": "返回",
    "variant": "outline",
    "iconType": "text-with-icon",
    "_parentId": "container12",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button2": {
    "style": {
      "flex": "1",
      "borderColor": "#0984e3"
    },
    "classList": [],
    "_staticResourceAttribute": [
      "sendMessageImg",
      "iconSrc"
    ],
    "icon": "td:arrow-left",
    "text": "返回",
    "variant": "outline",
    "iconType": "text-with-icon",
    "_parentId": "container12",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  }
}





const evtListeners = {"onbutton1$tap": [
      {
          key: 'wCHpNdxdN',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "onEdit";
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
    ],"onbutton2$tap": [
      {
          key: 'wq6qsdpop71',
          sourceKey: 'platform:navigateBack',
          handler: function({args}){ return $app.navigateBack(...args)},
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
  text1: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.logDetail.patient
    )}
  },
  text2: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.logDetail.careType
    )}
  },
  text3: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.logDetail.date
    )}
  },
  text4: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.logDetail.duration
    )}
  },
  repeater1: { 'data': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.logDetail.steps
    )}
  },
  repeater1_item: { '_waFor': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.logDetail.steps
    )}
  },
  icon2: { 'name': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.icon
    )}
  },
  text5: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.time
    )}
  },
  text6: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.content
    )}
  },
  text8: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.logDetail.memo
    )}
  },
  button1: { '_waDisplay': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      false
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ((display)=>{ const style = {...widgetProps.button1.style}; if(!display) {style.display = "none"}; return style })((
false
))
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
    "logDetail": {
      "name": "logDetail",
      "varType": "state",
      "dataType": "object",
      "initialValue": {
        "date": "2024-02-15 14:30",
        "memo": "患者对冷敷耐受良好，需继续观察伤口愈合情况",
        "nurse": "王丽华",
        "steps": [
          {
            "icon": "td:verified",
            "time": "14:35",
            "content": "生命体征监测（血压120/80mmHg，心率72bpm）"
          },
          {
            "icon": "td:success-fill",
            "time": "14:45",
            "content": "伤口消毒及敷料更换"
          },
          {
            "icon": "td:bookmark-checked",
            "time": "15:00",
            "content": "康复训练指导（关节活动度练习）"
          }
        ],
        "patient": "李雪梅",
        "careType": "术后康复护理",
        "duration": "45分钟"
      }
    }
  },
  "params": {}
};

createComponent({
  key: 'block:9krWJbkWu_hu_li_ri_zhi_xiang_',
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
