import React from "react";
import './CircleSelector.css';

const CircleSelector = (props) => (
  <div className='CircleSelector'>
    <button
        className={props.selectedCircle === '1' ? 'selected' : ''}
        disabled={props.selectedCircle === '1'} 
        onClick={() => props.handleSelectedCircle('1')}>
        {props.selectedCircle === '1' ? 'Circle 1 Selected' : 'Select Circle 1'}
    </button>
    <button
        className={props.selectedCircle === '2' ? 'selected' : ''} 
        disabled={props.selectedCircle === '2'} 
        onClick={() => props.handleSelectedCircle('2')}>
        {props.selectedCircle === '2' ? 'Circle 2 Selected' : 'Select Circle 2'}
    </button>
    <button 
        className={props.selectedCircle === '3' ? 'selected' : ''}
        disabled={props.selectedCircle === '3'} 
        onClick={() => props.handleSelectedCircle('3')}>
        {props.selectedCircle === '3' ? 'Circle 3 Selected' : 'Select Circle 3'}
    </button>
    <button 
        className={props.selectedCircle === '4' ? 'selected' : ''}
        disabled={props.selectedCircle === '4'} 
        onClick={() => props.handleSelectedCircle('4')}>
        {props.selectedCircle === '4' ? 'Circle 4 Selected' : 'Select Circle 4'}
    </button>
  </div>
);

export default CircleSelector;