import React from 'react';
import ProductCard from './ProductCard';

function ProductList() {
  const products = [
    { id: 1, name: "Organic Wheat", price: 50, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Fresh Tomatoes", price: 30, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Basmati Rice", price: 80, image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="container product-list">
      <h2 className="product-list-title">Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;