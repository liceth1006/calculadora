import React from "react";
import "../../stylesheets/CalculatorBasicButtons.css"
function CalculatorButtons() {

  const miArray = ["AC","X","%","/",7, 8, 9,"*",4,5,6,"-",1,2,3,"+","",0,",","="];
  const segmentos = [];

  for (let i = 0; i < miArray.length; i += 4) {
    segmentos.push(miArray.slice(i, i + 4));
  }

  return (
    <div className="container-fluid text-center bg-danger ">
      <div className="row">
        {segmentos.map((segmento, index) => (
          <div key={index} className="col-12 m-2">
            {segmento.map((item, itemIndex) => (
              <span key={itemIndex} className="btn btn-warning btn-size rounded-4 fs-3 fw-bold me-2 mb-2 ">
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>

  );
}

export default CalculatorButtons;
