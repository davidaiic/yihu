import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanlder_onGetLocation from './lowcode/handler/_onGetLocation' 
import _hanlder_onTestLoc from './lowcode/handler/_onTestLoc' 
import _hanlderonSearchByName from './lowcode/handler/onSearchByName' 
import _hanlderonSearchByDistance from './lowcode/handler/onSearchByDistance' 
import _hanlderonSearchCaregiver from './lowcode/handler/onSearchCaregiver' 
import _hanlderonSelectHospital from './lowcode/handler/onSelectHospital' 
import _hanlderloadHospitals from './lowcode/handler/loadHospitals' 
import _hanlderonGoToBedSelection from './lowcode/handler/onGoToBedSelection' 
import _hanlderonShowHospitalSearch from './lowcode/handler/onShowHospitalSearch' 
import _hanlderonSearchInput from './lowcode/handler/onSearchInput' 
import _hanlderonSelectCaregiverType from './lowcode/handler/onSelectCaregiverType' 
import _hanlderloadCaregivers from './lowcode/handler/loadCaregivers' 
import _hanlderonPageLoad from './lowcode/handler/onPageLoad' 
import _hanlderloadCurrentView from './lowcode/handler/loadCurrentView' 
import _hanlderonNextPage from './lowcode/handler/onNextPage' 
import _hanlderonPrevPage from './lowcode/handler/onPrevPage' 
import _hanlderloadHospitalsByNameByOpenId from './lowcode/handler/loadHospitalsByNameByOpenId' 
import _hanlderloadHospitalsNearbyByOpenId from './lowcode/handler/loadHospitalsNearbyByOpenId' 
import _hanlderloadNearbyCaregivers from './lowcode/handler/loadNearbyCaregivers' 
import _hanlderonGoToCaregiverSelection from './lowcode/handler/onGoToCaregiverSelection' 
import _hanldercheckPwdRule from './lowcode/handler/checkPwdRule' 
import _hanldertoggleShowMore from './lowcode/handler/toggleShowMore' 
import _hanldergetLocationText from './lowcode/handler/getLocationText' 
import _hanldergetAvatarUrl from './lowcode/handler/getAvatarUrl' 
import _hanlderonTagClick from './lowcode/handler/onTagClick' 
import _hanlderselectTab from './lowcode/handler/selectTab' 
import _hanldertoggleAllTabs from './lowcode/handler/toggleAllTabs' 
import _hanlderonGotoServicePage from './lowcode/handler/onGotoServicePage' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  _onGetLocation: _hanlder_onGetLocation, 
  _onTestLoc: _hanlder_onTestLoc, 
  onSearchByName: _hanlderonSearchByName, 
  onSearchByDistance: _hanlderonSearchByDistance, 
  onSearchCaregiver: _hanlderonSearchCaregiver, 
  onSelectHospital: _hanlderonSelectHospital, 
  loadHospitals: _hanlderloadHospitals, 
  onGoToBedSelection: _hanlderonGoToBedSelection, 
  onShowHospitalSearch: _hanlderonShowHospitalSearch, 
  onSearchInput: _hanlderonSearchInput, 
  onSelectCaregiverType: _hanlderonSelectCaregiverType, 
  loadCaregivers: _hanlderloadCaregivers, 
  onPageLoad: _hanlderonPageLoad, 
  loadCurrentView: _hanlderloadCurrentView, 
  onNextPage: _hanlderonNextPage, 
  onPrevPage: _hanlderonPrevPage, 
  loadHospitalsByNameByOpenId: _hanlderloadHospitalsByNameByOpenId, 
  loadHospitalsNearbyByOpenId: _hanlderloadHospitalsNearbyByOpenId, 
  loadNearbyCaregivers: _hanlderloadNearbyCaregivers, 
  onGoToCaregiverSelection: _hanlderonGoToCaregiverSelection, 
  checkPwdRule: _hanldercheckPwdRule, 
  toggleShowMore: _hanldertoggleShowMore, 
  getLocationText: _hanldergetLocationText, 
  getAvatarUrl: _hanldergetAvatarUrl, 
  onTagClick: _hanlderonTagClick, 
  selectTab: _hanlderselectTab, 
  toggleAllTabs: _hanldertoggleAllTabs, 
  onGotoServicePage: _hanlderonGotoServicePage, 
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
  getUserLogInfoQuery: { 
    ...({
  "id": "getUserLogInfoQuery",
  "name": "getUserLogInfoQuery",
  "type": "general-func",
  "trigger": "manual",
  "description": "",
  "data": {
    "params": [
      {}
    ]
  }
}),
    handler: (__data__,__params__,$comp,$w) => (
async ({
  params
}) => {
  const LOGIN_TYPE = {
    password: "账号密码登录",
    weda: "超管登录",
    wecom: "企微登录"
  };
  const tcb = await $w.cloud.getCloudInstance();
  const auth = tcb.authInstance || tcb.auth;
  let {
    loginLogPageInfo = {},
    loginLog = {},
    modifyLogPageInfo = {},
    modifyLog = {}
  } = $w.getUserLogInfoQuery.data || {};

  const getDeviceType = userAgent => {
    if (typeof userAgent !== 'string') {
      return '未知设备';
    } // 检测桌面设备


    if (/Windows/.test(userAgent)) {
      return 'Windows端浏览器';
    } else if (/Linux/.test(userAgent)) {
      return 'Linux端浏览器';
    } else if (/Macintosh/.test(userAgent)) {
      return 'Mac端浏览器';
    } // 检测移动设备


    if (/Android/.test(userAgent)) {
      return 'Android移动端';
    } else if (/iPhone|iPad|iPod/.test(userAgent)) {
      return 'IOS移动端';
    } else if (/BlackBerry|PlayBook|BB10/.test(userAgent)) {
      return 'BlackBerry移动端';
    } else if (/Windows Phone/.test(userAgent)) {
      return 'Windows Phone';
    } else if (/Opera Mini/.test(userAgent)) {
      return 'Opera Mini移动端';
    } // 检测其他设备类型


    if (/Bot|Spider|Puppeteer|Crawl|Robot|crawl|spider|robot|crawling/i.test(userAgent)) {
      return 'Bot or Crawler';
    }

    return '未知设备';
  };

  const getHistoryLoginLog = async () => {
    try {
      const {
        pageIndex = 1,
        pageSize = 10,
        pageToken = {}
      } = params?.loginLogPageInfo || loginLogPageInfo || {};
      const res = await auth.getUserBehaviorLog({
        type: 'LOGIN',
        page_token: pageToken[pageIndex] || '',
        limit: pageSize
      });
      res.data = (res.data || []).map(v => ({
        id: v.id,
        time: v.created_at ? $w.DateText(new Date(v.created_at), 'YYYY-MM-DD HH:mm:ss') : "-",
        ip: v.ip || "-",
        status: (v.status || "success") === 'success' ? '成功' : '失败',
        system: getDeviceType(v.user_agent),
        loginType: LOGIN_TYPE[v.meta?.from] || (v.meta?.from.startsWith('wx') ? "微信小程序登录" : "") || "-"
      }));
      loginLogPageInfo = { ...loginLogPageInfo,
        pageToken: { ...pageToken,
          [pageIndex + 1]: pageToken[pageIndex + 1] !== undefined ? pageToken[pageIndex + 1] : res.page_token || ''
        }
      };
      return {
        loginLogPageInfo,
        loginLog: res
      };
    } catch (error) {
      console.log('=======> getHistoryLoginLog err', error);
      return {
        loginLogPageInfo,
        loginLog: {}
      };
    }
  };

  const getHistoryModifyLog = async () => {
    try {
      const {
        pageIndex = 1,
        pageSize = 10,
        pageToken = {}
      } = params?.modifyLogPageInfo || modifyLogPageInfo || {};
      const res = await auth.getUserBehaviorLog({
        type: 'MODIFY',
        page_token: pageToken[pageIndex] || '',
        limit: pageSize
      });
      res.data = (res.data || []).map(v => ({
        id: v.id,
        time: v.created_at ? $w.DateText(new Date(v.created_at), 'YYYY-MM-DD HH:mm:ss') : "-",
        ip: v.ip || "-",
        status: (v.status || "success") === 'success' ? '成功' : '失败',
        system: getDeviceType(v.user_agent),
        app: '云后台',
        behavior: {
          UPDATE_PASSWORD: '修改密码',
          UPDATE_PHONE: '修改手机号',
          UPDATE_EMAIL: '修改邮箱',
          UPDATE_USER_PROVIDER: '修改身份源',
          USER_LOGIN: '用户登录'
        }[v.action] || '-'
      }));
      modifyLogPageInfo = { ...modifyLogPageInfo,
        pageToken: { ...pageToken,
          [pageIndex + 1]: pageToken[pageIndex + 1] !== undefined ? pageToken[pageIndex + 1] : res.page_token || ''
        }
      };
      return {
        modifyLogPageInfo,
        modifyLog: res
      };
    } catch (error) {
      console.log('=======> getHistoryModifyLog err', error);
      return {
        modifyLogPageInfo,
        modifyLog: {}
      };
    }
  };

  const login = !params?.modifyLogPageInfo ? await getHistoryLoginLog() : {};
  const modify = !params?.loginLogPageInfo ? await getHistoryModifyLog() : {};
  return { ...$w.getUserLogInfoQuery.data,
    ...login,
    ...modify
  };
}
)({params:__params__,data:__data__,$comp,$w}),
    dataBinds: {},
    eventHandlers: {}
  },
  getUserOrgInfoQuery: { 
    ...({
  "id": "getUserOrgInfoQuery",
  "name": "getUserOrgInfoQuery",
  "type": "general-func",
  "trigger": "manual",
  "description": "",
  "data": {
    "params": [
      {}
    ]
  }
}),
    handler: (__data__,__params__,$comp,$w) => (
async ({
  params
}) => {
  const tcb = await $w.cloud.getCloudInstance();
  const auth = tcb.authInstance || tcb.auth;

  try {
    const data = await auth.getUserInfo({
      version: 'v2',
      query: {
        with_department: true,
        with_role: true,
        with_parent: true,
        with_datasource: true
      }
    });

    if (data) {
      data.roles = data.roles?.map(v => v.name).join('\n') || '-';
      data.departments = data.departments?.map(v => v.name).join('\n') || '-';
      data.main_department = data.main_department?.name || '-';
      data.parent_user = data.parent_user?.nickname || '-';
    }

    return data;
  } catch (error) {
    console.log('=======> getUserOrgInfo err', error);
    return error;
  }
}
)({params:__params__,data:__data__,$comp,$w}),
    dataBinds: {},
    eventHandlers: {}
  },
  getUserBaseInfoQuery: { 
    ...({
  "id": "getUserBaseInfoQuery",
  "name": "getUserBaseInfoQuery",
  "type": "general-func",
  "trigger": "auto",
  "description": "",
  "data": {
    "params": [
      {}
    ]
  }
}),
    handler: (__data__,__params__,$comp,$w) => (
async ({
  params
}) => {
  const tcb = await $w.cloud.getCloudInstance();
  const auth = tcb.authInstance || tcb.auth;

  try {
    const data = await auth.getUserInfo({
      version: 'v2',
      query: {
        with_datasource: true
      }
    });
    data.user_id = data.user_id || '-';
    data.nickname = data.nickname || '-';
    data.description = data.description || '-';
    data.created_at = data.created_at ? $w.DateText(new Date(data.created_at), 'YYYY-MM-DD HH:mm:ss') : '-';
    return data;
  } catch (error) {
    console.log('=======> getUserBaseInfo err', error);
    return error;
  }
}
)({params:__params__,data:__data__,$comp,$w}),
    dataBinds: {},
    eventHandlers: {}
  },
  getUserLoginInfoQuery: { 
    ...({
  "id": "getUserLoginInfoQuery",
  "name": "getUserLoginInfoQuery",
  "type": "general-func",
  "trigger": "manual",
  "description": "",
  "data": {
    "params": [
      {}
    ]
  }
}),
    handler: (__data__,__params__,$comp,$w) => (
async ({
  params
}) => {
  $comp.dataset.state.userParams.loading = true;
  const tcb = await $w.cloud.getCloudInstance();
  const auth = tcb.authInstance || tcb.auth;

  try {
    const data = await auth.getUserInfo({
      version: 'v2',
      query: {
        with_user_provider: true,
        with_datasource: true
      }
    });
    const user = {
      userId: data?.user_id || '',
      username: data?.username || '',
      hasPassword: data?.has_password || '',
      phone: (data?.phone || '').replace(/^\+86 /, ''),
      providers: data?.providers || [],
      score: ['default', 'username', 'has_password', 'phone'].filter(v => v === 'default' || !!data?.[v]).length * 25
    };
    $comp.dataset.state.userParams.loading = false;
    return user;
  } catch (error) {
    $comp.dataset.state.userParams.loading = false;
    console.log('=======> getUserLoginInfoQuery err', error);
    return error;
  }
}
)({params:__params__,data:__data__,$comp,$w}),
    dataBinds: {},
    eventHandlers: {}
  },
}

const eventFlows = [
]

const config = {}
const datasetProfile = {
  "state": {
    "lat": {
      "name": "lat",
      "label": "",
      "varType": "state",
      "dataType": "number",
      "initialValue": 0,
      "enableSyncLocal": false
    },
    "lng": {
      "name": "lng",
      "label": "",
      "varType": "state",
      "dataType": "number",
      "initialValue": 0,
      "enableSyncLocal": false
    },
    "tags": {
      "name": "tags",
      "label": "废弃无用的",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        {
          "id": 1,
          "icon": "td:houses",
          "name": "查医院",
          "pageId": "SearchHospitalsPage"
        },
        {
          "id": 2,
          "icon": "td:location",
          "name": "附近医院",
          "pageId": "u_fu_jin_de_yi_yuan"
        },
        {
          "id": 3,
          "icon": "td:user-circle",
          "name": "查医疗护理员",
          "pageId": "u_cha_zhao_yi_liao_hu"
        },
        {
          "id": 4,
          "icon": "td:location",
          "name": "附近医疗护理员"
        },
        {
          "id": 5,
          "icon": "td:chat-bubble-1",
          "name": "查陪诊师"
        },
        {
          "id": 6,
          "icon": "td:location",
          "name": "附近陪诊师"
        },
        {
          "id": 7,
          "icon": "td:verified",
          "name": "查月嫂"
        },
        {
          "id": 8,
          "icon": "td:location",
          "name": "附近月嫂"
        }
      ],
      "enableSyncLocal": false
    },
    "user": {
      "name": "user",
      "varType": "state",
      "dataType": "object",
      "initialValue": {
        "avatar_url": ""
      }
    },
    "radius": {
      "name": "radius",
      "label": "",
      "varType": "state",
      "dataType": "number",
      "initialValue": 10000,
      "enableSyncLocal": false
    },
    "allTabs": {
      "name": "allTabs",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        "按名字查医院",
        "附近的医院",
        "按名字查护理员",
        "附近的护理员",
        "按名字查月嫂",
        "按名字查陪诊师",
        "附近的月嫂",
        "附近的陪诊师",
        "北京医院",
        "上海医院",
        "南京医院",
        "广州医院",
        "杭州医院",
        "知名肿瘤医院"
      ]
    },
    "location": {
      "name": "location",
      "varType": "state",
      "dataType": "object",
      "initialValue": {
        "cityname": ""
      }
    },
    "mainTabs": {
      "name": "mainTabs",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        "按名字查医院",
        "附近的医院",
        "按名字查护理员",
        "附近的护理员",
        "按名字查月嫂",
        "按名字查陪诊师"
      ]
    },
    "pageSize": {
      "name": "pageSize",
      "label": "",
      "varType": "state",
      "dataType": "number",
      "initialValue": 5,
      "enableSyncLocal": false
    },
    "parentId": {
      "name": "parentId",
      "label": "",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "services": {
      "name": "services",
      "label": "",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        {
          "icon": "td:houses",
          "title": "住院护理",
          "pageId": "u_zhu_yuan_hu_li",
          "description": "专业医疗团队24小时贴心照护"
        },
        {
          "icon": "td:location",
          "title": "上门护理",
          "pageId": "u_yi_liao_hu_li_yuan",
          "description": "足不出户享受专业护理服务"
        },
        {
          "icon": "td:user-circle",
          "title": "医院陪诊",
          "pageId": "u_yi_yuan_pei_zhen_xi",
          "description": "全程陪同就医，省心省力"
        },
        {
          "icon": "td:verified",
          "title": "月嫂上门",
          "pageId": "u_yue_sao_shang_men",
          "description": "专业月嫂提供科学母婴护理"
        }
      ],
      "enableSyncLocal": false
    },
    "showMore": {
      "name": "showMore",
      "varType": "state",
      "dataType": "boolean",
      "initialValue": false
    },
    "viewType": {
      "name": "viewType",
      "label": "'hospital' 或 'caregiver'",
      "varType": "state",
      "dataType": "string",
      "initialValue": "hospital",
      "enableSyncLocal": false
    },
    "activeTab": {
      "name": "activeTab",
      "varType": "state",
      "dataType": "string",
      "initialValue": "按名字查医院"
    },
    "hospitals": {
      "name": "hospitals",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        {
          "icon": "td:verified",
          "name": "协和医院",
          "image": "photo_of_a_building",
          "level": "三级甲等",
          "address": "北京市东城区帅府园1号",
          "specialty": "综合医院"
        },
        {
          "icon": "td:verified",
          "name": "华西医院",
          "image": "cityscape",
          "level": "三级甲等",
          "address": "成都市武侯区国学巷37号",
          "specialty": "综合医院"
        },
        {
          "icon": "td:verified",
          "name": "中山医院",
          "image": "abstract_space_themed_art",
          "level": "三级甲等",
          "address": "上海市徐汇区枫林路180号",
          "specialty": "综合医院"
        }
      ]
    },
    "menuItems": {
      "name": "menuItems",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        {
          "icon": "td:houses",
          "title": "首页"
        },
        {
          "icon": "td:chat-bubble-1",
          "title": "消息"
        },
        {
          "icon": "td:setting-1",
          "title": "设置"
        },
        {
          "icon": "td:user-circle",
          "title": "个人中心"
        }
      ]
    },
    "caregivers": {
      "name": "caregivers",
      "label": "",
      "varType": "state",
      "dataType": "array",
      "initialValue": [],
      "enableSyncLocal": false
    },
    "showSearch": {
      "name": "showSearch",
      "label": "",
      "varType": "state",
      "dataType": "boolean",
      "initialValue": false,
      "enableSyncLocal": false
    },
    "totalPages": {
      "name": "totalPages",
      "label": "",
      "varType": "state",
      "dataType": "number",
      "initialValue": 1,
      "enableSyncLocal": false
    },
    "userParams": {
      "name": "userParams",
      "label": "",
      "varType": "state",
      "dataType": "object",
      "initialValue": {
        "loading": false,
        "smsDelay": 0,
        "alertInfo": {
          "type": "info",
          "message": ""
        },
        "isShowPassword": false,
        "isUsernameEdit": false,
        "isUserNameSubmit": false,
        "verificationCodeInfo": {
          "id": "",
          "is_user": false
        }
      },
      "enableSyncLocal": false
    },
    "addressText": {
      "name": "addressText",
      "label": "",
      "varType": "state",
      "dataType": "string",
      "initialValue": "中国",
      "enableSyncLocal": false
    },
    "currentPage": {
      "name": "currentPage",
      "label": "",
      "varType": "state",
      "dataType": "number",
      "initialValue": 1,
      "enableSyncLocal": false
    },
    "exhibitions": {
      "name": "exhibitions",
      "varType": "state",
      "dataType": "object",
      "initialValue": [
        {
          "date": "2025.07.15-08.30",
          "image": "abstract_space_themed_art",
          "title": "印象派大师展",
          "location": "城市美术馆",
          "description": "汇集莫奈、雷诺阿等印象派大师的经典作品"
        },
        {
          "date": "2025.08.05-09.20",
          "image": "cityscape",
          "title": "当代艺术先锋",
          "location": "现代艺术中心",
          "description": "探索当代艺术的前沿表达与创新形式"
        },
        {
          "date": "2025.09.01-10.15",
          "image": "forest",
          "title": "自然之美",
          "location": "自然博物馆",
          "description": "展现自然与艺术的完美融合"
        }
      ]
    },
    "showAllTabs": {
      "name": "showAllTabs",
      "varType": "state",
      "dataType": "boolean",
      "initialValue": false
    },
    "searchKeyword": {
      "name": "searchKeyword",
      "label": "",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "isUserInfoEdit": {
      "name": "isUserInfoEdit",
      "label": "",
      "varType": "state",
      "dataType": "boolean",
      "initialValue": false,
      "enableSyncLocal": false
    },
    "selectedMenuKey": {
      "name": "selectedMenuKey",
      "label": "",
      "varType": "state",
      "dataType": "string",
      "initialValue": "1",
      "enableSyncLocal": false
    },
    "caregiverCategory": {
      "name": "caregiverCategory",
      "label": "五种类型：nearby|ward|companion|home|maternity",
      "varType": "state",
      "dataType": "string",
      "initialValue": "",
      "enableSyncLocal": false
    },
    "searchKeywordlast": {
      "name": "searchKeywordlast",
      "label": "",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    }
  },
  "params": {}
};

createComponent({
  key: 'block:u_shou_hu_home',
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
