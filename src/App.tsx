import gsapIcon from "/gsap-hero-icon.svg";
import "./App.css";
import DemoSlider from "./components/DemoSlider/DemoSlider";

function App() {
  return (
    <>
      <div>
        <h1>Carousel Challenge</h1>
        <img src={gsapIcon} width="20%" className="logo" alt="GSAP logo" />
      </div>
      <DemoSlider />
    </>
  );
}

export default App;
