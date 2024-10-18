import '../App.css'
import FooterLayout from './Footer';
import BackBar from '../componentes/barraParaIrAtras.js'

const Newsletter= ()=>
{
    return(
        <div className='todo'>
            <BackBar></BackBar>
            <div className='newsletter'>
                <span>
                    <h2>Descubre tu Próximo hogar con nuestro Newsletter exclusivo</h2>
                    <p>
                    Suscríbete a nuestro newsletter y recibe en tu bandeja de entrada las mejores ofertas de propiedades, consejos de expertos para compradores y vendedores, y las últimas tendencias del mercado inmobiliario. Mantente al día con nuevas oportunidades para encontrar la casa de tus sueños o hacer la inversión perfecta. ¡No te pierdas ninguna novedad!
                    </p>
                </span>
                <form>
                    <span className='newsletterContenedor'>

                            <input  className='newsletterInputPropiedad' placeholder='correo electronico' type='email'/>
                            <input className='newsletterInputPropiedad' placeholder='nombre completo' type='name'/>
                            <input className='newsletterInputPropiedad' placeholder='numero de telefono' type='tel'/>
                            <input type='submit' onClick={
                                (e)=>{
                                    e.preventDefault();
                                    
                                    
                                }
                            } className='newsletterInputButton' />  
                                
                    </span>
                </form>   
            </div>

        </div>
    )
}

export default Newsletter;