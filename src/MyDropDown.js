import React from 'react';
import Select from 'react-select';
const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  function MyDropdown() {
    return (
      <Select options={options} />
    );
  }
  export default MyDropdown;
