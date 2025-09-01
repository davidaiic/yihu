# PLAYBOOK（工程协作手册 · 首版）

本项目遵循 **A → B → C → D** 的工程化节奏：
- **A. 需求（Docs-first）**：先写文档后写代码
- **B. 实现（Contracts-driven）**：以契约（schema / README / API）驱动代码
- **C. 联调 & 验证（Checks）**：样例/用例验证，日志可诊
- **D. 迭代（Diffs）**：基于 PR 的可追溯增量

> 入口：`CHATGPT_START_HERE.md`  
> 机器索引：`docs/_chatgpt-index.yml`  
> 盘点：`docs/INVENTORY.md`、`docs/collections/DISCOVERED.md`

---

## 0) 目录/命名约定
- 页面：`docs/pages/<pageId>/spec.md` ↔ `miniapp/<pageId>/…`
- 云函数：`cloudfunctions/<fn>/index.js` ↔ `cloudfunctions/<fn>/README.md`
- 集合：`docs/collections/<Collection>.schema.json` + `docs/collections/samples/<Collection>.sample.json`
- 文档生成器：`tools/weda_docgen.py`（**只替换 auto 区块，保留 keep 段**）

---

## 1) 新功能流程（Checklist）
1. **需求落文档**（A）
   - 在 `docs/pages/<pageId>/spec.md` 填写/补充：组件树、状态、UX/校验、handlers（允许先留空 keep 段）
   - 声明依赖云函数与集合；为新集合写 schema + sample
2. **契约完善**（A→B）
   - 为每个云函数写 `README.md`（入参/出参/错误码/副作用/相关页面）
   - 为集合补“唯一键/索引/约束”说明
3. **同步索引**
   ```bash
   python tools/weda_docgen.py --src miniapp --cfs cloudfunctions --out . --seed-collections --collect-bindings
   ```
4. **代码实现与自测**（B→C）
   - 小程序：状态变量、事件 handlers、Copilot 生成的区块
   - 云函数：遵循 `ENGINEERING_GUIDE.md` 的返回结构与日志
5. **联调用例**
   - 在 `tests/contracts/` 写最小契约样例（请求/响应 JSON）
6. **发起 PR**（C→D）
   - 列出影响的页面/函数/集合
   - 附运行截图/日志片段
   - 风险与回滚点

---

## 2) 分支与提交
- 分支：`feat/<scope>`、`fix/<scope>`、`docs/<scope>`
- 提交信息示例：
  - `feat(page/u_yi_liao_hu_li_yuan): 预约排期与占位`
  - `fix(cf/scheduling.holdSlots): 校正 TTL 释放`
- `main` 受保护，默认走 PR 合并（必要时允许管理员紧急直推）

---

## 3) 文档约定
- **人工撰写段**：
  ```md
  <!--doc:keep-->
  ...你的文字...
  <!--/doc:keep-->
  ```
- **生成器段**（会被脚本更新）：
  ```md
  <!--doc:auto:xxx-->
  ...自动内容...
  <!--/doc:auto:xxx-->
  ```

---

## 4) 质量门槛（最小集合）
- **契约可读**：集合/云函数必须有 README 与样例
- **幂等安全**：写入路径具备唯一键与幂等 token
- **错误可诊**：统一 `{ code, message, data?, requestId }` + 结构化日志
- **就绪可测**：关键流至少一个成功用例 & 一个失败补偿用例

---

## 5) 近期里程碑
- `docs/domain/scheduling/` 首版五件套（Availability / SlotHolds / Appointments / Plans / Transitions）
- 打通 **居家护理下单（u_yi_liao_hu_li_yuan）**：选时段 → 占位 → 支付 → 接单


## 6) Scheduling Playbook Addendum
- Slot key: _id = caregiverId#date#time
- Hold TTL: ~10m; expired holds/locks cleaned by cron
- Generation window: Availability 30 days rolling
- Archive: Appointments >90d; Availability < today
- VIP priority: apply VIP → coupon → cash
