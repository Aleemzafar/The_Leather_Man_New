import React from 'react'
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-950 text-gray-200 px-4 sm:px-6 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

    
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">CATEGORIES</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="#" className="hover:text-blue-500">Women</Link></li>
            <li><Link to="#" className="hover:text-blue-500">Men</Link></li>
            <li><Link to="#" className="hover:text-blue-500">Shoes</Link></li>
            <li><Link to="#" className="hover:text-blue-500">Watches</Link></li>
          </ul>
        </div>

    
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">HELP</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="#" className="hover:text-blue-500">Track Orders</Link></li>
            <li><Link to="#" className="hover:text-blue-500">Returns</Link></li>
            <li><Link to="#" className="hover:text-blue-500">Shipping</Link></li>
            <li><Link to="#" className="hover:text-blue-500">FAQs</Link></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">GET IN TOUCH</h3>
          <p className="text-sm mb-4 leading-relaxed">
            Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
          </p>
          <div className="flex gap-4 text-xl">
            <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-blue-500 cursor-pointer" />
          </div>
        </div>

      </div>

      
      <div className="mt-12 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
    </div>
  )
}

export default Footer
