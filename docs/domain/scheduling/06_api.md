# 06_api (all return {code,data?,message?})

POST scheduling.listAvailability
IN  { ownerDeptId?, caregiverId?, serviceItemId?, dateFrom, dateTo, nearby?, citystdname? }
OUT { code:"OK", data:[{ caregiverId,date,slots[] }] }
ERR INVALID_PARAM|DEPT_NOT_ENABLED|CITY_NOT_SUPPORTED|NO_AVAILABILITY

POST scheduling.holdSlots
IN  { patientId, ownerDeptId, caregiverId, date, times[], idempotencyKey? }
OUT { code:"OK", data:{ holdId, expiresAt, conflicts:[] }}
ERR SLOT_CONFLICT|INVALID_PARAM|IDEMPOTENT_REPLAY

POST scheduling.confirmAppointments
IN  { holdId, serviceItemId, planId? }
OUT { code:"OK", data:{ appointmentId, slotCount }}
ERR HOLD_NOT_FOUND|HOLD_EXPIRED|PLAN_VIOLATION|CONFLICT_APPOINTMENT_EXISTS

POST scheduling.cancelHold
IN  { holdId }
OUT { code:"OK", data:{ released } }
ERR HOLD_NOT_FOUND|HOLD_EXPIRED
