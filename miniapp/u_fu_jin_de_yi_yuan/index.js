import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanlderonPageScroll from './lowcode/handler/onPageScroll' 
import _hanlderonPageLoad from './lowcode/handler/onPageLoad' 
import _hanlderonSearchClick from './lowcode/handler/onSearchClick' 
import _hanlderonPageChange from './lowcode/handler/onPageChange' 
import _hanlderloadpage from './lowcode/handler/loadpage' 
import _hanlderonKeywordChange from './lowcode/handler/onKeywordChange' 
import _hanlderonSearch from './lowcode/handler/onSearch' 
import _hanlderonPrevPage from './lowcode/handler/onPrevPage' 
import _hanlderonNextPage from './lowcode/handler/onNextPage' 
import _hanlderonBackwithHospitalInfo from './lowcode/handler/onBackwithHospitalInfo' 
import _hanldernavigateToHospital from './lowcode/handler/navigateToHospital' 
import _hanlderonJHScroll from './lowcode/handler/onJHScroll' 
import _hanlderfetchNearby from './lowcode/handler/fetchNearby' 
import _hanlderonRefreshLocation from './lowcode/handler/onRefreshLocation' 
import _hanldernavigateToLocationAuth from './lowcode/handler/navigateToLocationAuth' 
import _hanlderonGotoHospitalDetail from './lowcode/handler/onGotoHospitalDetail' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  onPageScroll: _hanlderonPageScroll, 
  onPageLoad: _hanlderonPageLoad, 
  onSearchClick: _hanlderonSearchClick, 
  onPageChange: _hanlderonPageChange, 
  loadpage: _hanlderloadpage, 
  onKeywordChange: _hanlderonKeywordChange, 
  onSearch: _hanlderonSearch, 
  onPrevPage: _hanlderonPrevPage, 
  onNextPage: _hanlderonNextPage, 
  onBackwithHospitalInfo: _hanlderonBackwithHospitalInfo, 
  navigateToHospital: _hanldernavigateToHospital, 
  onJHScroll: _hanlderonJHScroll, 
  fetchNearby: _hanlderfetchNearby, 
  onRefreshLocation: _hanlderonRefreshLocation, 
  navigateToLocationAuth: _hanldernavigateToLocationAuth, 
  onGotoHospitalDetail: _hanlderonGotoHospitalDetail, 
}

const widgetProps = {
  "comtainer_u_fu_jin_de_yi_yuan": {
    "style": {},
    "classList": [],
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container3": {
    "style": {
      "top": "0",
      "left": "0",
      "right": "0",
      "height": "260rpx",
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
    "_parentId": "comtainer_u_fu_jin_de_yi_yuan",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container11": {
    "style": {
      "width": "100%",
      "margin": "0px 0px 0px",
      "display": "flex",
      "flexDirection": "column",
      "justifyContent": "flex-start"
    },
    "classList": [],
    "_parentId": "container3",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container7": {
    "style": {
      "display": "flex",
      "flexDirection": "row"
    },
    "classList": [],
    "data": {},
    "_parentId": "container11",
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
    "_parentId": "container7",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container1": {
    "style": {
      "width": "80%",
      "display": "flex",
      "alignItems": "center",
      "flexDirection": "row"
    },
    "classList": [],
    "data": {},
    "_parentId": "container7",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon2": {
    "style": {
      "color": "#3a86ff",
      "fontSize": "20px",
      "marginRight": "8px"
    },
    "classList": [],
    "name": "td:location",
    "_parentId": "container1",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text4": {
    "style": {
      "color": "inherit",
      "display": "block",
      "fontWeight": "500"
    },
    "classList": [],
    "text": "当前位置",
    "level": "title-5",
    "maxLines": "1",
    "_parentId": "container1",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container4": {
    "style": {},
    "classList": [],
    "data": {},
    "_parentId": "container11",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text3": {
    "style": {
      "color": "#666666",
      "margin": "6px 0px 16px",
      "display": "block",
      "fontSize": "14px"
    },
    "classList": [],
    "_parentId": "container4",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container2": {
    "style": {
      "width": "100%",
      "display": "flex",
      "padding": "0px 16px 0px",
      "borderRadius": "12px",
      "flexDirection": "row",
      "justifyContent": "center",
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "_parentId": "container3",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "button1": {
    "style": {
      "borderColor": "#3a86ff"
    },
    "classList": [],
    "icon": "td:refresh",
    "text": "按当前位置刷新",
    "variant": "outline",
    "iconType": "text-with-icon",
    "_parentId": "container2",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button6": {
    "style": {
      "borderColor": "#3a86ff"
    },
    "classList": [],
    "_staticResourceAttribute": [
      "sendMessageImg",
      "iconSrc"
    ],
    "icon": "td:location",
    "text": "授权和管理位置",
    "iconType": "text-with-icon",
    "_parentId": "container2",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "scrollView1": {
    "style": {
      "flex": "1",
      "margin": "0 0px 0px",
      "padding": "0px 0px 0px"
    },
    "classList": [],
    "scrollX": false,
    "scrollY": true,
    "enhanced": false,
    "enableFlex": false,
    "showScrollbar": true,
    "lowerThreshold": 50,
    "upperThreshold": 50,
    "enableBackToTop": false,
    "scrollAnchoring": false,
    "refresherEnabled": false,
    "refresherThreshold": 50,
    "refresherTriggered": false,
    "refresherBackground": "#fff",
    "scrollWithAnimation": false,
    "refresherDefaultStyle": "block",
    "_parentId": "comtainer_u_fu_jin_de_yi_yuan",
    "_order": 1,
    "widgetType": "gsd-h5-react:ScrollView"
  },
  "container5": {
    "style": {
      "padding": "260rpx 0px 0px"
    },
    "classList": [
      "ai-generate-wrapper"
    ],
    "data": {},
    "_parentId": "scrollView1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container18": {
    "style": {
      "height": "300px",
      "display": "flex",
      "alignItems": "center",
      "flexDirection": "column",
      "justifyContent": "center"
    },
    "classList": [],
    "_parentId": "container5",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon3": {
    "style": {
      "color": "#5e72e4",
      "fontSize": "48px",
      "animation": "spin 1s linear infinite"
    },
    "classList": [],
    "name": "td:loading",
    "_parentId": "container18",
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
    "_parentId": "container18",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container19": {
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
    "_parentId": "container5",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon4": {
    "style": {
      "color": "#e9ecef",
      "fontSize": "64px"
    },
    "classList": [],
    "name": "td:location",
    "_parentId": "container19",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text5": {
    "style": {
      "color": "#212529",
      "display": "inline-block",
      "fontSize": "18px",
      "marginTop": "16px",
      "fontWeight": "600"
    },
    "classList": [],
    "text": "没有找到附近的医院",
    "maxLines": "1",
    "_parentId": "container19",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text6": {
    "style": {
      "color": "#6c757d",
      "display": "inline-block",
      "fontSize": "14px",
      "marginTop": "8px"
    },
    "classList": [],
    "text": "请重新定位",
    "maxLines": "1",
    "_parentId": "container19",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdText"
  },
  "button3": {
    "style": {
      "color": "#5e72e4",
      "width": "160px",
      "marginTop": "24px",
      "borderColor": "#5e72e4"
    },
    "classList": [],
    "text": "重新定位",
    "variant": "outline",
    "_parentId": "container19",
    "_order": 3,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container6": {
    "style": {
      "padding": "16px",
      "minHeight": "100vh",
      "backgroundColor": "#f5f5f5"
    },
    "classList": [],
    "_parentId": "container5",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "container8": {
    "style": {},
    "classList": [],
    "_parentId": "container6",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "repeater1": {
    "style": {},
    "classList": [],
    "suffix": "repeater1",
    "forItem": "item_repeater1",
    "forIndex": "index_repeater1",
    "_parentId": "container8",
    "_order": 0,
    "widgetType": "gsd-h5-react:Repeater"
  },
  "repeater1_item": {
    "style": {},
    "classList": [],
    "_parentId": "repeater1",
    "widgetType": "gsd-h5-react:RepeaterItem"
  },
  "container10": {
    "style": {
      "padding": "16px",
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "borderRadius": "12px",
      "marginBottom": "16px",
      "backgroundColor": "#fff"
    },
    "classList": [],
    "_parentId": "repeater1_item",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "image4": {
    "style": {
      "width": "100%",
      "height": "120px",
      "objectFit": "cover",
      "borderRadius": "8px"
    },
    "classList": [],
    "fit": "cover",
    "_parentId": "container10",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdImage"
  },
  "text8": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "fontSize": "18px",
      "marginTop": "8px",
      "fontWeight": "600"
    },
    "classList": [],
    "_parentId": "container10",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text9": {
    "style": {
      "color": "#888",
      "display": "inline-block",
      "fontSize": "14px",
      "marginTop": "4px"
    },
    "classList": [],
    "_parentId": "container10",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text10": {
    "style": {
      "color": "#555",
      "margin": "6px 0",
      "display": "inline-block",
      "fontSize": "13px",
      "lineHeight": "1.4em"
    },
    "classList": [],
    "space": false,
    "_parentId": "container10",
    "_order": 3,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text11": {
    "style": {
      "color": "#666",
      "display": "inline-block",
      "fontSize": "12px"
    },
    "classList": [],
    "_parentId": "container10",
    "_order": 4,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text12": {
    "style": {
      "color": "#666",
      "display": "inline-block",
      "fontSize": "12px"
    },
    "classList": [],
    "_parentId": "container10",
    "_order": 5,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container12": {
    "style": {
      "padding": "10px 6px 4px",
      "borderRadius": "12px",
      "backgroundColor": "#f5f7fa"
    },
    "classList": [],
    "_parentId": "container10",
    "_order": 6,
    "widgetType": "gsd-h5-react:Container"
  },
  "container13": {
    "style": {
      "gap": "8px",
      "display": "flex",
      "flexWrap": "wrap"
    },
    "classList": [],
    "_parentId": "container12",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "repeater2": {
    "style": {},
    "classList": [],
    "suffix": "repeater2",
    "forItem": "item_repeater2",
    "forIndex": "index_repeater2",
    "_parentId": "container13",
    "_order": 0,
    "widgetType": "gsd-h5-react:Repeater"
  },
  "repeater2_item": {
    "style": {},
    "classList": [],
    "_parentId": "repeater2",
    "widgetType": "gsd-h5-react:RepeaterItem"
  },
  "container14": {
    "style": {
      "display": "flex",
      "padding": "6px",
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "alignItems": "center",
      "borderRadius": "20px",
      "backgroundColor": "white"
    },
    "classList": [],
    "_parentId": "repeater2_item",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon1": {
    "style": {
      "fontSize": "16px",
      "marginRight": "4px"
    },
    "classList": [],
    "_parentId": "container14",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text2": {
    "style": {
      "color": "#333",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "_parentId": "container14",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container15": {
    "style": {
      "right": "0px",
      "bottom": "0px",
      "zIndex": 1,
      "display": "flex",
      "padding": "10px 2px 0px",
      "position": "relative",
      "justifyContent": "center"
    },
    "classList": [],
    "_parentId": "container10",
    "_order": 7,
    "widgetType": "gsd-h5-react:Container"
  },
  "button7": {
    "style": {
      "color": "white",
      "width": "40%",
      "height": "48px",
      "margin": "0px 20px 0px 0px",
      "fontSize": "16px",
      "background": "rgb(187, 187, 187)",
      "fontWeight": "500",
      "borderRadius": "24px"
    },
    "classList": [],
    "_staticResourceAttribute": [
      "sendMessageImg",
      "iconSrc"
    ],
    "icon": "td:view-list",
    "text": "详情页",
    "iconType": "text-with-icon",
    "_parentId": "container15",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button8": {
    "style": {
      "color": "white",
      "width": "55%",
      "height": "48px",
      "fontSize": "16px",
      "boxShadow": "0 4px 12px rgba(58, 134, 255, 0.3)",
      "background": "#3A86FF",
      "fontWeight": "500",
      "borderRadius": "24px"
    },
    "classList": [],
    "_staticResourceAttribute": [
      "sendMessageImg",
      "iconSrc"
    ],
    "icon": "td:hospital",
    "text": "选择该医院",
    "iconType": "text-with-icon",
    "_parentId": "container15",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container9": {
    "style": {
      "gap": "12px",
      "display": "flex",
      "padding": "16px 0",
      "alignItems": "center",
      "justifyContent": "center"
    },
    "classList": [],
    "_parentId": "container6",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "button4": {
    "style": {},
    "classList": [],
    "text": "上一页",
    "_parentId": "container9",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "text13": {
    "style": {
      "color": "inherit",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "container9",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "button5": {
    "style": {},
    "classList": [],
    "text": "下一页",
    "_parentId": "container9",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdButton"
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
    ],"onbutton1$tap": [
      {
          key: 'w8pojr963hd',
          sourceKey: 'u_fu_jin_de_yi_yuan:loadpage',
          handler: handlers.loadpage,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton6$tap": [
      {
          key: 'w6MpH9TQL',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "navigateToLocationAuth";
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
    ],"onscrollView1$scroll": [
      {
          key: 'w2hzmjoycc3',
          sourceKey: 'u_fu_jin_de_yi_yuan:onJHScroll',
          handler: handlers.onJHScroll,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton3$tap": [
      {
          key: 'wckzv5823qa',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "navigateToLocationAuth";
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
    ],"oncontainer10$tap": [
      {
          key: 'wln7ta2vmcz',
          sourceKey: 'u_fu_jin_de_yi_yuan:onBackwithHospitalInfo',
          handler: handlers.onBackwithHospitalInfo,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {'params.0.target': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ({
  deptId: $w.item_repeater1
})
    )}}
        }
    ],"onbutton7$tap": [
      {
          key: 'whUp9fXKc',
          sourceKey: 'u_fu_jin_de_yi_yuan:onGotoHospitalDetail',
          handler: handlers.onGotoHospitalDetail,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {'params.0.target': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ({
  deptId: $w.item_repeater1
})
    )}}
        }
    ],"onbutton8$tap": [
      {
          key: 'wvyf362ybxw',
          sourceKey: 'u_fu_jin_de_yi_yuan:onBackwithHospitalInfo',
          handler: handlers.onBackwithHospitalInfo,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {'params.0.target': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ({
  deptId: $w.item_repeater1
})
    )}}
        }
    ],"onbutton4$tap": [
      {
          key: 'wb05hqvdnjz',
          sourceKey: 'u_fu_jin_de_yi_yuan:onPrevPage',
          handler: handlers.onPrevPage,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton5$tap": [
      {
          key: 'wtgfndllv06',
          sourceKey: 'u_fu_jin_de_yi_yuan:onNextPage',
          handler: handlers.onNextPage,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"on__comp__$attached": [
      {
          key: 'wbzg524eh3p',
          sourceKey: 'u_fu_jin_de_yi_yuan:onPageLoad',
          handler: handlers.onPageLoad,
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
  container3: { 'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.container3.style, ...(
`opacity: ${$comp.dataset.state.navOpacity}`
)}
    )}
  },
  text3: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.app.dataset.state.addressText
    )}
  },
  scrollView1: { 'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.scrollView1.style, ...(
({height: '100vh'})
)}
    )}
  },
  container18: { '_waIf': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.loading
    )},'_waDisplay': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.loading
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ((display)=>{ const style = {...widgetProps.container18.style}; if(!display) {style.display = "none"}; return style })((
$comp.dataset.state.loading
))
    )}
  },
  container19: { 'wx:elif': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      !$comp.dataset.state.loading && $comp.dataset.state.hospitals.length === 0
    )},'_waDisplay': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      !$comp.dataset.state.loading && $comp.dataset.state.hospitals.length === 0
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ((display)=>{ const style = {...widgetProps.container19.style}; if(!display) {style.display = "none"}; return style })((
!$comp.dataset.state.loading && $comp.dataset.state.hospitals.length === 0
))
    )}
  },
  container6: { '_waDisplay': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      !$comp.dataset.state.loading && $comp.dataset.state.hospitals.length !== 0
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ((display)=>{ const style = {...widgetProps.container6.style}; if(!display) {style.display = "none"}; return style })((
!$comp.dataset.state.loading && $comp.dataset.state.hospitals.length !== 0
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
  image4: { 'src': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.imgUrl
    )}
  },
  text8: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.officialName
    )}
  },
  text9: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.rank
    )}
  },
  text10: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.desc
    )}
  },
  text11: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `评分：5.0  `
    )}
  },
  text12: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `地址：${$w.item_repeater1.address}`
    )}
  },
  repeater2: { 'data': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.tags
    )}
  },
  repeater2_item: { '_waFor': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.tags
    )}
  },
  icon1: { 'name': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater2.icon
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.icon1.style, ...(
`color: ${$w.item_repeater2.color}`
)}
    )}
  },
  text2: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater2.text
    )}
  },
  text13: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `第${$comp.dataset.state.currentPage}/${$comp.dataset.state.totalPages}页`
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
    "tags": {
      "name": "tags",
      "label": "",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        {
          "icon": "td:verified",
          "text": "公立医院",
          "color": "#4CAF50"
        },
        {
          "icon": "td:wallet",
          "text": "医保定点",
          "color": "#2196F3"
        },
        {
          "icon": "td:notification-filled",
          "text": "24小时急诊",
          "color": "#F44336"
        },
        {
          "icon": "td:internet",
          "text": "免费WiFi",
          "color": "#673AB7"
        },
        {
          "icon": "td:houses",
          "text": "无障碍设施",
          "color": "#FF9800"
        }
      ],
      "enableSyncLocal": false
    },
    "keyword": {
      "name": "keyword",
      "label": "",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "loading": {
      "name": "loading",
      "label": "",
      "varType": "state",
      "dataType": "boolean",
      "initialValue": false,
      "enableSyncLocal": false
    },
    "pageSize": {
      "name": "pageSize",
      "varType": "state",
      "dataType": "number",
      "initialValue": 5
    },
    "hospitals": {
      "name": "hospitals",
      "label": "",
      "varType": "state",
      "dataType": "object",
      "initialValue": [],
      "enableSyncLocal": false
    },
    "backpageId": {
      "name": "backpageId",
      "label": "外部传入的调用该页面的pageId",
      "varType": "state",
      "dataType": "string",
      "initialValue": "",
      "enableSyncLocal": false
    },
    "navOpacity": {
      "name": "navOpacity",
      "varType": "state",
      "dataType": "number",
      "initialValue": 1
    },
    "totalPages": {
      "name": "totalPages",
      "varType": "state",
      "dataType": "number",
      "initialValue": 1
    },
    "addresstext": {
      "name": "addresstext",
      "varType": "state",
      "dataType": "string",
      "initialValue": "北京市朝阳区建国路88号"
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
  key: 'block:u_fu_jin_de_yi_yuan',
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
