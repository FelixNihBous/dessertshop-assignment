import React, { useState } from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product, addToCart, isInCart }) => {
  const [quantity, setQuantity] = useState(0); // State for product quantity

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart({ ...product, quantity });
    }
  };

  return (
    <div className="product-card">
      <img src={product.image.desktop} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <div className="quantity-controls">
        <button onClick={() => {
          const newQuantity = quantity > 0 ? quantity - 1 : 0;
          setQuantity(newQuantity);
          handleAddToCart(); // Update cart when quantity is changed
        }}>-</button>
        <span>{quantity}</span>
        <button onClick={() => {
          const newQuantity = quantity + 1;
          setQuantity(newQuantity);
          handleAddToCart(); // Update cart when quantity is changed
        }}>+</button>
      </div>
      <button 
        onClick={handleAddToCart} 
        disabled={quantity === 0}
        className={isInCart ? 'button-second-condition' : 'button-first-condition'}
      >
        {quantity > 0 ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;
