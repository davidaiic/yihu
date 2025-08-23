import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanlderhandleAuth from './lowcode/handler/handleAuth' 
import _hanlderonLoad from './lowcode/handler/onLoad' 
import _hanlderonLogout from './lowcode/handler/onLogout' 
import _hanlderonApplyCaregiver from './lowcode/handler/onApplyCaregiver' 
import _hanlderonSwitchRole from './lowcode/handler/onSwitchRole' 
import _hanlderhandleLogin from './lowcode/handler/handleLogin' 
import _hanlderhandleLogout from './lowcode/handler/handleLogout' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  handleAuth: _hanlderhandleAuth, 
  onLoad: _hanlderonLoad, 
  onLogout: _hanlderonLogout, 
  onApplyCaregiver: _hanlderonApplyCaregiver, 
  onSwitchRole: _hanlderonSwitchRole, 
  handleLogin: _hanlderhandleLogin, 
  handleLogout: _hanlderhandleLogout, 
}

const widgetProps = {}





const evtListeners = {"on__comp__$attached": [
      {
          key: 'wt8y4s0vhwx',
          sourceKey: 'u2pk3pmo0pc:onLoad',
          handler: handlers.onLoad,
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
    "userInfo": {
      "name": "userInfo",
      "label": "// 当前用户简要信息（来自全局 user）",
      "varType": "state",
      "dataType": "object",
      "initialValue": {},
      "enableSyncLocal": false
    },
    "paidCount": {
      "name": "paidCount",
      "label": "// 待评价",
      "varType": "state",
      "dataType": "number",
      "initialValue": 0,
      "enableSyncLocal": false
    },
    "switching": {
      "name": "switching",
      "label": "// 切换角色时 loading",
      "varType": "state",
      "dataType": "boolean",
      "initialValue": false,
      "enableSyncLocal": false
    },
    "isLoggedIn": {
      "name": "isLoggedIn",
      "label": "// 是否已登录",
      "varType": "state",
      "dataType": "boolean",
      "initialValue": false,
      "enableSyncLocal": false
    },
    "pendingCount": {
      "name": "pendingCount",
      "label": "// 待支付",
      "varType": "state",
      "dataType": "number",
      "initialValue": 0,
      "enableSyncLocal": false
    },
    "completedCount": {
      "name": "completedCount",
      "label": "// 完成订单",
      "varType": "state",
      "dataType": "number",
      "initialValue": 0,
      "enableSyncLocal": false
    },
    "returnedHospital": {
      "name": "returnedHospital",
      "label": "// 从下级页面回来时暂存选中的医院",
      "varType": "state",
      "dataType": "object",
      "initialValue": {},
      "enableSyncLocal": false
    },
    "assignmentsOptions": {
      "name": "assignmentsOptions",
      "label": "",
      "varType": "state",
      "dataType": "array",
      "initialValue": [
        {
          "label": "顾客",
          "value": "user"
        }
      ],
      "enableSyncLocal": false
    },
    "selectedAssignment": {
      "name": "selectedAssignment",
      "label": "// 下拉菜单当前选中项 { deptId, roleId, label }",
      "varType": "state",
      "dataType": "object",
      "initialValue": {},
      "enableSyncLocal": false
    },
    "hasCaregiverAssignment": {
      "name": "hasCaregiverAssignment",
      "label": "",
      "varType": "state",
      "dataType": "boolean",
      "initialValue": false,
      "enableSyncLocal": false
    }
  },
  "params": {}
};

createComponent({
  key: 'block:u2pk3pmo0pc',
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
