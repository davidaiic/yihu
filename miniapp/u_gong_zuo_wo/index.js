import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanlderonLoad from './lowcode/handler/onLoad' 
import _hanldereditProfile from './lowcode/handler/editProfile' 
import _hanlderswitchDepartmentRole from './lowcode/handler/switchDepartmentRole' 
import _hanldertoggleStatus from './lowcode/handler/toggleStatus' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  onLoad: _hanlderonLoad, 
  editProfile: _hanldereditProfile, 
  switchDepartmentRole: _hanlderswitchDepartmentRole, 
  toggleStatus: _hanldertoggleStatus, 
}

const widgetProps = {}





const evtListeners = {}

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
    "skills": {
      "name": "skills",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        {
          "name": "老年护理",
          "level": "精通"
        },
        {
          "name": "术后康复",
          "level": "精通"
        },
        {
          "name": "慢性病管理",
          "level": "熟练"
        }
      ]
    },
    "userInfo": {
      "name": "userInfo",
      "varType": "state",
      "dataType": "object",
      "initialValue": {
        "name": "张护士",
        "email": "nurse.zhang@example.com",
        "phone": "138****1234",
        "title": "高级护理师",
        "avatar": "avatar_female",
        "rating": 4.8,
        "experience": "5年",
        "serviceCount": 128,
        "certification": true
      }
    },
    "isWorking": {
      "name": "isWorking",
      "varType": "state",
      "dataType": "boolean",
      "initialValue": false
    },
    "currentRole": {
      "name": "currentRole",
      "varType": "state",
      "dataType": "string",
      "initialValue": "负责人"
    },
    "currentDepartment": {
      "name": "currentDepartment",
      "varType": "state",
      "dataType": "string",
      "initialValue": "心内病区"
    },
    "departmentOptions": {
      "name": "departmentOptions",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        {
          "role": "负责人",
          "department": "心内病区"
        },
        {
          "role": "第一病房负责人",
          "department": "外科病区"
        },
        {
          "role": "值班护士长",
          "department": "急诊科"
        }
      ]
    }
  },
  "params": {}
};

createComponent({
  key: 'block:u_gong_zuo_wo',
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
