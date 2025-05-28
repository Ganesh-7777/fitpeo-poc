import AnatomySection from './AnatomySection'
import CalendarView from './CalendarView'
import '../../styles/Dashboard.css'

const DashboardMainContent = () => {
  return (
    <div className='dashboard-content'>
      <div className='dashboard-grid'>
        <AnatomySection />
        <CalendarView />
        {/* <ActivityFeed /> */}
      </div>
    </div>
  )
}

export default DashboardMainContent
