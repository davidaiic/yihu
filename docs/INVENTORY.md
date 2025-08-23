# INVENTORY（现有资产盘点，自动生成草稿）

## 小程序 Pages

| pageId | handlers数 | 云函数数 | 页面端集合数 |
|---|---:|---:|---:|
| 9krWJbkWindex | 0 | 0 | 0 |
| 9krWJbkWu_cha_kan_hu_li_ri_zh | 5 | 0 | 0 |
| 9krWJbkWu_chuang_jian_gong_xi | 2 | 0 | 0 |
| 9krWJbkWu_dang_an_xiangqing | 0 | 0 | 0 |
| 9krWJbkWu_dangan_guanli | 5 | 0 | 0 |
| 9krWJbkWu_hu_li_ri_zhi_xiang_ | 2 | 0 | 0 |
| 9krWJbkWu_jie_shou_gong_xiang | 1 | 0 | 0 |
| 9krWJbkWu_lu_ru_fu_wu_que_ren | 2 | 0 | 0 |
| 9krWJbkWu_sao_ma_shen_qing_yi | 6 | 0 | 0 |
| 9krWJbkWu_sheng_cheng_fu_wu_q | 3 | 0 | 0 |
| LoginPageByOpenId | 2 | 1 | 0 |
| u2pk3pmo0pc | 7 | 1 | 0 |
| u_an_ming_zi_cha_zhao | 6 | 0 | 0 |
| u_bei_zhao_hu_ren_xin | 9 | 0 | 0 |
| u_bei_zhao_hu_ren_xua | 4 | 1 | 0 |
| u_cha_zhao_yi_yuan | 14 | 2 | 0 |
| u_deng_lu | 10 | 2 | 0 |
| u_ding_dan_A | 2 | 0 | 0 |
| u_ding_dan_B | 6 | 0 | 0 |
| u_ding_dan_xiang_qing | 1 | 0 | 0 |
| u_ding_dan_xiang_qing_1 | 5 | 0 | 0 |
| u_fu_jin_de_yi_yuan | 16 | 1 | 0 |
| u_fu_wu_ping_jia_ye | 2 | 0 | 0 |
| u_ge_ren_xin_xi_bianji | 4 | 1 | 0 |
| u_gong_zuo_tai | 1 | 0 | 0 |
| u_gong_zuo_wo | 4 | 0 | 0 |
| u_hu_li_ri_zhi | 4 | 0 | 0 |
| u_jian_kang_dang_an | 4 | 0 | 0 |
| u_lian_xi_ren_xuan_ze | 8 | 1 | 0 |
| u_lian_xi_wo_men | 0 | 0 | 0 |
| u_peng_you_quan | 1 | 0 | 0 |
| u_shou_hu_home | 28 | 6 | 0 |
| u_wei_zhi_shou_quan | 10 | 1 | 0 |
| u_wen_zhang_xiang_qin | 2 | 0 | 0 |
| u_yi_hu_yuan_detail | 2 | 0 | 0 |
| u_yi_liao_hu_li_yuan | 18 | 2 | 0 |
| u_yi_yuan_pei_zhen_xi | 7 | 0 | 0 |
| u_yi_yuan_xiang_qing | 3 | 0 | 0 |
| u_yue_sao_shang_men | 5 | 0 | 0 |
| u_zhu_yuan_hu_li | 18 | 4 | 0 |
| ucjw5kfasw9 | 1 | 0 | 0 |

## Cloud Functions（扫描 index.js 得出）

- `addrCrud` | 集合：address_book | 调用云函数：-
- `careRecipients` | 集合：CareRecipients | 调用云函数：-
- `contactsCrud` | 集合：Contacts | 调用云函数：-
- `createOrderByOpenId` | 集合：HospitalServiceItems, Orders | 调用云函数：-
- `getHomeNursingServiceList` | 集合：- | 调用云函数：-
- `getNearbyStationsByOpenId` | 集合：- | 调用云函数：-
- `getOrderStatsByOpenId` | 集合：Orders | 调用云函数：-
- `getSMHLServiceItembycity` | 集合：HospitalServiceItems | 调用云函数：-
- `getZYHLServiceItem` | 集合：- | 调用云函数：-
- `listCaregiversByProximity` | 集合：Users | 调用云函数：-
- `listCaregiversByType` | 集合：- | 调用云函数：-
- `listDepartmentsByParentByOpenId` | 集合：Departments | 调用云函数：-
- `listHospitals` | 集合：Departments | 调用云函数：-
- `listHospitalsByNameByOpenId` | 集合：Departments | 调用云函数：-
- `listHospitalsNearbyByOpenId` | 集合：Departments | 调用云函数：-
- `login` | 集合：AuditLogs, Users | 调用云函数：-
- `loginByOpenId` | 集合：Users | 调用云函数：-
- `sendSms` | 集合：- | 调用云函数：-
- `updateUserProfile` | 集合：Users | 调用云函数：-
- `wxpayBedCareOrder` | 集合：Orders | 调用云函数：-
