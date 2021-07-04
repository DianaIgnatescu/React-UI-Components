import React from 'react';
import './Button.css';

const ActionButton = (props) => {
  if (props.large) {
    return (
      <div className="action-button">
        <button onClick={props.onClick} className="large">{props.text}</button>
      </div>
    );
  }
  return (
    <div className="action-button">
      <button onClick={props.onClick}>{props.text}</button>
    </div>
  );
};

export default ActionButton;
