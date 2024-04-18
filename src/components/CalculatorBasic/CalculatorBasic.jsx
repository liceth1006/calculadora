import React from 'react'
import CalculatorDisplay from './CalculatorBasicDisplay'
import CalculatorButtons from './CalculatorBasicButtons'

function CalculatorBasic() {
  return (
    <div className="card m-5">
    <div className="card-header">
      <CalculatorDisplay></CalculatorDisplay>
    </div>
    <div className="card-body">
      <CalculatorButtons></CalculatorButtons>
    </div>
  </div>
  )
}

export default CalculatorBasic