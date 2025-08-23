import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanlderonOpenIdLogin from './lowcode/handler/onOpenIdLogin' 
import _hanlderonNavigateToPwdLogin from './lowcode/handler/onNavigateToPwdLogin' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  onOpenIdLogin: _hanlderonOpenIdLogin, 
  onNavigateToPwdLogin: _hanlderonNavigateToPwdLogin, 
}

const widgetProps = {
  "grid1": {
    "style": {},
    "classList": [],
    "gutterX": "8px",
    "gutterY": "8px",
    "template": "[3,[1,4,1]]",
    "_order": 0,
    "widgetType": "gsd-h5-react:Grid"
  },
  "row1": {
    "style": {},
    "classList": [],
    "alignItems": "stretch",
    "_parentId": "grid1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Row"
  },
  "col1": {
    "style": {
      "display": "flex",
      "justifyContent": "center"
    },
    "classList": [],
    "alignSelf": "auto",
    "widthType": "auto-fill",
    "_parentId": "row1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Col"
  },
  "image1": {
    "style": {
      "width": "320px",
      "height": "320px"
    },
    "classList": [],
    "_staticResourceAttribute": [
      "src"
    ],
    "alt": "[图片]",
    "fit": "widthFix",
    "src": "/resources/2025-06/lowcode-2323338",
    "_parentId": "col1",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdImage"
  },
  "row2": {
    "style": {},
    "classList": [],
    "colCount": 1,
    "alignItems": "stretch",
    "_parentId": "grid1",
    "_order": 1,
    "widgetType": "gsd-h5-react:Row"
  },
  "col2": {
    "style": {
      "display": "flex",
      "justifyContent": "center"
    },
    "classList": [],
    "alignSelf": "auto",
    "widthType": "auto-fill",
    "_parentId": "row2",
    "_order": 0,
    "widgetType": "gsd-h5-react:Col"
  },
  "text1": {
    "style": {},
    "classList": [],
    "text": "心灯长照三春景，鹤语轻传九畹歌。\n待得云开晴日暖，衔杯共看杏花多。",
    "maxLines": "1",
    "inheritColor": true,
    "_parentId": "col2",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "row4": {
    "style": {},
    "classList": [],
    "colCount": 1,
    "alignItems": "stretch",
    "_parentId": "grid1",
    "_order": 2,
    "widgetType": "gsd-h5-react:Row"
  },
  "col3": {
    "style": {
      "display": "flex",
      "justifyContent": "center"
    },
    "classList": [],
    "alignSelf": "auto",
    "widthType": "auto-fill",
    "_parentId": "row4",
    "_order": 0,
    "widgetType": "gsd-h5-react:Col"
  },
  "button1": {
    "style": {
      "width": "80%"
    },
    "classList": [],
    "icon": "success",
    "text": "微信一键登录",
    "_parentId": "col3",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "row3": {
    "style": {},
    "classList": [],
    "alignItems": "stretch",
    "_parentId": "grid1",
    "_order": 3,
    "widgetType": "gsd-h5-react:Row"
  },
  "col6": {
    "style": {
      "display": "flex",
      "justifyContent": "center"
    },
    "classList": [],
    "alignSelf": "auto",
    "widthType": "auto-fill",
    "_parentId": "row3",
    "_order": 0,
    "widgetType": "gsd-h5-react:Col"
  },
  "text2": {
    "style": {
      "color": "rgb(170, 170, 170)"
    },
    "classList": [],
    "text": "使用账号密码登录",
    "level": "body-sm",
    "maxLines": "1",
    "inheritColor": true,
    "_parentId": "col6",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "row5": {
    "style": {},
    "classList": [],
    "alignItems": "stretch",
    "_parentId": "grid1",
    "_order": 4,
    "widgetType": "gsd-h5-react:Row"
  },
  "col4": {
    "style": {},
    "classList": [],
    "alignSelf": "auto",
    "widthType": "auto-fill",
    "_parentId": "row5",
    "_order": 0,
    "widgetType": "gsd-h5-react:Col"
  }
}





const evtListeners = {"onbutton1$tap": [
      {
          key: 'w851n5b2yxx',
          sourceKey: 'LoginPageByOpenId:onOpenIdLogin',
          handler: handlers.onOpenIdLogin,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"ontext2$tap": [
      {
          key: 'w4tnhr9t95b',
          sourceKey: 'LoginPageByOpenId:onNavigateToPwdLogin',
          handler: handlers.onNavigateToPwdLogin,
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
}

const query = {
}

const eventFlows = [
]

const config = {}
const datasetProfile = {
  "state": {
    "loggingIn": {
      "name": "loggingIn",
      "label": "",
      "varType": "state",
      "dataType": "boolean",
      "initialValue": false,
      "enableSyncLocal": false
    }
  }
};

createComponent({
  key: 'block:LoginPageByOpenId',
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
