import React from 'react'
import GaleriaServicios from './Servicios/GaleriaServicios'
import Hero from './Hero'
import HeroImg from '../assets/Heroe.webp'
function Home() {
  return (
    <>
        <Hero background={HeroImg}/>
        <GaleriaServicios />
    </>
  )
}

export default Home