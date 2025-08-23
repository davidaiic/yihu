import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanldersetRating from './lowcode/handler/setRating' 
import _hanldersubmitReview from './lowcode/handler/submitReview' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  setRating: _hanldersetRating, 
  submitReview: _hanldersubmitReview, 
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
  "card1": {
    "style": {
      "boxShadow": "0 2px 8px rgba(0,0,0,0.1)",
      "marginBottom": "24px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdCard"
  },
  "container3": {
    "style": {
      "gap": "12px",
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
      "width": "56px",
      "height": "56px",
      "borderRadius": "28px"
    },
    "classList": [],
    "fit": "cover",
    "src": "https://weda.cloud.tencent.com/ai-photo/abstract_space_themed_art_1.jpg?imageMogr2/quality/80%7CimageMogr2/crop/1200px",
    "_parentId": "container3",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdImage"
  },
  "container4": {
    "style": {},
    "classList": [],
    "_parentId": "container3",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text2": {
    "style": {
      "color": "#1a237e",
      "display": "block"
    },
    "classList": [],
    "text": "张护理师",
    "level": "title-5",
    "_parentId": "container4",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text3": {
    "style": {
      "color": "#616161",
      "display": "inline-block",
      "fontSize": "12px"
    },
    "classList": [],
    "text": "高级老年护理专员",
    "_parentId": "container4",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container5": {
    "style": {
      "gap": "8px",
      "display": "flex",
      "alignItems": "center"
    },
    "classList": [],
    "_parentId": "card1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text4": {
    "style": {
      "color": "#424242",
      "display": "inline-block"
    },
    "classList": [],
    "text": "综合评分：",
    "_parentId": "container5",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container6": {
    "style": {
      "gap": "4px",
      "display": "flex"
    },
    "classList": [],
    "_parentId": "container5",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon1": {
    "style": {
      "color": "#ffb300",
      "fontSize": "20px"
    },
    "classList": [],
    "name": "td:star-filled",
    "_parentId": "container6",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text5": {
    "style": {
      "color": "#1a237e",
      "display": "inline-block",
      "fontWeight": "600"
    },
    "classList": [],
    "_parentId": "container6",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "card2": {
    "style": {
      "marginBottom": "24px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdCard"
  },
  "text6": {
    "style": {
      "color": "#1a237e",
      "display": "block"
    },
    "classList": [],
    "text": "发表您的评价",
    "level": "title-6",
    "_parentId": "card2",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container7": {
    "style": {
      "marginBottom": "16px"
    },
    "classList": [],
    "_parentId": "card2",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text7": {
    "style": {
      "color": "#616161",
      "display": "inline-block",
      "marginBottom": "8px"
    },
    "classList": [],
    "text": "服务评分：",
    "_parentId": "container7",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container9": {
    "style": {
      "gap": "8px",
      "display": "flex"
    },
    "classList": [],
    "_parentId": "container7",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "repeater2": {
    "style": {},
    "classList": [],
    "suffix": "repeater2",
    "forItem": "item_repeater2",
    "forIndex": "index_repeater2",
    "_parentId": "container9",
    "_order": 0,
    "widgetType": "gsd-h5-react:Repeater"
  },
  "repeater2_item": {
    "style": {},
    "classList": [],
    "_parentId": "repeater2",
    "widgetType": "gsd-h5-react:RepeaterItem"
  },
  "button2": {
    "style": {
      "minHeight": "auto"
    },
    "classList": [],
    "icon": "td:star-filled",
    "variant": "text",
    "iconType": "icon-only",
    "_parentId": "repeater2_item",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container8": {
    "style": {
      "marginBottom": "16px"
    },
    "classList": [],
    "_parentId": "card2",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text8": {
    "style": {
      "color": "#616161",
      "display": "inline-block",
      "marginBottom": "8px"
    },
    "classList": [],
    "text": "详细评价：",
    "_parentId": "container8",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "textarea1": {
    "style": {
      "border": "1px solid #e0e0e0",
      "padding": "8px",
      "minHeight": "100px",
      "borderRadius": "8px"
    },
    "classList": [],
    "placeholder": "请输入您的服务体验（至少20字）",
    "labelVisible": false,
    "_parentId": "container8",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdTextarea"
  },
  "button1": {
    "style": {
      "color": "white",
      "borderRadius": "8px",
      "backgroundColor": "#1a237e"
    },
    "classList": [],
    "text": "提交评价",
    "_parentId": "card2",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "text1": {
    "style": {
      "color": "#1a237e",
      "display": "block",
      "marginBottom": "16px"
    },
    "classList": [],
    "text": "历史评价",
    "level": "title-5",
    "_parentId": "container2",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdText"
  },
  "repeater1": {
    "style": {},
    "classList": [],
    "suffix": "repeater1",
    "forItem": "item_repeater1",
    "forIndex": "index_repeater1",
    "_parentId": "container2",
    "_order": 3,
    "widgetType": "gsd-h5-react:Repeater"
  },
  "repeater1_item": {
    "style": {},
    "classList": [],
    "_parentId": "repeater1",
    "widgetType": "gsd-h5-react:RepeaterItem"
  },
  "card3": {
    "style": {
      "marginBottom": "16px"
    },
    "classList": [],
    "_parentId": "repeater1_item",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdCard"
  },
  "container10": {
    "style": {
      "gap": "12px",
      "display": "flex",
      "alignItems": "center"
    },
    "classList": [],
    "_parentId": "card3",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "image2": {
    "style": {
      "width": "40px",
      "height": "40px",
      "borderRadius": "20px"
    },
    "classList": [],
    "fit": "cover",
    "_parentId": "container10",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdImage"
  },
  "container11": {
    "style": {},
    "classList": [],
    "_parentId": "container10",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text9": {
    "style": {
      "color": "#1a237e",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "container11",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container12": {
    "style": {
      "gap": "4px",
      "display": "flex",
      "alignItems": "center"
    },
    "classList": [],
    "_parentId": "container11",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon2": {
    "style": {
      "color": "#ffb300",
      "fontSize": "16px"
    },
    "classList": [],
    "name": "td:star-filled",
    "_parentId": "container12",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text10": {
    "style": {
      "color": "#616161",
      "display": "inline-block",
      "fontSize": "12px"
    },
    "classList": [],
    "_parentId": "container12",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text11": {
    "style": {
      "color": "#424242",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "card3",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text12": {
    "style": {
      "color": "#9e9e9e",
      "display": "inline-block",
      "fontSize": "12px",
      "marginTop": "8px"
    },
    "classList": [],
    "_parentId": "card3",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  }
}





const evtListeners = {"onbutton2$tap": [
      {
          key: 'wKmzxfJhQ',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "setRating";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        stars: $w.item_repeater2,
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
          key: 'w4CjKBoeP',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "submitReview";
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
  text5: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      4.8.toFixed(1)
    )}
  },
  repeater2: { 'data': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      [1, 2, 3, 4, 5]
    )}
  },
  repeater2_item: { '_waFor': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      [1, 2, 3, 4, 5]
    )}
  },
  button2: { 'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.button2.style, ...(
`color: ${$comp.dataset.state.rating >= $w.item_repeater2 ? "#ffb300" : "#e0e0e0"}`
)}
    )}
  },
  textarea1: { 'value': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.comment
    )}
  },
  repeater1: { 'data': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.reviews
    )}
  },
  repeater1_item: { '_waFor': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.reviews
    )}
  },
  image2: { 'src': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.avatar
    )}
  },
  text9: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.name
    )}
  },
  text10: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.rating.toFixed(1)
    )}
  },
  text11: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.comment
    )}
  },
  text12: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.time
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
    "rating": {
      "name": "rating",
      "varType": "state",
      "dataType": "number",
      "initialValue": 0
    },
    "comment": {
      "name": "comment",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "reviews": {
      "name": "reviews",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        {
          "name": "李女士",
          "time": "2024-02-15",
          "avatar": "avatar_female",
          "rating": 4.8,
          "comment": "护理非常专业，对老人特别有耐心，会定期反馈健康状况"
        },
        {
          "name": "张先生",
          "time": "2024-01-28",
          "avatar": "avatar_male",
          "rating": 5,
          "comment": "疫情期间上门服务非常及时，消毒措施做得很到位"
        },
        {
          "name": "王阿姨",
          "time": "2023-12-10",
          "avatar": "silhouette_female",
          "rating": 4.5,
          "comment": "康复训练指导专业，母亲腿脚灵活度明显改善"
        }
      ]
    }
  },
  "params": {}
};

createComponent({
  key: 'block:u_fu_wu_ping_jia_ye',
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
