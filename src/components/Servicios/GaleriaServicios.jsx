import React from 'react'
import image1 from "../../assets/1.webp";
import image2 from "../../assets/2.webp";
import image3 from "../../assets/3.webp";
import image4 from "../../assets/4.webp";
import image5 from "../../assets/5.webp";
import image6 from "../../assets/6.webp";
import image7 from "../../assets/7.webp";
import image8 from "../../assets/13.webp";
import image9 from "../../assets/12.webp";
import image10 from "../../assets/10.webp";
import image11 from "../../assets/11.webp";
import image12 from "../../assets/8.webp";
import image13 from "../../assets/9.webp";
import image14 from "../../assets/14.webp";

const defaultImage = "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080";
const servicios = [
    { id: 1, name: "Gasfiter gasfiteria", image: image1},
    { id: 2, name: "Destape de alcantarillado", image: image2},
    { id: 3, name: "Reparación de Calefont", image: image3},
    { id: 4, name: "Reparación de Techos", image: image4},
    { id: 5, name: "Ductoscopia, Video Inspección", image: image5},
    { id: 6, name: "Detección de Fugas de Agua y Gas", image: image6},
    { id: 7, name: "Construcción y Reparaciones", image: image7},
    { id: 9, name: "Maestro Pintores", image: image8},
    { id: 10, name: "Detección de Fugas de Piscinas", image: image9},
    { id: 11, name: "Reparación de Cañerias de Riego", image: image10},
    { id: 12, name: "Instalador sanitario autorizado", image: image11},
    { id: 13, name: "Reparaciones HDP", image: image12},
    { id: 14, name: "Proyectos sanitarios", image: image13},
    { id: 15, name: "Estructuras metalicas", image: image14}
]

function GaleriaServicios() {
  return (
    <>
      <div className="text-center text-3xl font-bold py-3">
        Nuestros servicios
      </div>
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
    </>
  )
}

export default GaleriaServicios