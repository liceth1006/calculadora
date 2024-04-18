import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CalculatorBasic from "./components/CalculatorBasic/CalculatorBasic";
import CalculatorAdvanced from "./components/CalculatorAdvanced/CalculatorAdvanced";
import History from "./components/History/Histories";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="card text-center m-5">
          <div className="card-header pb-0">
            <Navbar />
          </div>
          <div className="card-body">
            <Routes>
              <Route path="/" element={<CalculatorBasic />} />
              <Route path="/Avanzado" element={<CalculatorAdvanced />} />
              <Route path="/Historial" element={<History />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;