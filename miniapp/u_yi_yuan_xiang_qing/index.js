import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanlderonLoad from './lowcode/handler/onLoad' 
import _hanlderbookWard from './lowcode/handler/bookWard' 
import _hanldercontactTeam from './lowcode/handler/contactTeam' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  onLoad: _hanlderonLoad, 
  bookWard: _hanlderbookWard, 
  contactTeam: _hanldercontactTeam, 
}

const widgetProps = {
  "comtainer_u_yi_yuan_xiang_qing": {
    "style": {},
    "classList": [],
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container4": {
    "style": {},
    "classList": [],
    "data": {},
    "_parentId": "comtainer_u_yi_yuan_xiang_qing",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container8": {
    "style": {
      "overflow": "hidden",
      "position": "relative"
    },
    "classList": [],
    "_parentId": "container4",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "swiper2": {
    "style": {
      "height": "260px"
    },
    "classList": [],
    "current": 0,
    "autoplay": true,
    "circular": true,
    "duration": 500,
    "interval": 5000,
    "vertical": false,
    "layoutType": "normal",
    "nextMargin": "0px",
    "indicatorDots": true,
    "transformType": "scaleAndFade",
    "easingFunction": "default",
    "indicatorColor": "rgba(200, 200, 200, 0.9)",
    "previousMargin": "0px",
    "indicatorActiveColor": "rgba(0, 0, 0, 0.9)",
    "_parentId": "container8",
    "_order": 0,
    "widgetType": "gsd-h5-react:Swiper"
  },
  "image5": {
    "style": {
      "width": "100%",
      "height": "320px"
    },
    "classList": [],
    "alt": "[图片]",
    "fit": "widthFix",
    "_parentId": "swiper2",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdImage"
  },
  "image6": {
    "style": {
      "width": "100%",
      "height": "320px"
    },
    "classList": [],
    "_staticResourceAttribute": [
      "src"
    ],
    "alt": "[图片]",
    "fit": "widthFix",
    "_parentId": "swiper2",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdImage"
  },
  "image7": {
    "style": {
      "width": "100%",
      "height": "320px"
    },
    "classList": [],
    "alt": "[图片]",
    "fit": "widthFix",
    "_parentId": "swiper2",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdImage"
  },
  "image8": {
    "style": {
      "width": "100%",
      "height": "320px"
    },
    "classList": [],
    "alt": "[图片]",
    "fit": "widthFix",
    "_parentId": "swiper2",
    "_order": 3,
    "widgetType": "gsd-h5-react:WdImage"
  },
  "container9": {
    "style": {
      "left": "0",
      "right": "0",
      "bottom": "0",
      "padding": "16px",
      "position": "absolute",
      "background": "linear-gradient(transparent, rgba(0,0,0,0.7))"
    },
    "classList": [],
    "_parentId": "container8",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text5": {
    "style": {
      "color": "#ffffff",
      "display": "block",
      "marginBottom": "4px"
    },
    "classList": [],
    "level": "title-4",
    "_parentId": "container9",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container14": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "marginBottom": "8px"
    },
    "classList": [],
    "_parentId": "container9",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon2": {
    "style": {
      "color": "#ffffff",
      "fontSize": "16px",
      "marginRight": "8px"
    },
    "classList": [],
    "name": "td:verified",
    "_parentId": "container14",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text6": {
    "style": {
      "color": "#ffffff",
      "display": "inline-block"
    },
    "classList": [],
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
    "_parentId": "container9",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon10": {
    "style": {
      "color": "#ffffff",
      "fontSize": "16px",
      "marginRight": "8px"
    },
    "classList": [],
    "name": "td:location",
    "_parentId": "container15",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text7": {
    "style": {
      "flex": "1",
      "color": "#ffffff",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "container15",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container10": {
    "style": {
      "top": "16px",
      "left": "16px",
      "position": "absolute"
    },
    "classList": [],
    "_parentId": "container8",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "button1": {
    "style": {
      "color": "#ffffff",
      "width": "40px",
      "height": "40px",
      "minHeight": "initial",
      "backgroundColor": "rgba(0,0,0,0.3)"
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
    "_parentId": "container10",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button4": {
    "style": {
      "color": "#ffffff",
      "width": "40px",
      "height": "40px",
      "minHeight": "initial",
      "backgroundColor": "rgba(0,0,0,0.3)"
    },
    "classList": [],
    "icon": "td:share",
    "variant": "text",
    "iconType": "icon-only",
    "_parentId": "container10",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container1": {
    "style": {},
    "classList": [],
    "data": {},
    "_parentId": "comtainer_u_yi_yuan_xiang_qing",
    "_order": 1,
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
  "container3": {
    "style": {
      "padding": "16px",
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "borderRadius": "8px",
      "marginBottom": "24px",
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container7": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "marginBottom": "12px",
      "flexDirection": "row"
    },
    "classList": [],
    "_parentId": "container3",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon1": {
    "style": {
      "color": "#1a73e8",
      "fontSize": "24px",
      "marginRight": "8px"
    },
    "classList": [],
    "name": "td:verified",
    "_parentId": "container7",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text4": {
    "style": {
      "color": "inherit",
      "display": "block",
      "fontWeight": "600"
    },
    "classList": [],
    "text": "仁和医院",
    "level": "title-4",
    "_parentId": "container7",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text1": {
    "style": {
      "color": "#5f6368",
      "display": "inline-block",
      "marginBottom": "8px"
    },
    "classList": [],
    "text": "二级甲等综合医院",
    "maxLines": "1",
    "_parentId": "container3",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text2": {
    "style": {
      "color": "#5f6368",
      "display": "inline-block",
      "marginBottom": "8px"
    },
    "classList": [],
    "text": "地址：北京市朝阳区建国路88号",
    "_parentId": "container3",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text3": {
    "style": {
      "color": "#5f6368",
      "display": "inline-block"
    },
    "classList": [],
    "text": "电话：010-88889999",
    "_parentId": "container3",
    "_order": 3,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container30": {
    "style": {},
    "classList": [],
    "data": {},
    "_parentId": "container2",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "container31": {
    "style": {
      "padding": "16px",
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "_parentId": "container30",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container32": {
    "style": {
      "borderBottom": "1px solid #f0f0f0",
      "marginBottom": "24px",
      "paddingBottom": "16px"
    },
    "classList": [],
    "_parentId": "container31",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text8": {
    "style": {
      "color": "#333333",
      "display": "block",
      "fontSize": "18px",
      "fontWeight": "600",
      "marginBottom": "8px"
    },
    "classList": [],
    "text": "医院简介",
    "level": "title-4",
    "_parentId": "container32",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text9": {
    "style": {
      "color": "#666666",
      "display": "inline-block",
      "fontSize": "14px",
      "lineHeight": "1.6em"
    },
    "classList": [],
    "_parentId": "container32",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container34": {
    "style": {
      "marginBottom": "16px"
    },
    "classList": [],
    "_parentId": "container31",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text26": {
    "style": {
      "color": "#333333",
      "display": "block",
      "fontSize": "18px",
      "fontWeight": "600",
      "marginBottom": "12px"
    },
    "classList": [],
    "text": "特色科室",
    "level": "title-4",
    "_parentId": "container34",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container38": {
    "style": {
      "gap": "8px",
      "display": "flex",
      "flexWrap": "wrap"
    },
    "classList": [],
    "_parentId": "container34",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "tag2": {
    "style": {},
    "classList": [],
    "range": [
      {
        "label": "内科",
        "value": "1",
        "__sortid__": "iOOntI93O5ovYePBrjzjD"
      },
      {
        "label": "肿瘤科",
        "value": "2",
        "__sortid__": "G2iNnV0-is_3LWYB7n83X"
      },
      {
        "label": "胸外科",
        "value": "3",
        "__sortid__": "83dip5xPt5OQKUAq61D8_"
      }
    ],
    "tagStyleType": "light",
    "tagStyleWidthCols": 4,
    "_parentId": "container38",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdTag"
  },
  "container5": {
    "style": {
      "marginBottom": "24px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "text14": {
    "style": {
      "color": "inherit",
      "display": "block",
      "fontWeight": "600",
      "marginBottom": "16px"
    },
    "classList": [],
    "text": "护理团队",
    "level": "title-5",
    "_parentId": "container5",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container16": {
    "style": {
      "padding": "16px",
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "borderRadius": "8px",
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "_parentId": "container5",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "scrollView2": {
    "style": {
      "height": "300px"
    },
    "classList": [],
    "scrollY": true,
    "_parentId": "container16",
    "_order": 0,
    "widgetType": "gsd-h5-react:ScrollView"
  },
  "container17": {
    "style": {
      "gap": "12px"
    },
    "classList": [],
    "_parentId": "scrollView2",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "repeater2": {
    "style": {},
    "classList": [],
    "suffix": "repeater2",
    "forItem": "item_repeater2",
    "forIndex": "index_repeater2",
    "_parentId": "container17",
    "_order": 0,
    "widgetType": "gsd-h5-react:Repeater"
  },
  "repeater2_item": {
    "style": {},
    "classList": [],
    "_parentId": "repeater2",
    "widgetType": "gsd-h5-react:RepeaterItem"
  },
  "container18": {
    "style": {
      "padding": "16px",
      "borderRadius": "8px",
      "backgroundColor": "#f8f9fa"
    },
    "classList": [],
    "_parentId": "repeater2_item",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container19": {
    "style": {
      "display": "flex",
      "marginBottom": "8px",
      "flexDirection": "row",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "container18",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container22": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "flexDirection": "row"
    },
    "classList": [],
    "_parentId": "container19",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon3": {
    "style": {
      "color": "#1a73e8",
      "fontSize": "20px",
      "marginRight": "8px"
    },
    "classList": [],
    "_parentId": "container22",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text15": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "fontWeight": "600"
    },
    "classList": [],
    "_parentId": "container22",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container23": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "flexDirection": "row"
    },
    "classList": [],
    "_parentId": "container19",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon4": {
    "style": {
      "color": "#ffb800",
      "fontSize": "16px",
      "marginRight": "4px"
    },
    "classList": [],
    "name": "td:star-filled",
    "_parentId": "container23",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text16": {
    "style": {
      "color": "#5f6368",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "container23",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container20": {
    "style": {
      "display": "flex",
      "marginBottom": "12px",
      "flexDirection": "row",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "container18",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text17": {
    "style": {
      "color": "#5f6368",
      "display": "inline-block"
    },
    "classList": [],
    "text": "护理人员",
    "_parentId": "container20",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text18": {
    "style": {
      "color": "#1a73e8",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "container20",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container21": {
    "style": {
      "display": "flex",
      "marginBottom": "12px",
      "flexDirection": "row",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "container18",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "text19": {
    "style": {
      "color": "#5f6368",
      "display": "inline-block"
    },
    "classList": [],
    "text": "专长",
    "_parentId": "container21",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text20": {
    "style": {
      "color": "#1a73e8",
      "display": "inline-block"
    },
    "classList": [],
    "_parentId": "container21",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "button2": {
    "style": {
      "width": "100%"
    },
    "classList": [],
    "size": "sm",
    "text": "联系团队",
    "variant": "outline",
    "_parentId": "container18",
    "_order": 3,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button3": {
    "style": {
      "color": "#ffffff",
      "width": "100%",
      "padding": "12px 0",
      "marginTop": "24px",
      "borderRadius": "4px",
      "backgroundColor": "#4a90e2"
    },
    "classList": [],
    "text": "立即预约",
    "_parentId": "container16",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container6": {
    "style": {
      "marginBottom": "24px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 3,
    "widgetType": "gsd-h5-react:Container"
  },
  "text21": {
    "style": {
      "color": "inherit",
      "display": "block",
      "fontWeight": "600",
      "marginBottom": "16px"
    },
    "classList": [],
    "text": "医院设施",
    "level": "title-5",
    "_parentId": "container6",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container24": {
    "style": {
      "padding": "16px",
      "boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
      "borderRadius": "8px",
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "_parentId": "container6",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "container25": {
    "style": {
      "gap": "12px",
      "display": "flex",
      "flexWrap": "wrap",
      "flexDirection": "row"
    },
    "classList": [],
    "_parentId": "container24",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container26": {
    "style": {
      "width": "calc(50% - 6px)",
      "padding": "12px",
      "borderRadius": "8px",
      "backgroundColor": "#f8f9fa"
    },
    "classList": [],
    "_parentId": "container25",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon5": {
    "style": {
      "color": "#1a73e8",
      "fontSize": "24px",
      "marginBottom": "8px"
    },
    "classList": [],
    "name": "td:menu-application",
    "_parentId": "container26",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text22": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "fontWeight": "600"
    },
    "classList": [],
    "text": "24小时急诊",
    "_parentId": "container26",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container27": {
    "style": {
      "width": "calc(50% - 6px)",
      "padding": "12px",
      "borderRadius": "8px",
      "backgroundColor": "#f8f9fa"
    },
    "classList": [],
    "_parentId": "container25",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon6": {
    "style": {
      "color": "#1a73e8",
      "fontSize": "24px",
      "marginBottom": "8px"
    },
    "classList": [],
    "name": "td:cart",
    "_parentId": "container27",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text23": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "fontWeight": "600"
    },
    "classList": [],
    "text": "院内药房",
    "_parentId": "container27",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container28": {
    "style": {
      "width": "calc(50% - 6px)",
      "padding": "12px",
      "borderRadius": "8px",
      "backgroundColor": "#f8f9fa"
    },
    "classList": [],
    "_parentId": "container25",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon7": {
    "style": {
      "color": "#1a73e8",
      "fontSize": "24px",
      "marginBottom": "8px"
    },
    "classList": [],
    "name": "td:wallet",
    "_parentId": "container28",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text24": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "fontWeight": "600"
    },
    "classList": [],
    "text": "医保定点",
    "_parentId": "container28",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container29": {
    "style": {
      "width": "calc(50% - 6px)",
      "padding": "12px",
      "borderRadius": "8px",
      "backgroundColor": "#f8f9fa"
    },
    "classList": [],
    "_parentId": "container25",
    "_order": 3,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon8": {
    "style": {
      "color": "#1a73e8",
      "fontSize": "24px",
      "marginBottom": "8px"
    },
    "classList": [],
    "name": "td:location",
    "_parentId": "container29",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text25": {
    "style": {
      "color": "inherit",
      "display": "inline-block",
      "fontWeight": "600"
    },
    "classList": [],
    "text": "免费停车",
    "_parentId": "container29",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  }
}





const evtListeners = {"onbutton1$tap": [
      {
          key: 'wmjx3q6d27x',
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
          key: 'wxxaxImTn',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "contactTeam";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        team: $w.item_repeater2.name,
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
          key: 'wb5t4dat55i',
          sourceKey: 'platform:navigateTo',
          handler: function({args}){ return $app.navigateTo(...args)},
          args: {
  "params": [
    {
      "mode": "weDa",
      "pageId": "u_zhu_yuan_hu_li",
      "params": {},
      "packageName": ""
    }
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
  image5: { 'src': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.hospitalInfo.images[0]
    )}
  },
  image6: { 'src': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.hospitalInfo.images[1]
    )}
  },
  image7: { 'src': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.hospitalInfo.images[2]
    )}
  },
  image8: { 'src': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.hospitalInfo.images[3]
    )}
  },
  text5: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.hospitalInfo.name
    )}
  },
  text6: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.hospitalInfo.level
    )}
  },
  text7: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.hospitalInfo.address
    )}
  },
  text9: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.hospitalInfo.introduction
    )}
  },
  repeater2: { 'data': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.nursingTeams
    )}
  },
  repeater2_item: { '_waFor': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.nursingTeams
    )}
  },
  icon3: { 'name': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater2.icon
    )}
  },
  text15: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater2.name
    )}
  },
  text16: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater2.rating
    )}
  },
  text18: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `${$w.item_repeater2.members}人`
    )}
  },
  text20: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater2.specialty
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
    "wards": {
      "name": "wards",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        {
          "beds": 120,
          "icon": "td:houses",
          "name": "内科病区",
          "level": "VIP",
          "price": "¥800/天",
          "available": 45
        },
        {
          "beds": 80,
          "icon": "td:houses",
          "name": "外科病区",
          "level": "标准",
          "price": "¥500/天",
          "available": 22
        },
        {
          "beds": 60,
          "icon": "td:houses",
          "name": "妇产科病区",
          "level": "VIP",
          "price": "¥1000/天",
          "available": 15
        }
      ]
    },
    "hospitalInfo": {
      "name": "hospitalInfo",
      "label": "",
      "varType": "state",
      "dataType": "object",
      "initialValue": {
        "name": "仁和医院",
        "level": "二级甲等",
        "phone": "010-88889999",
        "images": [
          "https://636c-cloud1-2gnnlh5lf122b60b-1357073446.tcb.qcloud.la/%E5%8C%97%E4%BA%AC%E4%BB%81%E5%92%8C%E5%8C%BB%E9%99%A2/20231012373233.png?sign=5e83e923fc11b962933f26e5b96bac9f&t=1752291429",
          "https://636c-cloud1-2gnnlh5lf122b60b-1357073446.tcb.qcloud.la/%E5%8C%97%E4%BA%AC%E4%BB%81%E5%92%8C%E5%8C%BB%E9%99%A2/20231012822577.png?sign=19d37c4bcf92e7264ca74a69462557fa&t=1752291465",
          "https://636c-cloud1-2gnnlh5lf122b60b-1357073446.tcb.qcloud.la/%E5%8C%97%E4%BA%AC%E4%BB%81%E5%92%8C%E5%8C%BB%E9%99%A2/Hb151f8198618367a9e8188ec29738bd4b31ce5f3.jpg?sign=d1fcbf8b48c92f74bb1f082aa8a5d645&t=1752291478",
          "https://636c-cloud1-2gnnlh5lf122b60b-1357073446.tcb.qcloud.la/%E5%8C%97%E4%BA%AC%E4%BB%81%E5%92%8C%E5%8C%BB%E9%99%A2/pic_4defba049e63afc1d11b87a8df278c84.jpg?sign=02017b69fe393fe312a2c1776d62476f&t=1752291495"
        ],
        "address": "北京市朝阳区建国路88号",
        "introduction": "北京市仁和医院位于北京市大兴区兴丰大街1号，建筑面积8.5万平米，是大兴地区集医疗、教学、急救、保健于一体的二级甲等综合性医院。"
      },
      "enableSyncLocal": false
    },
    "nursingTeams": {
      "name": "nursingTeams",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        {
          "icon": "td:user-circle",
          "name": "专业护理组",
          "rating": 4.8,
          "members": 8,
          "specialty": "术后护理"
        },
        {
          "icon": "td:user-circle",
          "name": "老年护理组",
          "rating": 4.9,
          "members": 6,
          "specialty": "老年病护理"
        },
        {
          "icon": "td:user-circle",
          "name": "儿科护理组",
          "rating": 4.7,
          "members": 5,
          "specialty": "儿童护理"
        }
      ]
    }
  },
  "params": {}
};

createComponent({
  key: 'block:u_yi_yuan_xiang_qing',
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
