// src/components/Header.js
import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import logo from '../assets/k1.png'; // Adjust the path as necessary

function Header() {
  return (
    <header className="kb-header">
      <div className="kb-header-container">
        <img src={logo} alt="Kheti Bazaar Logo" className="kb-logo" />
        <h1 className="kb-title">KISAN  BAZAAR</h1>
        <nav className="kb-nav">
          <Link to="/" className="kb-link"></Link>
          <Link to="/products" className="kb-link"></Link>
          <Link to="/about" className="kb-link"></Link>
          <Link to="/contact" className="kb-link"></Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
