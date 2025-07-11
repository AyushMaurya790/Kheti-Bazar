// Notification.js
import React from 'react';
import '../styles/Notification.css';
import { FaTimes } from 'react-icons/fa';

const Notification = ({ onClose }) => {
  return (
    <div className="notification-overlay">
      <div className="notification-card">
        <div className="notif-header">
          <img
            src="/assets/k1.png" // Use your logo path here
            alt="Kheti Bazaar Logo"
            className="notif-logo"
          />
          <h2>Latest notification</h2>
        </div>
        <p className="notif-sub">Understand platform release</p>
        <ol className="notif-list">
          <li>Platform launch time: <span className="highlight">June 16 - 2025</span></li>
          <li>Sign-up Bonus: <span className="highlight">₹5</span></li>
          <li>Daily Gift Code: <span className="highlight">₹8 to ₹200</span> <span className="note">( Need Plan )</span></li>
          <li>Level 3 agent commission cashback:<br/>1st Level: <span className="highlight">10%</span> Happy Earning</li>
          <li>Income: Daily Income, Daily Withdrawal</li>
          <li>Minimum Withdrawal: <span className="highlight">₹150 - ₹10000</span></li>
          <li>Referral earns you <span className="highlight">10%</span> of their investment</li>
          <li>Withdrawals: <span className="highlight">Unlimited</span></li>
        </ol>
        <a href="https://t.me/khetibazaar" target="_blank" rel="noopener noreferrer" className="telegram-btn">
          💬 Telegram Channel
        </a>
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Notification;
