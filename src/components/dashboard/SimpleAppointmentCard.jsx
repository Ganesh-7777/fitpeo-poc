import * as Icons from 'lucide-react'

const iconMapping = {
  Injection: Icons.Syringe, // Map "Injection" to the correct icon name
  eye: Icons.Eye,
  heart: Icons.Heart,
  brain: Icons.Brain
}

const SimpleAppointmentCard = ({ appointment }) => {
  console.log('Rendering SimpleAppointmentCard for:', appointment)
  const IconComponent = iconMapping[appointment.icon]

  return (
    <div className='appointment-item'>
      <div
        className='appointment-icon'
        style={{
          color: appointment.color
        }}
      >
        {IconComponent && <IconComponent size={18} />}
      </div>
      <div className='appointment-content'>
        <div className='appointment-name'>{appointment.title}</div>
        <div className='appointment-time'>{appointment.time}</div>
      </div>
    </div>
  )
}

export default SimpleAppointmentCard
