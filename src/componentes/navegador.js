
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import App from '../App';
import menuNavegador from '../imagenes/iconos/menuNavegador.png';
import { useNavigate } from 'react-router-dom';
import logoInmobilaw from '../imagenes/generales/logoInmobilaw.jpg'






/*navegador*/
export const Navegador=()=>
{
    let navigate= useNavigate();
    

    return(
         

        <nav className='navegador'>
        <ul className='navegadorContenedorBotones'>

            <span className='navegadorIMG'><img onClick={
                ()=>{
                    /*esta funcion es para cuando hagamos click en un link vuelva la vista del usuario a la parte superior
                    de la pagina esto es indispensable ya que si no no se puede visualizar donde nos encontramos*/
                    console.log(window.scrollTo());//este console log de alguna forma activa el windows porque si no lo pongo
                    // por alguna razon aparece vacio
                    window.scrollTo(0,0)

                    navigate('/');
                }
            } src={logoInmobilaw}/></span>

            <span className='navegadorBotones'>
                    <span className='navegadorBotonesTexto'>
                                
                                <Link to={'/'}>
                                <li onClick={
                                    ()=>{
                    /*esta funcion es para cuando hagamos click en un link vuelva la vista del usuario a la parte superior
                    de la pagina esto es indispensable ya que si no no se puede visualizar donde nos encontramos*/
                    console.log(window.scrollTo());//este console log de alguna forma activa el windows porque si no lo pongo
                    // por alguna razon aparece vacio
                                        window.scrollTo(0,0)
                                        navigate('/');
                                    }
                                } className='botonNavegador identificadorBotonNavegador'>
                                    Home
                                </li>
                                </Link>
                               
                        
                        

                            <li className='botonNavegador identificadorBotonNavegador'>
                                <Link onClick={
                                    ()=>{
                    /*esta funcion es para cuando hagamos click en un link vuelva la vista del usuario a la parte superior
                    de la pagina esto es indispensable ya que si no no se puede visualizar donde nos encontramos*/
                    console.log(window.scrollTo());//este console log de alguna forma activa el windows porque si no lo pongo
                    // por alguna razon aparece vacio
                                        window.scrollTo(0,0)
                                        navigate('/');
                                    }
                                } to={'/newsletter'}>
                                    Newsletter
                                </Link>
                            </li>


                        <li className='botonNavegador identificadorBotonNavegador'>Nosotros</li>

                        <li 
                            onClick={
                                ()=>{
                                    console.log(window.scrollTo());
                                    window.scrollTo(0,0)
                                    navigate('/contacto');
                                }
                            }
                        
                        
                        className='botonNavegador identificadorBotonNavegador'>
                            Contacto
                        </li>
                    </span>
                <span>
                    <li className='botonNavegador '>
                        <img id='botonNavegador' onClick={navegadorClick} className='imagenNavegador' src={menuNavegador}/>
                    </li>
                </span>
                
            </span>
        </ul>
    </nav>
                    

    )
}





/*esto es un handle para que se extienda verticalmente el navegador y muestre los botones*/ 
function navegadorClick()
{
    let identificadorBotonNavegador= document.querySelectorAll('.identificadorBotonNavegador')
    let navegadorBotonesTexto= document.querySelector('.navegadorBotonesTexto');

    

    navegadorBotonesTexto.classList.toggle('visible1');
    identificadorBotonNavegador.forEach(
        boton=>{
            boton.classList.toggle('visible2');
        }
    )
}