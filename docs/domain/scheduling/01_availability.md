# 01_availability

## Model (SchedulesAvailability)
{
  "_id": "<caregiverId>_<date>",
  "caregiverId": "u_...",
  "ownerDeptId": "home_station_...",
  "citystdname": "北京市",
  "date": "2025-08-31",
  "shiftType": "day_shift", // full_day|day_shift|night_shift|custom
  "slots": ["09:00","09:15", "..."],
  "updatedAt": 1756500000000
}

## Rules
- Generate only for the next 30 days (rolling window).
- Editing a day regenerates slots for that day.
- listAvailability returns `slots - (locks+appointments)`.
- Optional compression: 96-bit bitset per day.
