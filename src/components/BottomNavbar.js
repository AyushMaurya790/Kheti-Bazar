 import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaBoxOpen, FaBullhorn, FaUser } from 'react-icons/fa';
import '../styles/BottomNavbar.css';

const BottomNavbar = () => {
  return (
    <nav className="bottom-tab">
      <NavLink to="/home" className="tab-item">
        <FaHome />
        <span>Home</span>
      </NavLink>
      <NavLink to="/products" className="tab-item">
        <FaBoxOpen />
        <span>Products</span>
      </NavLink>
      <NavLink to="/promotion" className="tab-item">
        <FaBullhorn />
        <span>Promotion</span>
      </NavLink>
      <NavLink to="/mine" className="tab-item">
        <FaUser />
        <span>Mine</span>
      </NavLink>
    </nav>
  );
};

export default BottomNavbar;
