import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="calc-wrapper">
    <CalculatorDisplay />
    </div>
  );
};

export default App;
