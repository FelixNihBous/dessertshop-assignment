import React, { useState } from 'react';
import '../styles/Cart.css';
import Modal from './Modal'; // Import the modal component

const Cart = ({ cart, removeFromCart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  // Calculate the total price of items in the cart
  const totalPrice = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  const handleConfirmOrder = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleStartNewOrder = () => {
    // Reset cart data logic here
    // For example, you might want to clear the cart state in the parent component
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image.thumbnail} alt={item.name} />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)} x {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total: ${totalPrice}</h3>
        <button onClick={handleConfirmOrder}>Confirm Order</button>
      </div>
      {isModalOpen && (
        <Modal onClose={handleStartNewOrder} cart={cart} totalPrice={totalPrice} />
      )}
    </div>
  );
};

export default Cart;