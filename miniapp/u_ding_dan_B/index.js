import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanlderswitchTab from './lowcode/handler/switchTab' 
import _hanlderloadMore from './lowcode/handler/loadMore' 
import _hanlderonKeywordChange from './lowcode/handler/onKeywordChange' 
import _hanlderonJHScroll from './lowcode/handler/onJHScroll' 
import _hanlderonPageScroll from './lowcode/handler/onPageScroll' 
import _hanlderonSearch from './lowcode/handler/onSearch' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  switchTab: _hanlderswitchTab, 
  loadMore: _hanlderloadMore, 
  onKeywordChange: _hanlderonKeywordChange, 
  onJHScroll: _hanlderonJHScroll, 
  onPageScroll: _hanlderonPageScroll, 
  onSearch: _hanlderonSearch, 
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
    "keyword": {
      "name": "keyword",
      "label": "",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "activeTab": {
      "name": "activeTab",
      "varType": "state",
      "dataType": "string",
      "initialValue": "inProgress"
    },
    "navOpacity": {
      "name": "navOpacity",
      "varType": "state",
      "dataType": "number",
      "initialValue": 1
    },
    "scrollPosition": {
      "name": "scrollPosition",
      "varType": "state",
      "dataType": "number",
      "initialValue": 0
    },
    "completedOrders": {
      "name": "completedOrders",
      "label": "",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        {
          "id": "order101",
          "type": "上门护理",
          "image": "houses",
          "nurse": "郑护",
          "price": "¥280/次",
          "rating": 5,
          "status": "已完成",
          "address": "北京市西城区金融大街15号",
          "patient": "林女士",
          "duration": "2小时",
          "serviceDate": "2025-07-01"
        },
        {
          "id": "order102",
          "type": "医院陪诊",
          "image": "photo_of_a_building",
          "nurse": "",
          "price": "¥180/次",
          "rating": 4,
          "status": "已完成",
          "address": "北京同仁医院眼科",
          "patient": "黄先生",
          "duration": "3小时",
          "serviceDate": "2025-07-03"
        },
        {
          "id": "order103",
          "type": "月嫂上门",
          "image": "houses",
          "nurse": "",
          "price": "¥8800/月",
          "rating": 5,
          "status": "已完成",
          "address": "北京市朝阳区望京SOHO",
          "patient": "新生儿",
          "duration": "26天",
          "serviceDate": "2025-06-20"
        },
        {
          "id": "order104",
          "type": "住院护理",
          "image": "photo_of_a_building",
          "nurse": "",
          "price": "¥400/天",
          "rating": 4,
          "status": "已完成",
          "address": "北京积水潭医院骨科2楼208室",
          "patient": "赵先生",
          "duration": "10天",
          "serviceDate": "2025-06-25"
        },
        {
          "id": "order105",
          "type": "上门护理",
          "image": "houses",
          "nurse": "王护 李护",
          "price": "¥280/次",
          "rating": 5,
          "status": "已完成",
          "address": "北京市海淀区清华科技园",
          "patient": "",
          "duration": "2小时",
          "serviceDate": "2025-07-05"
        }
      ],
      "enableSyncLocal": false
    },
    "inProgressOrders": {
      "name": "inProgressOrders",
      "label": "",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        {
          "id": "order001",
          "type": "住院护理",
          "image": "photo_of_a_building",
          "nurse": "李护 张护",
          "price": "¥380/天",
          "status": "进行中",
          "address": "北京协和医院住院部3楼302室",
          "patient": "张先生",
          "duration": "7天",
          "serviceDate": "2025-07-15"
        },
        {
          "id": "order002",
          "type": "上门护理",
          "image": "houses",
          "nurse": "陈护",
          "price": "¥280/次",
          "status": "进行中",
          "address": "北京市朝阳区建国路88号",
          "patient": "王女士",
          "duration": "2小时",
          "serviceDate": "2025-07-16"
        },
        {
          "id": "order003",
          "type": "医院陪诊",
          "image": "photo_of_a_building",
          "nurse": "",
          "price": "¥180/次",
          "status": "进行中",
          "address": "北京301医院门诊部",
          "patient": "刘先生",
          "duration": "4小时",
          "serviceDate": "2025-07-17"
        },
        {
          "id": "order004",
          "type": "月嫂上门",
          "image": "houses",
          "nurse": "",
          "price": "¥8800/月",
          "status": "进行中",
          "address": "北京市海淀区中关村南大街5号",
          "patient": "新生儿",
          "duration": "26天",
          "serviceDate": "2025-07-18"
        },
        {
          "id": "order005",
          "type": "住院护理",
          "image": "photo_of_a_building",
          "nurse": "",
          "price": "¥420/天",
          "status": "进行中",
          "address": "北京安贞医院心内科5楼502室",
          "patient": "陈女士",
          "duration": "5天",
          "serviceDate": "2025-07-19"
        }
      ],
      "enableSyncLocal": false
    }
  },
  "params": {}
};

createComponent({
  key: 'block:u_ding_dan_B',
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
