import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/styles.css';
import Header from './components/header';
import Home from './pages/Home';
import Categories from './pages/Categories';
import AllProducts from './pages/AllProducts';
import About from './pages/About';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
