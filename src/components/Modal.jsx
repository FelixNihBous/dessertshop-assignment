import React from 'react';
import '../styles/Modal.css'; // Import the modal styles

const Modal = ({ onClose, cart, totalPrice }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Order Confirmation</h2>
        <div className="modal-cart-items">
          {cart.map((item) => (
            <div key={item.id} className="modal-cart-item">
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)} x {item.quantity}</p>
            </div>
          ))}
        </div>
        <h3>Total: ${totalPrice}</h3>
        <button onClick={onClose}>Start New Order</button>
      </div>
    </div>
  );
};

export default Modal;
