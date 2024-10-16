import React from "react";
import { Buscador } from "./buscador";

import FooterLayout from "./Footer";
import Propiedades from "./propiedades";
import CarruselPropiedadesDestacadas from "./carruselPropiedadesDestacadas";
import BackBar from "./barraParaIrAtras";




const  PaginaDeBusqueda=()=>
{
    return(
        <div className="todo">
            <BackBar></BackBar>
            <Buscador></Buscador>
            <Propiedades/>
            <CarruselPropiedadesDestacadas></CarruselPropiedadesDestacadas>
            <FooterLayout></FooterLayout>
        </div>

    )

}

export default PaginaDeBusqueda;