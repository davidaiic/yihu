import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'


const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
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
  "row3": {
    "style": {},
    "classList": [],
    "alignItems": "stretch",
    "_parentId": "grid1",
    "_order": 2,
    "widgetType": "gsd-h5-react:Row"
  },
  "col6": {
    "style": {},
    "classList": [],
    "alignSelf": "auto",
    "widthType": "auto-fill",
    "_parentId": "row3",
    "_order": 0,
    "widgetType": "gsd-h5-react:Col"
  }
}





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
  "state": {}
};

createComponent({
  key: 'block:9krWJbkWindex',
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
