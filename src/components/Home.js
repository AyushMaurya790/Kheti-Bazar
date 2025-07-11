// src/components/Home.js
import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import { FaCalendarCheck, FaMoneyBillWave, FaStar } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import BottomNavbar from './BottomNavbar';
import logo from '../assets/k1.png';

const images = [
  'https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRpJrfuVnPprG2Vt-ruPSzltAk9tSb4sKQOg&s',
  'https://s3-ap-south-1.amazonaws.com/soulveda-media-prod/wp-content/uploads/sites/2/2025/01/06165209/hiware-bazar-jal-sanrakshan-aur-sahkari-kheti-se-bana-crorepatiyon-ka-gaon.jpg'
];

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="home-wrapper">
        {/* Hero Image Slider */}
        <div className="hero-section">
          <img
            src={images[currentImageIndex]}
            alt="Slide"
            className="hero-image"
          />
          <div className="logo-overlay">
            <img src={logo} alt="Kheti Bazaar Logo" className="kb-logo" />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="action-buttons">
          <NavLink to="/checkin" className="action-btn">
            <FaCalendarCheck />
            <span>Check In</span>
          </NavLink>

          <NavLink to="/information" className="action-btn">
            <FaCalendarCheck />
            <span>Notice</span>
          </NavLink>

          <NavLink to="/recharge" className="action-btn">
            <FaCalendarCheck />
            <span>Recharge</span>
          </NavLink>

          <NavLink to="/withdrawal" className="action-btn">
            <FaCalendarCheck />
            <span>Withdrawal</span>
          </NavLink>
        </div>
      </div>

      <BottomNavbar />
    </>
  );
}

export default Home;
