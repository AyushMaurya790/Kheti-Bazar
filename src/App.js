import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './Register/Register';
import Login from './Register/Login';
import Home from './components/Home';
import Products from './components/Products';
import Promotion from './components/Promotion';
import Mine from './components/Mine';
import Checkin from './Home/Checkin';
import Information from './Home/Information';
import Recharge from './Home/Recharge';
import Withdrawal from './Home/Withdrawal';
import Notification from './Home/Notification'; // ✅ Add this line

import './App.css';

function App() {
  const [showNotif, setShowNotif] = useState(() => {
    // Show only if not dismissed earlier
    return !localStorage.getItem('notifDismissed');
  });

  const handleCloseNotif = () => {
    localStorage.setItem('notifDismissed', 'true');
    setShowNotif(false);
  };

  return (
    <Router>
      {/* ✅ Notification popup */}
      {showNotif && <Notification onClose={handleCloseNotif} />}

      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/promotion" element={<Promotion />} />
            <Route path="/mine" element={<Mine />} />
            <Route path="/checkin" element={<Checkin />} />
            <Route path="/information" element={<Information />} />
            <Route path="/recharge" element={<Recharge />} />
            <Route path="/withdrawal" element={<Withdrawal />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
