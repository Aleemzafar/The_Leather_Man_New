import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function SlideshowBox({ images, link, label }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setPrevIndex(currentIndex);
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000); // 4 seconds

        return () => clearInterval(interval);
    }, [currentIndex, images.length]);

    return (
        <div className="slideshow-box">
            {images.map((image, index) => {
                let className = "bg-slide";
                if (index === currentIndex) className += " current";
                else if (index === prevIndex) className += " prev";

                return (
                    <div
                        key={index}
                        className={className}
                        style={{ backgroundImage: `url(${image})` }}
                    />
                );
            })}
            <Link to={link}>{label}</Link>
        </div>
    );
}
