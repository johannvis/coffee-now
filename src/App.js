import React, { useState } from 'react';
import './App.css';
import ShopSelection from './ShopSelection';
import DrinkSelection from './DrinkSelection';
import CondimentSelection from './CondimentSelection';
import { Amplify } from 'aws-amplify';
import { get, post } from '@aws-amplify/api';
import config from './aws-exports';



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


    try {
      const response = await post('order', '', orderDetails);
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
