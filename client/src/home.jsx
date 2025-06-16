import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Image2 from "../public/images/topimage1.png";
import Image3 from "../public/images/topimage2.png";
import Image1 from "../public/images/topimage3.png"; 
import Product from "./components/product.jsx";
import MidCategory from "./components/midcat.jsx";
import BottomCategory from "./components/bottomcat.jsx";
import AllCategoryVideo from "./components/flatvideo.jsx";
import CardSlider from './components/carslider.jsx';

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);
    const [loaded, setLoaded] = useState(false);
    
    const backgrounds = [Image1, Image2, Image3];
    const totalImages = backgrounds.length;

    useEffect(() => {
        setLoaded(true);
        
        const interval = setInterval(() => {
            setNextIndex((currentIndex + 1) % totalImages);
            
            setTimeout(() => {
                setCurrentIndex((currentIndex + 1) % totalImages);
            }, 100);
            
        }, 4000); 
        
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
       < div> 
        <div className={`topslider ${loaded ? 'active' : ''}`}>
            <div 
                className="bg-image"
                style={{ 
                    backgroundImage: `url(${backgrounds[currentIndex]})`,
                    opacity: 1,                    
                }}
            />
            
            <div 
                className="bg-image next"
                style={{ 
                    backgroundImage: `url(${backgrounds[nextIndex]})`,
                    opacity: 0
                }}
            />
            
            <h1>
               Timeless Leather Jackets – Style That Speaks for You<br />
            </h1>
            <Link to={"/"}>
                <button>Shop now</button>
            </Link>
        </div>
        <div className="midcate">
            <MidCategory/>
        </div>
        <div className="product">
            <Product/>
        </div>
        <div className="bottomcate">
            <BottomCategory/>
        </div>
        <div className="videioflar">
           < AllCategoryVideo/>
        </div>
        <div className="videioflar">
           < CardSlider/>
        </div>
        </div>
    );
}