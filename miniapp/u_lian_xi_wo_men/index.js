import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'


const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
}

const widgetProps = {
  "container1": {
    "style": {
      "margin": "0px",
      "display": "flex",
      "padding": "60px 16px",
      "justifyContent": "center"
    },
    "classList": [],
    "title": "",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container2": {
    "style": {
      "width": "1200px"
    },
    "classList": [],
    "data": {},
    "_parentId": "container1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text1": {
    "style": {
      "fontSize": "36px",
      "textAlign": "center",
      "fontWeight": "bolder",
      "lineHeight": "44px"
    },
    "classList": [],
    "maxLines": "1",
    "inheritColor": true,
    "_parentId": "container2",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text2": {
    "style": {
      "margin": "16px 0px 32px",
      "fontSize": "16px",
      "textAlign": "center",
      "lineHeight": "24px"
    },
    "classList": [],
    "maxLines": "1",
    "inheritColor": true,
    "_parentId": "container2",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container3": {
    "style": {
      "padding": "24px 0px 0px"
    },
    "classList": [],
    "data": {},
    "_parentId": "container2",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "grid2": {
    "style": {},
    "classList": [],
    "template": "[1,3]",
    "_parentId": "container3",
    "_order": 0,
    "widgetType": "gsd-h5-react:Grid"
  },
  "row4": {
    "style": {},
    "classList": [],
    "gutterX": "48px",
    "colCount": 2,
    "alignItems": "stretch",
    "_parentId": "grid2",
    "_order": 0,
    "widgetType": "gsd-h5-react:Row"
  },
  "col7": {
    "style": {},
    "classList": [],
    "alignSelf": "auto",
    "widthType": {
      "type": "twelve-adjust",
      "unit": "px",
      "value": "12"
    },
    "lgWidthType": {
      "type": "twelve-adjust",
      "unit": "px",
      "value": "6"
    },
    "_parentId": "row4",
    "_order": 0,
    "widgetType": "gsd-h5-react:Col"
  },
  "image1": {
    "style": {
      "width": "582px",
      "height": "388px",
      "borderRadius": "6px 6px"
    },
    "classList": [],
    "_staticResourceAttribute": [
      "src"
    ],
    "alt": "[图片]",
    "fit": "cover",
    "_parentId": "col7",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdImage"
  },
  "col8": {
    "style": {},
    "classList": [],
    "alignSelf": "auto",
    "widthType": {
      "type": "twelve-adjust",
      "unit": "px",
      "value": "12"
    },
    "lgWidthType": {
      "type": "twelve-adjust",
      "unit": "px",
      "value": "6"
    },
    "_parentId": "row4",
    "_order": 1,
    "widgetType": "gsd-h5-react:Col"
  },
  "text3": {
    "style": {
      "margin": "16px 0px 0px",
      "fontSize": "20px",
      "fontWeight": "bolder",
      "lineHeight": "30px"
    },
    "classList": [],
    "maxLines": "1",
    "inheritColor": true,
    "_parentId": "col8",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text4": {
    "style": {
      "margin": "0px 0px 32px",
      "fontSize": "14px"
    },
    "classList": [],
    "maxLines": "1",
    "inheritColor": true,
    "_parentId": "col8",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "grid3": {
    "style": {},
    "classList": [],
    "gutterX": "8px",
    "gutterY": "24px",
    "template": "[1,3]",
    "_parentId": "col8",
    "_order": 2,
    "widgetType": "gsd-h5-react:Grid"
  },
  "repeater1": {
    "style": {},
    "classList": [],
    "suffix": "repeater1",
    "forItem": "item_repeater1",
    "forIndex": "index_repeater1",
    "_parentId": "grid3",
    "_order": 0,
    "widgetType": "gsd-h5-react:Repeater"
  },
  "repeater1_item": {
    "style": {},
    "classList": [],
    "_parentId": "repeater1",
    "widgetType": "gsd-h5-react:RepeaterItem"
  },
  "row5": {
    "style": {},
    "classList": [],
    "colCount": 2,
    "alignItems": "center",
    "_parentId": "repeater1_item",
    "_order": 0,
    "widgetType": "gsd-h5-react:Row"
  },
  "col9": {
    "style": {},
    "classList": [],
    "alignSelf": "auto",
    "widthType": "fit-content",
    "lgWidthType": "fit-content",
    "_parentId": "row5",
    "_order": 0,
    "widgetType": "gsd-h5-react:Col"
  },
  "icon1": {
    "style": {},
    "classList": [],
    "_staticResourceAttribute": [
      "src"
    ],
    "size": "lg",
    "_parentId": "col9",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "col10": {
    "style": {},
    "classList": [],
    "alignSelf": "auto",
    "widthType": "auto-fill",
    "_parentId": "row5",
    "_order": 1,
    "widgetType": "gsd-h5-react:Col"
  },
  "text5": {
    "style": {
      "fontSize": "14px",
      "fontWeight": "lighter"
    },
    "classList": [],
    "maxLines": "1",
    "inheritColor": true,
    "_parentId": "col10",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text6": {
    "style": {
      "fontSize": "16px"
    },
    "classList": [],
    "maxLines": "1",
    "inheritColor": true,
    "_parentId": "col10",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  }
}





const evtListeners = {}

const behaviors = []

const properties = {
  "title": {
    type: String,
    value: "联系方式"
  },
  "content": {
    type: Object,
    value: {"img":"https://lowcode-5g5llxbq5bc9299e-1300677802.tcloudbaseapp.com/resources/2024-04/lowcode-1711176","info":[{"icon":"td:location","text":"公司地址","value":"深圳市南山区深南大道10000号"},{"icon":"td:call","text":"联系电话","value":"4009100100-1"},{"icon":"td:mail","text":"电子邮箱","value":"tec@tencent.com"},{"icon":"td:user-talk","text":"微信公众号","value":"tec@tencent.com"}],"title":"这里是是一段标题文案","subTitle":"这里是一段内容文案，这里是一段内容文案，这里是一段内容文案，"}
  },
  "subTitle": {
    type: String,
    value: "副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题"
  },
}

const events = [
]



const dataBinds = {
  container1: { 'data': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      Object.assign({"title":"联系我们",":content":"({\n  \"img\": \"https://lowcode-5g5llxbq5bc9299e-1300677802.tcloudbaseapp.com/resources/2024-04/lowcode-1711176\",\n  \"title\": \"期待您的加入\",\n  \"subTitle\": \"专注为广大青年、大学生和在职人员提供医疗护理培训的在线职业教育网并提供三甲医院现场教学实习\",\n  \"info\": [{\n    \"icon\": \"td:location\",\n    \"text\": \"公司地址\",\n    \"value\": \"北京市创富大道10000号\"\n  }, {\n    \"icon\": \"td:call\",\n    \"text\": \"联系电话\",\n    \"value\": \"4008888888\"\n  }, {\n    \"icon\": \"td:mail\",\n    \"text\": \"电子邮箱\",\n    \"value\": \"12345@qq.com\"\n  }, {\n    \"icon\": \"td:user-talk\",\n    \"text\": \"微信公众号\",\n    \"value\": \"12345@qq.com\"\n  }]\n})","subTitle":"热情服务，专业解答，为您在健康道路上保驾护航，期待与您携手共创美好未来"}, $comp.props.data)
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.container1.style, ...(
$w.wedaContext.platforms.includes("MOBILEWEB") ? {
  paddingTop: 40,
  paddingBottom: 40
} : {}
)}
    )}
  },
  text1: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data.title
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.text1.style, ...(
$w.wedaContext.platforms.includes("MOBILEWEB") ? {
  fontSize: 24
} : {}
)}
    )}
  },
  text2: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data.subTitle
    )}
  },
  image1: { 'src': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data.content.img
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.image1.style, ...(
$w.wedaContext.platforms.includes("MOBILEWEB") ? {
  height: 200
} : {}
)}
    )}
  },
  text3: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data.content.title
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.text3.style, ...(
$w.wedaContext.platforms.includes("MOBILEWEB") ? {
  marginTop: '16'
} : {}
)}
    )}
  },
  text4: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data.content.subTitle
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.text4.style, ...(
$w.wedaContext.platforms.includes("MOBILEWEB") ? {
  marginTop: 0,
  marginBottom: 16
} : {}
)}
    )}
  },
  repeater1: { 'data': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data.content.info
    )}
  },
  repeater1_item: { '_waFor': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data.content.info
    )}
  },
  icon1: { 'name': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.icon
    )}
  },
  text5: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.text
    )}
  },
  text6: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.value
    )}
  },
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
  key: 'block:u_lian_xi_wo_men',
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
