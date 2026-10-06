import React, { useContext } from 'react';
import { CartContext } from './CartContext'; // Correct path to CartContext

function Cart() {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item._id} className="cart-item">
          <img src={item.image} alt={item.name} className="cart-item-image" />
          <div>
            <h3>{item.name}</h3>
            <p><strong>Price:</strong> ₹{item.ticketprice}</p>
            <p><strong>Quantity:</strong> {item.quantity}</p>
          </div>
          <div className="cart-buttons">
            <button onClick={() => updateQuantity(item._id, 1)}>+</button>
            <button onClick={() => updateQuantity(item._id, -1)}>-</button>
            <button onClick={() => removeFromCart(item._id)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
