import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanlderhandleQuickAction from './lowcode/handler/handleQuickAction' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  handleQuickAction: _hanlderhandleQuickAction, 
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
    "tasks": {
      "name": "tasks",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        {
          "icon": "td:houses",
          "type": "住院护理",
          "color": "#3A86FF",
          "count": 3
        },
        {
          "icon": "td:location",
          "type": "上门护理",
          "color": "#4CC9F0",
          "count": 5
        },
        {
          "icon": "td:user-circle",
          "type": "医院陪诊",
          "color": "#4361EE",
          "count": 2
        },
        {
          "icon": "td:verified",
          "type": "月嫂上门",
          "color": "#7209B7",
          "count": 1
        }
      ]
    },
    "quickActions": {
      "name": "quickActions",
      "label": "",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        {
          "icon": "td:user-circle",
          "color": "#42A5F5",
          "title": "健康档案"
        },
        {
          "icon": "td:edit-1",
          "color": "#66BB6A",
          "title": "医嘱处理"
        },
        {
          "icon": "td:cart",
          "color": "#FF7043",
          "title": "药品管理"
        },
        {
          "icon": "td:bookmark-checked",
          "color": "#AB47BC",
          "title": "护理日志"
        },
        {
          "icon": "td:call-1",
          "color": "#EF5350",
          "title": "紧急呼叫"
        },
        {
          "icon": "td:calendar-1",
          "color": "#26C6DA",
          "title": "排班查看"
        }
      ],
      "enableSyncLocal": false
    }
  },
  "params": {}
};

createComponent({
  key: 'block:u_gong_zuo_tai',
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
