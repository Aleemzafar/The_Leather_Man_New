import React from 'react';
import { Link } from 'react-router-dom';

export default function FlatVideo() {
  return (
    <div className="video-container">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="background-video"
      >
        <source src="/videos/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content-overlay">
        <h1>
          Explore Premium Men Jackets & Coats – Signature Designs, Superior Comfort & Crafted Excellence
        </h1>
        <Link to="/">
          <button>Shop Now</button>
        </Link>
      </div>
    </div>
  );
}
