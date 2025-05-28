import { healthStatusCards } from '../../data/healthData'
import '../../styles/HealthStatusCards.css'

// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLungs, faTooth, faBone } from '@fortawesome/free-solid-svg-icons'

const HealthStatusCards = () => {
  return (
    <div className='dashboard-section health-status-cards'>
      <div className='health-status-grid'>
        {healthStatusCards?.map(card => (
          <div key={card.id} className='health-status-card'>
            {/* Render the icon based on the card part */}
            <div className='health-card-icon-container'>
              <div className='health-card-icon'>
                {card.part === 'Lungs' && (
                  <FontAwesomeIcon
                    icon={faLungs}
                    size='2x'
                    color={card.color}
                  />
                )}
                {card.part === 'Teeth' && (
                  <FontAwesomeIcon
                    icon={faTooth}
                    size='2x'
                    color={card.color}
                  />
                )}
                {card.part === 'Bone' && (
                  <FontAwesomeIcon icon={faBone} size='2x' color={card.color} />
                )}
              </div>
              <h3 className='health-card-title'>{card.part}</h3>
            </div>
            <p className='health-card-date'>Date: {card.lastCheckup}</p>
            <div className='health-card-status'>
              <div
                className='progress-bar-background'
                style={{
                  width: '100%',
                  height: '10px',
                  background: '#e0e0e0',
                  borderRadius: '5px'
                }}
              >
                <div
                  className='progress-bar-fill'
                  style={{
                    width: '60%',
                    height: '100%',
                    background: card.color,
                    borderRadius: '5px'
                  }}
                ></div>
              </div>
              {/* <span style={{ fontSize: '12px', marginLeft: '4px' }}></span> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HealthStatusCards
