import React, { useState } from "react";
import "../stylesheets/CalculatorButton.css";
import CalculatorDisplay from "./CalculatorDisplay";
function CalculatorButtons() {
  const miArray = [
    "AC", "X", "%", "/",
    7, 8, 9, "*",
    4, 5, 6, "-",
    1, 2, 3, "+",
    "ANS", 0, ".", "=", 
    "^", "√", "10^", "ln"
  ];
 
  const [showExtraSegment, setShowExtraSegment] = useState(false);

  const handleClick = (item) => {
    if (item === "Toggle Segments") {
      setShowExtraSegment(!showExtraSegment);
  };
  }
  const segmentos = [];
  let endIndex = showExtraSegment ? miArray.length : 20;

  for (let i = 0; i < endIndex; i += 4) {
    segmentos.push(miArray.slice(i, i + 4));
  }

  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === "=") {
      realizarOperacion();
    } else if (value === "AC") {
      setInputValue("");
    } else if (value === "X") {
      setInputValue(prevValue => prevValue.slice(0, -1));
    } else if (value === "ANS") {
      setInputValue(prevValue => prevValue + result);
    } else if (value === "%") {
      setInputValue((parseFloat(inputValue) / 100).toString());
    } else if(value==="√")
    {setInputValue(2+"√("+inputValue+")")}
    else if(value==="ln"){
      setInputValue(0+"ln("+inputValue+")");
    }
    else {
      setInputValue(prevValue => prevValue + value);
    }
  };

  const realizarOperacion = () => {
    try {
      const result = calcularResultado(inputValue).toString();
      setResult(inputValue + '=' + result);
      setInputValue(result);
    } catch (error) {
      setInputValue("Error");
    }
  };

  const calcularResultado = (expresion) => {
    let numeros = expresion.match(/-?\d+(\.\d+)?/g).map(num => parseFloat(num));
    let operadores = expresion.match(/[-+*^√/]|ln/g);  
    let resultado = numeros[0];

    for (let i = 0; i < operadores.length; i++) {
      if (operadores[i] === "+") {
        resultado += numeros[i + 1];
      } else if (operadores[i] === "-") {
        resultado -= numeros[i + 1];
      } else if (operadores[i] === "*") {
        resultado *= numeros[i + 1];
      } else if (operadores[i] === "/") {
        if (numeros[i + 1] !== 0) {
          resultado /= numeros[i + 1];
        } else {
          throw new Error("División por cero");
        }
      } else if (operadores[i] === "^") {
        resultado **= numeros[i + 1];
      } else if (operadores[i] === "√") {
        resultado = Math.sqrt(numeros[i + 1]);
      } else if (operadores[i] === "ln") {
        if (numeros[i + 1] > 0) {
          resultado =Math.log(numeros[i + 1]);
        } else {
          throw new Error("El argumento del logaritmo debe ser un número positivo mayor que cero");
        }
      }
    }
  
    return resultado;
  };

  return (
    
    <div className="card-body shadow-lg bg-color  pt-5 pb-5">
      <div className="mb-3 me-5 mx-5">
        <CalculatorDisplay value={inputValue} />
      </div> 
    <div className="row mt-5">
      {segmentos.map((segmento, index) => (
        <div key={index} className="col-12 m-2 d-flex justify-content-center">
          {segmento.map((item, itemIndex) => (
            <button key={itemIndex} onClick={() => handleButtonClick(item)} className="btn bg-button-color border-dark shadow btn-size rounded-4 fs-3 fw-bold me-2 mb-2">
              {item}
            </button>
          ))}
        </div>
      ))}
    </div>
    <div className="text-center mt-3">
        <button onClick={() => handleClick("Toggle Segments")} className="btn btn-lg border-dark bg-button-color bg-color">
          {showExtraSegment ? "Basica" : "Avanzada"}
        </button>
      </div>
    </div>
  
  );
}

export default CalculatorButtons;
