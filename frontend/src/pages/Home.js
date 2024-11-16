import React from "react";
import "../assets/Home.css";

const featuresData = [
  {
    imgSrc: "/assets/images/featured1.jpg",
    title: "Blah Blah Blah",
    description:
      "Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah",
    link: "/productdetails",
  },
  {
    imgSrc: "/assets/images/featured2.jpg",
    title: "Blah Blah Blah",
    description:
      "Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah",
    link: "/productdetails",
  },
  {
    imgSrc: "/assets/images/featured3.jpg",
    title: "Blah Blah Blah",
    description:
      "Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah",
    link: "/productdetails",
  },
];

const Home = () => {
  return (
    <>
      <section className="banner">
        <div className="content">
          <h3>
            Blahh Bla <span> BlahBlah </span> Blah Blah Blah
          </h3>
          <p>
            This website is designed by blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.
          </p>
          <a href="/allproducts" className="btn">SHOP NOW</a>
        </div>
      </section>

      <section className="features">
        <h3 className="heading">
          <span> Featured </span> Products
        </h3>

        <div className="box-container">
          {featuresData.map((feature, index) => (
            <div className="box" key={index}>
              <img src={feature.imgSrc} alt={feature.title} />
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
              <a href={feature.link} className="btn">
                Read More
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="additional-content">
        <div className="content">
          <h3>BLAH BLAH BLAH</h3>
          <p>
            This website is designed by blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;