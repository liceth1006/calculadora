import React from "react";

import CalculatorButtons from "./CalculatorBasicButtons";

function CalculatorBasic() {
  return (
    <div className="container-fluid">
      <h2 className="text-danger">Calculadora Basica</h2>
      <CalculatorButtons></CalculatorButtons>
    </div>
  );
}

export default CalculatorBasic;
