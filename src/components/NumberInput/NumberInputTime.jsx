import React, { useState, useEffect, forwardRef, useImperativeHandle} from "react";
import "./NumberInput.css";

const NumberInputTime = forwardRef(({ isDisabled, onValueChange, inputValue, maxValue}, ref) => {
  const [value, setValue] = useState(inputValue); useEffect(() => {
    setValue(inputValue);
  }, [inputValue]);

  useImperativeHandle(ref, () => ({
    resetValue() {
      setValue(0);
    },
  }));



  const handleIncrement = () => {
    if (value < maxValue) {
    const newValue = value + 5;
    setValue(newValue);
    onValueChange(newValue); // Send the updated value to the parent
    }
  };

  const handleDecrement = () => {
    // Check if the current value is greater than 0 before decrementing
    if (value > 0) {
      const newValue = value - 5;
      setValue(newValue);
      onValueChange(newValue); // Send the updated value to the parent
    }
  };

  return (
    <>
      <div className="number-counter">
        <button
          onClick={handleDecrement}
          disabled={isDisabled}
          className="minus"
           style={{fill: isDisabled ? '#e5e5e5' : '#7f7f7f' }}
        >
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false" aria-hidden="true"><path d="M88 45.5v5H8v-5z"></path></svg>
        </button>
        <input type="number" value={value} disabled={isDisabled} readOnly  style={{color: isDisabled ? '#e5e5e5' : '#7f7f7f' }}/>
        <button
          onClick={handleIncrement}
          disabled={isDisabled}
          className="plus"
          style={{fill: isDisabled ? '#e5e5e5' : '#7f7f7f' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false" aria-hidden="true"><path d="M50.5 8v37.5H88v5H50.5V88h-5V50.5H8v-5h37.5V8z"></path></svg>
        </button>
      </div>{" "}
      {/* <p>{value}</p> */}
      <div></div>
    </>
  );
});

export default NumberInputTime;
