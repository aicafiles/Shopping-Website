import React from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const { products } = useProducts(); // Access products from context

  // Find the product by ID
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) return <p>Product not found!</p>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
      <p>Price: ₱{product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductDetails;
