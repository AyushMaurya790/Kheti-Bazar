import React, { useEffect, useState } from 'react';
import '../styles/Mine.css';
import {
  FaUserCircle,
  FaBuilding,
  FaArrowUp,
  FaArrowDown,
  FaGift,
  FaDownload,
  FaMoon,
  FaSun
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import BottomNavbar from './BottomNavbar';

function Mine() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null); // user is null by default
  const [theme, setTheme] = useState('dark');
  const [lastVisit, setLastVisit] = useState(null);
  const [greeting, setGreeting] = useState('');

  // Greeting
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('☀️ Good Morning');
    else if (hour < 18) setGreeting('🌤️ Good Afternoon');
    else setGreeting('🌙 Good Evening');
  }, []);

  // Check if user exists in localStorage
  useEffect(() => {
    const registeredUser = localStorage.getItem('user');
    const lastSeen = localStorage.getItem('last-visit');
    const themePref = localStorage.getItem('theme');

    if (registeredUser) {
      const parsed = JSON.parse(registeredUser);
      setUser({
        nickname: parsed.nickname || 'User',
        phone: parsed.phone || '',
        referralCode: parsed.referralCode || '',
        avatar: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png',
        balance: 0,
        recharge: 0,
        withdraw: 0,
        welfare: 0
      });
    }

    if (lastSeen) setLastVisit(lastSeen);
    if (themePref) setTheme(themePref);

    localStorage.setItem('last-visit', new Date().toLocaleString());
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <>
      <div className="mine-wrapper">
        <div className="mine-header">
          <h2 className="mine-title">
            {greeting}, {user ? user.nickname : 'Guest'}!
          </h2>

          {!user && (
            <button className="login-btn" onClick={handleLoginClick}>
              🔐 Login
            </button>
          )}
        </div>

        {lastVisit && <p className="visit-time">Last visit: {lastVisit}</p>}

        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? <FaSun /> : <FaMoon />}{' '}
          {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </button>

        {user ? (
          <>
            {/* User profile */}
            <div className="mine-top">
              <img src={user.avatar} alt="Avatar" className="avatar" />
              <div>
                <h3>{user.nickname}</h3>
                <p>📞 +91 {user.phone}</p>
                {user.referralCode && (
                  <p>🎁 Referral: {user.referralCode}</p>
                )}
              </div>
            </div>

            <div className="mine-balance">
              <div className="balance-info">
                <p>Account Balance</p>
                <h2>₹{user.balance.toFixed(2)}</h2>
              </div>
              <button className="recharge-button">Recharge 💳</button>
            </div>

            <div className="mine-summary">
              <div>
                <h4>₹{user.recharge}</h4>
                <p>Recharge</p>
              </div>
              <div>
                <h4>₹{user.withdraw}</h4>
                <p>Withdraw</p>
              </div>
              <div>
                <h4>₹{user.welfare}</h4>
                <p>Welfare</p>
              </div>
            </div>
          </>
        ) : (
          <p style={{ textAlign: 'center', marginTop: '30px' }}>
            Please log in to view your profile info.
          </p>
        )}

        {/* Common Links */}
        <div className="mine-links">
          <div className="link-item"><FaBuilding /> About Company</div>
          <div className="link-item"><FaArrowUp /> Income Record</div>
          <div className="link-item"><FaArrowDown /> Withdraw Record</div>
          <div className="link-item"><FaGift /> Redeem Code</div>
          <div className="link-item"><FaDownload /> App Download</div>
        </div>

        <button className="exit-button">Exit App</button>
      </div>

      <BottomNavbar />
    </>
  );
}

export default Mine;
