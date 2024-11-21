import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../assets/CheckoutPage.css';

const CheckoutPage = () => {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="cart-items-list">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Price: ₱{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="total">
            <h3>Total: ₱{totalPrice}</h3>
          </div>
          <div className="checkout-actions">
            <button className="checkout-btn">Proceed to Payment</button>
          </div>
        </div>
      )}
      
      <div className="back-to-cart">
        <Link to="/cart" className="btn">Back to Cart</Link>
      </div>
    </div>
  );
};

export default CheckoutPage;
