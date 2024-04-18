import React from 'react'
import CalculatorAdvancedDisplay from './CalculatorAdvancedDisplay'
import CalculatorAdvancedButtons from './CalculatorAdvancedButtons'

function CalculatorAdvanced() {
  return (
    <div className="card m-5">
    <div className="card-header">
      <CalculatorAdvancedDisplay></CalculatorAdvancedDisplay>
    </div>
    <div className="card-body">
      <CalculatorAdvancedButtons></CalculatorAdvancedButtons>
    </div>
  </div>
  )
}

export default CalculatorAdvanced