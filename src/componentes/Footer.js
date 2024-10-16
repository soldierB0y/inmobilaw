import '../App.css'
import whatsapp from '../imagenes/iconos/whatsapp.png'
import facebook from '../imagenes/iconos/facebook.png'
import instagram from '../imagenes/iconos/instagram.png'

const FooterLayout= ()=>
{
    return(
        <div>
            <div className='Footer'>
                <div className='FooterContenedorLogo'>
                    <h1>Inmobilaw</h1>
                </div>
                <div className='contenedorLinksRapidos'>
                    <h1>Links Rapidos</h1>
                    <span className='botonesContenedorLinksRapidos'>
                        <ul>
                            <li>Home</li>
                            <li>Sobre Nosotros</li>
                            <li>Informacion de Contacto</li>
                        </ul>
                    </span>
                    <span className='contenedorRedes'>
                        <i><img className='iconoRedSocial' src={whatsapp}></img></i>
                        <i><img className='iconoRedSocial' src={facebook}></img></i>
                        <i><img className='iconoRedSocial' src={instagram}></img></i>
                    </span>

                </div>
                <div className='contenedorNewsLetter'>
                    <h1>NewsLetter</h1>
                    <form>
                        <span className='newsLetterInput'><input placeholder='correo eletronico'/></span>
                        <span className='newsLetterInput'><input placeholder='nombre completo'/></span>
                        <span className='newsLetterInput'><input placeholder='numero telefonico'/></span>
                        <input className='newsletterInputEnviar' type='submit' value='enviar'
                        onClick={
                            (e)=>{
                                e.preventDefault();
                                alert('submit');
                            }
                        }/>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default FooterLayout;