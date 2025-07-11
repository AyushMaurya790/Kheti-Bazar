// src/components/Products.js
import React, { useState } from 'react';
import '../styles/Products.css';
import BottomNavbar from './BottomNavbar';


const productList = [
  {
    id: 1,
    days: 2,
    name: 'Xbazaar-A',
    dailyIncome: '₹2480',
    totalIncome: '₹4960',
    price: '₹800',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhz3qYACB5AHkHni40qinReh797zHGXCuTA&s'
  },
  {
    id: 2,
    days: 3,
    name: 'Xbazaar-B',
    dailyIncome: '₹2580',
    totalIncome: '₹5960',
    price: '₹1000',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhz3qYACB5AHkHni40qinReh797zHGXCuTA&s'
  },
  {
    id: 3,
    days: 4,
    name: 'Xbazaar-C',
    dailyIncome: '₹2680',
    totalIncome: '₹6960',
    price: '₹1200',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhz3qYACB5AHkHni40qinReh797zHGXCuTA&s'
  }
];


function Products() {
  const [activePlan, setActivePlan] = useState('daily');
  const [flippedCardId, setFlippedCardId] = useState(null);

  const handleCardClick = (id) => {
    setFlippedCardId(prev => (prev === id ? null : id));
  };

  return (
    <>
      <div className="products-wrapper">
        <h1 className="products-title">🛒 Products</h1>

        {/* Plan Toggle */}
        <div className="plan-toggle">
          <button
            className={`plan-btn ${activePlan === 'daily' ? 'active' : ''}`}
            onClick={() => setActivePlan('daily')}
          >
            ⭐ Daily Plan
          </button>
          <button
            className={`plan-btn ${activePlan === 'welfare' ? 'active' : ''}`}
            onClick={() => setActivePlan('welfare')}
          >
            🪙 Welfare Plan
          </button>
        </div>

        {/* Product Cards */}
        {productList.map((product) => (
          <div
            key={product.id}
            className={`product-card ${flippedCardId === product.id ? 'flipped' : ''}`}
            onClick={() => handleCardClick(product.id)}
          >
            <div className="card-inner">
              {/* Front Side */}
              <div className="card-front">
                <div className="days-badge">Days: {product.days}</div>
                <div className="product-content">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <div className="income-section">
                      <p className="daily-income">{product.dailyIncome}</p>
                      <p className="income-label">Daily Income</p>
                    </div>
                    <div className="income-section">
                      <p className="total-income">{product.totalIncome}</p>
                      <p className="income-label">Total Income</p>
                    </div>
                  </div>
                </div>
                <div className="product-footer">
                  <p className="price">Price: <span className="price-value">{product.price}</span></p>
                  <button className="invest-btn">Invest</button>
                </div>
              </div>

              {/* Back Side */}
              <div className="card-back">
                <h3>Plan Details</h3>
                <p><strong>{product.name}</strong> offers a return of <strong>{product.totalIncome}</strong> over <strong>{product.days} days</strong>.</p>
                <p>Tap again to flip back.</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <BottomNavbar />
    </>
  );
}

export default Products;
