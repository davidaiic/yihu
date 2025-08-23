# ENGINEERING_GUIDE（技术规范 · 首版）

## 1. 通用
- 时区：**Asia/Shanghai**
- 返回结构：统一 `{ code: 0, data?, message?, requestId? }`；`code != 0` 视为错误
- 不允许更新 `_id`；upsert 使用 `where + update/add`，返回 `{ created, updated, skipped }`
- 敏感信息（手机号/证件）日志中**禁止**输出；存储应脱敏或加密

---

## 2. WeDa / 小程序侧
- 仅用 `$w.app` / `$page` 管理状态；**不要** `getApp()` 或原生 `this.setData`
- 云函数调用：
  ```js
  const { result } = await $w.cloud.callFunction({ name: 'fn', data: { ... } });
  if (result?.code !== 0) throw new Error(result?.message || '失败');
  ```
- 交互规范：Toast（轻错误）/ Modal（确认类）/ 导航重试（支付等）
- 绑定表达式示例：
  - 按钮禁用：`!$page.state.canSubmit`
  - 倒计时文案：`` `${$page.state.holdLeft}s 内完成支付` ``

---

## 3. 云函数（@cloudbase/node-sdk）
- 输入校验：JSON Schema 或手写守卫；只接收白名单字段
- 时间：`db.serverDate()`；允许入库毫秒时间戳（number）或 Date
- 正则：`db.RegExp({ regexp: 'xxx', options: 'i' })`（**不要** `_.regex`）
- 地理：`new db.Geo.Point(lng, lat)`（记得 `new`）
- 并发与幂等：
  - “创建/占位”必须携带 `idempotencyKey` 或有自然唯一键
  - 典型唯一键：`caregiverId + date + time`（Slot 层面）
- 索引：为查询频繁/唯一约束字段建索引（如 `caregiverId,date,time` 复合唯一）
- 分页：游标/offset + 限流（默认 100）；禁止无限拉取
- 结构化日志：
  ```js
  console.info(JSON.stringify({
    level: 'info', fn: 'scheduling.holdSlots',
    orderId, openid, t: Date.now()
  }));
  ```

---

## 4. 领域约束（业务内置）
- 组织链 `Departments`：**不跨链父子**  
  - hospital/ward/room/bed、home_station/home_group/home_subgroup、accompany_team/accompany_group 的父级均为 **city**
- 定价：**站点/团队/医院** 为最小统一定价单位  
  - ICU 等特例以“部门级服务项”单列，不在个人维度覆盖价格

---

## 5. 错误码（建议）
- `0` 成功  
- `1001` 资源冲突（时段已占/版本冲突）  
- `1002` 幂等冲突（重复提交）  
- `2001` 未登录/无权限  
- `4001` 入参错误（schema 校验失败）  
- `5001` 下游失败（支付/第三方）

---

## 6. 代码结构与依赖
```
cloudfunctions/<fn>/
  ├─ index.js
  ├─ README.md      # 契约文档（必填）
  ├─ package.json   # 锁定依赖版本
  └─ serverless.yml # 如使用 Serverless Framework
```

- 推荐工具：VS Code、Node 16/18、Python 3.10+（用于脚本）
- 依赖固定：使用确切版本号，避免 `^` 带来的漂移

---

## 7. 测试与样例
- `tests/contracts/`：按函数名组织请求/响应样例（顺序 JSON）
- 最少包含：
  - 1 个 happy path（成功）
  - 1 个失败/补偿场景（如占位过期、幂等冲突）

---

## 8. 与调度域（scheduling）的接口约束
- 典型函数：`scheduling.listAvailability` / `scheduling.holdSlots` / `scheduling.confirmAppointments` / `scheduling.cancelHold`
- `holdSlots` 必须：
  - 接收 `idempotencyKey`、`ttlSec`（默认 600）
  - 校验唯一键冲突 → 返回 `1001`
  - 过期自动清理（定时器或查询时惰性清理）
