// DrinkSelection.js

import React from 'react';

const DrinkSelection = ({ onSelect }) => {
  const handleSelect = (event) => {
    onSelect(event.target.value);
  };

  return (
    <div>
      <label>Select a Drink:</label>
      <select onChange={handleSelect}>
        <option value="Coffee">Coffee</option>
        <option value="Tea">Tea</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
};

export default DrinkSelection;
