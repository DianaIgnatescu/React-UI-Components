import React from 'react';
import './Button.css';

const NumberButton = (props) => {
  if (props.color === 'red') {
    return (
      <div className="number-button">
        <button className="red-button">{props.text}</button>
      </div>
    );
  }
  return (
    <div className="number-button">
      <button>{props.text}</button>
    </div>
  );
};

export default NumberButton;