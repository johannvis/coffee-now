// ShopSelection.js

import React from 'react';

const ShopSelection = ({ onSelect }) => {
  const handleSelect = (event) => {
    onSelect(event.target.value);
  };

  return (
    <div>
      <label>Select a Shop:</label>
      <select onChange={handleSelect}>
        <option value="ETCsShop">ETCs Shop</option>
        <option value="AnotherShop">Another Shop</option>
      </select>
    </div>
  );
};

export default ShopSelection;
