import React from 'react';
import { useCart } from '../contexts/CartContext';
import '../css/Cart.css';

const Cart = () => {
  const { cart, removeFromCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return <div className="cart-empty">Your cart is empty.</div>;
  }

  return (
    <div className="cart">
        <div className="cart-total">
        <h3>Total Price: Ksh {totalPrice}</h3>
      </div>
      <h2>Your Cart</h2>
      <ul className="cart-items">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Price: Ksh {item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Subtotal: Ksh {item.price * item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)} className="remove-button">Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
