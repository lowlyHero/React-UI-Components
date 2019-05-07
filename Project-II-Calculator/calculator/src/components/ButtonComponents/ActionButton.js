import React from 'react';
import './Button.css';

const ActionButton = () => {
    return (
        <div className="action-wrapper">
            <ul>
                <li className="action-btn"> / </li>
                <li className="action-btn"> X </li>
                <li className="action-btn"> - </li>
                <li className="action-btn"> + </li>
                <li className="action-btn"> = </li>
            </ul>
        </div>
    );
};



export default ActionButton;