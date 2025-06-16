import React, { useState } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Ladies Wallet 1",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1585386959984-a4155223f5ef"
  },
  {
    id: 2,
    name: "Ladies Wallet 2",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1570829460006-dc69e7aa5f17"
  },
  {
    id: 3,
    name: "Ladies Wallet 3",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1555529771-35a38ca4a9c4"
  },
  {
    id: 4,
    name: "Ladies Wallet 4",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1555529596-85b0443d7e2b"
  },
  {
    id: 5,
    name: "Ladies Wallet 5",
    price: 74.99,
    image: "https://images.unsplash.com/photo-1616594039964-8d8b609d3038"
  },
  {
    id: 6,
    name: "Ladies Wallet 6",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1593032465174-8b338a3f2104"
  },
  {
    id: 7,
    name: "Ladies Wallet 7",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1617225883508-066ae38e8f78"
  },
  {
    id: 8,
    name: "Ladies Wallet 8",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1616209959446-ef6e7f4d4724"
  },
  {
    id: 9,
    name: "Ladies Wallet 9",
    price: 67.99,
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a"
  },
  {
    id: 10,
    name: "Ladies Wallet 10",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1525904097878-94fb15835963"
  },
  {
    id: 11,
    name: "Ladies Wallet 11",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1632114037981-06b456b9abdb"
  },
  {
    id: 12,
    name: "Ladies Wallet 12",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1579942571114-197a06c401b1"
  }
];


const PRODUCTS_PER_LOAD = 4;

export default function ladiesPurseProduct() {
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