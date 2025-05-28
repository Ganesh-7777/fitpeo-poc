import { activityData } from '../../data/appointments'
import '../../styles/ActivityFeed.css'

const ActivityFeed = () => {
  return (
    <div className='dashboard-section activity-feed'>
      <div className='activity-container'>
        <div className='activity-header'>
          <h2 className='dashboard-section-heading'>Activity</h2>
          <div className='activity-count'>
            {activityData.weekCount} appointments on this week
          </div>
        </div>

        <div className='activity-chart'>
          {activityData.barData.map((bar, index) => (
            <div
              key={index}
              className={`activity-bar ${bar.halfFilled ? 'half-filled' : ''}`}
              style={{
                height: `${bar.height}%`,
                backgroundColor: bar.halfFilled
                  ? 'transparent'
                  : index === 3
                  ? 'var(--primary-color)'
                  : 'var(--primary-light)'
              }}
            >
              {bar.halfFilled && (
                <div
                  className='activity-bar-fill'
                  style={{
                    height: '50%',
                    backgroundColor: '#00e4ef'
                  }}
                ></div>
              )}
              <div className='activity-bar-day'>{bar.day}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ActivityFeed
