import React from 'react'
import GaleriaServicios from './Servicios/GaleriaServicios'
import Hero from './Hero'
import HeroImg from '../assets/Heroe.webp'
import Whatsapp from './Whatsapp'
import Principalesservicios from './Principalesservicios'
function Home() {
  return (
    <>
        <Hero background={HeroImg}/>

        <Principalesservicios />
        <Whatsapp />
    </>
  )
}

export default Home