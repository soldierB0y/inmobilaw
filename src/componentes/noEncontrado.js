import '../App.css'
import noEncontrado from '../imagenes/generales/no-results.png'


const NoEncontrado= ()=>
{
    return(

            <span className='center titular wait'>
                        <h1>No se han encontrado propiedades</h1>
                        <img className='notFound center' src={noEncontrado}/>
            </span>

    )
}
export default NoEncontrado;