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


const llamada = "tel:+56958391985";
const whatsapp = "https://wa.link/6r4r5d";

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
        <Navbar logo={LogoImg} telefono={llamada}/>
      </nav>
      <RouterProvider router={router}/>
      <Footer logo={LogoImg} telefono={llamada}/>
    </>
  );
}

export default App;
