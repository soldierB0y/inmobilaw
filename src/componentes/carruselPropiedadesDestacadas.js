import '../App.css';
import principal from '../imagenes/generales/principal.jpg';
import flecha from  '../imagenes/iconos/arrow-right.png';
import { useEffect, useState } from 'react';
import { PropiedadesDestacadas } from './propiedadesDestacadas';



const CarruselPropiedadesDestacadas = ()=>{

    let contador= 0;
    let posicion= 0;

     const [flechaVisible,setFlechaVisible]=useState(true)
    //la siguiente funcion se encarga de eliminar las flechas en caso de que no existan propiedades
    function verificarNotFound()
    {
        setTimeout(()=>
        {
            try
            {
                if(document.querySelectorAll('.propiedad').length > 0)
                {
                    setFlechaVisible(true)
                    
                }
                else
                {
                    setFlechaVisible(false);
                }
                
            }
            catch(error)
            {
                setFlechaVisible(false);
                console.log(error);
            }
        },4500)
    }

    useEffect(()=>
    {
        
    },[flechaVisible])



    return(
        <section style={{textAlign:'center'}}>
                                  <h1 style={{paddingTop:'50px'}}>Destacadas</h1>
        <section className='contenedorPropiedadPrueba'>
  
        {flechaVisible==true?
            (                <img className='flechaCarrusel flechaCarruselLeft' 
            
                onClick={
                    ()=>{
                        try
                        {
                        let propiedades=  document.querySelector('.propiedadesCarrusel');
                        
                        let propiedadesVisiblesWidth= document.getElementById('contenedorPropiedades').clientWidth;
                        let propiedadWidth= document.getElementById('propiedad').clientWidth;
                        let numeroPropiedadesVisibles= Math.floor(propiedadesVisiblesWidth/propiedadWidth);
                        let numeroPropiedades= propiedades.querySelectorAll('.propiedad').length;
                        let relacionContador= numeroPropiedades - (numeroPropiedadesVisibles-1);
                        if (contador > 0)
                        {
                            if (window.innerWidth <= 600)
                            {
                                contador-=1;
                                propiedades.style.transform= 'translateX(-'+(65*contador)+'vw)';
                            }
                            else
                            {
                                contador-=1;
                                propiedades.style.transform= 'translateX(-'+(20*contador)+'vw)';
                            }
                            

                        }
                    }catch(error){console.log(error)}

                        
                    }
                }
            src={flecha}/>):<span style={{display:'none'}}></span>
    }



        <PropiedadesDestacadas></PropiedadesDestacadas>
        {
            flechaVisible==true?
            (<img  onLoad={()=>{
                verificarNotFound();
            }} className='flechaCarrusel' 
                onClick={
                    ()=>{
                        
                        try
                        {
                        let propiedades=  document.querySelector('.propiedadesCarrusel');

                        let propiedadesVisiblesWidth= document.getElementById('contenedorPropiedades').clientWidth;
                        let propiedadWidth= document.getElementById('propiedad').clientWidth;
                        let numeroPropiedadesVisibles= Math.floor(propiedadesVisiblesWidth/propiedadWidth);
                        let numeroPropiedades= propiedades.querySelectorAll('.propiedad').length;
                        let relacionContador= numeroPropiedades - (numeroPropiedadesVisibles-1);

                        if (contador < (relacionContador-1))
                        {



                            if (window.innerWidth <= 600)
                                {
                                    contador+=1;
                                    propiedades.style.transform= 'translateX(-'+(65*contador)+'vw)';                                        }
                                else
                                {
                                    contador+=1;
                                    propiedades.style.transform= 'translateX(-'+(20*contador)+'vw)';                                        }
                        }

                    }catch(error){console.log(error);}
                        
                    }
                }
            src={flecha}/>)
            :<span style={{display:'none'}}></span>
        }
    </section>
    </section>
    )
}

export default CarruselPropiedadesDestacadas;