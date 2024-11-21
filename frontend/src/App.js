// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/styles.css";
import Header from "./components/header";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import CategoryPage from "./pages/CategoryPage";
import AllProducts from "./pages/AllProducts";
import About from "./pages/About";
import Blog from "./pages/Blog";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";  
import CheckoutPage from "./pages/CheckOutPage"; 
import { CartProvider } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import { ProductsProvider } from "./context/ProductsContext";

function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
        <ProductsProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/categories/:categoryName" element={<CategoryPage />} />
              <Route path="/allproducts" element={<AllProducts />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </Router>
        </ProductsProvider>
      </FavoritesProvider>
    </CartProvider>
  );
}

export default App;
