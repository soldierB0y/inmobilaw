
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
                    navigate('/');
                }
            } src={logoInmobilaw}/></span>

            <span className='navegadorBotones'>
                    <span className='navegadorBotonesTexto'>
                                
                                <Link to={'/'}>
                                <li className='botonNavegador identificadorBotonNavegador'>
                                    Home
                                </li>
                                </Link>
                               
                        
                        
                        
                        <li className='botonNavegador identificadorBotonNavegador'>
                        Newsletter
                        </li>

                        <li className='botonNavegador identificadorBotonNavegador'>Nosotros</li>

                        <li className='botonNavegador identificadorBotonNavegador'>
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





/*botonNavegador*/ 
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