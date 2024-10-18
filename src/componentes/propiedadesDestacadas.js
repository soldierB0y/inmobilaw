import '../App.css'
import diamond from '../imagenes/iconos/diamond.png';
import propiedadDefault from '../imagenes/generales/propiedadDefault.webp'
import { useEffect, useState } from 'react'
import inicial from '../imagenes/iconos/cohete.png'
import costo from '../imagenes/iconos/ahorrar-dinero.png'
import { useNavigate } from 'react-router-dom';
import NoEncontrado from './noEncontrado';




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















export const PropiedadesDestacadas = () => {


    //necesitamos acceder a los valores del parametro para poder
    //capturar los filtros de busqueda
    //para ello creamos nuestro Hook

    const filter= 'esDestacada';
    const value=  '1';
    //Hook para navegar
    let navegador=useNavigate();
    //Funcion para enviar informacion iniciar Busqueda 
    function iniciarBusqueda(filtro,valor)
    {
        console.log(window.scrollTo());
        window.scrollTo(0,0)
        navegador('/search?filter=tipo'+filtro+'&value='+valor);
    }


    // Estado de propiedades y qué propiedad está expandida
    const [propiedades, setPropiedades] = useState([]);

    // Cargar las propiedades desde la API
    useEffect(() => {

            //condicionamos para que verifique si hay parametros o no
            if(filter==null && value==null)
            {
            fetch("https://asesoresguzman.com/api/load")
                .then(response => response.json())
                .then(data => setPropiedades(data))
                .catch((error)=>{console.log(error)});
            }
            else
            {
                fetch("https://asesoresguzman.com/api/search?filter="+filter+'&value='+value)
                .then(response => response.json())
                .then(data => setPropiedades(data))
                .catch((error)=>{console.log(error)});
            }

    }, [filter,value]);



    return (
        <div className='contenedorPropiedades parentAnimationUp' id='contenedorPropiedades'>
            <div className='propiedades animationUp propiedadesCarrusel' id='propiedades'>
                {(propiedades.length > 0)? (

                    propiedades.map((propiedad, index) => (
                        propiedad.esDestacada==true?
                        <div key={index} style={{width:'fit-content',height:'fit-content'}}>
                            <div className='propiedad' id='propiedad'
                                onClick={
                                    ()=>{
                    /*esta funcion es para cuando hagamos click en un link vuelva la vista del usuario a la parte superior
                    de la pagina esto es indispensable ya que si no no se puede visualizar donde nos encontramos*/
                    console.log(window.scrollTo());//este console log de alguna forma activa el windows porque si no lo pongo
                    // por alguna razon aparece vacio
                                        window.scrollTo(0,0)
                                        navegador('/property?filter=nombre&&value='+propiedad.nombre);
                                    }
                                }
                            >
                                {propiedad.esDestacada==true?
                                    
                                <div className='contenedorIconoPropiedadDestacada'>

                                    <span><b>destacada</b><img className='iconoImagenDestacada' src={diamond}/></span>
                                </div>
                                                             
                                    
                                :<span style={{display:'none'}}></span>}

                                
                                <div className='contenedorPropiedadImagen'>
                                    <img className='propiedadImagen' src={convertirBufferaImagen(propiedad.imagen.data)} alt="Propiedad" />
                                </div>
                                <div className='contenedorInfo'>
                                    <div className='contenedorEtiquetas'>
                                        <span className='contenedorTipoVentaRenta' onClick={
                                            (e)=>{
                                                iniciarBusqueda('ventaRenta',propiedad.tipoVentaRenta);
                                                //
                                                e.stopPropagation();
                                            }
                                        }>{propiedad.tipoVentaRenta}</span>
                                        <span className='contenedorTerrenoVivienda' onClick={
                                            (e)=>
                                            {
                                                iniciarBusqueda('TerrenoVivienda',propiedad.tipoTerrenoVivienda)
                                                e.stopPropagation();
                                            }
                                        }>{propiedad.tipoTerrenoVivienda}</span>
                                    </div>
                                    <div className='contenedorDetalles'>
                                        <div className='contenedorDetallesPrincipal'>
                                            <span className='contenedorDetallesPrincipalNombreYCostos'>
                                                <h2>{propiedad.nombre}</h2>
                                                <span>
                                                    <img className='iconoPropiedad' title='inicial' src={inicial}/>
                                                    <p title='inicial'>inicial: {propiedad.inicial}</p>
                                                    <img className='iconoPropiedad' tittle='Costo' src={costo}/>
                                                    <p title='costo'> costo: {propiedad.precio}</p>
                                                </span>

                                            </span>

                                            <span className='contenedorDetallesPrincipalMetrajes'>
                                                <p>terreno: {propiedad.terrenoMT} mt</p>
                                                {
                                                    propiedad.construccion !=0?
                                                    <p>construccion: {propiedad.construccionMT}mt</p>
                                                    :<span/>
                                                }
                                            </span>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>:<span style={{display:'none'}}></span>
                    ))
                ) : (
                    <div className='moverRight'>
                        {
                            
                            <NoEncontrado></NoEncontrado>
                        }
                    </div>
                    
                )}
            </div>
        </div>
    );
}
