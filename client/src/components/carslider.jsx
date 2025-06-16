import React, { useRef, useState } from 'react';

const products = [
  { id: 1, name: 'Leather Wallet', price: '$49', image: '/images/wallet1.png' },
  { id: 2, name: 'Ladies Purse', price: '$89', image: '/images/ladiespurs1.png' },
  { id: 3, name: 'Classic Cap', price: '$29', image: '/images/cap1.png' },
  { id: 3, name: 'Classic Cap', price: '$29', image: '/images/cap1.png' },
  { id: 2, name: 'Ladies Purse', price: '$89', image: '/images/ladiespurs2.png' },
  { id: 2, name: 'Ladies Purse', price: '$89', image: '/images/ladiespurs2.png' },
  { id: 2, name: 'Ladies Purse', price: '$89', image: '/images/ladiespurs3.png' },
];

export default function CarSlider() {
  const sliderRef = useRef(null);
  const [animationClass, setAnimationClass] = useState('');

  const triggerAnimation = (direction) => {
    const newClass = direction === 'left' ? 'slide-left' : 'slide-right';
    setAnimationClass(newClass);
    setTimeout(() => setAnimationClass(''), 500); // Reset after animation
  };

  const smoothScroll = (distance, direction) => {
    triggerAnimation(direction);

    const start = sliderRef.current.scrollLeft;
    const duration = 600;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 0.5 * (1 - Math.cos(Math.PI * progress));
      sliderRef.current.scrollLeft = start + distance * ease;

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const scrollLeft = () => {
    const slider = sliderRef.current;
    const card = slider.querySelector('.product-card');
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = parseInt(window.getComputedStyle(slider).gap) || 25;
    const scrollAmount = cardWidth + gap;

    smoothScroll(-scrollAmount, 'left');
  };

  const scrollRight = () => {
    const slider = sliderRef.current;
    const card = slider.querySelector('.product-card');
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = parseInt(window.getComputedStyle(slider).gap) || 25;
    const scrollAmount = cardWidth + gap;

    smoothScroll(scrollAmount, 'right');
  };

  return (
    <div className="car-slider-container">
      <div className="car-slider-wrapper">
        <button className="slider-btn left" onClick={scrollLeft} aria-label="Scroll left">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="car-slider" ref={sliderRef}>
          {products.map(product => (
            <div className={`product-card ${animationClass}`} key={product.id}>
              <div className="product-image-container">
                <img src={product.image} alt={product.name} loading="lazy" />
              </div>
              <div className="product-info">
                <h4>{product.name}</h4>
                <p>{product.price}</p>
                <button className="view-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>

        <button className="slider-btn right" onClick={scrollRight} aria-label="Scroll right">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
