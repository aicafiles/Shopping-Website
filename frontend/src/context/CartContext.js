import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      const newProduct = { ...product, quantity: 1 };
      setCart([...cart, newProduct]);
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const updateQuantity = (id, action) => {
    const updatedCart = [...cart];
    const product = updatedCart.find((item) => item.id === id);

    if (product) {
      if (action === 'increase') {
        product.quantity += 1;
      } else if (action === 'decrease' && product.quantity > 1) {
        product.quantity -= 1;
      }
    }

    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
