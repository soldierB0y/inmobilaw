import { useEffect, useState } from 'react';
import '../App.css';
import BackBar from './barraParaIrAtras';
import FooterLayout from './Footer';
import propiedadDefault from '../imagenes/generales/propiedadDefault'
import { PropiedadesDestacadas } from './propiedadesDestacadas';
import { useSearchParams } from 'react-router-dom';
import NoEncontrado from './noEncontrado';
import CarruselPropiedadesDestacadas from './carruselPropiedadesDestacadas';

import flechaCarrusel from '../imagenes/iconos/next.png';


/* Función para convertir buffer a imagen */
function convertirBufferaImagen(buffer) {
    if (buffer.length > 0) {
        const arrayBuffer = new Uint8Array(buffer);
        const blob = new Blob([arrayBuffer], { type: 'image/jpeg' });
        const imagenUrl = URL.createObjectURL(blob);
        return imagenUrl;
    } else {
        return propiedadDefault;
    }
}






const  Propiedad=()=>{
    let contador=0;
    const [parametrosPropiedad]=useSearchParams();
    const filterPropiedad= parametrosPropiedad.get('filter');
    const valuePropiedad= parametrosPropiedad.get('value');
    const[infoPropiedad,setInfoPropiedad]= useState([]);
    const[mostrarFlechas,setMostrarFlechas]=useState(true);
    const url= 'https://asesoresguzman.com/api/';
    function verificarNumeroImages()
    {
        setTimeout(() => {
            let numeroPropiedades= document.querySelectorAll('.itemImagen').length;
            if (numeroPropiedades >1)
            {
                setMostrarFlechas(true)
            }
            else
            {
                setMostrarFlechas(false);
            }
        }, 3000);
    }


    useEffect(()=>{
        fetch(url+'search?filter='+filterPropiedad+'&&value='+valuePropiedad)
        .then(response=>response.json())
        .then(data=>{setInfoPropiedad(data)
            console.log(data);

        })
        .catch(error=>console.log(error))
    },[filterPropiedad,valuePropiedad]);

    return(
        <div className='todo itemLeft animationUp'>
            <BackBar></BackBar>
            <div style={{display:'flex',flexDirection:'column'}}>
                {
                    
                    infoPropiedad.length >0?
                    <div className='contenedorItemPropiedad'>
                        <div className='contenedorPropiedadyFlechas'>
                            {
                                mostrarFlechas==true?                                
                                <img className='flechaCarrusel flechaCarruselLeft flechaFloat'
                                onClick={
                                    ()=>{
                                            let sliderCarrusel= document.getElementById('contenedorItemImagenSlider');
                                            let imagenCarrusel= document.getElementById('itemImagen');
                                            if(contador > 0)
                                            {
                                                contador-=1;
                                                let valor= contador*imagenCarrusel.clientWidth;
                                                console.log(valor);
                                                sliderCarrusel.style.transform= 'translate(-'+valor+'px)';
                                            } 
                                                                    
                                    }
                                } src={flechaCarrusel}/>
                                :<span style={{display:'none'}}></span>
                            }
                                <div className='contenedorItemImagen'>

                                    <div className='contenedorItemImagenSlider' id='contenedorItemImagenSlider'>
                                        <img id='itemImagen' className='itemImagen' src={convertirBufferaImagen(infoPropiedad[0].imagen.data)}></img>

                                        {   
                                            infoPropiedad[0].imagen2 !=null?
                                            (<img id='itemImagen' className='itemImagen' src={convertirBufferaImagen(infoPropiedad[0].imagen2.data)}></img>)
                                            :<span style={{display:'none'}}></span>
                                        }
                                        {
                                            infoPropiedad[0].imagen3 !=null?
                                            (
                                            <img id='itemImagen' className='itemImagen' src={convertirBufferaImagen(infoPropiedad[0].imagen3.data)}></img>
                                            )
                                            :<span style={{display:'none'}}></span>
                                        }
                                    </div>
                                </div>
                                {
                                mostrarFlechas==true?
                                <img className='flechaCarrusel flechaFloat'
                                    onLoad={
                                        ()=>{
                                            verificarNumeroImages();
                                        }
                                    }
                                    onClick={
                                        ()=>{
                                            let sliderCarrusel= document.getElementById('contenedorItemImagenSlider');
                                            let imagenCarrusel= document.getElementById('itemImagen');
                                            let numeroPropiedades= document.querySelectorAll('.itemImagen').length; 
                                            if(contador < (numeroPropiedades - 1))
                                            {
                                                contador+=1;
                                                let valor= contador*imagenCarrusel.clientWidth;
                                                console.log(valor);
                                                sliderCarrusel.style.transform= 'translate(-'+valor+'px)';
                                            }
                                            
                                        }
                                    }
                                src={flechaCarrusel}/>
                                :<span style={{display:'none'}}></span>
                            }
                        </div>

                        <div className='contenedoItemPropiedadInfo'>
                            <span className='seccion1'>
                                <h1>{infoPropiedad[0].nombre}</h1>
                                <h2>{infoPropiedad[0].ubicacion}</h2>
                            </span>
                            <span className='seccion2'>
                                <h3 className='contenedorTerrenoVivienda'>{infoPropiedad[0].tipoTerrenoVivienda}</h3>
                                <h3 className='contenedorTipoVentaRenta'>{infoPropiedad[0].tipoVentaRenta}</h3>
                                
                            </span>
                            <span className='seccion3'>
                                <span>
                                    <h3>Descripcion</h3>
                                    <p>{infoPropiedad[0].descripcion}</p>
                                </span>
                                <span>
                                    
                                    <h3>costo inicial:{infoPropiedad[0].inicial}</h3>
                                    <h3>precio:{infoPropiedad[0].precio}</h3>
                                    <h3> terreno:{infoPropiedad[0].terrenoMT}mt</h3>
                                    <h3> construccion:{infoPropiedad[0].construccionMT}mt</h3>
                                    
                                </span>
                            </span>
                            <button className='seccion4-button'>
                                Contactar
                            </button>

                        </div>
                    </div>
                                  
                    :<NoEncontrado/>
                    
                }
            </div>
            <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                <h1>Destacadas</h1>
                <CarruselPropiedadesDestacadas></CarruselPropiedadesDestacadas>
            </div>
            <FooterLayout></FooterLayout>
        </div>
    );
}
export default Propiedad;