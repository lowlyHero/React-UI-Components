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
        <NumberButton className='operator' text='/' />
      </div>
      <div className='btn-wrapper'>
        <NumberButton className='num-btn' text='7' />
        <NumberButton className='num-btn' text='8' />
        <NumberButton className='num-btn' text='9' />
        <NumberButton className='operator' text='X' />
      </div>
      <div className='btn-wrapper'>
        <NumberButton className='num-btn' text='4' />
        <NumberButton className='num-btn' text='5' />
        <NumberButton className='num-btn' text='6' />
        <NumberButton className='operator' text='-' />
      </div>
      <div className='btn-wrapper'>
        <NumberButton className='num-btn' text='1' />
        <NumberButton className='num-btn' text='2' />
        <NumberButton className='num-btn' text='3' />
        <NumberButton className='operator' text='+' />
      </div>
      <div className='btn-wrapper'>
        <ActionButton className='btn-lg' text='0'/>
        <NumberButton className='operator' text='='/>
      </div>
    </div> 
    //end calc-wrapper
  );
};

export default App;
