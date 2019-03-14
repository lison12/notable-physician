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
      physicianId: 2,
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
      time: '8:30AM',
      kind: 'Follow-Up',
      patient: {
        first: 'Cyril',
        last: 'Figis'
      }
    },
    {
      appointmentId: 3,
      physicianId: 2,
      time: '9:00AM',
      kind: 'Follow-Up',
      patient: {
        first: 'Ray',
        last: 'Gillette'
      }
    },
    {
      appointmentId: 4,
      physicianId: 2,
      time: '9:30AM',
      kind: 'New Patient',
      patient: {
        first: 'Lana',
        last: 'Kane'
      }
    },
    {
      appointmentId: 5,
      physicianId: 2,
      time: '10:00AM',
      kind: 'New Patient',
      patient: {
        first: 'Pam',
        last: 'Poovey'
      }
    },
    {
      appointmentId: 1,
      physicianId: 1,
      time: '9:00AM',
      kind: 'Follow-Up',
      patient: {
        first: 'Megan',
        last: 'Smith'
      }
    },
    {
      appointmentId: 2,
      physicianId: 1,
      time: '12:00PM',
      kind: 'Follow-Up',
      patient: {
        first: 'Joyce',
        last: 'Gilead'
      }
    },
    {
      appointmentId: 3,
      physicianId: 1,
      time: '3:30PM',
      kind: 'New Patient',
      patient: {
        first: 'Michael',
        last: 'Wong'
      }
    },
    {
      appointmentId: 1,
      physicianId: 3,
      time: '7:00AM',
      kind: 'Follow-Up',
      patient: {
        first: 'Edmund',
        last: 'Tam'
      }
    },
    {
      appointmentId: 2,
      physicianId: 3,
      time: '10:30AM',
      kind: 'Follow-Up',
      patient: {
        first: 'Joanna',
        last: 'Lim'
      }
    },
    {
      appointmentId: 3,
      physicianId: 3,
      time: '2:00PM',
      kind: 'New Patient',
      patient: {
        first: 'Pranay',
        last: 'Kapadia'
      }
    },
    {
      appointmentId: 4,
      physicianId: 3,
      time: '4:30PM',
      kind: 'Follow-Up',
      patient: {
        first: 'Stephanie',
        last: 'Tran'
      }
    }
  ]
};