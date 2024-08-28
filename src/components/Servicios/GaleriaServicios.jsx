import React from 'react'

const defaultImage = "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080";
const servicios = [
    { id: 1, name: "Gasfiter gasfiteria", image: defaultImage},
    { id: 2, name: "Destape de alcantarillado", image: defaultImage},
    { id: 3, name: "Reparación de Calefont", image: defaultImage},
    { id: 4, name: "Reparación de Techos", image: defaultImage},
    { id: 5, name: "Ductoscopia, Video Inspección", image: defaultImage},
    { id: 6, name: "Detección de Fugas de Agua y Gas", image: defaultImage},
    { id: 7, name: "Construcción y Reparaciones", image: defaultImage},
    { id: 9, name: "Maestro Pintores", image: defaultImage},
    { id: 10, name: "Detección de Fugas de Piscinas", image: defaultImage},
    { id: 11, name: "Reparación de Cañerias de Riego", image: defaultImage},
    { id: 12, name: "Instalador sanitario autorizado", image: defaultImage},
    { id: 13, name: "Reparaciones HDP", image: defaultImage},
    { id: 14, name: "Proyectos sanitarios", image: defaultImage},
    { id: 15, name: "Estructuras metalicas", image: defaultImage}
]

function GaleriaServicios() {
  return (
    <>
      <div className="text-center text-3xl font-bold py-3">
        Nuestros servicios
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {servicios.map((servicio) => (
                    <div key={servicio.key} className="group cursor-pointer relative">
                    <div className="p-5 border-2 rounded-lg">
                    <img
                    src={servicio.image}
                    alt="Imagen servicio"
                    className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                      View
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