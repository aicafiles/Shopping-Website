import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; 
import { FavoritesContext } from '../context/FavoritesContext';
import { useProducts } from '../context/ProductsContext';
import StarRating from 'react-star-rating-component';
import SimilarItems from '../components/SimilarItems';
import '../assets/ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const { addToCart } = useContext(CartContext); 
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  const product = products.find((item) => item.id === parseInt(id));

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [showNotification, setShowNotification] = useState(false);  

  useEffect(() => {
    if (!product) {
      alert("Product not found!");
    }
  }, [product]);

  const handleAddToCart = () => {
    addToCart(product);  
    setShowNotification(true);  
    setTimeout(() => setShowNotification(false), 1500); 
  };

  const handleToggleFavorite = () => {
    toggleFavorite(product.id);
  };

  const handleReviewSubmit = () => {
    alert(`Review submitted: ${review} with rating ${rating}`);
    setReview("");
    setRating(0);
  };

  if (!product) return <p>Loading...</p>;

  const isFavorited = favorites.includes(product.id);

  return (
    <div className="product-details">
      <div className="product-info">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-details-content">
          <h1>{product.name}</h1>
          <p className="product-price">₱{product.price.toFixed(2)}</p>
          <div className="product-description">
            <p>{product.description}</p>
          </div>

          <div className="add-to-cart">
            <button onClick={handleAddToCart}>Add to Cart</button>
            <button onClick={handleToggleFavorite}>
              {isFavorited ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>

          <div className="reviews">
            <h3>Reviews</h3>
            <div className="star-rating">
              <StarRating
                name="product-rating"
                value={rating}
                onStarClick={(nextValue) => setRating(nextValue)}
                starCount={5}
                starColor="#FFD700" 
                emptyStarColor="#ccc" 
                editing={true}  
                renderStarIcon={(value, index) => (
                  <span
                    style={{
                      fontSize: '40px', 
                      color: value <= rating ? '#FFD700' : '#ccc',
                    }}
                  >
                    &#9733;
                  </span>
                )}
              />
            </div>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Write a review..."
            />
            <button onClick={handleReviewSubmit}>Submit Review</button>
          </div>
        </div>
      </div>

      <SimilarItems currentProduct={product} />

      {showNotification && (
        <div className="notification visible">
          {product.name} has been added to your cart!
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
