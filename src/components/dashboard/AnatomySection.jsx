import React from 'react'
import { anatomyData } from '../../data/healthData'
import '../../styles/AnatomySection.css'
import bodyImageUrl from '../../styles/Images/HumanBody.png'
import HealthStatusCards from './HealthStatusCards'
import ActivityFeed from '../dashboard/ActivityFeed'

const AnatomySection = () => {
  return (
    <div className='dashboard-section anatomy-section'>
      <div className='dashboard-section-header'>
        <h2 className='dashboard-section-heading'>Dashboard</h2>
        <span className='dashboard-section-subheading'>This Week ⌄</span>
      </div>

      <div className='anatomy-container'>
        <div className='anatomy-figure'>
          <img
            src={bodyImageUrl}
            alt='Human body anatomy'
            className='anatomy-image'
          />

          {anatomyData?.map(item => (
            <React.Fragment key={item.id}>
              <div
                className='anatomy-indicator'
                style={{
                  top: item.indicator.top,
                  left: item.indicator.left,
                  backgroundColor: item.color
                }}
              />
              <div
                className={`anatomy-label anatomy-label-${item.id}`}
                style={{
                  top: item.position.top,
                  left: item.position.left
                }}
              >
                {item.status}
              </div>
            </React.Fragment>
          ))}
        </div>
        <HealthStatusCards />
      </div>
      <div className='dashboard-section-header'>
        <span className='dashboard-section-subheading'>Details →</span>
      </div>
      <ActivityFeed />
    </div>
  )
}

export default AnatomySection
