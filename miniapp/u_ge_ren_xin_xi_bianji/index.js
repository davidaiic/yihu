import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanlderonAvatarUploadSuccess from './lowcode/handler/onAvatarUploadSuccess' 
import _hanlderonNicknameChange from './lowcode/handler/onNicknameChange' 
import _hanldersaveProfile from './lowcode/handler/saveProfile' 
import _hanlderhandleAvatarUpload from './lowcode/handler/handleAvatarUpload' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  onAvatarUploadSuccess: _hanlderonAvatarUploadSuccess, 
  onNicknameChange: _hanlderonNicknameChange, 
  saveProfile: _hanldersaveProfile, 
  handleAvatarUpload: _hanlderhandleAvatarUpload, 
}

const widgetProps = {
  "container1": {
    "style": {},
    "classList": [],
    "data": {},
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container2": {
    "style": {
      "padding": "20px",
      "minHeight": "100vh",
      "backgroundColor": "#f8fafc"
    },
    "classList": [],
    "_parentId": "container1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container4": {
    "style": {
      "padding": "16px",
      "boxShadow": "0 2px 12px rgba(0,0,0,0.05)",
      "borderRadius": "12px",
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container5": {
    "style": {
      "marginBottom": "24px"
    },
    "classList": [],
    "_parentId": "container4",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "uploadImage1": {
    "style": {
      "borderRadius": "50% 50%"
    },
    "classList": [],
    "name": "uploadImage1",
    "label": "头像上传",
    "single": true,
    "status": "edit",
    "callbacks": {},
    "borderedH5": false,
    "requiredMsg": "该项为必填项",
    "isChooseAvatar": true,
    "_parentId": "container5",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdUploadImage"
  },
  "container6": {
    "style": {
      "borderTop": "1px solid #f1f5f9",
      "paddingTop": "16px"
    },
    "classList": [],
    "_parentId": "container4",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "input1": {
    "style": {},
    "classList": [],
    "_staticResourceAttribute": [
      "suffixSrc",
      "prefixSrc"
    ],
    "name": "input1",
    "label": "昵称",
    "status": "edit",
    "template": "inputBox",
    "borderedH5": false,
    "prefixType": "",
    "suffixType": "",
    "placeholder": "请输入",
    "requiredMsg": "该项为必填项",
    "isNickNameType": true,
    "_parentId": "container6",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "container8": {
    "style": {
      "margin": "16px 0px 0px",
      "padding": "16px",
      "boxShadow": "0 2px 12px rgba(0,0,0,0.05)",
      "borderRadius": "12px",
      "backgroundColor": "#ffffff"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "container11": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "flexDirection": "row",
      "justifyContent": "space-between"
    },
    "classList": [],
    "_parentId": "container8",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text1": {
    "style": {
      "color": "#64748b",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "text": "绑定手机",
    "_parentId": "container11",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text4": {
    "style": {
      "color": "#1e293b",
      "display": "inline-block",
      "fontSize": "14px"
    },
    "classList": [],
    "_parentId": "container11",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container13": {
    "style": {
      "margin": "16px 0px 0px",
      "display": "flex",
      "justifyContent": "center"
    },
    "classList": [],
    "data": {},
    "_parentId": "container2",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "button1": {
    "style": {
      "width": "80%"
    },
    "classList": [],
    "icon": "success",
    "text": "保存",
    "_parentId": "container13",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button2": {
    "style": {
      "width": "80%"
    },
    "classList": [],
    "icon": "success",
    "text": "放弃返回",
    "variant": "outline",
    "_parentId": "container13",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  }
}





const evtListeners = {"onuploadImage1$success": [
      {
          key: 'w9cnw9qm5sn',
          sourceKey: 'u_ge_ren_xin_xi_bianji:onAvatarUploadSuccess',
          handler: handlers.onAvatarUploadSuccess,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"oninput1$change": [
      {
          key: 'wjtykupz6s6',
          sourceKey: 'u_ge_ren_xin_xi_bianji:onNicknameChange',
          handler: handlers.onNicknameChange,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton1$tap": [
      {
          key: 'w94gut0ig2d',
          sourceKey: 'u_ge_ren_xin_xi_bianji:saveProfile',
          handler: handlers.saveProfile,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton2$tap": [
      {
          key: 'wbtsoyajkz1',
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
  uploadImage1: { 'value': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      [$w.app.dataset.state.user.avatar_url]
    )},'callbacks.beforeUpload': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      result => {
  // console.log('beforeUpload', result);
  return true; // 可以通过返回false，禁用默认上传逻辑，自定义上传
  // return false;
}
    )}
  },
  input1: { 'inputValue': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.app.dataset.state.user.nickname
    )}
  },
  text4: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.user.phone
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
    "user": {
      "name": "user",
      "label": "",
      "varType": "state",
      "dataType": "object",
      "initialValue": {},
      "enableSyncLocal": false
    }
  },
  "params": {}
};

createComponent({
  key: 'block:u_ge_ren_xin_xi_bianji',
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
