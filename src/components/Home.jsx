import React from 'react'
import GaleriaServicios from './Servicios/GaleriaServicios'
import Hero from './Hero'
import HeroImg from '../assets/Heroe.webp'
import Whatsapp from './Whatsapp'
function Home() {
  return (
    <>
        <Hero background={HeroImg}/>
        <GaleriaServicios />
        <Whatsapp />
    </>
  )
}

export default Home