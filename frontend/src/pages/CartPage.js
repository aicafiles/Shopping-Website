import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../assets/CartPage.css'; 

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectItem = (id) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(id)) {
        return prevSelectedItems.filter((itemId) => itemId !== id); 
      } else {
        return [...prevSelectedItems, id]; 
      }
    });
  };

  const handleRemoveSelected = () => {
    selectedItems.forEach((id) => {
      removeFromCart(id);
    });
    setSelectedItems([]);
  };

  const handleQuantityChange = (id, action) => {
    updateQuantity(id, action);
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <input
                type="checkbox"
                checked={selectedItems.includes(product.id)} 
                onChange={() => handleSelectItem(product.id)} 
                className="item-checkbox"
              />
              <img src={product.image} alt={product.name} className="cart-item-image" />
              <div className="cart-item-details">
                <p className="cart-item-name">{product.name}</p>
                <p className="cart-item-price">Price: ₱{product.price}</p>
                <div className="cart-item-quantity">
                  <button
                    onClick={() => handleQuantityChange(product.id, 'decrease')}
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <span className="quantity">{product.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(product.id, 'increase')}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
                <p className="cart-item-total">Total: ₱{product.quantity * product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedItems.length > 0 && (
        <div className="cart-actions">
          <button onClick={handleRemoveSelected} className="remove-selected-btn">
            Remove Selected Items
          </button>

          <Link to="/checkout" className="checkout-btn">
            Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
