import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './Register/Register';
import Login from './Register/Login';
import Home from './components/Home';
import Products from './components/Products'; // ✅ Import Products
import Promotion from './components/Promotion'; // ✅ Import Promotion
import Mine from './components/Mine';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Header */}
        <Header />

        {/* Navigation */}
       

        {/* Routes */}
        <main className="main-content">
          <Routes>
            <Route exact path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} /> {/* ✅ Route added */}
            <Route path="/promotion" element={<Promotion />} />
            <Route path="/mine" element={<Mine />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
