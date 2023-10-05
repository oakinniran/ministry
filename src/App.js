import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BackData from "./components/Application/BackData";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Navbar from "./components/nav/Navbar";
import Gallery from "./components/gallery/Gallery";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<BackData />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
