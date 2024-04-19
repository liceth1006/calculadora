import React from "react";
import { useState } from "react";
import "../../stylesheets/CalculatorBasicButtons.css"
function CalculatorButtons() {

  const miArray = ["AC","X","%","/",7, 8, 9,"*",4,5,6,"-",1,2,3,"+","",0,",","="];
  const segmentos = [];

  for (let i = 0; i < miArray.length; i += 4) {
    segmentos.push(miArray.slice(i, i + 4));
  }
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(e);
  };

  const handleButtonClick = (value) => {
    setInputValue(prevValue => prevValue + value);
    console.log(value);
  };


  return (
    
    <div className="container-fluid text-center  ">
     <input type="text" className="form-control border-2 border-primary p-5 fs-3 " value={inputValue} onChange={handleInputChange} />
      <div className="row mt-5">
        {segmentos.map((segmento, index) => (
          <div key={index} className="col-12 m-2">
            {segmento.map((item, itemIndex) => (
              <button key={itemIndex} onClick={()=> handleButtonClick(item)} className="btn  btn-info shadow  btn-size rounded-4 fs-3 fw-bold me-2 mb-2 ">
                {item}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>

  );
}

export default CalculatorButtons;
