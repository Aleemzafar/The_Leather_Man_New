import React, { useState } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Gents Wallet 1",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1602526432484-01b1f2859483"
  },
  {
    id: 2,
    name: "Gents Wallet 2",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1555529771-35a38ca4a9c4"
  },
  {
    id: 3,
    name: "Gents Wallet 3",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1621451537080-7c2980e16538"
  },
  {
    id: 4,
    name: "Gents Wallet 4",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1623695854970-3301f811cb56"
  },
  {
    id: 5,
    name: "Gents Wallet 5",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1623269454262-f55d67c7c2a1"
  },
  {
    id: 6,
    name: "Gents Wallet 6",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1585386959984-a4155223f5ef"
  },
  {
    id: 7,
    name: "Gents Wallet 7",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1626968362149-df045e7fe6b1"
  },
  {
    id: 8,
    name: "Gents Wallet 8",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1617225883508-066ae38e8f78"
  },
  {
    id: 9,
    name: "Gents Wallet 9",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1623077023863-64887e3d71fa"
  },
  {
    id: 10,
    name: "Gents Wallet 10",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1606813903420-b635b170079b"
  },
  {
    id: 11,
    name: "Gents Wallet 11",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1616594039964-8d8b609d3038"
  },
  {
    id: 12,
    name: "Gents Wallet 12",
    price: 74.99,
    image: "https://images.unsplash.com/photo-1632820438303-9484b3d9e3b7"
  }
];

const PRODUCTS_PER_LOAD = 4;

export default function WalletProduct() {
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_LOAD);
  const [addedToCart, setAddedToCart] = useState({});

  const handleViewMore = () => {
    setVisibleCount(prev => prev + PRODUCTS_PER_LOAD);
  };

  const handleAddToCart = (productId) => {
    setAddedToCart(prev => ({ ...prev, [productId]: true }));
    setTimeout(() => {
      setAddedToCart(prev => ({ ...prev, [productId]: false }));
    }, 2000);
  };

  const visibleProducts = products.slice(0, visibleCount);
  const canShowMore = visibleCount < products.length;

  return (
    <div className="luxury-watch-collection">
      <div className="collection-header">
        <h1 className="collection-title">Timeless Elegance</h1>
        <p className="collection-subtitle">
          Discover our curated selection of premium timepieces that blend 
          precision engineering with exquisite craftsmanship.
        </p>
      </div>

      <div className="watch-grid">
        {visibleProducts.map((product) => (
          <div className="watch-card" key={product.id}>
            <div className="card-inner">
              <Link to={`/productdetail/${product.id}`} className="watch-link">
                <div className="image-wrapper">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="watch-image"
                  />
                  <div className="image-overlay"></div>
                </div>
                <div className="watch-details">
                  <h3 className="watch-name">{product.name}</h3>
                  <p className="watch-price">${product.price.toFixed(2)}</p>
                </div>
              </Link>
              <button 
                className={`cart-button ${addedToCart[product.id] ? 'added' : ''}`}
                onClick={() => handleAddToCart(product.id)}
              >
                <span className="button-text">
                  {addedToCart[product.id] ? 'Added to Cart' : 'Add to Cart'}
                </span>
                <span className="button-icon">+</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {canShowMore && (
        <div className="view-more-wrapper">
          <button onClick={handleViewMore} className="view-more-button">
            Discover More
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}