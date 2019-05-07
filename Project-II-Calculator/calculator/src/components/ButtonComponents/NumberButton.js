import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <button className={`num-btn ${props.bgColor}`}>{props.text}</button>
    );
};

export default NumberButton;