module.exports = {
  physicians: [
    {
      id: 1,
      first: 'Julius',
      last: 'Hibbert',
      email: 'hibbert@notablehealth.com'
    },
    {
      id: 2,
      first: 'Algernop',
      last: 'Krieger',
      email: 'krieger@notablehealth.com'
    },
    {
      id: 3,
      first: 'Nick',
      last: 'Riviera',
      email: 'riviera@notablehealth.com'
    }
  ],
  appointments: [
    {
      appointmentId: 1,
      physicianId: 1,
      time: '8:00AM',
      kind: 'New Patient',
      patient: {
        first: 'Sterling',
        last: 'Archer'
      }
    },
    {
      appointmentId: 2,
      physicianId: 2,
      time: '9:00AM',
      kind: 'Follow-Up',
      patient: {
        first: 'Ray',
        last: 'Gillette'
      }
    }
  ]
};