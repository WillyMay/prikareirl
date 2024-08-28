import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nosotros from "./components/Nosotros";
import Navbar from "./components/Navbar";
import LogoImg from './assets/Logo.webp';
import Hero from "./components/Hero";
import HeroImg from "./assets/Heroe.webp";

function App() {
  return (
    <>
      <nav>
        <Navbar logo={LogoImg}/>
      </nav>
      <Hero background={HeroImg} telefono="/"/>
      <Router basename="/prikareirl">
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/nosotros" element={<Nosotros />}>
          </Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
