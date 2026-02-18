// src/Component/FlowerCard.jsx
import React from 'react';
import handleDownload from '../utils/downloadHandler';

// 1. Destructure onAddToCart from the props
const FlowerCard = ({ flower, onAddToCart }) => {
  return (
    <div className="relative group overflow-hidden rounded-xl shadow-lg bg-white">
      
      {/* 1. Image Layer */}
      <div className="aspect-square overflow-hidden">
        <img 
          src={flower.image} 
          alt={flower.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
      </div>

      {/* 2. Action Icons - Top Right (Visible on Hover) */}
      <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        
        {/* Download Button - Already working! */}
        <button 
          type="button"
          onClick={(e) => {
            e.preventDefault();
            handleDownload(flower.image, flower.name);
          }}
          className="bg-white p-2 rounded-full cursor-pointer shadow-lg hover:bg-gray-100 transition-colors"
          title="Download Image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </button>

        {/* 3. Cart Button - UPDATED to use onAddToCart */}
        <button 
          type="button"
          onClick={onAddToCart} // This triggers the state update in App.jsx
          className="bg-white/90 p-2 rounded-full shadow-md hover:bg-green-500 hover:text-white transition-colors"
          title="Add to Cart"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </button>
      </div>

      {/* 4. Hover Description Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
        <h3 className="text-xl font-bold text-white">{flower.name}</h3>
        <p className="text-sm text-gray-200 mt-1 italic">
          {flower.description}
        </p>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-yellow-400 font-bold">${flower.price}</span>
          <span className="text-xs text-white bg-white/20 px-2 py-1 rounded">Click icons to order</span>
        </div>
      </div>

    </div>
  );
};

export default FlowerCard;