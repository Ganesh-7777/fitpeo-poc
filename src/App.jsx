import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/dashboard/DashboardMainContent';
import './styles/App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;