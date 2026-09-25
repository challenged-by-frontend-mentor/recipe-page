import "./App.css";
import Hero from "./components/Hero";
import PreparationTime from "./components/PreparationTime";
import Ingredients from "./components/Ingredients";
import Instructions from "./components/Instructions";
import Nutrition from "./components/Nutrition";
import Footer from "./components/Footer";
import CoverImage from "./assets/image-omelette.jpeg";

function App() {
  return (
    <>
      <div className="page-content">
        <img
          src={CoverImage}
          alt="A folded omelette stuffed with fired green vegetables and herbs on a white plate"
          className="page-content__cover-image"
        />
        <main className="main-content">
          <Hero />
          <PreparationTime />
          <Ingredients />
          <Instructions />
          <Nutrition />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
