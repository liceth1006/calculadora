import React, { useState } from "react";
import "../../stylesheets/CalculatorBasicButtons.css";

function CalculatorButtons() {
  const miArray = ["AC", "X", "%", "/", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", "", 0, ",", "="];
  const segmentos = [];

  for (let i = 0; i < miArray.length; i += 4) {
    segmentos.push(miArray.slice(i, i + 4));
  }
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = (value) => {
    if (value === "=") {
      realizarOperacion();
    } else if (value === "AC") {
      setInputValue("");
    }  else if (value === "%") {
      setInputValue((parseFloat(inputValue) / 100).toString());
    }else {
      setInputValue(prevValue => prevValue + value);
    }
  };

  const realizarOperacion = () => {
    try {
      setInputValue(calcularResultado(inputValue).toString());
    } catch (error) {
      setInputValue("Error");
    }
  };

  const calcularResultado = (expresion) => {
    let numeros = expresion.split(/[-+*/]/).map(num => parseFloat(num));
    let operadores = expresion.split(/[0-9.]+/).filter(op => op);
    
    let resultado = numeros[0];

    for (let i = 0; i < operadores.length; i++) {
      if (operadores[i] === "+") {
        resultado += numeros[i + 1];
      } else if (operadores[i] === "-") {
        resultado -= numeros[i + 1];
      } else if (operadores[i] === "*") {
        resultado *= numeros[i + 1];
      } else if (operadores[i] === "/") {
        if(numeros[i]>0){
        if(resultado!==isFinite){
          setInputValue("No se permite dividir entre 0");
        }
        else{  
        resultado /= numeros[i + 1];}}
      }else if(operadores[i]==="%"){
        resultado %=numeros[i+1]
      }
    }

    return resultado;
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
