// App.js

import React, { useState } from 'react';
import './App.css';
import ShopSelection from './ShopSelection';
import DrinkSelection from './DrinkSelection';
import CondimentSelection from './CondimentSelection';

function App() {
  const [selectedShop, setSelectedShop] = useState(null);
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [selectedCondiments, setSelectedCondiments] = useState([]);

  const handleOrder = () => {
    // Code to handle order submission
    console.log('Order placed!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to our Cafe</h1>
      </header>
      <div className="Order-container">
        <ShopSelection onSelect={setSelectedShop} />
        <DrinkSelection onSelect={setSelectedDrink} />
        <CondimentSelection onSelect={setSelectedCondiments} />
        <button onClick={handleOrder}>Place Order</button>
      </div>
    </div>
  );
}

export default App;
