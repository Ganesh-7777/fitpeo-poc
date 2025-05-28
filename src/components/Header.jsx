import { Search, Plus } from 'lucide-react'
import '../styles/Header.css'

const Header = () => {
  return (
    <header className='header'>
      <div className='header-logo'>
        Health<span style={{ color: '#2A2A6E' }}>care.</span>
      </div>
      <div className='header-search-container'>
        <div className='header-search'>
          <Search size={18} color='#4A5568' />
          <input type='text' placeholder='Search' aria-label='Search' />
        </div>
        <button className='header-icon' aria-label='Notifications'>
          {/* Replaced lucide-react Bell with emoji bell */}
          <span
            role='img'
            aria-label='Notifications'
            style={{ fontSize: 20, color: '#4A5568' }}
          >
            🔔
          </span>
          <div className='notification-badge' aria-hidden='true'></div>
        </button>
      </div>
      <div className='header-user'>
        <div className='header-actions'>
          <div className='header-profile'>
            <div
              className='header-avatar'
              aria-label='User profile'
              style={{
                fontSize: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
                padding: '8px',
                width: '40px',
                height: '40px'
              }}
            >
              👦
            </div>
          </div>

          <button
            className='header-add-button'
            aria-label='Add new'
            style={{
              backgroundColor: '#3532A3',
              borderRadius: '10px',
              padding: '8px 12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Plus size={20} color='#FFFFFF' />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
