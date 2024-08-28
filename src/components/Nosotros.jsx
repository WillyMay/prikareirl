import React from "react";
import Reparando from "../assets/Reparando.webp";

function Nosotros() {
  return (
    <section class="bg-gray-100">
      <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div class="max-w-lg">
            <h2 class="text-5xl font-extrabold text-red-600 sm:text-4xl text-center">
              20 años
            </h2>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl text-center">
              de experiencia en gasfitería
            </h2>
            <p class="mt-4 text-gray-600 text-lg">
              Somos una empresa seria y responsable dedicada a la atención integral de los
              problemas de viviendas y empresas, en comunas como Las Condes, Lo
              Barnechea, Providencia, Vitacura, Ñuñoa, La Reina, Chicureo y todo
              Santiago. Otorgamos un servicio confiable con personal técnico
              calificado, quienes ofrecen diagnósticos certeros y trabajos
              garantizados. Nuestra misión es entregar servicios integrales de
              manera rápida, segura y responsable en cada una de nuestras áreas.
            </p>
            <div class="mt-8">
              <a href="#/servicios" class="text-blue-500 hover:text-blue-600 font-medium">
                Conoce nuestros servicios
                <span class="ml-2">&#8594;</span>
              </a>
            </div>
          </div>
          <div class="mt-12 md:mt-0">
            <img
              src={Reparando}
              alt="sobre nosotros"
              class="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;
