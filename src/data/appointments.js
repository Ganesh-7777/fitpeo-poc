export const calendarAppointments = {
  month: 'October',
  year: 2021,
  days: [
    { day: 25, appointments: [{ time: '10:00 11:00 12:00', type: 'Dentist' }] },
    {
      day: 26,
      appointments: [{ time: '08:00 09:00 10:00', type: 'Physiotherapy' }]
    },
    {
      day: 27,
      appointments: [{ time: '10:00 -- 13:00', type: 'Cardiologist' }]
    },
    {
      day: 28,
      appointments: [{ time: '10:00 -- 13:00', type: 'Cardiologist' }]
    },
    {
      day: 29,
      appointments: [{ time: '10:00 -- 13:00', type: 'Cardiologist' }]
    },
    {
      day: 30,
      appointments: [{ time: '10:00 -- 13:00', type: 'Cardiologist' }]
    },
    {
      day: 31,
      appointments: [{ time: '10:00 -- 13:00', type: 'Cardiologist' }]
    }
  ]
}

export const upcomingAppointments = [
  {
    id: 1,
    day: 'Thursday',
    appointments: [
      {
        id: 1,
        title: 'Health checkup complete',
        time: '11:00 AM',
        icon: 'Injection',
        color: '#4CAF50'
      },
      {
        id: 2,
        title: 'Ophthalmologist',
        time: '14:00 PM',
        icon: 'eye',
        color: '#2196F3'
      }
    ]
  },
  {
    id: 2,
    day: 'Saturday',
    appointments: [
      {
        id: 3,
        title: 'Cardiologist',
        time: '12:00 AM',
        icon: 'heart',
        color: '#F44336'
      },
      {
        id: 4,
        title: 'Neurologist',
        time: '16:00 PM',
        icon: 'brain',
        color: '#9C27B0'
      }
    ]
  }
]

export const detailedAppointments = [
  {
    id: 1,
    title: 'Dentist',
    doctor: 'Dr. Cameron Williamson',
    time: '09:00-11:00',
    date: 'Oct 12, 2021',
    icon: 'icon-dentist' // Custom class for styling
  },
  {
    id: 2,
    title: 'Physiotherapy Appointment',
    doctor: 'Dr. Kevin Djones',
    time: '11:00-12:00',
    date: 'Oct 18, 2021',
    icon: 'icon-physio' // Custom class for styling
  }
]

export const activityData = {
  weekCount: 3,
  barData: [
    { day: 'Mon', height: 30 },
    { day: '', height: 50, halfFilled: true },
    { day: 'Tues', height: 80 },
    { day: '', height: 40, halfFilled: true },
    { day: 'Wed', height: 10 },
    { day: '', height: 50, halfFilled: true },
    { day: '', height: 80 },
    { day: '', height: 40, halfFilled: true },
    { day: 'Fri', height: 60 },
    { day: '', height: 10, halfFilled: true },
    { day: '', height: 30 },
    { day: 'Sat', height: 50, halfFilled: true },
    { day: '', height: 20 },
    { day: '', height: 80, halfFilled: true },
    { day: '', height: 10 },
    { day: 'Sun', height: 40, halfFilled: true },
    { day: '', height: 30 },
    { day: '', height: 60, halfFilled: true },
    { day: '', height: 10 }
  ]
}
