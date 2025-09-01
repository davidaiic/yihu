# 11_scaling

## Availability
- Rolling 30 days generation window (configurable 14~60).
- Day-doc with slots[]; optional 96-bit bitset to compress.
- Cleanup: move date < today to SchedulesAvailability_archive.

## SlotLocks / Appointments
- Locks TTL ~10m; remove expired by cron.
- Appointments only allow booking within <= 45 days.
- Archive Appointments > 90 days to Appointments_archive.
- Maintain AppointmentsDaily summary (bitset + count) for fast reads.

## Other large collections
- CaregiverSearchIndex sharded by citystdname+ownerDeptId; low churn.
- RatingsReviews keep last 12 months; archive older.
- SlotHolds short-lived; clean by cron.
