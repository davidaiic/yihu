import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanldertoggleLike from './lowcode/handler/toggleLike' 
import _hanldertoggleAuthorInfo from './lowcode/handler/toggleAuthorInfo' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  toggleLike: _hanldertoggleLike, 
  toggleAuthorInfo: _hanldertoggleAuthorInfo, 
}

const widgetProps = {
  "container1": {
    "style": {},
    "classList": [
      "ai-generate-wrapper"
    ],
    "data": {},
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container2": {
    "style": {
      "padding": "16px",
      "backgroundColor": "#f8f9fa"
    },
    "classList": [],
    "_parentId": "container1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container13": {
    "style": {},
    "classList": [],
    "data": {},
    "_parentId": "container2",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "button3": {
    "style": {
      "color": "#333",
      "fontSize": "20px",
      "minHeight": "initial"
    },
    "classList": [],
    "_staticResourceAttribute": [
      "sendMessageImg",
      "iconSrc"
    ],
    "icon": "td:arrow-left",
    "text": "按钮",
    "variant": "text",
    "iconType": "icon-only",
    "_parentId": "container13",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container3": {
    "style": {
      "overflow": "hidden",
      "borderRadius": "8px",
      "marginBottom": "20px"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "image1": {
    "style": {
      "width": "100%",
      "height": "200px"
    },
    "classList": [],
    "fit": "cover",
    "_parentId": "container3",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdImage"
  },
  "container4": {
    "style": {
      "display": "flex",
      "marginBottom": "12px",
      "flexDirection": "row"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "tag1": {
    "style": {
      "display": "inline-flex",
      "--wd-tag-font-size-md": "14px"
    },
    "classList": [],
    "_parentId": "container4",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdTag"
  },
  "text1": {
    "style": {
      "color": "#1a1a1a",
      "display": "block",
      "fontSize": "22px",
      "fontWeight": "600",
      "marginBottom": "16px"
    },
    "classList": [],
    "level": "title-4",
    "_parentId": "container2",
    "_order": 3,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container5": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "marginBottom": "16px",
      "flexDirection": "row"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 4,
    "widgetType": "gsd-h5-react:Container"
  },
  "container10": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "marginRight": "20px",
      "flexDirection": "row"
    },
    "classList": [],
    "_parentId": "container5",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "button1": {
    "style": {
      "fontSize": "20px",
      "minHeight": "initial"
    },
    "classList": [],
    "icon": "td:heart-filled",
    "variant": "text",
    "iconType": "icon-only",
    "_parentId": "container10",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "text3": {
    "style": {
      "color": "#86909c",
      "display": "inline-block",
      "fontSize": "14px",
      "marginLeft": "4px"
    },
    "classList": [],
    "_parentId": "container10",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container11": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "flexDirection": "row"
    },
    "classList": [],
    "_parentId": "container5",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "icon1": {
    "style": {
      "color": "#86909c",
      "fontSize": "20px"
    },
    "classList": [],
    "name": "td:view-list",
    "_parentId": "container11",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text4": {
    "style": {
      "color": "#86909c",
      "display": "inline-block",
      "fontSize": "14px",
      "marginLeft": "4px"
    },
    "classList": [],
    "_parentId": "container11",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container6": {
    "style": {
      "padding": "12px",
      "borderRadius": "6px",
      "marginBottom": "20px",
      "backgroundColor": "#f2f6fc"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 5,
    "widgetType": "gsd-h5-react:Container"
  },
  "text5": {
    "style": {
      "color": "#1a1a1a",
      "display": "inline-block",
      "fontWeight": "600",
      "marginBottom": "8px"
    },
    "classList": [],
    "text": "摘要",
    "_parentId": "container6",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text6": {
    "style": {
      "color": "#4e5969",
      "display": "inline-block",
      "lineHeight": "1.6em"
    },
    "classList": [],
    "_parentId": "container6",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container7": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "marginBottom": "20px",
      "flexDirection": "row"
    },
    "classList": [],
    "_parentId": "container2",
    "_order": 6,
    "widgetType": "gsd-h5-react:Container"
  },
  "image2": {
    "style": {
      "width": "48px",
      "height": "48px",
      "marginRight": "12px",
      "borderRadius": "24px"
    },
    "classList": [],
    "fit": "cover",
    "_parentId": "container7",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdImage"
  },
  "container12": {
    "style": {
      "flex": "1"
    },
    "classList": [],
    "_parentId": "container7",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "text7": {
    "style": {
      "color": "#1a1a1a",
      "display": "inline-block",
      "fontSize": "16px",
      "fontWeight": "600"
    },
    "classList": [],
    "_parentId": "container12",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text8": {
    "style": {
      "color": "#86909c",
      "display": "inline-block",
      "fontSize": "12px",
      "marginTop": "4px"
    },
    "classList": [],
    "_parentId": "container12",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "button2": {
    "style": {
      "color": "#86909c",
      "minHeight": "initial",
      "transition": "transform 0.3s"
    },
    "classList": [],
    "icon": "td:chevron-down",
    "variant": "text",
    "iconType": "icon-only",
    "_parentId": "container7",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container8": {
    "style": {},
    "classList": [],
    "_parentId": "container2",
    "_order": 7,
    "widgetType": "gsd-h5-react:Container"
  },
  "text9": {
    "style": {
      "color": "#4e5969",
      "display": "inline-block",
      "lineHeight": "1.6em"
    },
    "classList": [],
    "_parentId": "container8",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container9": {
    "style": {},
    "classList": [],
    "_parentId": "container2",
    "_order": 8,
    "widgetType": "gsd-h5-react:Container"
  },
  "richTextView1": {
    "style": {},
    "classList": [],
    "value": "      <div\n        id=\"Content\"\n        class=\"ns-richtext block\">\n        <div><p>心血管疾病（Cardiovascular diseases, CVD）是全球死亡和疾病负担的主要病因。12月9日，美国心脏病学会杂志（JACC）发表的一项研究《Global Burden of Cardiovascular Diseases and Risk Factors, 1990–2019: Update From the GBD 2019 Study》，使用“2019全球疾病负担研究（GBD）”的数据，分析了13种心血管疾病和9个相关危险因素，评估了1990年至2019年全球心血管疾病负担的变化趋势。主要数据见下方图表所示。</p><p class=\"ql-align-center\"><img src=\"https://cdn.mediecogroup.com/7b/7b9ea548/7b9ea5486ccf4d968af83526bc08ed62.PNG\" data-width=\"866\" data-height=\"362\"></p><p class=\"ql-align-center\">图1. 2010-2019年CVD年龄标化死亡率的变化</p><p class=\"ql-align-center\"><img src=\"https://cdn.mediecogroup.com/71/71640363/71640363f33b4a2181849ba9c0305269.PNG\" data-width=\"866\" data-height=\"331\"></p><p class=\"ql-align-center\">图2. CVD死亡人数情况</p><p class=\"ql-align-center\"><img src=\"https://cdn.mediecogroup.com/46/46a906d2/46a906d2e4eb4f618e96e9baa39b81cd.PNG\" data-width=\"866\" data-height=\"350\"></p><p class=\"ql-align-center\">图3. 不同CVD病因所致的死亡占比（2019年）<img src=\"https://cdn.mediecogroup.com/de/de4ac7e4/de4ac7e4cedb4c4c84ddaba784933cc2.PNG\" data-width=\"866\" data-height=\"397\"></p><p class=\"ql-align-center\">图4. CVD负担的主要危险因素</p><h3 class=\"ql-align-center\"><strong>CVD整体情况</strong></h3><p>1990年到2019年，CVD总患病人数接近翻倍，<strong>从2.71亿上升至5.23亿</strong>；CVD死亡人数稳步上升，<strong>1990年为1210万，2019年为1860万</strong>。CVD所致的伤残调整寿命年（DALYs）、早死所致生命损失年（YLLs）和伤残所致生命损失年（YLDs）均显著增加。</p><p>CVD的年龄标化死亡率最高的地区是乌兹别克斯坦、所罗门群岛和塔吉克斯坦，死亡率最低的是法国、秘鲁和日本。1990年到2019年，CVD的年龄标化死亡率、DALYs率和YLLs率大幅下降，年龄标化的患病率和YLDs率小幅下降，表明人口增长和老龄化是CVD患病总数增长的主要原因。</p><p>2019年，<strong>80-84岁以前，男性的总CVD DALYs要高于女性，这个年龄之后，情况反转</strong>。30-60岁和＞80岁的人群中，CVD所致DALYs的性别差异最为显著。</p><h3 class=\"ql-align-center\"><strong>缺血性心脏病</strong></h3><p>自1990年以来，归因于缺血性心脏病的DALYs数量在稳步增加，2019年导致1.82亿DALYs和914万死亡。GBD 2019数据估计，2019年缺血性心脏病患病人数为1.97亿。</p><p>1990年到2019年，全球整体来讲，缺血性心脏病年龄标化的死亡率、DALYs率和患病率都有所下降，表明全球缺血性心脏病的增加主要归因于人口增长和老龄化，不过，南亚、东亚和东南亚很多国家的年龄标化死亡率上升了，包括中国在内。</p><p>全球范围内，<strong>男性中缺血性心脏病所致的DALYs明显高于女性</strong>。从30岁开始，男性缺血性心脏病所致DALYs迅速上升；45-49岁男性缺血性心脏病所致的DALYs与65-69岁的女性几乎相当。</p><h3 class=\"ql-align-center\"><strong>卒中</strong></h3><p>自1990年以来，卒中患病人数、死亡人数和DALYs均在稳步上升，2019年，患病人数达到1.01亿，死亡人数达到655万，卒中所致DALYs达到1.43亿。在1220万新发卒中病例中，763万是缺血性卒中，341万是出血性卒中，118万是蛛网膜下腔出血。</p><p>1990年到2019年，全球整体来讲，卒中的年龄标化死亡率和DALYs率都大幅下降，表明：① 预防措施在降低缺血性和出血性卒中方面都非常有效；② 平均而言，全球卒中负担的增加主要归因于人口增长和老龄化。自1990年以来，中国、印尼和美国部分地区，卒中的年龄标化患病率有所上升。</p><p>男性的卒中年龄标化DALYs率和死亡率显著高于女性，但是女性的患病率更高，表明男性患者死亡和残疾风险更高，女性卒中存活率更高。缺血性卒中、出血性卒中和蛛网膜下腔出血中也观察到类似的性别模式。</p><p>另外11种心血管疾病，包括高血压性心脏病，先天性心脏病，风湿性心脏病，心肌病和心肌炎，酒精性心肌病，房颤和房扑，主动脉瘤，主动脉瓣钙化，二尖瓣退行性病变，心内膜炎，外周动脉疾病；以及9种危险因素，包括高收缩压、高空腹血糖、高LDL-C、高BMI、肾功能受损、空气污染、吸烟、饮食因素、运动少，更详细的数据，请查看原文哦。</p></div>\n      </div>",
    "_parentId": "container9",
    "_order": 0,
    "widgetType": "gsd-h5-react:RichTextView"
  },
  "text2": {
    "style": {
      "color": "#86909c",
      "display": "inline-block",
      "marginTop": "24px",
      "textAlign": "right"
    },
    "classList": [],
    "level": "body-sm",
    "_parentId": "container2",
    "_order": 9,
    "widgetType": "gsd-h5-react:WdText"
  }
}





const evtListeners = {"onbutton3$tap": [
      {
          key: 'w8mj9zyc7z7',
          sourceKey: 'platform:navigateBack',
          handler: function({args}){ return $app.navigateBack(...args)},
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton1$tap": [
      {
          key: 'wymnPQPx8',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "toggleLike";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        id: event.currentTarget.id
      }
    }
  });
}
)({event}) },
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton2$tap": [
      {
          key: 'wg6SBx4wh',
          sourceKey: 'general-func:iife',
          handler: function({event, $w, params}) { const $comp = $w.$comp; return (
({
  event
}) => {
  const hanlder = "toggleAuthorInfo";
  return typeof hanlder === 'function' ? hanlder(event) : $comp.handler?.[hanlder]?.({
    event,
    data: {
      target: {
        id: event.currentTarget.id
      }
    }
  });
}
)({event}) },
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
  image1: { 'src': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.article.cover
    )}
  },
  tag1: { 'range': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.article.tags.map(tag => ({
  "label": tag,
  "value": tag,
  "color": "#2d8cf0"
}))
    )}
  },
  text1: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.article.title
    )}
  },
  button1: { 'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.button1.style, ...(
`color: ${$comp.dataset.state.article.isLiked ? "#f53f3f" : "#86909c"}`
)}
    )}
  },
  text3: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.article.likes
    )}
  },
  text4: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.article.views
    )}
  },
  text6: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.article.summary
    )}
  },
  image2: { 'src': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.article.author.avatar
    )}
  },
  text7: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.article.author.name
    )}
  },
  text8: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `${$comp.dataset.state.article.author.title} · ${$comp.dataset.state.article.author.hospital}`
    )}
  },
  button2: { 'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.button2.style, ...(
`transform: rotate(${$comp.dataset.state.showAuthorInfo ? "180deg" : "0deg"})`
)}
    )}
  },
  container8: { 'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {...widgetProps.container8.style, ...(
`${$comp.dataset.state.showAuthorInfo ? "" : "display: none;"} background-color: #f2f6fc; padding: 12px; border-radius: 6px; margin-bottom: 20px;`
)}
    )}
  },
  text9: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $comp.dataset.state.article.author.intro
    )}
  },
  text2: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      `发布时间: ${$comp.dataset.state.article.publishTime}`
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
    "article": {
      "name": "article",
      "label": "",
      "varType": "state",
      "dataType": "object",
      "initialValue": {
        "tags": [
          "心血管",
          "预防医学",
          "临床研究"
        ],
        "cover": "https://www.news-medical.net/image-handler/picture/2021/1/shutterstock_1576424071.jpg",
        "likes": 1245,
        "title": "心血管疾病预防的最新研究进展",
        "views": 5680,
        "author": {
          "name": "张明华",
          "intro": "从事心血管疾病临床研究20年，发表SCI论文50余篇，获国家科技进步二等奖3项。",
          "title": "心血管内科主任医师",
          "avatar": "avatar_male",
          "hospital": "北京协和医院"
        },
        "content": "心血管疾病(CVD)是全球死亡的主要原因，每年导致约1790万人死亡。最新研究表明...",
        "isLiked": false,
        "summary": "本研究系统回顾了近五年心血管疾病预防领域的重要研究成果，特别关注了生活方式干预和新型药物预防策略。",
        "publishTime": "2023-11-15 09:30"
      },
      "enableSyncLocal": false
    },
    "showAuthorInfo": {
      "name": "showAuthorInfo",
      "varType": "state",
      "dataType": "boolean",
      "initialValue": false
    }
  },
  "params": {}
};

createComponent({
  key: 'block:u_wen_zhang_xiang_qin',
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
