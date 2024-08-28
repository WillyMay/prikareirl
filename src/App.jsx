import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nosotros from "./components/Nosotros";
import Navbar from "./components/Navbar";
import LogoImg from './assets/Logo.webp';
function App() {
  return (
    <>
      <nav>
        <Navbar logo={LogoImg}/>
      </nav>
      <h1 className="text-3xl font-bold underline">Hola! </h1>
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
