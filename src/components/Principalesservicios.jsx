import React from "react";
import image1 from "../assets/1.webp";
import image2 from "../assets/2.webp";
import image3 from "../assets/3.webp";
import image4 from "../assets/4.webp";

const defaultImage =
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080";
const servicios = [
  { id: 1, name: "Gastifer Gasfiteria", image: image1 },
  { id: 2, name: "Reparación de Calefont", image: image2 },
  { id: 3, name: "Construcción y reparaciones", image: image3 },
  { id: 4, name: "Detección de fugas de agua y gas", image: image4 },
];
function Principalesservicios() {
  return (
    <>
      {" "}
      <div className="text-center text-3xl font-bold py-3">
        ¡Conoce nuestros principales servicios!
      </div>{" "}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {servicios.map((servicio) => (
          <div key={servicio.id} className="group cursor-pointer relative">
            <div className="p-5 border-2 rounded-lg">
              <img
                src={servicio.image}
                alt="Imagen servicio"
                className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                  Saber más
                </button>
              </div>
              <h3 className="text-center font-bold pt-3">{servicio.name}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a
          href="#/servicios"
          className="text-blue-500 hover:text-blue-600 font-medium items-center"
        >
          Conocer más
          <span className="ml-2">&#8594;</span>
        </a>
      </div>
    </>
  );
}

export default Principalesservicios;
