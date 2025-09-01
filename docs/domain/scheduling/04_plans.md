# 04_plans

## Examples
{
  "_id": "plan_weekly_3x_2h",
  "name": "每周3次每次2小时",
  "slotCountPerVisit": 8,
  "enforceConsecutive": true,
  "maxVisitsPerISOWeek": 3,
  "requireScheduleAtPurchase": true
}
{
  "_id": "plan_monthly_unlimited_2h",
  "name": "包月（不限次，单次2小时）",
  "slotCountPerVisit": 8,
  "enforceConsecutive": true,
  "maxVisitsPerMonth": null,
  "requireScheduleAtPurchase": false
}
{
  "_id": "plan_yearly_36x_2h",
  "name": "包年（36次，每次2小时）",
  "slotCountPerVisit": 8,
  "enforceConsecutive": true,
  "maxVisitsPerYear": 36,
  "requireScheduleAtPurchase": false
}

## Enforcement
- holdSlots: validate consecutive length only.
- confirmAppointments: validate plan quotas (week/month/year).
- cancel/modify: adjust counters accordingly.
