// Recharge.js
import React, { useState } from 'react';
import '../styles/Recharge.css';
import { motion } from 'framer-motion';
import { FaWallet, FaCreditCard } from 'react-icons/fa';
import BottomNavbar from '../components/BottomNavbar';

const quickAmounts = [800, 297, 450, 2000, 1000, 6000, 3100, 17000, 25000];

export default function Recharge() {
  const [amount, setAmount] = useState('');
  const [selected, setSelected] = useState(null);
  const [channel, setChannel] = useState('PAY-A');

  const handleSelect = (amt, index) => {
    setAmount(amt);
    setSelected(index);
  };

  return (
    <>
    <motion.div 
      className="recharge-container"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
    >
      <motion.div className="balance-card" whileHover={{ scale: 1.02 }}>
        <div className="coin-3d">💰</div>
        <div className="balance-info">
          <h3>₹0</h3>
          <p>Current Balance</p>
        </div>
      </motion.div>

      <div className="input-section">
        <label>Enter Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Recharge Amount"
        />
      </div>

      <div className="quick-amount-section">
        <h4>Quick Amount</h4>
        <div className="amount-grid">
          {quickAmounts.map((amt, i) => (
            <motion.button
              key={amt}
              className={selected === i ? 'selected' : ''}
              onClick={() => handleSelect(amt, i)}
              whileTap={{ scale: 0.95 }}
            >
              ₹{amt}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="channel-section">
        <h4>Online Channel</h4>
        <div className="channel-options">
          {['PAY-A', 'PAY-B'].map((option) => (
            <motion.label 
              key={option}
              className={`channel ${channel === option ? 'active' : ''}`}
              whileTap={{ scale: 0.95 }}
            >
              <input
                type="radio"
                value={option}
                checked={channel === option}
                onChange={(e) => setChannel(e.target.value)}
              />
              {option}
            </motion.label>
          ))}
        </div>
      </div>

      <motion.button className="recharge-btn" whileHover={{ scale: 1.05 }}>
        Recharge Now
      </motion.button>
    </motion.div>
    <BottomNavbar />
    </>
  );
}
