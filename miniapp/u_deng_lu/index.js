import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanlderonMethodChange from './lowcode/handler/onMethodChange' 
import _hanlderonMockOpenIdInput from './lowcode/handler/onMockOpenIdInput' 
import _hanlderloginHandler from './lowcode/handler/loginHandler' 
import _hanlderonForgotPasswordTap from './lowcode/handler/onForgotPasswordTap' 
import _hanlderonNameInput from './lowcode/handler/onNameInput' 
import _hanlderonPasswordInput from './lowcode/handler/onPasswordInput' 
import _hanlderonMobileInput from './lowcode/handler/onMobileInput' 
import _hanldersendSmsCodeHandler from './lowcode/handler/sendSmsCodeHandler' 
import _hanlderonSmsCodeInput from './lowcode/handler/onSmsCodeInput' 
import _hanlderonEditMobileTap from './lowcode/handler/onEditMobileTap' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  onMethodChange: _hanlderonMethodChange, 
  onMockOpenIdInput: _hanlderonMockOpenIdInput, 
  loginHandler: _hanlderloginHandler, 
  onForgotPasswordTap: _hanlderonForgotPasswordTap, 
  onNameInput: _hanlderonNameInput, 
  onPasswordInput: _hanlderonPasswordInput, 
  onMobileInput: _hanlderonMobileInput, 
  sendSmsCodeHandler: _hanldersendSmsCodeHandler, 
  onSmsCodeInput: _hanlderonSmsCodeInput, 
  onEditMobileTap: _hanlderonEditMobileTap, 
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
    "style": {},
    "classList": [],
    "alignSelf": "auto",
    "widthType": "auto-fill",
    "_parentId": "row1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Col"
  },
  "radio1": {
    "style": {},
    "classList": [],
    "name": "radio1",
    "size": "",
    "label": "登录方式",
    "range": [
      {
        "label": "微信一键登录",
        "value": "wechat",
        "disabled": false,
        "__sortid__": "5f4YpfM8vJKMJDTtfwDjD"
      },
      {
        "label": "账号密码登录",
        "value": "password",
        "disabled": false,
        "__sortid__": "WrqieicPgrg3GoJqtqVg5"
      },
      {
        "label": "短信验证码登录",
        "value": "sms",
        "disabled": false,
        "__sortid__": "CNQi5iyT-67cYpJDdki36"
      }
    ],
    "format": "",
    "status": "edit",
    "enumName": "",
    "required": false,
    "tipBlock": "",
    "direction": "vertical",
    "borderedH5": true,
    "requiredMsg": "该项为必填项",
    "requiredFlag": true,
    "_parentId": "col1",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdRadioList"
  },
  "row2": {
    "style": {},
    "classList": [],
    "alignItems": "stretch",
    "_parentId": "grid1",
    "_order": 1,
    "widgetType": "gsd-h5-react:Row"
  },
  "col2": {
    "style": {},
    "classList": [],
    "alignSelf": "auto",
    "widthType": "auto-fill",
    "_parentId": "row2",
    "_order": 0,
    "widgetType": "gsd-h5-react:Col"
  },
  "col3": {
    "style": {},
    "classList": [],
    "alignSelf": "auto",
    "widthType": "auto-fill",
    "_parentId": "row2",
    "_order": 1,
    "widgetType": "gsd-h5-react:Col"
  },
  "col4": {
    "style": {},
    "classList": [],
    "alignSelf": "auto",
    "widthType": "auto-fill",
    "_parentId": "row2",
    "_order": 2,
    "widgetType": "gsd-h5-react:Col"
  },
  "col5": {
    "style": {},
    "classList": [],
    "alignSelf": "auto",
    "widthType": "auto-fill",
    "_parentId": "row2",
    "_order": 3,
    "widgetType": "gsd-h5-react:Col"
  },
  "row4": {
    "style": {},
    "classList": [],
    "alignItems": "stretch",
    "_parentId": "grid1",
    "_order": 2,
    "widgetType": "gsd-h5-react:Row"
  },
  "col7": {
    "style": {},
    "classList": [],
    "alignSelf": "auto",
    "widthType": "auto-fill",
    "_parentId": "row4",
    "_order": 0,
    "widgetType": "gsd-h5-react:Col"
  },
  "input1": {
    "style": {},
    "classList": [],
    "name": "input1",
    "label": "MockOpenId",
    "status": "edit",
    "template": "inputBox",
    "prefixIcon": "success",
    "prefixType": "",
    "suffixIcon": "success",
    "suffixType": "",
    "placeholder": "请输入",
    "requiredMsg": "该项为必填项",
    "_parentId": "col7",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdInput"
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
  "button1": {
    "style": {
      "width": "80%"
    },
    "classList": [],
    "icon": "success",
    "text": "微信一键登录",
    "_parentId": "col6",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "row5": {
    "style": {},
    "classList": [],
    "alignItems": "stretch",
    "_parentId": "grid1",
    "_order": 4,
    "widgetType": "gsd-h5-react:Row"
  },
  "col8": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "flexDirection": "column",
      "justifyContent": "center"
    },
    "classList": [],
    "alignSelf": "auto",
    "widthType": "auto-fill",
    "_parentId": "row5",
    "_order": 0,
    "widgetType": "gsd-h5-react:Col"
  },
  "input2": {
    "style": {},
    "classList": [],
    "name": "input2",
    "label": "用户名",
    "status": "edit",
    "template": "inputBox",
    "prefixIcon": "success",
    "prefixType": "",
    "suffixIcon": "success",
    "suffixType": "",
    "placeholder": "请输入用户名",
    "requiredMsg": "该项为必填项",
    "_parentId": "col8",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "input3": {
    "style": {},
    "classList": [],
    "_staticResourceAttribute": [
      "suffixSrc",
      "prefixSrc"
    ],
    "name": "input3",
    "label": "密码",
    "status": "edit",
    "password": true,
    "template": "inputBox",
    "prefixIcon": "success",
    "prefixType": "",
    "suffixIcon": "success",
    "suffixType": "",
    "placeholder": "请输入密码",
    "requiredMsg": "该项为必填项",
    "_parentId": "col8",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "text1": {
    "style": {
      "color": "rgb(255, 0, 0)",
      "textAlign": "center"
    },
    "classList": [],
    "text": "首次使用密码登录，请务必记住密码",
    "maxLines": "1",
    "inheritColor": true,
    "_parentId": "col8",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdText"
  },
  "button2": {
    "style": {
      "width": "80%"
    },
    "classList": [],
    "icon": "success",
    "text": "忘记密码",
    "variant": "outline",
    "_parentId": "col8",
    "_order": 3,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button3": {
    "style": {
      "width": "80%"
    },
    "classList": [],
    "icon": "success",
    "text": "登录",
    "_parentId": "col8",
    "_order": 4,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "row6": {
    "style": {},
    "classList": [],
    "alignItems": "stretch",
    "_parentId": "grid1",
    "_order": 5,
    "widgetType": "gsd-h5-react:Row"
  },
  "col9": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "flexDirection": "column",
      "justifyContent": "center"
    },
    "classList": [],
    "alignSelf": "auto",
    "widthType": "auto-fill",
    "_parentId": "row6",
    "_order": 0,
    "widgetType": "gsd-h5-react:Col"
  },
  "input4": {
    "style": {},
    "classList": [],
    "_staticResourceAttribute": [
      "suffixSrc",
      "prefixSrc"
    ],
    "name": "input4",
    "type": "number",
    "label": "手机号",
    "status": "edit",
    "template": "inputBox",
    "maxLength": 11,
    "prefixIcon": "success",
    "prefixType": "",
    "suffixIcon": "success",
    "suffixType": "",
    "placeholder": "请输入",
    "requiredMsg": "该项为必填项",
    "_parentId": "col9",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "button4": {
    "style": {
      "width": "80%",
      "margin": "16rpx 0px 0px"
    },
    "classList": [],
    "icon": "success",
    "_parentId": "col9",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "input5": {
    "style": {
      "margin": "16rpx 0px 0px"
    },
    "classList": [],
    "_staticResourceAttribute": [
      "suffixSrc",
      "prefixSrc"
    ],
    "name": "input5",
    "type": "number",
    "label": "验证码",
    "status": "edit",
    "template": "inputBox",
    "maxLength": 6,
    "prefixIcon": "success",
    "prefixType": "",
    "suffixIcon": "success",
    "suffixType": "",
    "placeholder": "请输入",
    "requiredMsg": "该项为必填项",
    "_parentId": "col9",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "text2": {
    "style": {
      "color": "rgb(255, 0, 0)"
    },
    "classList": [],
    "text": "若需修改手机号，可在个人信息页操作",
    "maxLines": "1",
    "inheritColor": true,
    "_parentId": "col9",
    "_order": 3,
    "widgetType": "gsd-h5-react:WdText"
  },
  "button5": {
    "style": {
      "width": "80%"
    },
    "classList": [],
    "icon": "success",
    "text": "修改手机号",
    "variant": "outline",
    "_parentId": "col9",
    "_order": 4,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button6": {
    "style": {
      "width": "80%"
    },
    "classList": [],
    "icon": "success",
    "text": "登录",
    "_parentId": "col9",
    "_order": 5,
    "widgetType": "gsd-h5-react:WdButton"
  }
}





const evtListeners = {"onradio1$change": [
      {
          key: 'wa81foofv45',
          sourceKey: 'u_deng_lu:onMethodChange',
          handler: handlers.onMethodChange,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton1$tap": [
      {
          key: 'w04el6q1oeb',
          sourceKey: 'u_deng_lu:loginHandler',
          handler: handlers.loginHandler,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"oninput2$change": [
      {
          key: 'wxe7b2t2psc',
          sourceKey: 'u_deng_lu:onNameInput',
          handler: handlers.onNameInput,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"oninput3$change": [
      {
          key: 'way4j1ga43n',
          sourceKey: 'u_deng_lu:onPasswordInput',
          handler: handlers.onPasswordInput,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton2$tap": [
      {
          key: 'wjmmkhnlvm6',
          sourceKey: 'u_deng_lu:onForgotPasswordTap',
          handler: handlers.onForgotPasswordTap,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton3$tap": [
      {
          key: 'ww3so2y34pd',
          sourceKey: 'u_deng_lu:loginHandler',
          handler: handlers.loginHandler,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"oninput4$change": [
      {
          key: 'wdtl3n12oz1',
          sourceKey: 'u_deng_lu:onMobileInput',
          handler: handlers.onMobileInput,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton4$tap": [
      {
          key: 'w8pwr5axcdp',
          sourceKey: 'u_deng_lu:sendSmsCodeHandler',
          handler: handlers.sendSmsCodeHandler,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"oninput5$change": [
      {
          key: 'wn3q1pn8xgj',
          sourceKey: 'u_deng_lu:onSmsCodeInput',
          handler: handlers.onSmsCodeInput,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton5$tap": [
      {
          key: 'wdnzj9iqdam',
          sourceKey: 'u_deng_lu:onEditMobileTap',
          handler: handlers.onEditMobileTap,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton6$tap": [
      {
          key: 'wexvi9qb0qs',
          sourceKey: 'u_deng_lu:loginHandler',
          handler: handlers.loginHandler,
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
  radio1: { 'value': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.loginMethod
    )}
  },
  input1: { 'inputValue': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.mockOpenId
    )},'_waDisplay': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      // $w.wedaContext.platforms[0] === "WEB"
false
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ((display)=>{ const style = {...widgetProps.input1.style}; if(!display) {style.display = "none"}; return style })((
// $w.wedaContext.platforms[0] === "WEB"
false
))
    )}
  },
  row3: { '_waDisplay': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.loginMethod === 'wechat'
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ((display)=>{ const style = {...widgetProps.row3.style}; if(!display) {style.display = "none"}; return style })((
$comp.dataset.state.loginMethod === 'wechat'
))
    )}
  },
  row5: { '_waDisplay': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.loginMethod === 'password'
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ((display)=>{ const style = {...widgetProps.row5.style}; if(!display) {style.display = "none"}; return style })((
$comp.dataset.state.loginMethod === 'password'
))
    )}
  },
  input2: { 'inputValue': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.name
    )}
  },
  input3: { 'inputValue': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.password
    )}
  },
  row6: { '_waDisplay': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.loginMethod === 'sms'
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ((display)=>{ const style = {...widgetProps.row6.style}; if(!display) {style.display = "none"}; return style })((
$comp.dataset.state.loginMethod === 'sms'
))
    )}
  },
  input4: { 'inputValue': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.mobile
    )}
  },
  button4: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.smsSent ? $comp.dataset.state.smsTimer + 's后重发' : '发送验证码'
    )}
  },
  input5: { 'inputValue': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.smsCode
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
      "label": "",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "mobile": {
      "name": "mobile",
      "label": "",
      "varType": "state",
      "dataType": "number",
      "initialValue": 139,
      "enableSyncLocal": false
    },
    "smsCode": {
      "name": "smsCode",
      "label": "",
      "varType": "state",
      "dataType": "number",
      "initialValue": 0,
      "enableSyncLocal": false
    },
    "smsSent": {
      "name": "smsSent",
      "label": "",
      "varType": "state",
      "dataType": "boolean",
      "initialValue": false,
      "enableSyncLocal": false
    },
    "password": {
      "name": "password",
      "label": "",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "smsTimer": {
      "name": "smsTimer",
      "label": "",
      "varType": "state",
      "dataType": "number",
      "initialValue": 60,
      "enableSyncLocal": false
    },
    "mockOpenId": {
      "name": "mockOpenId",
      "label": "",
      "varType": "state",
      "dataType": "string",
      "initialValue": "",
      "enableSyncLocal": false
    },
    "loginMethod": {
      "name": "loginMethod",
      "label": "",
      "varType": "state",
      "dataType": "string",
      "initialValue": "wechat",
      "enableSyncLocal": false
    },
    "smsIntervalId": {
      "name": "smsIntervalId",
      "label": "",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    }
  }
};

createComponent({
  key: 'block:u_deng_lu',
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
