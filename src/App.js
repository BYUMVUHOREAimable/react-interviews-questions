import './App.css';
import Accordion from "./components/accordian";
import RandomColor from "./components/random-color";
function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      <Accordion />
      {/* Random color component */}
      <RandomColor/> 
      
    </div>
  );
}

export default App;
