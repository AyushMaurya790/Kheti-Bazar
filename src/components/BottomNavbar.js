// BottomNavbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaBoxOpen, FaBullhorn, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../styles/BottomNavbar.css';

const navItems = [
  { path: '/home', label: 'Home', icon: <FaHome /> },
  { path: '/products', label: 'Products', icon: <FaBoxOpen /> },
  { path: '/promotion', label: 'Promotion', icon: <FaBullhorn /> },
  { path: '/mine', label: 'Mine', icon: <FaUser /> },
];

const BottomNavbar = () => {
  return (
    <motion.nav
      className="bottom-tab fancy-bottom-nav"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 80 }}
    >
      {navItems.map((item, index) => (
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            `tab-item ${isActive ? 'active' : ''}`
          }
          key={index}
        >
          <motion.div
            className="tab-icon"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {item.icon}
          </motion.div>
          <span className="tab-label">{item.label}</span>
        </NavLink>
      ))}
    </motion.nav>
  );
};

export default BottomNavbar;
