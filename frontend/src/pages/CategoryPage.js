import React from 'react';
import { useParams } from 'react-router-dom';

const categoryData = {
  "hair-care": {
    name: "Hair Care",
    description: "Products to nourish and style your hair.",
    products: [
      { name: "Shampoo", price: "$10" },
      { name: "Conditioner", price: "$12" },
      { name: "Hair Oil", price: "$15" }
    ]
  },
  "skin-care": {
    name: "Skin Care",
    description: "Products to hydrate and protect your skin.",
    products: [
      { name: "Moisturizer", price: "$20" },
      { name: "Sunscreen", price: "$25" },
      { name: "Facial Cleanser", price: "$18" }
    ]
  },
  // Add more categories here as needed...
};

const CategoryPage = () => {
  const { categoryName } = useParams();
  const category = categoryData[categoryName]; 

  if (!category) {
    return <p>Category not found.</p>;
  }

  return (
    <div className="category-page">
      <h2>{category.name}</h2>
      <p>{category.description}</p>
      <h3>Products:</h3>
      <ul>
        {category.products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
