import React from "react";

function Hero(props) {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={props.background}
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center animate-fade-up p-4">
        <h1 className="text-3xl font-bold leading-tight mb-4 px-10 lg:text-4xl drop-shadow-sm	text-white oswald-font uppercase">
          Expertos en el rubro de la construcción e instalaciones sanitarias
        </h1>
        <h3 className="text-xl font-semibold px-10 oswald-font">
          ¡Consigue el mejor sitio web para tu emprendimiento en el menor precio
          y tiempo posible!
        </h3>
        <a
          href={props.telefono}
          className="bg-blue-400 text-gray-900 hover:bg-blue-500 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mt-10 hover:cursor-pointer"
        >
          Contáctanos
        </a>
      </div>
    </div>
  );
}

export default Hero;
