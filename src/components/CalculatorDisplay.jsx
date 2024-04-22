import React from 'react'
import "../stylesheets/CalculatorDisplay.css"

function CalculatorDisplay({ value }) {
  return (
    <input
      type="text"
      className="form-control border-2 border-dark bg-display-color p-5 fs-3  "
      value={value}
      readOnly
    />
  );
}

export default CalculatorDisplay;