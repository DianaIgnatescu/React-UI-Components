import React from 'react';
import './Display.css';

const CalculatorDisplay = ({ value }) => {
  return (
    <div className="calculator-display">
      <p>{value}</p>
    </div>
  );
};

export default CalculatorDisplay;