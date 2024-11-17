import React from "react";
import "../assets/Home.css";
import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";

const Home = () => {
  const { products } = useProducts();
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <>
      <section className="banner">
        <div className="content">
          <h3>
            Blahh Bla <span> BlahBlah </span> Blah Blah Blah
          </h3>
          <p>
            This website is designed by blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah.
          </p>
          <a href="/categories" className="btn">
            SHOP NOW
          </a>
        </div>
      </section>

      <section className="features">
        <h3 className="heading">
          Featured Products
        </h3>

        <div className="box-container">
          {featuredProducts.map((product) => (
            <div className="box" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <Link to={`/product/${product.id}`} className="btn">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="additional-content">
        <div className="content">
          <h3>BLAH BLAH BLAH </h3>
          <p>
            This website is designed by blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
