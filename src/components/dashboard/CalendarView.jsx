import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  calendarAppointments,
  detailedAppointments
} from '../../data/appointments'
import '../../styles/CalendarView.css'
import UpcomingSchedule from './UpcomingSchedule'

const CalendarView = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const renderCalendarDays = () => {
    return calendarAppointments.days.map(day => {
      const dayOfWeek = new Date(
        calendarAppointments.year,
        new Date().getMonth(),
        day.day
      ).getDay()

      return (
        <div key={day.day} className='calendar-day-vertical'>
          <div className='calendar-day-header'>{daysOfWeek[dayOfWeek]}</div>
          <div className='calendar-day-number'>{day.day}</div>
          <div className='calendar-timeslots'>
            {day.appointments.length > 0 ? (
              day.appointments.map((appointment, index) => (
                <div key={index} className='calendar-timeslot'>
                  {appointment.time}
                </div>
              ))
            ) : (
              <div className='calendar-no-appointments'>No Appointments</div>
            )}
          </div>
        </div>
      )
    })
  }

  return (
    <div className='dashboard-section calendar-view'>
      <div className='calendar-container'>
        <div className='calendar-header'>
          <div className='calendar-header-title'>
            <h2 className='calendar-title'>
              {calendarAppointments.month} {calendarAppointments.year}
            </h2>
            <span className='back-forward-icon'>
              <ChevronLeft size={18} style={{ marginRight: 4 }} />
              <ChevronRight size={18} />
            </span>
          </div>

          <div className='calendar-nav'>
            <button className='calendar-nav-button'>
              <ChevronLeft size={18} />
            </button>
            <button className='calendar-nav-button'>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className='calendar-grid-vertical'>{renderCalendarDays()}</div>

        <div className='calendar-appointments'>
          {detailedAppointments.map(appointment => (
            <div key={appointment.id} className='appointment-card'>
              <div className='appointment-info'>
                <div className='appointment-title'>{appointment.title}</div>
                <div className='appointment-time'>{appointment.time}</div>
                {/* {appointment.icon && (
                  <span className={`appointment-icon ${appointment.icon}`} />
                )} */}
              </div>
              <div className='appointment-doctor'>{appointment.doctor}</div>
            </div>
          ))}
        </div>

        <UpcomingSchedule />
      </div>
    </div>
  )
}

export default CalendarView
