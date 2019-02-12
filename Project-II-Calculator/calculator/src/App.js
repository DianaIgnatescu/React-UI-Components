import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';

const App = () => {
  return (
    <div className="calculator-container">
      <CalculatorDisplay />

      <ButtonContainer>
        <ActionButton large text="clear" />
        <NumberButton color="red" text="÷" />
      </ButtonContainer>

       
      <ButtonContainer>
        <NumberButton text="7" />
        <NumberButton text="8" />
        <NumberButton text="9" />
        <NumberButton color="red" text="x" />
      </ButtonContainer>

      <ButtonContainer>
        <NumberButton text="4" />
        <NumberButton text="5" />
        <NumberButton text="6" />
        <NumberButton color="red" text="-" />
      </ButtonContainer>

      <ButtonContainer>
        <NumberButton text="1" />
        <NumberButton text="2" />
        <NumberButton text="3" />
        <NumberButton color="red" text="+" />
      </ButtonContainer>

      <ButtonContainer>
        <ActionButton large text="0" />
        <NumberButton color="red" text="=" />
      </ButtonContainer>
      
    </div>
  );
};

export default App;
