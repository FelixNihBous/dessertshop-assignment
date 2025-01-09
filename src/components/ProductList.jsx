import React from 'react';
import ProductCard from './ProductCard.jsx';
import '../styles/ProductList.css';
import productData from '../product-data.json';

const ProductList = ({ addToCart }) => {
  return (
    <div className="wrapper-list">
      <div className="card-list">
        {productData.map((product, index) => (
          <ProductCard
            key={index}
            product={{ ...product, id: index }} // Add a unique ID to each product
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;