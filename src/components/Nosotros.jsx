import React from "react";
import Reparando from "../assets/Reparando.webp";

function Nosotros() {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-5xl font-extrabold text-red-600 sm:text-4xl text-center">
              20 años
            </h2>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl text-center">
              de experiencia en gasfitería
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Somos una empresa seria y responsable dedicada a la atención integral de los
              problemas de viviendas y empresas, en comunas como Las Condes, Lo
              Barnechea, Providencia, Vitacura, Ñuñoa, La Reina, Chicureo y todo
              Santiago. Otorgamos un servicio confiable con personal técnico
              calificado, quienes ofrecen diagnósticos certeros y trabajos
              garantizados. Nuestra misión es entregar servicios integrales de
              manera rápida, segura y responsable en cada una de nuestras áreas.
            </p>
            <div className="mt-8">
              <a href="#/servicios" className="text-blue-500 hover:text-blue-600 font-medium">
                Conoce nuestros servicios
                <span className="ml-2">&#8594;</span>
              </a>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <img
              src={Reparando}
              alt="sobre nosotros"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;
