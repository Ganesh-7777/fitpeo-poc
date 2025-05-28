import SimpleAppointmentCard from './SimpleAppointmentCard'
import { upcomingAppointments } from '../../data/appointments'
import '../../styles/UpcomingSchedule.css'

const UpcomingSchedule = () => {
  return (
    <div className='dashboard-section upcoming-schedule'>
      <h2 className='dashboard-section-heading'>The Upcoming Schedule</h2>
      <div className='schedule-container'>
        {upcomingAppointments.map(day => (
          <div key={day.id} className='schedule-day'>
            <h3 className='schedule-day-title'>On {day.day}</h3>
            <div className='appointment-list'>
              {day?.appointments?.map(appointment => (
                <SimpleAppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UpcomingSchedule
