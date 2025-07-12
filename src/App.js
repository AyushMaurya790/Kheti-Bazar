import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'; // use Outlet instead of <Routes>

import Header from './components/Header';
import Footer from './components/Footer';
import Notification from './Home/Notification';

import './App.css';

function App() {
  const [showNotif, setShowNotif] = useState(() => {
    return !localStorage.getItem('notifDismissed');
  });

  const handleCloseNotif = () => {
    localStorage.setItem('notifDismissed', 'true');
    setShowNotif(false);
  };

  return (
    <>
      {showNotif && <Notification onClose={handleCloseNotif} />}
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Outlet /> {/* This renders your nested routes */}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
