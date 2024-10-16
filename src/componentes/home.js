import '../App.css';
import principal from '../imagenes/generales/principal.jpg';
import { Buscador } from './buscador'
import FooterLayout from './Footer';
import flecha from  '../imagenes/iconos/arrow-right.png';
import { useEffect, useState } from 'react';
import { Propiedades, PropiedadesDestacadas } from './propiedadesDestacadas';
import CarruselPropiedadesDestacadas from './carruselPropiedadesDestacadas';
export const Home=()=>
{

    return(
        <div className='home'>
            <div className='principal'>
            <div className='PrincipalInfoIMG'><img className='imagenPrincipal' src={principal}></img></div>
                <div className='principalInfo'>
                    <h2 className='principalInfoTitulo'>¡Encuentra la casa de tus sueños!</h2>
                    <p className='principalInfoContenido'>¡Tu Propiedad, Nuestra Prioridad!</p>
                    <Buscador></Buscador>
                </div>
            </div>
            <CarruselPropiedadesDestacadas/>
            <section className='Footer'>
                <FooterLayout></FooterLayout>
            </section>
        </div>
    )
}