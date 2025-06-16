import React from 'react';
import { Link } from 'react-router-dom';
import SlideshowBox from '../components/sliderbox'; // Make sure filename matches exactly

export default function BottomCat() {
    const box1Images = [
        '/images/wallet1.png',
        '/images/wallet2.png',
        '/images/wallet3.png',
    ];
    const box2Images = [
        '/images/ladiespurs1.png',
        '/images/ladiespurs2.png',
        '/images/ladiespurs3.png',
    ];
    const box3Images = [
        '/images/cap1.png',
        '/images/cap2.png',
        '/images/cap3.png',
    ];
    const box4Images = [
        '/images/belt1.png',
        '/images/belt2.png',
        '/images/belt3.png',
    ];

    return (
        <div className="bottomcate">
            <div className="bottomcat">
                <SlideshowBox images={box1Images} link="/category1" label="Gents Wallet's" />
                <SlideshowBox images={box2Images} link="/category2" label="Ladies Wallet's" />
                <SlideshowBox images={box3Images} link="/category3" label="Leather Caps's" />
                <SlideshowBox images={box4Images} link="/category4" label="Leather  belt's" />
            </div>
        </div>
    );
}
