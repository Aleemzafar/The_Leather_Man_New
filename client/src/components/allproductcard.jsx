import React, { useState } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Classic Leather Watch",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
  },
  {
    id: 2,
    name: "Steel Chronograph",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1548179877-1de4b566b4e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
  },
  {
    id: 3,
    name: "Minimalist Leather",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
  },
  {
    id: 4,
    name: "Luxury Brown Leather",
    price: 279.99,
    image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
  },
  {
    id: 5,
    name: "Black Leather Strap",
    price: 229.99,
    image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
  },
  {
    id: 6,
    name: "Gold Chronograph",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
  },
  {
    id: 7,
    name: "Silver Dress Watch",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1557531365-e8b9c4dfc871?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
  },
  {
    id: 8,
    name: "Rose Gold Classic",
    price: 329.99,
    image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
  },
  {
    id: 9,
    name: "Blue Dial Leather",
    price: 259.99,
    image: "https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
  },
  {
    id: 10,
    name: "Black Stainless Steel",
    price: 379.99,
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
  },
  {
    id: 11,
    name: "Vintage Leather",
    price: 289.99,
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
  },
  {
    id: 12,
    name: "Modern Skeleton",
    price: 449.99,
    image: "https://images.unsplash.com/photo-1611591437281-4608be122683?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
  },{
    id: 12,
    name: "Modern Skeleton",
    price: 449.99,
    image: "https://images.unsplash.com/photo-1611591437281-4608be122683?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
  },
];

const PRODUCTS_PER_LOAD = 4;

export default function WatchCollection() {
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