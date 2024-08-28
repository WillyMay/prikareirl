import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nosotros from "./components/Nosotros";
import Navbar from "./components/Navbar";
import LogoImg from './assets/Logo.webp';
import Hero from "./components/Hero";
import HeroImg from "./assets/Heroe.webp";
import Servicios from "./components/Servicios";
import Contacto from "./components/Contacto";

//HashRouter
import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
  {
    path:"/",
    element:<Home />
  },
  {
    path:"/nosotros",
    element:<Nosotros />
  },
  {
    path:"/servicios",
    element:<Servicios />
  },
  {
    path:"/contacto",
    element:<Contacto />
  }
])
function App() {
  return (
    <>
      <nav>
        <Navbar logo={LogoImg}/>
      </nav>
      <Hero background={HeroImg} telefono="/"/>
      <RouterProvider router={router}/>
      <Footer />
    </>
  );
}

export default App;
