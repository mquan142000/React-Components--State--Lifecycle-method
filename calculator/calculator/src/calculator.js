import React, { useState } from 'react';
import './index.css'; 
const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleInput1 = (e) => {
    setNum1(e.target.value);
  };

  const handleInput2 = (e) => {
    setNum2(e.target.value);
  };

  const handleAddition = () => {
    setResult(parseInt(num1) + parseInt(num2));
  };

  const handleSubtraction = () => {
    setResult(parseInt(num1) - parseInt(num2));
  };

  const handleMultiplication = () => {
    setResult(parseInt(num1) * parseInt(num2));
  };

  const handleDivision = () => {
    setResult(parseInt(num1) / parseInt(num2));
  };

  return (
    <div className="calculator">
      <h1>Simple Calculator</h1>
      <div className="input-container">
        <input 
          type="text" 
          value={num1} 
          onChange={handleInput1} 
          placeholder="Enter first number" 
        />
        <input 
          type="text" 
          value={num2} 
          onChange={handleInput2} 
          placeholder="Enter second number" 
        />
      </div>
      <div className="buttons">
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>x</button>
        <button onClick={handleDivision}>/</button>
      </div>
      <div className="result">
        {result !== null && <h2>Result: {result}</h2>}
      </div>
    </div>
  );
};

export default Calculator;
