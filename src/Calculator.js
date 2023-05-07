import React, { useState } from 'react';
import 'tachyons';
import './Calculator.css';

const Calculator=() =>{
  const [currentValue, setCurrentValue] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumberClick = (num) => {
    setCurrentValue(currentValue === "0" ? String(num) : currentValue + num);
  };

  const handleDecimalClick = () => {
    if (!currentValue.includes(".")) {
      setCurrentValue(currentValue + ".");
    }
  };

  const handleOperatorClick = (op) => {
    if (operator !== null) {
      handleEqualsClick();
    }
    setPreviousValue(currentValue);
    setCurrentValue("0");
    setOperator(op);
  };

  const handleEqualsClick = () => {
    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);
    if (operator === "+") {
      setCurrentValue(previous + current);
    } else if (operator === "-") {
      setCurrentValue(previous - current);
    } else if (operator === "×") {
      setCurrentValue(previous * current);
    } else if (operator === "÷") {
      setCurrentValue(previous / current);
    }
    setPreviousValue(null);
    setOperator(null);
  };

  const handleClearClick = () => {
    setCurrentValue("0");
    setPreviousValue(null);
    setOperator(null);
  };

  return (
    <div className="calculator">
      <div className="output">{currentValue}</div>
      <button className="button button-wide" onClick={() => handleClearClick()}>C</button>
      <button className="button button-symbol" onClick={() => handleOperatorClick("÷")}>÷</button>
      <button className="button button-symbol" onClick={() => handleOperatorClick("×")}>×</button>
      <button className="button" onClick={() => handleNumberClick(7)}>7</button>
      <button className="button" onClick={() => handleNumberClick(8)}>8</button>
      <button className="button" onClick={() => handleNumberClick(9)}>9</button>
      <button className="button button-symbol" onClick={() => handleOperatorClick("-")}>-</button>

      <button className="button" onClick={() => handleNumberClick(4)}>4</button>
      <button className="button" onClick={() => handleNumberClick(5)}>5</button>
      <button className="button" onClick={() => handleNumberClick(6)}>6</button>
      <button className="button button-symbol" onClick={() => handleOperatorClick("+")}>+</button>
      <button className="button" onClick={() => handleNumberClick(1)}>1</button>
      <button className="button" onClick={() => handleNumberClick(2)}>2</button>
      <button className="button" onClick={() => handleNumberClick(3)}>3</button>
      <button className="button button-colwide button-symbol" onClick={() => handleEqualsClick()}>=</button>

      <button className="button button-wide" onClick={() => handleNumberClick(0)}>0</button>
      <button className="button " onClick={() => handleDecimalClick()}>.</button>

    </div>
  );
}

export default Calculator;
