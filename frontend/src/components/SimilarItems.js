import React from 'react';

const SimilarItems = ({ currentProduct }) => {
  // Similar Items Logic Blah blah
  const similarItems = [
    { id: 3, name: "Gold Necklace", price: 30, image: "/images/gold-necklace.jpg" },
    { id: 4, name: "Silver Bracelet", price: 25, image: "/images/silver-bracelet.jpg" },
  ];

  return (
    <div className="similar-items">
      <h3>Similar Items</h3>
      <div className="similar-items-list">
        {similarItems.map((item) => (
          <div key={item.id} className="similar-item">
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarItems;
