// src/App.jsx
import { useState } from 'react'; // 1. Import useState
import FlowerGrid from './Component/FlowerGrid';
import Navbar from './Component/Navbar';

function App() {
  // 2. Create the state to hold the cart number
  const [cartCount, setCartCount] = useState(0);

  // 3. Create a function to increase the count
  const handleAddToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <div className="App">
      {/* 4. Pass the count to the Navbar */}
      <Navbar cartCount={cartCount} />
      <main>
        {/* 5. Pass the function to the FlowerGrid */}
        <FlowerGrid onAddToCart={handleAddToCart} />
      </main>
    </div>
  );
}

export default App;