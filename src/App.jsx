import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import CalculatorButtons from "./components/CalculatorButtons";
import Header from "./components/Header";

function App() {
  return (
    <div className="App pb-5">
      <Header></Header>
      <div className="container">
        <div className="row justify-content-center mt-5 ">
          <div className="col-md-6  ">
                <CalculatorButtons></CalculatorButtons>
              </div>
            </div>
          </div>
        </div>
  );
}

export default App;
