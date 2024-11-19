// FilterDropdown.js

import React from 'react';

const FilterDropdown = ({ label, chartData, value, onChange, name }) => {
  // Dynamically derive the unique values for the dropdown
  const uniqueValues = [...new Set(chartData.map((item) => item[name]))];

  return (
    <div style={{ marginBottom: '20px', width: '100%' }}>
      <label htmlFor={`${name}-filter`} style={{ display: 'block', marginBottom: '8px' }}>
        {label}
      </label>
      <select
        id={`${name}-filter`}
        name={name}
        value={value}
        onChange={onChange}
        style={{
          width: '100%',
          padding: '8px',
          fontSize: '16px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      >
        <option value="">All</option>
        {uniqueValues.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
