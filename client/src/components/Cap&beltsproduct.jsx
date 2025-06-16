import React, { useState } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Classic Leather Belt",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1606203682307-c7f3c0cfb4ec"
  },
  {
    id: 2,
    name: "Casual Brown Belt",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1603692471665-fba5f85ef283"
  },
  {
    id: 3,
    name: "Vintage Belt Style",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1559118021-5ce2bd6e0646"
  },
  {
    id: 4,
    name: "Formal Leather Belt",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1575487848502-7d59c6a4e3fd"
  },
  {
    id: 5,
    name: "Premium Tan Belt",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb"
  },
  {
    id: 6,
    name: "Designer Buckle Belt",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1604335399102-3553b9844f6e"
  },
  {
    id: 7,
    name: "Classic Black Cap",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1600185366886-b15f93b798f0"
  },
  {
    id: 8,
    name: "Street Style Cap",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02caa82c3"
  },
  {
    id: 9,
    name: "Minimal Grey Cap",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947"
  },
  {
    id: 10,
    name: "Trucker Mesh Cap",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1615591828287-90f11a8bbdb5"
  },
  {
    id: 11,
    name: "Classic Baseball Cap",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15"
  },
  {
    id: 12,
    name: "Vintage Snapback",
    price: 35.99,
    image: "https://images.unsplash.com/photo-1623197519323-7f9bb5aeb3c7"
  }
];

const PRODUCTS_PER_LOAD = 4;

export default function CapandBelts() {
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