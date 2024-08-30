import React from 'react'
import GaleriaServicios from './Servicios/GaleriaServicios'
import Hero from './Hero'
import HeroImg from '../assets/5.webp'
import Whatsapp from './Whatsapp'
import Principalesservicios from './Principalesservicios'

const llamada = "tel:+56958391985";
const whatsapp = "https://wa.link/6r4r5d";

function Home() {
  return (
    <>
        <Hero background={HeroImg} telefono={llamada} whatsapp={whatsapp}/>

        <Principalesservicios />
        <Whatsapp />
    </>
  )
}

export default Home