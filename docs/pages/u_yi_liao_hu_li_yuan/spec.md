# u_yi_liao_hu_li_yuan / spec (KEEP)

state: {
  city: "",
  location: [], // [lng,lat] of PATIENT
  servicesPreview: [],
  selectedService: null, // { serviceItemId, ownerDeptId, unitPrice, iconUrl, name }
  planId: "plan_weekly_3x_2h",
  scheduleMode: "now" | "later",
  dispatchMode: "platform" | "caregiver",
  selectedCaregiverId: "",
  selectedDate: "",
  selectedSlots: [],
  hold: { holdId:"", expiresAt:0 }
}

UX:
1) onLoadFetchServices(): 4-card preview; if no location or city not supported → pick city
2) Tap card → selectedService → collapse preview → show chosen service card
3) Choose plan (single/month/year), schedule-now or schedule-later
4) schedule-now → select date → listAvailability → pick 8 consecutive slots → holdSlots → countdown → confirmAppointments
5) schedule-later → submit order only → create DispatchTask (leader assigns caregiver & times later)

Validation:
- schedule-now: selectedSlots.length===8 and consecutive
- No cross-department: selectedService.ownerDeptId must belong to same chain

Handlers:
- onLoadFetchServices, onTapMoreServices, onSelectService
- onChangePlan, onChangeScheduleMode, onToggleDispatchMode
- onSelectCaregiver, onSelectDate, onQueryAvailability
- onSelectSlot, onHoldSlots, onConfirmAppointments, onCancelHold

Expressions:
1) Disable nearby if no location:
!$w.app?.dataset?.state?.location || $w.app.dataset.state.location.length !== 2

2) Disable confirm if not 8-consecutive:
(() => {const a=$page?.dataset?.state?.selectedSlots||[]; if(a.length!==8)return true;
 const m=t=>{const [h,mm]=t.split(':').map(Number);return h*60+mm};
 const b=[...a].sort(); for(let i=1;i<b.length;i++){ if(m(b[i])-m(b[i-1])!==15) return true;} return false;})()
