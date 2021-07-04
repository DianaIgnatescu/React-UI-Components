import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueAccumulated: 0,
      valueDisplayed: '0',
      nextOperation: '',
      isWaitingForNextNumber: false,
    };
  }

  clearValueDisplayed() {
    this.setState({
      valueDisplayed: '0',
    });
  }

  updateValueDisplayed(newValue) {
    if (this.state.isWaitingForNextNumber) {
      this.setState({
        valueDisplayed: newValue,
        isWaitingForNextNumber: false,
      });
      return;
    }
    if (this.state.valueDisplayed.length > 8) {
      return;
    }

    if (this.state.valueDisplayed === '0') {
      this.setState({
        valueDisplayed: newValue
      });
    } else {
      this.setState({
        valueDisplayed: `${this.state.valueDisplayed}${newValue}`
      });
    }
  }

  updateValueAccumulated(newValue) {
    switch(this.state.nextOperation) {
      case 'add':
        this.setState({ valueAccumulated: this.state.valueAccumulated + newValue });
        break;
      default:
        break;
    }
  }

  displayValue(newValue) {
    this.setState({ valueDisplayed: newValue });
  }

  updateNextOperation(nextOperation) {
    this.setState({
      nextOperation,
      isWaitingForNextNumber: true,
    });

  }

  render() {
    return (
      <div className="calculator-container">
        <CalculatorDisplay value={this.state.valueDisplayed} />

        <ButtonContainer>
          <ActionButton large text="clear" onClick={() => this.clearValueDisplayed()} />
          <NumberButton color="red" text="÷" onClick={() => this.updateNextOperation('divide')} />
        </ButtonContainer>

        <ButtonContainer>
          <NumberButton text="7" onClick={() => this.updateValueDisplayed('7')} />
          <NumberButton text="8" onClick={() => this.updateValueDisplayed('8')} />
          <NumberButton text="9" onClick={() => this.updateValueDisplayed('9')} />
          <NumberButton color="red" text="x" onClick={() => this.updateNextOperation('multiply')} />
        </ButtonContainer>

        <ButtonContainer>
          <NumberButton text="4" onClick={() => this.updateValueDisplayed('4')} />
          <NumberButton text="5" onClick={() => this.updateValueDisplayed('5')} />
          <NumberButton text="6" onClick={() => this.updateValueDisplayed('6')} />
          <NumberButton color="red" text="-" onClick={() => this.updateNextOperation('subtract')} />
        </ButtonContainer>

        <ButtonContainer>
          <NumberButton text="1" onClick={() => this.updateValueDisplayed('1')} />
          <NumberButton text="2" onClick={() => this.updateValueDisplayed('2')} />
          <NumberButton text="3" onClick={() => this.updateValueDisplayed('3')} />
          <NumberButton color="red" text="+" onClick={() => this.updateNextOperation('add')} />
        </ButtonContainer>

        <ButtonContainer>
          <ActionButton large text="0" onClick={() => this.updateValueDisplayed('0')} />
          <NumberButton color="red" text="=" onClick={() => this.displayValue(String(this.state.valueAccumulated))} />
        </ButtonContainer>    
      </div>);
  }
}

export default App;