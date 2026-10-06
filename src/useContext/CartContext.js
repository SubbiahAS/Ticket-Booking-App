import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (movie) => {
    const existingItem = cartItems.find((item) => item._id === movie._id);
    if (existingItem) {
      alert(`${movie.name} is already in the cart!`);
    } else {
      setCartItems([...cartItems, { ...movie, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item._id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item._id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
