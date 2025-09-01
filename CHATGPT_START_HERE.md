# CHATGPT_START_HERE

欢迎来到 **yihu**（医疗护理员预约）项目。  
如果你只能读一个文件，就读我。

---

## 快速导航（3 步走）

1. 机器可读索引：`docs/_chatgpt-index.yml`  
2. 资产盘点：`docs/INVENTORY.md`、`docs/collections/DISCOVERED.md`  
3. 关键页面规范（示例）：`docs/pages/<pageId>/spec.md`

> 小程序源码在 `miniapp/`（导自腾讯微搭）；云函数在 `cloudfunctions/`；工程脚手在 `tools/`。

---

## 必知项目规则

- 三条业务链：**住院（hospital） / 居家（home） / 陪诊（accompany）**。  
  - 组织树 `Departments` **不允许跨链父子**；`hospital/ward/room/bed`、`home_station/home_group/home_subgroup`、`accompany_team/accompany_group` 的父级均为 **city**。
- `ServiceAssignments`：**站点/团队/医院**为最小统一定价单位；  
  特例（如 ICU）需在部门维度单列服务项，而不是在个人上覆盖价。
- WeDa/云开发使用规范：  
  - `serverDate`：用 `db.serverDate()`，**不要**用 `_.serverDate()`  
  - 正则：`db.RegExp({ regexp:'xxx', options:'i' })`，**不要** `_.regex()`  
  - Geo：`new db.Geo.Point(lng, lat)`（注意要 `new`）  
  - **禁止更新** `_id`；如需 upsert，采用 `where + update/add`，返回 `{created,updated,skipped}`  
  - 并发：对同一逻辑主键（如 `caregiverId+date`）建**唯一索引**并使用**幂等 key**

---

## 本地常用脚本

- 生成/更新页面规范与索引（**不会覆盖手写 keep 段**）：
  ```bash
  python tools/weda_docgen.py --src miniapp --cfs cloudfunctions --out . --entry u_shou_hu_home --seed-collections --collect-bindings
