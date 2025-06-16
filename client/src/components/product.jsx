import React from "react";
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
    id: 5,
    name: "Black Leather Strap",
    price: 229.99,
    image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
  },{
    id: 5,
    name: "Black Leather Strap",
    price: 229.99,
    image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
  },{
    id: 5,
    name: "Black Leather Strap",
    price: 229.99,
    image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
  },{
    id: 5,
    name: "Black Leather Strap",
    price: 229.99,
    image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
  },{
    id: 5,
    name: "Black Leather Strap",
    price: 229.99,
    image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
  },
    
];
const MAX_VISIBLE_PRODUCTS = 10;

export default function Product() {
  const visibleProducts = products.slice(0, MAX_VISIBLE_PRODUCTS);

  return (
    <div className="popularitem">
      <div className="popularh12">
        <h1>Men Premium Outerwear</h1>
        <p>
          <strong>
            Elevate your style with our men’s jackets – bold designs, perfect fit, and premium comfort. From sleek leather to cozy winter styles, find your ideal jacket for any occasion
          </strong>
        </p>
      </div>

      <div className="popularproduct">
        {visibleProducts.map((product) => (
          <div className="popularone" key={product.id}>
            <Link to={`/productdetail/${product.id}`} className="linkwatch">
              <div className="image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                />
              </div>
              <div className="product-info">
                <h1>{product.name}</h1>
                <p>${product.price.toFixed(2)}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="view-more-wrapper">
        <Link to="/sidebar" className="view-more-button">View More</Link>
      </div>
    </div>
  );
}
