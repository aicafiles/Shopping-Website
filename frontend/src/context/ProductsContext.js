import React, { createContext, useState, useContext } from 'react';

const ProductsContext = createContext();

export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Apicuria Natural Oral Spray',
      description: 'For Minor Mouth and Throat Irritation 12ml',
      price: 299,
      brand: 'APICURIA',
      category: 'Wellness',
      image: '/assets/images/featured/oralspray.jpg',
      dateListed: '2024-01-15',
    },
    {
      id: 2,
      name: 'Areté Awaken Bath Salt',
      description: 'Good for Soak or Scrub, Deeply Exfoliates for Smooth Skin',
      price: 920,
      brand: 'ARETÉ',
      category: 'Bath',
      image: '/assets/images/featured/bathsalt.jpg',
      dateListed: '2024-01-10',
    },
    {
      id: 3,
      name: 'Areté Blue Butterfly Pea Tea',
      description: 'Boosts Metabolism & Hair Growth',
      price: 999,
      brand: 'ARETÉ',
      category: 'Tea',
      image: '/assets/images/featured/tea.jpg',
      dateListed: '2023-12-20',
    },
    {
      id: 4,
      name: 'Areté Charcoal Organic Rice Soap',
      description: 'Handcrafted Soap Made With Essential Oils',
      price: 299,
      brand: 'ARETÉ',
      category: 'Soap',
      image: '/assets/images/featured/soap.jpg',
      dateListed: '2023-12-15',
    },
    {
      id: 5,
      name: 'Areté Calm & Sleep Tea',
      description: 'Specialty Teas in Canister with Lavender and Chamomile',
      price: 499,
      brand: 'ARETÉ',
      category: 'Tea',
      image: '/assets/images/featured/sleeptea.jpg',
      dateListed: '2024-01-05',
    },
    {
      id: 6,
      name: 'Apicuria Natural Oral Spray',
      description: 'For Minor Mouth and Throat Irritation 12ml',
      price: 299,
      brand: 'APICURIA',
      category: 'Wellness',
      image: '/assets/images/featured/oralspray.jpg',
      dateListed: '2024-01-15',
    },
    {
      id: 7,
      name: 'Areté Awaken Bath Salt',
      description: 'Good for Soak or Scrub, Deeply Exfoliates for Smooth Skin',
      price: 920,
      brand: 'ARETÉ',
      category: 'Bath',
      image: '/assets/images/featured/bathsalt.jpg',
      dateListed: '2024-01-10',
    },
    {
      id: 8,
      name: 'Areté Blue Butterfly Pea Tea',
      description: 'Boosts Metabolism & Hair Growth',
      price: 999,
      brand: 'ARETÉ',
      category: 'Tea',
      image: '/assets/images/featured/tea.jpg',
      dateListed: '2023-12-20',
    },
    {
      id: 9,
      name: 'Areté Charcoal Organic Rice Soap',
      description: 'Handcrafted Soap Made With Essential Oils',
      price: 299,
      brand: 'ARETÉ',
      category: 'Soap',
      image: '/assets/images/featured/soap.jpg',
      dateListed: '2023-12-15',
    },
    {
      id: 10,
      name: 'Areté Calm & Sleep Tea',
      description: 'Specialty Teas in Canister with Lavender and Chamomile',
      price: 499,
      brand: 'ARETÉ',
      category: 'Tea',
      image: '/assets/images/featured/sleeptea.jpg',
      dateListed: '2024-01-05',
    },
    {
        id: 11,
        name: 'Areté Calm & Sleep Tea',
        description: 'Specialty Teas in Canister with Lavender and Chamomile',
        price: 499,
        brand: 'ARETÉ',
        category: 'Tea',
        image: '/assets/images/featured/sleeptea.jpg',
        dateListed: '2024-01-05',
      },
      {
        id: 12,
        name: 'Areté Calm & Sleep Tea',
        description: 'Specialty Teas in Canister with Lavender and Chamomile',
        price: 499,
        brand: 'ARETÉ',
        category: 'Tea',
        image: '/assets/images/featured/sleeptea.jpg',
        dateListed: '2024-01-05',
      },
  ]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
