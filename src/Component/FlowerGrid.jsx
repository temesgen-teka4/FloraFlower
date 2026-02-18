// src/Component/FlowerGrid.jsx
import React from 'react';
import FlowerCard from './FlowerCard';
import flowerData from '../data/flower.json'; 

// 1. Add 'onAddToCart' as a prop here
const FlowerGrid = ({ onAddToCart }) => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-serif text-center mb-10 text-gray-800">
        Our Botanical Collection
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {flowerData.map((item) => (
          /* 2. Pass 'onAddToCart' down to each FlowerCard */
          <FlowerCard 
            key={item.id} 
            flower={item} 
            onAddToCart={onAddToCart} 
          />
        ))}
      </div>
    </div>
  );
};

export default FlowerGrid;