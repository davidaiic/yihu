# 07_schemas

## Indexes
- SchedulesAvailability: caregiverId+date, ownerDeptId+date
- SlotLocks: _id, expiresAt
- Appointments: _id, ownerDeptId+date
- AppointmentsDaily: _id
- HospitalServiceItems: ownerDeptId+status, citystdname+status
- CaregiverSearchIndex: citystdname+ownerDeptId

## Departments hierarchy & caregiver assignment
- hospital chain: ... > ward > room > bed
- home chain: ... > home_station > home_group > home_subgroup
- accompany chain: ... > accompany_team > accompany_group
Caregivers are assigned to **leaf nodes** (room / home_subgroup / accompany_group).
