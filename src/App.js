import React, { useState } from 'react';
import './App.css';
import ShopSelection from './ShopSelection';
import DrinkSelection from './DrinkSelection';
import CondimentSelection from './CondimentSelection';
import Amplify, { API } from 'aws-amplify'; // Ensure Amplify and API are correctly imported
import config from './aws-exports'; // Ensure this imports your aws-exports.js file

Amplify.configure(config);

function App() {
  const [selectedShop, setSelectedShop] = useState(null);
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [selectedCondiments, setSelectedCondiments] = useState([]);

  const handleOrder = async () => {
    const orderDetails = {
      body: {
        shop: selectedShop,
        drink: selectedDrink,
        condiments: selectedCondiments
      }
    };

    // Use the API name 'order' as configured in your aws-exports.js
    // No path is appended as your invoke URL suggests it's the root endpoint for 'dev'
    try {
      const response = await API.post('order', '/dev', orderDetails); // Assuming 'dev' is part of the path you want to hit
      console.log('Order response:', response);
      alert('Order placed successfully!');
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place the order.');
    }
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
