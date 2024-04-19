import React from "react";
import CalculatorDisplay from "./CalculatorBasicDisplay";
import CalculatorButtons from "./CalculatorBasicButtons";

function CalculatorBasic() {
  return (
    <div className="container-fluid">
      <CalculatorDisplay></CalculatorDisplay>

      <CalculatorButtons></CalculatorButtons>
    </div>
  );
}

export default CalculatorBasic;
