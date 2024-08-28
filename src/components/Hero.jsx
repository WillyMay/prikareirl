import React from "react";
import LogoImg from "../assets/Logo.webp"
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
        <div>
          <img src={LogoImg} alt="logo" className="h-52"/>
        </div>
        <h1 className="text-3xl drop-shadow-sm leading-tight font-bold leading-tight mb-4 px-10 lg:text-4xl drop-shadow-sm	text-white oswald-font uppercase">
          Expertos en el rubro de la
        </h1>
        <h1 className="text-3xl font-bold leading-tight mb-4 px-10 lg:text-4xl drop-shadow-sm	text-white oswald-font uppercase">
          construcción e instalaciones sanitarias
        </h1>
        <h3 className="text-xl font-semibold px-10 oswald-font">
          A solo una llamada de distancia
        </h3>
        <div className="mt-10">
        <a
          href={props.llamada}
          className="bg-red-600 text-white hover:bg-red-700 border-4 border-red-700 hover:text-white py-2 px-10 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mt-10 hover:cursor-pointer"
        >
          LLamada directa
        </a>        <a
          href={props.whatsapp}
          className="bg-green-600 text-white hover:bg-green-700 border-4 border-green-700 hover:text-white py-2 px-10 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mt-10 hover:cursor-pointer"
        >
          Whatsapp
        </a>
        </div>

        
      </div>
    </div>
  );
}

export default Hero;
