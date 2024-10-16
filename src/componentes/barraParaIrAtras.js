import { useNavigate } from 'react-router-dom'
import '../App.css'
import flechaBack from '../imagenes/iconos/next.png'
const BackBar=()=>
{
    const navegador = useNavigate();
    return(
        <div>
            <div className='contenedorFlechaBackContenedor'>
                <span className='contenedorFlechaBack'>
                    <img className='flechaBack flechaCarruselLeft' src={flechaBack}
                        onClick={
                            ()=>{
                                window.history.back();
                            }
                        }
                    />
                </span>
            </div>
        </div>
    )
}
export default BackBar;