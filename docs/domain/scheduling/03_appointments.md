# 03_appointments

## Appointments (slot-level)
{
  "_id": "u_...#2025-08-31#09:00",
  "appointmentId": "appt_...",
  "patientId": "p_...",
  "ownerDeptId": "home_station_...",
  "serviceItemId": "...",
  "status": "confirmed",
  "createdAt": 1756500300000
}

## AppointmentsDaily (summary/bitset)
{
  "_id": "u_...#2025-08-31",
  "bitset": "11110000...", // 96 bits
  "count": 8,
  "appointmentIds": ["appt_..."]
}
