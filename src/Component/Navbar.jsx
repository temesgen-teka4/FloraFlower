// src/Component/Navbar.jsx
import React from 'react';

const Navbar = ({ cartCount = 0 }) => {
  return (
    /* Fixed the "sticky, top-0" typo by removing the comma */
    <nav className="sticky top-0 z-50 bg-white shadow-md py-4 px-8 flex justify-between items-center">
      
      {/* 1. Logo */}
      <div className="text-2xl font-serif font-bold text-green-600">
        FloraFlow 🌸
      </div>

      {/* 2. Cart Icon Container */}
      <div className="relative cursor-pointer group">
        {/* Cart SVG Icon */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-8 w-8 text-gray-700 group-hover:text-green-600 transition-colors" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
          />
        </svg>

        {/* 3. The Notification Badge */}
        {/* Only renders if cartCount is greater than 0 */}
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce shadow-lg">
            {cartCount}
          </span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;