import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Header.css';

function Header() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="/assets/images/logo.png" alt="Shop Logo" />
          <span> Shop </span>
        </div>

        <div className="search-bar-container">
          <form className="search-form">
            <input type="search" placeholder="Search here..." id="search-bar" />
            <label htmlFor="search-bar" className="fa fa-search"></label>
          </form>
        </div>

        <div className="icons">
          <div className="fa fa-user" id="login-btn"></div>
          <div className="fa fa-heart" id="wishlist-btn"></div>
          <Link to="/cart">
            <div className="fa fa-shopping-cart" id="cart-btn"></div>
          </Link>
        </div>
      </header>

      <nav className="subheader">
        <Link to="/"> Home </Link>
        <Link to="/categories"> Categories </Link>
        <Link to="/allproducts"> All Products </Link>
        <Link to="/about"> About Us </Link>
        <Link to="/blog"> Blog </Link>
      </nav>
    </>
  );
}

export default Header;
