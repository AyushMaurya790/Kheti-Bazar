import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import { FaBell, FaCalendarCheck, FaBullhorn, FaMoneyBillWave, FaStar } from 'react-icons/fa';
import BottomNavbar from './BottomNavbar';
import logo from '../assets/k1.png'; // Adjust the path as necessary


const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmDc_A0BC7cq2Ax1PBiy_gGOSSIpcZ-ZhC2A&s',
  'https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/qssqupm678qtxagrmapc',
  'https://s3-ap-south-1.amazonaws.com/soulveda-media-prod/wp-content/uploads/sites/2/2025/01/06165209/hiware-bazar-jal-sanrakshan-aur-sahkari-kheti-se-bana-crorepatiyon-ka-gaon.jpg'
];

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="home-wrapper">

        {/* Hero Image Slider */}
        <div className="hero-image-box">
          <img
            src={images[currentImageIndex]}
            alt="Hero"
            className="hero-image"
          />
           <img src={logo} alt="Kheti Bazaar Logo" className="kb-logo" />
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <div className="action-btn">
            <FaCalendarCheck size={24} />
            <p>CheckIn</p>
          </div>
          <div className="action-btn">
            <FaBullhorn size={24} />
            <p>Notice</p>
          </div>
          <div className="action-btn">
            <FaMoneyBillWave size={24} />
            <p>Recharge</p>
          </div>
          <div className="action-btn">
            <FaStar size={24} />
            <p>Withdraw</p>
          </div>
        </div>
      </div>
      <BottomNavbar />
    </>
  );
}

export default Home;
