import React, { useState } from 'react';
import { useProducts } from '../context/ProductsContext';
import { useNavigate } from 'react-router-dom';
import '../assets/AllProducts.css';

const AllProducts = () => {
  const { products } = useProducts();
  const [sortOption, setSortOption] = useState('');
  const navigate = useNavigate();

  const handleSort = (option) => {
    setSortOption(option);
  };

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOption) {
      case 'alphabetical-asc':
        return a.name.localeCompare(b.name);
      case 'alphabetical-desc':
        return b.name.localeCompare(a.name);
      case 'price-low-to-high':
        return a.price - b.price;
      case 'price-high-to-low':
        return b.price - a.price;
      case 'date-old-to-new':
        return new Date(a.dateListed) - new Date(b.dateListed);
      case 'date-new-to-old':
        return new Date(b.dateListed) - new Date(a.dateListed);
      default:
        return 0;
    }
  });

  return (
    <div className="all-products">
      <h1 className="product-header">All Products</h1>
      <div className="header-row">
        <div className="sort-options">
          <label htmlFor="sort">Sort by:</label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="" disabled>Select</option>
            <option value="alphabetical-asc">Alphabetically (A-Z)</option>
            <option value="alphabetical-desc">Alphabetically (Z-A)</option>
            <option value="price-low-to-high">Price (Low to High)</option>
            <option value="price-high-to-low">Price (High to Low)</option>
            <option value="date-old-to-new">Date (Old to New)</option>
            <option value="date-new-to-old">Date (New to Old)</option>
          </select>
        </div>
        <p className="product-count">{products.length} products</p>
      </div>
      <div className="product-grid">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.brand}</p>
            <p>₱{product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
