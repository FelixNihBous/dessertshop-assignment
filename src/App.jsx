import React, { useState } from 'react';
import ProductList from './components/ProductList.jsx';
import Cart from './components/Cart.jsx';
import './styles/App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: product.quantity }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const resetCart = () => {
    setCart([]); // Reset the cart to an empty array
  };

  return (
    <>
      <div className='card-wrapper'>
        <h1>Dessert Shop</h1>
        <div className="app">
          <ProductList addToCart={addToCart} />
          <Cart cart={cart} removeFromCart={removeFromCart} resetCart={resetCart} />
        </div>
      </div>
    </>
  );
};

export default App;
