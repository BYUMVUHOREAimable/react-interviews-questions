import "./App.css";
import Accordion from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      <Accordion />
      {/* Random color component */}
      <RandomColor />
      {/* Star rating component */}
      <StarRating />
      
      {/* Image slider component */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </div>
  );
}

export default App;
