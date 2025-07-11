// Withdrawal.js
import React, { useState } from 'react';
import '../styles/Withdrawal.css';
import { motion } from 'framer-motion';
import { FaWallet, FaMoneyCheckAlt } from 'react-icons/fa';
import BottomNavbar from '../components/BottomNavbar';

export default function Withdrawal() {
  const [amount, setAmount] = useState('');
  const [bankName, setBankName] = useState('');
  const [ifsc, setIfsc] = useState('');
  const [accountNumber, setAccountNumber] = useState('');

  const handleSubmit = () => {
    alert(`Withdrawal Requested\nAmount: ₹${amount}\nBank: ${bankName}`);
    // You can replace this with API call
  };

  return (
    <>
    <motion.div 
      className="withdrawal-container glassy-ui"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="header">
        <FaWallet size={40} className="icon" />
        <h2>Withdrawal Request</h2>
      </div>

      <div className="input-group">
        <label>Amount</label>
        <input
          type="number"
          placeholder="Enter amount (₹)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Bank Name</label>
        <input
          type="text"
          placeholder="Enter bank name"
          value={bankName}
          onChange={(e) => setBankName(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>IFSC Code</label>
        <input
          type="text"
          placeholder="Enter IFSC code"
          value={ifsc}
          onChange={(e) => setIfsc(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Account Number</label>
        <input
          type="text"
          placeholder="Enter account number"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        />
      </div>

      <motion.button
        className="withdraw-button pulse"
        onClick={handleSubmit}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaMoneyCheckAlt className="icon" /> Request Withdrawal
      </motion.button>
    </motion.div>

    <BottomNavbar />
    </>
  );
}
