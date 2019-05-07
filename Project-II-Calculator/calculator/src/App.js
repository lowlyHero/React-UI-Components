import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/ActionButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="calc-wrapper">
      <CalculatorDisplay />
      <div className='clear-btn'>
        <ActionButton className='btn-lg' text='clear'/>
        <NumberButton text='/' />
      </div>
      <div className='btn-wrapper'>
        <NumberButton text='7' />
        <NumberButton text='8' />
        <NumberButton text='9' />
        <NumberButton text='X' />
      </div>
      <div className='btn-wrapper'>
        <NumberButton text='4' />
        <NumberButton text='5' />
        <NumberButton text='6' />
        <NumberButton className='operator' text='-' />
      </div>
      <div className='btn-wrapper'>
        <NumberButton text='1' />
        <NumberButton text='2' />
        <NumberButton text='3' />
        <NumberButton className='operator' text='+' />
      </div>
      <div className='btn-wrapper'>
        <ActionButton className='btn-lg' text='0'/>
        <NumberButton text='='/>
      </div>
    </div> 
    //end calc-wrapper
  );
};

export default App;
