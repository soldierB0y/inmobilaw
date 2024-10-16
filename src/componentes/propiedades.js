import '../App.css';
import propiedadDefault from '../imagenes/generales/propiedadDefault'
import { useEffect, useState } from 'react'
import inicial from '../imagenes/iconos/cohete.png'
import costo from '../imagenes/iconos/ahorrar-dinero.png'
import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import diamond from '../imagenes/iconos/diamond.png';
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




export const Propiedades= ()=>
{
   //necesitamos acceder a los valores del parametro para poder
    //capturar los filtros de busqueda
    //para ello creamos nuestro Hook
    const [parametrosPropiedad]=useSearchParams();
    const filter= parametrosPropiedad.get('filter');
    const value=  parametrosPropiedad.get('value');
    //Hook para navegar
    let navegador=useNavigate();
    //Funcion para enviar informacion iniciar Busqueda 
    function iniciarBusqueda(filtro,valor)
    {
        
        navegador('/search?filter=tipo'+filtro+'&value='+valor);
    }


    // Estado de propiedades y qué propiedad está expandida
    const [propiedades, setPropiedades] = useState([]);


    //el siguiente useState es para hacer que le boton no se muestre
    const [botonVerMasVisible,setBotonVerMasVisible] = useState(false);

    function verificarNotFound()
    {

        setTimeout(() => {
            let varNotFound=document.querySelectorAll('.notFound');
            if(varNotFound.length>0)
            {
                setBotonVerMasVisible(false)
            }
            else
            {
                setBotonVerMasVisible(true)
            }
        }, 3000);
    }



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
            
            <div className='listaPropiedades animationUp center' id='propiedades'>
                {(propiedades.length > 0)? (

                    propiedades.map((propiedad, index) => (
                        
                        <div key={index} className='propiedadParent'>
                            <div className='propiedad' id='propiedad'
                                onClick={
                                    ()=>{
                                        navegador('/property?filter=nombre&&value='+propiedad.nombre);                                    }
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
                        </div>
                    ))
                ) : (
                    <div className='moverRight'>
                        <NoEncontrado></NoEncontrado>
                    </div>
                    
                )}
            </div>
            {
                botonVerMasVisible==true?
                (
                <input
                    onLoad={
                        verificarNotFound()
                    }
                type='button' className='botonVerMas' value='Ver Mas'/>
                )
                :
                <span style={{display:'none'}}></span>
            }
        </div>

        
    );

}



export default Propiedades;