import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanldertoggleAuthor from './lowcode/handler/toggleAuthor' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  toggleAuthor: _hanldertoggleAuthor, 
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
    "articles": {
      "name": "articles",
      "label": "",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        {
          "id": 1,
          "tags": [
            "心血管",
            "预防医学"
          ],
          "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaDjkYStFsVSW2LpJCqvNGxTsT_fhMhYdwOw&s",
          "likes": 245,
          "title": "心血管疾病预防新进展",
          "views": 1560,
          "author": {
            "bio": "从事心血管疾病研究20余年，发表SCI论文50余篇...",
            "name": "张明华",
            "title": "心血管内科主任医师",
            "avatar": "avatar_male",
            "hospital": "北京协和医院"
          },
          "summary": "最新研究表明，定期运动结合地中海饮食可显著降低心血管疾病风险...",
          "expanded": false,
          "publishTime": "2025-07-10"
        },
        {
          "id": 2,
          "tags": [
            "肿瘤",
            "免疫治疗"
          ],
          "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJOgKLpnIwKPaOx96vp5_vTW3TO-uV-uNGRg&s",
          "likes": 189,
          "title": "肿瘤免疫治疗临床应用指南",
          "views": 980,
          "author": {
            "bio": "专注于肿瘤免疫治疗领域，主持多项国家级课题...",
            "name": "李静怡",
            "title": "肿瘤科副主任医师",
            "avatar": "avatar_female",
            "hospital": "上海瑞金医院"
          },
          "summary": "2025版肿瘤免疫治疗临床应用指南解读，包含最新治疗方案和用药建议...",
          "expanded": false,
          "publishTime": "2025-07-05"
        },
        {
          "id": 3,
          "tags": [
            "神经内科",
            "诊断技术"
          ],
          "cover": "https://images.drlogy.com/assets/uploads/img/admin/blog/patient-followup.webp",
          "likes": 156,
          "title": "神经退行性疾病早期诊断",
          "views": 872,
          "author": {
            "bio": "国内神经退行性疾病研究权威，获多项国家科技进步奖...",
            "name": "王建国",
            "title": "神经内科教授",
            "avatar": "avatar_male",
            "hospital": "广州中山医院"
          },
          "summary": "基于AI的神经退行性疾病早期诊断技术取得突破性进展...",
          "expanded": false,
          "publishTime": "2025-06-28"
        },
        {
          "id": 4,
          "tags": [
            "人工智能",
            "诊断技术"
          ],
          "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgUvNb6xxUNoFeOG6wDDap8F4zU79jcD_fo1xx-KMETPiAH7ORJl5wQwq4i-8Zg33gnsA&usqp=CAU",
          "likes": 312,
          "title": "AI辅助诊断系统发展趋势",
          "views": 2024,
          "author": {
            "bio": "长期从事影像人工智能研究，参与多项国家重点研发计划...",
            "name": "赵晓东",
            "title": "医学影像科副主任医师",
            "avatar": "avatar_male",
            "hospital": "复旦大学附属华山医院"
          },
          "summary": "随着深度学习和大数据的普及，AI在影像诊断和病理分析中展现出了前所未有的准确性和效率...",
          "expanded": false,
          "publishTime": "2025-07-08"
        },
        {
          "id": 5,
          "tags": [
            "内分泌",
            "慢性病管理"
          ],
          "cover": "https://nursing.maryville.edu/blog/media_12fbb30a94ab0b6fba6995106306edc462349de8f.jpeg?width=750&format=jpeg&optimize=medium",
          "likes": 278,
          "title": "糖尿病管理新策略",
          "views": 1675,
          "author": {
            "bio": "专注于糖尿病及代谢性疾病研究，发表多篇高影响因子论文...",
            "name": "陈琳",
            "title": "内分泌科主任医师",
            "avatar": "avatar_female",
            "hospital": "中南大学湘雅医院"
          },
          "summary": "综合运用智能胰岛素泵、持续血糖监测及个性化营养干预，实现精细化糖尿病管理...",
          "expanded": false,
          "publishTime": "2025-07-02"
        },
        {
          "id": 6,
          "tags": [
            "数字健康",
            "可穿戴设备"
          ],
          "cover": "https://i0.wp.com/www.ismpp-newsletter.com/wp-content/uploads/2024/11/RITL_Figure_1_v2.png",
          "likes": 198,
          "title": "移动健康监测技术概览",
          "views": 1120,
          "author": {
            "bio": "致力于可穿戴医疗设备研发，拥有多项发明专利...",
            "name": "刘珊",
            "title": "生物医学工程教授",
            "avatar": "avatar_female",
            "hospital": "浙江大学医学院附属第二医院"
          },
          "summary": "从智能手环到贴片式传感器，移动健康设备正逐步实现全天候、无创伤的生理参数监测...",
          "expanded": false,
          "publishTime": "2025-06-30"
        },
        {
          "id": 7,
          "tags": [
            "老年医学",
            "认知干预"
          ],
          "cover": "https://cdn.prod.website-files.com/5e7c8985925ce1169b7b4af3/6568905afcb854e76bab8e40_The%20barriers%20to%20medication%20adherence%20and%20how%20digital%20health%20solutions%20can%20help%20overcome%20them.png",
          "likes": 225,
          "title": "老年痴呆症非药物干预新进展",
          "views": 1345,
          "author": {
            "bio": "专注于认知障碍及老年综合征研究，有丰富的临床试验经验...",
            "name": "何文雅",
            "title": "老年医学副教授",
            "avatar": "avatar_female",
            "hospital": "四川大学华西医院"
          },
          "summary": "音乐疗法、认知训练及虚拟现实干预等非药物手段在延缓认知衰退方面取得了显著效果...",
          "expanded": false,
          "publishTime": "2025-06-25"
        },
        {
          "id": 8,
          "tags": [
            "再生医学",
            "干细胞"
          ],
          "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4SUGeS_caf2TNsH8X20euQncA_F9ZCDBJIA&s",
          "likes": 304,
          "title": "器官再生研究进展",
          "views": 1890,
          "author": {
            "bio": "承担国家干细胞临床转化项目，多次获科技进步奖...",
            "name": "孙强",
            "title": "再生医学研究员",
            "avatar": "avatar_male",
            "hospital": "中科院干细胞与再生医学创新研究院"
          },
          "summary": "干细胞支架、3D生物打印及基因工程等技术正在推动功能性组织和器官再生研究...",
          "expanded": false,
          "publishTime": "2025-06-20"
        },
        {
          "id": 9,
          "tags": [
            "营养学",
            "代谢健康"
          ],
          "cover": "https://www.kff.org/wp-content/uploads/2024/01/Figure-2-Though-health-care-is-essential-to-health-research-shows-that-health-outcomes-are-driven-by-many-factors.png",
          "likes": 172,
          "title": "精准营养与代谢健康",
          "views": 940,
          "author": {
            "bio": "专注于精准营养与慢病预防，主持多项国际合作研究...",
            "name": "周颖",
            "title": "营养科学博士",
            "avatar": "avatar_female",
            "hospital": "中山大学公共卫生学院"
          },
          "summary": "基于个体基因组和肠道菌群信息，定制化营养方案正成为维护代谢平衡的新趋势...",
          "expanded": false,
          "publishTime": "2025-06-15"
        },
        {
          "id": 10,
          "tags": [
            "基因治疗",
            "罕见病"
          ],
          "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLNCFzRnx27uqTnu3NPuuBW_AEDFPrej6BbA&s",
          "likes": 256,
          "title": "基因编辑在罕见病治疗中的应用",
          "views": 1583,
          "author": {
            "bio": "从事基因编辑与罕见病研究，成果发表于Nature Medicine等期刊...",
            "name": "郑浩",
            "title": "遗传学副教授",
            "avatar": "avatar_male",
            "hospital": "上海交通大学医学院附属瑞金医院"
          },
          "summary": "CRISPR/Cas9 及 Base Editing 技术在多种罕见遗传性疾病动物模型中实现了有效基因修复...",
          "expanded": false,
          "publishTime": "2025-06-10"
        }
      ],
      "enableSyncLocal": false
    }
  },
  "params": {}
};

createComponent({
  key: 'block:u_peng_you_quan',
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
