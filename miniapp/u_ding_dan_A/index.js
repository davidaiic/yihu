import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanlderswitchTab from './lowcode/handler/switchTab' 
import _hanlderloadMore from './lowcode/handler/loadMore' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  switchTab: _hanlderswitchTab, 
  loadMore: _hanlderloadMore, 
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
    "activeTab": {
      "name": "activeTab",
      "varType": "state",
      "dataType": "string",
      "initialValue": "processing"
    },
    "unpaidOrders": {
      "name": "unpaidOrders",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        {
          "id": "order3",
          "date": "2025-07-15",
          "type": "医院陪诊",
          "image": "avatar_male",
          "price": "¥150/次",
          "title": "老人陪诊服务",
          "status": "未支付"
        }
      ]
    },
    "completedOrders": {
      "name": "completedOrders",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        {
          "id": "order4",
          "date": "2025-06-28",
          "type": "月嫂上门",
          "image": "close_up_of_plant",
          "nurse": "陈月嫂",
          "price": "¥5800/月",
          "title": "新生儿护理",
          "rating": 5,
          "status": "已完成",
          "isShared": true,
          "sharedBy": "王先生"
        }
      ]
    },
    "processingOrders": {
      "name": "processingOrders",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        {
          "id": "order1",
          "date": "2025-07-10",
          "type": "住院护理",
          "image": "abstract_space_themed_art",
          "nurse": "王护士",
          "price": "¥380/天",
          "title": "住院护理服务",
          "status": "进行中",
          "isShared": true,
          "sharedBy": "张女士"
        },
        {
          "id": "order2",
          "date": "2025-07-12",
          "type": "上门护理",
          "image": "silhouette_female",
          "nurse": "李护士",
          "price": "¥200/次",
          "title": "上门伤口护理",
          "status": "进行中",
          "isShared": false
        }
      ]
    }
  },
  "params": {}
};

createComponent({
  key: 'block:u_ding_dan_A',
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
