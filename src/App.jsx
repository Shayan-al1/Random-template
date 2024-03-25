import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Ss from "./components/Ss";
import ImageSlider from "./components/ImageSlider";
import ScrollText from "./components/ScrollText";
import Section from "./components/Section";
import BigImage from "./components/BigImage";
import Technology from "./components/Technology";
import VideoText from "./components/VideoText";
import Footer from "./components/Footer";
import Categories from "./components/Categories";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Ss />
        <ImageSlider />
        <ScrollText />
        <Section />
        <BigImage />
        <Technology />
        <VideoText />
        <Categories />
        <Footer />
        <Routes>
          <Route path="/" element />
        </Routes>
      </Router>
    </>
  );
}

export default App;
