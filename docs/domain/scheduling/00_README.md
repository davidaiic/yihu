# Scheduling Domain (15min / Hold TTL 10m / Slot Uniqueness)

## Goals
- 15-minute granularity; 10-minute hold TTL; slot-level uniqueness `_id=cg#date#time`.
- Department as the minimum pricing unit; forbid cross-chain (Departments lineage).
- Two ordering flows: platform-dispatch vs user-specified caregiver; schedule-now vs schedule-later.
- VIP packages: apply benefits first, then pay.
- 10km proximity is based on the **PATIENT** location (not the ordering user's).

## Data Flow
SchedulesAvailability → SlotHolds/SlotLocks → Appointments → (Archive).

## Time & TZ
- Store `date` as `YYYY-MM-DD` in provider’s local timezone and `time` as `HH:mm`.

## Key Collections
- SchedulesAvailability (day doc + 15min slots[] or bitset)
- SlotHolds (head) + SlotLocks (slot-level TTL locks)
- Appointments (slot-level) + AppointmentsDaily (summary/bitset)
- CaregiverSearchIndex
- ServiceTemplates / HospitalServiceItems
- VipPackages / VipGrants

## Constraints
- Slot uniqueness: `_id = caregiverId#date#time`
- Hold TTL: ~10 minutes; expired holds and locks must be cleaned up.
- Department-chain only; pricing at department level.
- Departments hierarchy (types):
  - country>province>city>hospital>ward>room>bed
  - country>province>city>home_station>home_group>home_subgroup
  - country>province>city>accompany_team>accompany_group

## UI Hint
- Order page shows 4 preview cards + “see more” to full list page.
- City capsule, optional category chips, horizontal scroll.
