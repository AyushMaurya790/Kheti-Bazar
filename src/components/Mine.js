import React from 'react';
import '../styles/Mine.css';
import { FaUserCircle, FaBuilding, FaArrowUp, FaArrowDown, FaGift, FaDownload } from 'react-icons/fa';
import BottomNavbar from './BottomNavbar';

function Mine() {
  const user = {
    name: 'Ram Das',
    phone: '9991115550',
    balance: 2000.0,
    recharge: 1000,
    withdraw: 9612,
    welfare: 0,
    avatar: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png' // cartoon-style avatar
  };

  return (
    <>
    <div className="mine-wrapper">
      <h2 className="mine-title">Profile</h2>

      {/* Top Card */}
      <div className="mine-top">
        <img src={user.avatar} alt="Avatar" className="avatar" />
        <div>
          <h3>{user.name}</h3>
          <p>{user.phone}</p>
        </div>
      </div>

      {/* Balance Box */}
      <div className="mine-balance">
        <div className="balance-info">
          <p>Account Balance</p>
          <h2>₹{user.balance.toFixed(2)}</h2>
        </div>
        <button className="recharge-button">Recharge 💳</button>
      </div>

      {/* Summary */}
      <div className="mine-summary">
        <div>
          <h4>₹{user.recharge}</h4>
          <p>Recharge</p>
        </div>
        <div>
          <h4>₹{user.withdraw.toLocaleString()}</h4>
          <p>Withdraw</p>
        </div>
        <div>
          <h4>₹{user.welfare}</h4>
          <p>Welfare</p>
        </div>
      </div>

      {/* Menu Links */}
      <div className="mine-links">
        <div className="link-item"><FaBuilding /> About Company</div>
        <div className="link-item"><FaArrowUp /> Income Record</div>
        <div className="link-item"><FaArrowDown /> Withdraw Record</div>
        <div className="link-item"><FaGift /> Redeem Code</div>
        <div className="link-item"><FaDownload /> App Download</div>
      </div>

      {/* Exit Button */}
      <button className="exit-button">Exit App</button>
    </div>
    <BottomNavbar />
    </>
  );
}

export default Mine;
