import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanlderonSearch from './lowcode/handler/onSearch' 
import _hanlderonNextPage from './lowcode/handler/onNextPage' 
import _hanlderonPrevPage from './lowcode/handler/onPrevPage' 
import _hanlderonPageScroll from './lowcode/handler/onPageScroll' 
import _hanlderonKeywordChange from './lowcode/handler/onKeywordChange' 
import _hanlderonJHScroll from './lowcode/handler/onJHScroll' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  onSearch: _hanlderonSearch, 
  onNextPage: _hanlderonNextPage, 
  onPrevPage: _hanlderonPrevPage, 
  onPageScroll: _hanlderonPageScroll, 
  onKeywordChange: _hanlderonKeywordChange, 
  onJHScroll: _hanlderonJHScroll, 
}

const widgetProps = {
  "comtainer_u_an_ming_zi_cha_zhao": {
    "style": {},
    "classList": [],
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container8": {
    "style": {
      "top": "0",
      "left": "0",
      "right": "0",
      "height": "200rpx",
      "zIndex": "100",
      "display": "flex",
      "padding": "0 16px",
      "position": "fixed",
      "boxShadow": "0 1px 4px rgba(0,0,0,0.1)",
      "alignItems": "center",
      "transition": "opacity 0.3s ease",
      "flexDirection": "column",
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "_parentId": "comtainer_u_an_ming_zi_cha_zhao",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container9": {
    "style": {
      "width": "100%",
      "margin": "20rpx 0px 0px",
      "display": "flex",
      "alignItems": "center"
    },
    "classList": [],
    "data": {},
    "_parentId": "container8",
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
    "_parentId": "container9",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "text6": {
    "style": {
      "flex": "1",
      "color": "inherit",
      "display": "block",
      "textAlign": "left",
      "fontWeight": "500"
    },
    "classList": [],
    "text": "按名字查询医疗护理员",
    "level": "title-5",
    "maxLines": "1",
    "_parentId": "container9",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container10": {
    "style": {
      "gap": "8px",
      "width": "100%",
      "margin": "20rpx 0px 16px",
      "display": "flex",
      "alignItems": "flex-end"
    },
    "classList": [],
    "_parentId": "container8",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "input2": {
    "style": {
      "flex": "1",
      "width": "90%",
      "boxShadow": "0 1px 4px rgba(0,0,0,0.1)",
      "borderRadius": "8px"
    },
    "classList": [],
    "label": "标题",
    "status": "edit",
    "template": "inputBox",
    "prefixIcon": "success",
    "prefixType": "",
    "suffixIcon": "success",
    "suffixType": "",
    "placeholder": "请输入医疗护理员...",
    "requiredMsg": "该项为必填项",
    "labelVisible": false,
    "_parentId": "container10",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "button5": {
    "style": {
      "color": "#333",
      "fontSize": "20px",
      "minHeight": "initial"
    },
    "classList": [],
    "icon": "td:search",
    "variant": "text",
    "iconType": "icon-only",
    "_parentId": "container10",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "scrollView1": {
    "style": {},
    "classList": [],
    "bounces": true,
    "scrollX": false,
    "scrollY": true,
    "enhanced": false,
    "enableFlex": false,
    "pagingEnabled": false,
    "showScrollbar": true,
    "lowerThreshold": 50,
    "upperThreshold": 50,
    "enableBackToTop": false,
    "scrollAnchoring": false,
    "fastDeceleration": false,
    "refresherEnabled": false,
    "refresherThreshold": 50,
    "refresherTriggered": false,
    "refresherBackground": "#fff",
    "scrollWithAnimation": false,
    "refresherDefaultStyle": "block",
    "_parentId": "comtainer_u_an_ming_zi_cha_zhao",
    "_order": 1,
    "widgetType": "gsd-h5-react:ScrollView"
  },
  "container1": {
    "style": {
      "padding": "200rpx 0px 0px"
    },
    "classList": [
      "ai-generate-wrapper"
    ],
    "data": {},
    "_parentId": "scrollView1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container2": {
    "style": {
      "padding": "16px",
      "backgroundColor": "#f5f5f5"
    },
    "classList": [],
    "_parentId": "container1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container4": {
    "style": {},
    "classList": [],
    "_parentId": "container2",
    "_order": 0,
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
  "card1": {
    "style": {
      "margin": "10rpx 0px 0px"
    },
    "classList": [],
    "_parentId": "repeater1_item",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdCard"
  },
  "container6": {
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
      "width": "60px",
      "height": "60px",
      "borderRadius": "30px"
    },
    "classList": [],
    "fit": "cover",
    "_parentId": "container6",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdImage"
  },
  "container7": {
    "style": {
      "marginLeft": "12px"
    },
    "classList": [],
    "_parentId": "container6",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text1": {
    "style": {
      "color": "inherit",
      "display": "block"
    },
    "classList": [],
    "level": "title-5",
    "_parentId": "container7",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text2": {
    "style": {
      "color": "#ff9800",
      "display": "inline-block",
      "fontSize": "12px"
    },
    "classList": [],
    "_parentId": "container7",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text3": {
    "style": {
      "color": "#616161",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "_parentId": "card1",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text4": {
    "style": {
      "color": "#9e9e9e",
      "display": "inline-block",
      "fontSize": "12px",
      "marginTop": "8px"
    },
    "classList": [],
    "_parentId": "card1",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container5": {
    "style": {
      "display": "flex",
      "marginTop": "16px",
      "alignItems": "center",
      "justifyContent": "center"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "button2": {
    "style": {
      "color": "#2196f3",
      "minHeight": "initial"
    },
    "classList": [],
    "icon": "td:chevron-left",
    "variant": "text",
    "iconType": "icon-only",
    "_parentId": "container5",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "text5": {
    "style": {
      "color": "inherit",
      "margin": "0 12px",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "_parentId": "container5",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "button3": {
    "style": {
      "color": "#2196f3",
      "minHeight": "initial"
    },
    "classList": [],
    "icon": "td:chevron-right",
    "variant": "text",
    "iconType": "icon-only",
    "_parentId": "container5",
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
    ],"onbutton5$tap": [
      {
          key: 'wqflr9zj9vn',
          sourceKey: 'u_an_ming_zi_cha_zhao:onSearch',
          handler: handlers.onSearch,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onscrollView1$scroll": [
      {
          key: 'wky1dozhklt',
          sourceKey: 'u_an_ming_zi_cha_zhao:onPageScroll',
          handler: handlers.onPageScroll,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"oncard1$tap": [
      {
          key: 'wdl2sq0yty5',
          sourceKey: 'platform:navigateTo',
          handler: function({args}){ return $app.navigateTo(...args)},
          args: {
  "params": [
    {
      "mode": "weDa",
      "pageId": "u_yi_hu_yuan_detail",
      "params": {},
      "packageName": ""
    }
  ]
},
          argsBinds: {}
        }
    ],"onbutton2$tap": [
      {
          key: 'wjZneDkO3',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "handlers.onPrevPage";
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
    ],"onbutton3$tap": [
      {
          key: 'wtzBcP3sG',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "handlers.onNextPage";
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
  container8: { 'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.container8.style, ...(
`opacity: ${$comp.dataset.state.navOpacity}`
)}
    )}
  },
  input2: { 'inputValue': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.keyword
    )}
  },
  scrollView1: { 'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.scrollView1.style, ...(
({height: '100vh'})
)}
    )}
  },
  repeater1: { 'data': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.caregivers.slice(($comp.dataset.state.currentPage - 1) * $comp.dataset.state.pageSize, $comp.dataset.state.currentPage * $comp.dataset.state.pageSize)
    )}
  },
  repeater1_item: { '_waFor': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.caregivers.slice(($comp.dataset.state.currentPage - 1) * $comp.dataset.state.pageSize, $comp.dataset.state.currentPage * $comp.dataset.state.pageSize)
    )}
  },
  image1: { 'src': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.avatar
    )}
  },
  text1: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.name
    )}
  },
  text2: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `评分: ${$w.item_repeater1.rating}`
    )}
  },
  text3: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.skills
    )}
  },
  text4: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `科室: ${$w.item_repeater1.department}`
    )}
  },
  button2: { 'disabled': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.currentPage === 1
    )}
  },
  text5: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `第${$comp.dataset.state.currentPage}页`
    )}
  },
  button3: { 'disabled': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.currentPage === Math.ceil($comp.dataset.state.caregivers.length / $comp.dataset.state.pageSize)
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
    "keyword": {
      "name": "keyword",
      "label": "",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "pageSize": {
      "name": "pageSize",
      "varType": "state",
      "dataType": "number",
      "initialValue": 5
    },
    "caregivers": {
      "name": "caregivers",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        {
          "id": 1,
          "name": "李小华",
          "avatar": "avatar_female",
          "rating": 4.9,
          "skills": "擅长静脉输液、慢性病管理及老人日常护理，具备丰富的ICU护理经验。",
          "department": "内科"
        },
        {
          "id": 2,
          "name": "王大力",
          "avatar": "avatar_male",
          "rating": 4.8,
          "skills": "擅长术后伤口护理、康复训练及疼痛管理，熟悉手术室流程。",
          "department": "外科"
        },
        {
          "id": 3,
          "name": "张美玲",
          "avatar": "avatar_female",
          "rating": 4.7,
          "skills": "擅长儿科护理、新生儿黄疸观察及母乳喂养指导，耐心细致。",
          "department": "儿科"
        },
        {
          "id": 4,
          "name": "赵英杰",
          "avatar": "avatar_male",
          "rating": 4.8,
          "skills": "擅长重症监护、生命体征监测及气管插管后护理。",
          "department": "ICU"
        },
        {
          "id": 5,
          "name": "孙晓萍",
          "avatar": "avatar_female",
          "rating": 4.6,
          "skills": "擅长老年痴呆症护理、跌倒防护及营养配餐。",
          "department": "老年科"
        }
      ]
    },
    "navOpacity": {
      "name": "navOpacity",
      "varType": "state",
      "dataType": "number",
      "initialValue": 1
    },
    "currentPage": {
      "name": "currentPage",
      "varType": "state",
      "dataType": "number",
      "initialValue": 1
    },
    "searchQuery": {
      "name": "searchQuery",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "scrollPosition": {
      "name": "scrollPosition",
      "varType": "state",
      "dataType": "number",
      "initialValue": 0
    }
  },
  "params": {}
};

createComponent({
  key: 'block:u_an_ming_zi_cha_zhao',
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
