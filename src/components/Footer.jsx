import React from 'react'

function Footer(props) {
  return (
    

<footer className="bg-white rounded-lg">
    <div className="w-full max-w-screen-xl mx-auto p-4">
    <a href="/" className="flex justify-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse mx-auto">
                <img src={props.logo} className="h-40" alt="Prikar Eirl" />
            </a>
        <div className="sm:flex sm:items-start sm:justify-between">
            <div>
            <a href={props.telefono} className='underline'><p className='font-medium text-gray-500'>Fono: +56 9 5839 1985</p></a>
            <p className='font-medium text-gray-500'>Email: </p>
            <br /><br />
            </div>
            <div>
                <h1 className='font-medium text-gray-500'>Horarios:</h1>
                <p className='font-medium text-gray-500'>Lunes a Domingo</p>
                <p className='font-medium text-gray-500'>7:00am - 8:00pm</p>
            </div>
            <br />
            <br />
            <ul className="flex flex-wrap items-center mb-6 text-md font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#servicios" className="hover:underline me-4 md:me-6">Servicios</a>
                </li>
                <li>
                    <a href="#nosotros" className="hover:underline me-4 md:me-6">Quienes somos</a>
                </li>
                <li>
                    <a href="#contacto" className="hover:underline me-4 md:me-6">Contacto</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} Todos los derechos reservados.</span>
    </div>
</footer>


  )
}

export default Footer