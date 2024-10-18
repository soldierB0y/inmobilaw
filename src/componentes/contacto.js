import FooterLayout from "./Footer";
import contacto from '../imagenes/generales/contacto.png';
import BackBar from "./barraParaIrAtras";
const Contactos= ()=>
{
    return(
        <div className="todo">
            <BackBar></BackBar>
            <div className="contacto">
                <h2>Contacto</h2>
                <img className="imagenContacto" src={contacto}/>
                <h4>correo</h4>
                <p>ejemplo123@hotmail.com</p>
                <h4>telefono</h4>
                <p>8294506401</p>
                <h4>whatsapp</h4>
                <p>8294506401</p>
                <input type="submit" className="newsletterInputButton" value='contactar' onClick={
                    (e)=>{
                        e.preventDefault();
                    }
                }/>
            </div>
            <FooterLayout></FooterLayout>
        </div>
    )
}
export default Contactos;