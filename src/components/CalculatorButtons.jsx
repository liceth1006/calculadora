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
    } 
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
   

    const precedence = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
      '%': 2,
      '^': 3,
      '√': 4
      };
      function shuntingYard(tokens) {
        const outputQueue = [];
        const operatorStack = [];
        tokens.forEach(token => {
            if (/\d/.test(token)) {
            outputQueue.push(parseFloat(token));
            } else if (token in precedence) {
            while (
                operatorStack.length > 0 &&
                precedence[token] <= precedence[operatorStack[operatorStack.length - 1]]
            ) {
                outputQueue.push(operatorStack.pop());
            }
            operatorStack.push(token);
            }
        });
        while (operatorStack.length > 0) {
            outputQueue.push(operatorStack.pop());
        }
        return outputQueue;
    }

    function evaluatePostfix(tokens) {
    const stack = [];

    tokens.forEach(token => {
        if (typeof token === 'number') {
            stack.push(token);
            } else {
            const b = stack.pop();
            const a = stack.pop();
            switch (token) {
                case '+':
                stack.push(a + b);
                break;
                case '-':
                stack.push(a - b);
                break;
                case '*':
                stack.push(a * b);
                break;
                case '/':
                stack.push(a / b);
                break;
                case '%':
                stack.push(a % b);
                break;
                case '^':
                stack.push(a ** b);
                break
                case '√': 
                stack.push(Math.sqrt(b))
                break  
                default:
                throw new Error('Operador desconocido: ' + token);
            }
        }
    });

    return stack[0]; // resultado
    }
    const tokens = expresion.match(/[+\-*√/^%]|\d+/g);
    console.log(tokens);
    const postfix = shuntingYard(tokens);
    console.log(postfix);
    return evaluatePostfix(postfix);
} 


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
