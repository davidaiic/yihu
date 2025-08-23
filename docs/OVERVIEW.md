# OVERVIEW（项目总览 · 首版）

**yihu：医疗护理员预约系统**  
端侧：小程序（用户、护理员、病房/病区负责人） + Web（市/省/集团级管理）  
时区：Asia/Shanghai

---

## 1. 角色与端
- **用户（User）**：下单、支付、评价
- **护理员（Caregiver）**：接单、排班、上报完成
- **病床/病区负责人**：院内派单与协调
- **市/省/集团负责人**（Web）：组织与权限管理、服务目录、合规与结算

---

## 2. 业务域与子域
- **下单域**：居家护理、住院护理、医院陪诊、月嫂上门、医院代跑腿
- **调度域（Scheduling）**：可用时段、占位、预约、套餐、多次计划、接单流转
- **组织域**：`Departments` 组织树（hospital/home/accompany 三条链）  
  > 约束：**不跨链父子**；三条链的顶层业务节点（hospital / home_station / accompany_team）父级均为 **city**。
- **权限域**：`Roles` / `Permissions` / `RoleApplications`
- **目录与定价**：`ServiceTypes` / `ServiceTemplates` / `ServiceAssignments`  
  > 规则：**站点/团队/医院**为最小统一定价单位；ICU 等特例以“部门级服务项”单列。

---

## 3. 核心对象（简表）
- `Users`：用户档案与角色
- `Departments`：组织树（country → province → city → …）
- `ServiceTypes`（大类） / `ServiceTemplates`（细化）
- `ServiceAssignments`：护理员可提供的服务授权与定价模式
- `Orders`：统一订单
- **调度域（即将补充）**：
  - `Availability`：可用时段（30min 粒度）
  - `SlotHolds`：占位（TTL 释放、幂等）
  - `Appointments`：预约记录，与订单关联
  - `Plans`：套餐（如每周 3 次 × 2 小时）

---

## 4. 关键流程（E2E）
1. **选择服务 → 选择时段 → 下单 → 支付 → 护理员接单 → 服务完成 → 评价**
2. 并发控制：用户下单时调用 `holdSlots` 占位（TTL≈10min），支付成功后 `confirmAppointments` 落预约；失败/超时 `cancelHold` 释放
3. 管理端维护：服务目录与定价、组织树、角色与权限

---

## 5. 约束与边界
- 统一返回结构 `{ code, data?, message? }`
- 不更新 `_id`；写入使用 `db.serverDate()`；地理使用 `new db.Geo.Point(lng, lat)`
- 正则使用 `db.RegExp`；集合建立必要索引（尤其是调度域的唯一键）

---

## 6. 仓库地图
- 机器索引：`docs/_chatgpt-index.yml`
- 页面规范：`docs/pages/<pageId>/spec.md`
- 集合定义：`docs/collections/*.schema.json`（样例见 `docs/collections/samples/`）
- 云函数契约：`cloudfunctions/<fn>/README.md`
- 资产盘点：`docs/INVENTORY.md`、`docs/collections/DISCOVERED.md`

---

## 7. 下一步（Roadmap）
- 完成 `docs/domain/scheduling/` **五件套**文档与集合 schema
- 接入页面 **u_yi_liao_hu_li_yuan**：时段选择→占位→支付→接单
- 增加 `tests/contracts/` 的契约样例与最小 CI 校验
