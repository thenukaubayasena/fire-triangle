import { Form as RouterForm, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./routes/Services";
import AboutUs from "./routes/AboutUs";
import Products from "./routes/Products";
import Projects from "./routes/Projects";
import Training from "./routes/Training";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/training" element={<Training />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;