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
                                console.log(window.scrollTo());
                                window.scrollTo(0,0)
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