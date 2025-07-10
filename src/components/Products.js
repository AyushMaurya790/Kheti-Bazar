import React from 'react';
import '../styles/Products.css';
import BottomNavbar from './BottomNavbar';

function Products() {
  return (
    <>
      <div className="products-wrapper">
        <h1 className="products-title">Products</h1>

        {/* Plan Toggle */}
        <div className="plan-toggle">
          <button className="plan-btn active">⭐ Daily Plan</button>
          <button className="plan-btn">🪙 Welfare Plan</button>
        </div>

        {/* Product Card 1 */}
        <div className="product-card">
          <div className="days-badge">Days: 2</div>
          <div className="product-content">
            <img
              className="product-image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhz3qYACB5AHkHni40qinReh797zHGXCuTA&s"
              alt="Xbazaar-A"
            />
            <div className="product-info">
              <h3 className="product-name">Xbazaar-A</h3>
              <div className="income-section">
                <p className="daily-income">₹2480</p>
                <p className="income-label">Daily Income</p>
              </div>
              <div className="income-section">
                <p className="total-income">₹4960</p>
                <p className="income-label">Total Income</p>
              </div>
            </div>
          </div>

          <div className="product-footer">
            <p className="price">Price: <span className="price-value">₹800</span></p>
            <button className="invest-btn">Invest</button>
          </div>
        </div>

        <br />

        {/* Product Card 2 */}
        <div className="product-card">
          <div className="days-badge">Days: 3</div>
          <div className="product-content">
            <img
              className="product-image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhz3qYACB5AHkHni40qinReh797zHGXCuTA&s"
              alt="Xbazaar-A"
            />
            <div className="product-info">
              <h3 className="product-name">Xbazaar-A</h3>
              <div className="income-section">
                <p className="daily-income">₹2580</p>
                <p className="income-label">Daily Income</p>
              </div>
              <div className="income-section">
                <p className="total-income">₹5960</p>
                <p className="income-label">Total Income</p>
              </div>
            </div>
          </div>

          <div className="product-footer">
            <p className="price">Price: <span className="price-value">₹1000</span></p>
            <button className="invest-btn">Invest</button>
          </div>
        </div>

        <br />

        {/* Product Card 3 */}
        <div className="product-card">
          <div className="days-badge">Days: 4</div>
          <div className="product-content">
            <img
              className="product-image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhz3qYACB5AHkHni40qinReh797zHGXCuTA&s"
              alt="Xbazaar-A"
            />
            <div className="product-info">
              <h3 className="product-name">Xbazaar-A</h3>
              <div className="income-section">
                <p className="daily-income">₹2680</p>
                <p className="income-label">Daily Income</p>
              </div>
              <div className="income-section">
                <p className="total-income">₹6960</p>
                <p className="income-label">Total Income</p>
              </div>
            </div>
          </div>

          <div className="product-footer">
            <p className="price">Price: <span className="price-value">₹1200</span></p>
            <button className="invest-btn">Invest</button>
          </div>
        </div>

      </div>

      <BottomNavbar />
    </>
  );
}

export default Products;
