# 02_slot_holds

## SlotLocks
{
  "_id": "u_...#2025-08-31#09:00",
  "holdId": "hold_...",
  "status": "holding",
  "expiresAt": 1756500600000
}

## SlotHolds
{
  "_id": "hold_...",
  "patientId": "p_...",
  "ownerDeptId": "home_station_...",
  "caregiverId": "u_...",
  "date": "2025-08-31",
  "times": ["09:00", "..."],
  "status": "holding",
  "idempotencyKey": "clt-...",
  "expiresAt": 1756500600000
}

## TTL
- Default ~10 minutes. Expired holds/locks are removed by cron.
