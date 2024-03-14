// CondimentSelection.js

import React, { useState } from 'react';

const CondimentSelection = ({ onSelect }) => {
  const [selectedCondiments, setSelectedCondiments] = useState([]);

  const handleSelect = (event) => {
    const selected = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedCondiments(selected);
    onSelect(selected);
  };

  return (
    <div>
      <label>Select Condiments:</label>
      <select multiple onChange={handleSelect}>
        <option value="Sugar">Sugar</option>
        <option value="Cream">Cream</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
};

export default CondimentSelection;
