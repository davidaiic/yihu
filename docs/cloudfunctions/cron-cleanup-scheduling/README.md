# cron-cleanup-scheduling / README

## 功能
- 清理过期 SlotLocks / SlotHolds（TTL 到期）
- 归档 Appointments（>90 天）到 `Appointments_archive`
- 迁移过期 SchedulesAvailability（date < today）到 `SchedulesAvailability_archive`
- 将执行详情写入 `CronRuns` 集合：runId、开始/结束时间、耗时ms、删除/归档统计、错误明细

## 部署与定时配置（腾讯云 · 云开发）
1. 在“云函数”中新建 `cron-cleanup-scheduling`，粘贴 `index.js`，安装依赖。
2. 在“定时触发”里添加触发器：
   - 触发方式：定时触发
   - Cron 表达式：`0 30 2 * * * *`（每天 02:30）
   - 超时时间：30s~120s（按数据量调整）
3. 验证：手动“触发执行”一次，检查 `CronRuns` 集合是否新增一条日志。

## 运营查看
- 在数据库里打开 `CronRuns` 集合，可分页查看每次执行的统计信息与错误详情。
