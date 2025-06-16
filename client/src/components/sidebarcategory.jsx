import React, { useState } from 'react';
import LeatherJackets from "../leatherjackes.jsx";
import LadiesPurse from "../leadiespurse.jsx";
import LeatherBeltsAndCaps from "../leathercapandbelts.jsx";
import LeatherOtherProducts from "../otherleatherproducts.jsx";
import Gentswallet from "../gentswallet.jsx";
import Leathercoats from "../longcoats.jsx";
import Allproduct from '../allleatheritemss.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './navbar.jsx';

export default function SidebarCategory() {
  const [selectedCategory, setSelectedCategory] = useState('Allproduct');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const renderComponent = () => {
    switch (selectedCategory) {
      case 'Allproduct':
        return <Allproduct />;
      case 'jackets':
        return <LeatherJackets />;
      case 'coats':
        return <Leathercoats />;
      case 'wallet':
        return <Gentswallet />;
      case 'ladiespurse':
        return <LadiesPurse />; 
      case 'belts':
        return <LeatherBeltsAndCaps />;
      case 'other':
        return <LeatherOtherProducts />;
      default:
        return <Allproduct />;
    }
  };

  const categories = [
    { id: 'Allproduct', name: 'All Products' },
    { id: 'jackets', name: 'Leather Jackets' },
    { id: 'coats', name: 'Long Coats' },
    { id: 'wallet', name: 'Gents Wallet' },
    { id: 'ladiespurse', name: 'Ladies Purses' },
    { id: 'belts', name: 'Caps & Belts' },
    { id: 'other', name: 'Other Products' }
  ];

  return (<>
  
    <Navbar/>
    <div className="sidebar-container">
      <motion.div 
        className="sidebarcategory"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        >
        <h3 className="sidebar-title">Categories</h3>
        <ul>
          {categories.map((category) => (
            <motion.li
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={selectedCategory === category.id ? 'active' : ''}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            >
              {category.name}
              {selectedCategory === category.id && (
                <motion.div 
                className="underline"
                layoutId="underline"
                initial={false}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.li>
          ))}
        </ul>
      </motion.div>
      
      <div className="category-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            >
            {renderComponent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
            </>
  );
}


