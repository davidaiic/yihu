import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanlderonLoad from './lowcode/handler/onLoad' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  onLoad: _hanlderonLoad, 
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
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "_parentId": "container1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container3": {
    "style": {
      "height": "300px",
      "display": "flex",
      "alignItems": "center",
      "flexDirection": "column",
      "justifyContent": "center"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon1": {
    "style": {
      "color": "#5e72e4",
      "fontSize": "48px",
      "animation": "spin 1s linear infinite"
    },
    "classList": [],
    "name": "td:loading",
    "_parentId": "container3",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text1": {
    "style": {
      "color": "#525f7f",
      "display": "inline-block",
      "fontSize": "16px",
      "marginTop": "16px"
    },
    "classList": [],
    "text": "加载中...",
    "_parentId": "container3",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container4": {
    "style": {
      "height": "300px",
      "display": "flex",
      "alignItems": "center",
      "flexDirection": "column",
      "justifyContent": "center"
    },
    "classList": [],
    "data": {
      "wx:elif": false
    },
    "_parentId": "container2",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon2": {
    "style": {
      "color": "#e9ecef",
      "fontSize": "64px"
    },
    "classList": [],
    "name": "td:location",
    "_parentId": "container4",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text2": {
    "style": {
      "color": "#212529",
      "display": "inline-block",
      "fontSize": "18px",
      "marginTop": "16px",
      "fontWeight": "600"
    },
    "classList": [],
    "text": "当前没有医院",
    "_parentId": "container4",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text3": {
    "style": {
      "color": "#6c757d",
      "display": "inline-block",
      "fontSize": "14px",
      "marginTop": "8px"
    },
    "classList": [],
    "text": "请重新定位或者输入别的关键词",
    "_parentId": "container4",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdText"
  },
  "button1": {
    "style": {
      "color": "#5e72e4",
      "width": "160px",
      "marginTop": "24px",
      "borderColor": "#5e72e4"
    },
    "classList": [],
    "text": "重新定位",
    "variant": "outline",
    "_parentId": "container4",
    "_order": 3,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container5": {
    "style": {
      "gap": "20px",
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
      "boxShadow": "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
      "borderRadius": "12px"
    },
    "classList": [],
    "showFooter": true,
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
  "text4": {
    "style": {
      "color": "#212529",
      "display": "block",
      "fontWeight": "600"
    },
    "classList": [],
    "level": "title-5",
    "_parentId": "container6",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container7": {
    "style": {
      "display": "flex",
      "alignItems": "center"
    },
    "classList": [],
    "_parentId": "container6",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon3": {
    "style": {
      "color": "#ffd600",
      "fontSize": "16px",
      "marginRight": "4px"
    },
    "classList": [],
    "name": "td:star-filled",
    "_parentId": "container7",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text5": {
    "style": {
      "color": "#6c757d",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "_parentId": "container7",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container8": {
    "style": {
      "display": "flex",
      "marginBottom": "12px"
    },
    "classList": [],
    "_parentId": "card1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon4": {
    "style": {
      "color": "#5e72e4",
      "fontSize": "16px",
      "marginRight": "8px"
    },
    "classList": [],
    "name": "td:location",
    "_parentId": "container8",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text6": {
    "style": {
      "flex": "1",
      "color": "#6c757d",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "_parentId": "container8",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container9": {
    "style": {
      "display": "flex",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "card1",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "container10": {
    "style": {
      "display": "flex",
      "alignItems": "center"
    },
    "classList": [],
    "_parentId": "container9",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon5": {
    "style": {
      "color": "#5e72e4",
      "fontSize": "16px",
      "marginRight": "8px"
    },
    "classList": [],
    "name": "td:call-1",
    "_parentId": "container10",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text7": {
    "style": {
      "color": "#6c757d",
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
      "display": "flex",
      "alignItems": "center"
    },
    "classList": [],
    "_parentId": "container9",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon6": {
    "style": {
      "color": "#5e72e4",
      "fontSize": "16px",
      "marginRight": "8px"
    },
    "classList": [],
    "name": "td:calendar-1",
    "_parentId": "container11",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text8": {
    "style": {
      "color": "#6c757d",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "_parentId": "container11",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "button2": {
    "style": {
      "color": "#ffffff",
      "padding": "8px 16px",
      "borderRadius": "6px",
      "backgroundColor": "#5e72e4"
    },
    "classList": [],
    "text": "预约",
    "_parentId": "card1",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  }
}





const evtListeners = {}

const behaviors = []

const properties = {
}

const events = [
]



const dataBinds = {
  container3: { '_waIf': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.loading
    )}
  },
  container4: { 'wx:elif': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      !$comp.dataset.state.loading && $comp.dataset.state.hospitals.length === 0
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
  text4: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.name
    )}
  },
  text5: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.rating
    )}
  },
  text6: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.address
    )}
  },
  text7: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.phone
    )}
  },
  text8: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.hours
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
    "loading": {
      "name": "loading",
      "varType": "state",
      "dataType": "boolean",
      "initialValue": true
    },
    "hospitals": {
      "name": "hospitals",
      "varType": "state",
      "dataType": "object",
      "initialValue": []
    }
  },
  "params": {}
};

createComponent({
  key: 'block:ucjw5kfasw9',
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
