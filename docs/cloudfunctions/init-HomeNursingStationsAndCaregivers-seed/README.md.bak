# init-HomeNursingStationsAndCaregivers-seed / README

## 模式
- 默认 `mode: "apply"`：根据现有 Departments 自动检测两站，并新增回龙观/莘庄两个站点；
- `mode: "rollback", runId:"..."`：按备份记录回滚（insert→删除；update→还原）。

## 逻辑步骤
1) 读取 DB 中是否已存在：
   - `_id=home_station_1753533327784_2639`（北京）
   - `_id=home_station_1753533342853_7444`（上海）
   若存在则以数据库原始字段为准；若不存在不报错，本次仍然只对新增站点执行后续流程。
2) 新增两个站点：
   - `home_station_bj_hlg`（回龙观 116.34,40.07）
   - `home_station_sh_xz`（莘庄 121.38,31.11）
3) 为每个站点生成基础组织结构：
   - `home_group`（一组）→ 其下 `home_subgroup`（A/B小组）
4) 每站创建 4 名护理员（2 个挂 A 小组，2 个挂 B 小组），**护理员的 assignments.deptId 指向叶子节点 `home_subgroup`**。
5) 读取 `ServiceTemplates`（11 项必须已存在）；为**每个站点**挂载所有模板成为 `HospitalServiceItems`。
6) 为每名护理员创建 `ServiceAssignments`：覆盖 **全部 11 项**（serviceItemId 指向“站点+模板”的 HSI），并记录 `leafDeptId` 为护理员归属小组。
7) 为每名护理员生成未来 30 天的 `SchedulesAvailability`（工作日），**随机班次**（day/full_day/night），按 15 分钟切片。
8) 构建 `CaregiverSearchIndex`：包含 `caregiverId/ownerDeptId(站点)/leafDeptId(小组)/citystdname/geo/services[]`。
9) 全流程写入 `SeedBackups`（collection、docId、op、before/after、runId），可用 `mode:rollback` 回滚到执行前状态。

## 返回
- `{ code:'OK', data:{ runId, departments, users, serviceItems, svcAssigns, availabilityDays, searchIndex } }`
