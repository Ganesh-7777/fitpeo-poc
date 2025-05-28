import React, { useState } from 'react'
import * as Icons from 'lucide-react'
import navigationLinks from '../data/navigationLinks'
import '../styles/Sidebar.css'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState(1)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = id => {
    setActiveLink(id)
    if (window.innerWidth <= 768) {
      setIsOpen(false)
    }
  }

  const generalAndTools = navigationLinks.filter(
    section => section.category !== 'Settings'
  )
  const settings = navigationLinks.find(
    section => section.category === 'Settings'
  )

  const getIconComponent = iconName => {
    const formattedName = iconName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('')
    return Icons[formattedName] || Icons.HelpCircle // Fallback icon
  }

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        {generalAndTools.map(section => (
          <div key={section.category}>
            <div className='sidebar-heading'>{section.category}</div>
            <ul className='sidebar-nav'>
              {section.links.map(link => {
                const IconComponent = getIconComponent(link.icon)
                return (
                  <li
                    key={link.id}
                    className={`sidebar-nav-item ${
                      activeLink === link.id ? 'active' : ''
                    }`}
                    onClick={() => handleLinkClick(link.id)}
                  >
                    <span className='sidebar-nav-icon'>
                      {IconComponent && <IconComponent size={18} />}
                    </span>
                    {link.title}
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
        {settings && (
          <div className='sidebar-bottom'>
            <ul className='sidebar-nav'>
              {settings?.links?.map(link => {
                const IconComponent = getIconComponent(link.icon)
                return (
                  <li
                    key={link.id}
                    className={`sidebar-nav-item ${
                      activeLink === link.id ? 'active' : ''
                    }`}
                    onClick={() => handleLinkClick(link.id)}
                  >
                    <span className='sidebar-nav-icon'>
                      {IconComponent && <IconComponent size={18} />}
                    </span>
                    {link.title}
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
      <button className='sidebar-toggle' onClick={toggleSidebar}>
        {isOpen ? <Icons.X size={24} /> : <Icons.Menu size={24} />}
      </button>
    </>
  )
}

export default Sidebar
