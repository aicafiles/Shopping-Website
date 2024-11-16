import React from "react";
import { Link } from "react-router-dom";
import "../assets/Categories.css";

const categories = [
  { name: "Hair Care", image: "hair-care.jpg", link: "/categories/hair-care" },
  { name: "Skin Care", image: "hair-care.jpg", link: "/categories/skin-care" },
  { name: "Bath and Body", image: "hair-care.jpg", link: "/categories/bath-body" },
  { name: "Intimate Care", image: "hair-care.jpg", link: "/categories/intimate-care" },
  { name: "Essential Oils", image: "hair-care.jpg", link: "/categories/essential-oils" },
  { name: "Lifestyle", image: "hair-care.jpg", link: "/categories/lifestyle" },
  { name: "Self Care", image: "hair-care.jpg", link: "/categories/self-care" },
  { name: "Baby Care", image: "hair-care.jpg", link: "/categories/baby-care" },
  { name: "Oral Care", image: "hair-care.jpg", link: "/categories/oral-care" },
  { name: "Pet Care", image: "hair-care.jpg", link: "/categories/pet-care" },
  { name: "Glam Up", image: "hair-care.jpg", link: "/categories/glam-up" },
  { name: "See All", image: "hair-care.jpg", link: "/categories/all" },
];

const Categories = () => {
  return (
    <div className="categories-container">
      <h2> Shop by Category </h2>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <Link to={category.link} key={index} className="category-card">
            <img
              src={`/assets/images/categories/${category.image}`}
              alt={`${category.name} category`}
              className="category-image"
            />

            <p className="category-name">{category.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;