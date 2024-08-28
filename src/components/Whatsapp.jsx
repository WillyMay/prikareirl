import React from 'react'

function Whatsapp() {
  return (
    <div id="contacto" className="">
    <div className="z-20 w-full px-4 py-12 mx-auto text-center sm:px-6 lg:py-16 lg:px-8">
      <h2 className="text-black dark:text-white sm:text-2xl">
        <span className="text-base font-semibold leading-6 text-gray-900 uppercase">
          ¿Algunas preguntas?
        </span>
        <span className="block mt-2 text-xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-2xl sm:leading-9">
          Contáctanos a través de nuestro WhatsApp personal{" "}
        </span>
      </h2>

      <div className="lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex mt-12 rounded-md shadow">
          <a
            href=""
            className="w-full px-6 py-4 text-base font-semibold text-center text-white transition duration-200 ease-in bg-green-600 rounded-lg shadow-md hover:bg-green-900 focus:ring-lime-900 focus:ring-offset-lime-900 focus:outline-none focus:ring-2 focus:ring-offset-2 "
          >
            Presiona aquí
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Whatsapp