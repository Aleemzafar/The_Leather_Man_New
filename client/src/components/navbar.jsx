import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOverlayClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow-lg px-4 py-4 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          
          <div className="text-2xl font-bold text-gray-800">Logo</div>

          
          <div className="hidden md:flex gap-8 text-gray-700 font-medium">
            <Link
              to="/"
              className="text-lg px-2 py-1 rounded-md hover:text-rose-600 hover:shadow-md transition-all duration-300"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-lg px-2 py-1 rounded-md hover:text-rose-600 hover:shadow-md transition-all duration-300"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="text-lg px-2 py-1 rounded-md hover:text-rose-600 hover:shadow-md transition-all duration-300"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-lg px-2 py-1 rounded-md hover:text-rose-600 hover:shadow-md transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          
          <div className="flex items-center gap-4">
            <FaCartShopping className="text-2xl text-brown-700 hover:text-brown-900 transition duration-300 cursor-pointer" />
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <FaTimes className="text-2xl cursor-pointer hover:shadow-lg transition duration-300 text-gray-700" />
              ) : (
                <FaBars className="text-2xl cursor-pointer hover:shadow-lg transition duration-300 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        
        <div
          className={`md:hidden overflow-hidden transition-all duration-700 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mt-2 px-4 pb-4 flex flex-col gap-3 text-gray-700 font-medium bg-white shadow-inner">
            <Link className='px-3 py-2 rounded-md hover:text-rose-600 hover:bg-gray-100 transition-all duration-300' to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link className='px-3 py-2 rounded-md hover:text-rose-600 hover:bg-gray-100 transition-all duration-300' to="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
            <Link className='px-3 py-2 rounded-md hover:text-rose-600 hover:bg-gray-100 transition-all duration-300' to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link className='px-3 py-2 rounded-md hover:text-rose-600 hover:bg-gray-100 transition-all duration-300' to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
          </div>
        </div>
      </nav>

    
      {isOpen && (
        <div
          onClick={handleOverlayClick}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
        ></div>
      )}
    </>
  );
};

export default Navbar;
