import { useEffect, useState } from 'react';
import '../App.css'
import {Form, Link, renderMatches, unstable_HistoryRouter, useNavigate} from 'react-router-dom'

export const Buscador= ()=>
{
    let valorBuscador='';
    let valorFiltro='';
    let navegador= useNavigate();
    const [criterio,setCriterio]=useState('n');

    useEffect(()=>{
        if (criterio=='n')
        {
            valorFiltro='Nombre';
        }
        else if(criterio=='TV')
        {
            valorFiltro='Terreno/Vivienda';
            valorBuscador='Terreno';
        }
        else if(criterio=='VR')
        {
            valorFiltro='Venta/Renta';
            valorBuscador='Venta';
        }
        

    },[criterio])
    return(
        //n= nombre, TV=terreno/vivienda, VR= venta/renta

            <div className='buscador'>
            {
                criterio=='n'?
                <input type='text' className='buscadorInput' onChange={
                    (e)=>
                    {
                        valorBuscador= e.target.value;
   
                    }
                }/>
                :
                (
                    criterio=='TV'?
                    <select  className='buscadorCriterio' onChange={
                        (e)=>{
                            valorBuscador= e.target.value;
                           
                        }
                    }>
        
                        <option>Terreno</option>
                        <option>Vivienda</option>
                    </select>
                    :
                    (
                    <select  className='buscadorCriterio' onChange={
                        (e)=>{
                            valorBuscador= e.target.value;
                            
                        }
                    }>
        
                        <option>Venta</option>
                        <option>Renta</option>
                    </select>
                    )
                )           
            }

        
        
            <select  className='buscadorCriterio' onChange={
                /*(e)=>{
                    valorFiltro= e.target.value;

                }*/
               (e)=>
               {
                    let valor= e.target.value;
                    
                    if (valor=='Nombre')
                    {
                        setCriterio('n');
                        
                    }
                    else 
                    {

                        if (valor=='Terreno/Vivienda')
                        {
                            setCriterio('TV');
                            
                        }
                        else if (valor='Vivienda/Terreno') 
                        {
                            setCriterio('VR');
                            
                        }
                    }

                    valorFiltro= valor;
                    

               }
            }>

                <option>Nombre</option>
                <option>Terreno/Vivienda</option>
                <option>Venta/Renta</option>
            </select>

            <input type='submit'  className='buscarBoton' value={'buscador'}
                onClick={
                    ()=>
                    {   
                        
                        if(valorFiltro =='Nombre' && (valorBuscador!=''))
                        {
                            navegador('/search?filter='+valorFiltro+'&value='+valorBuscador);
                        }
                        else
                        {
                            if (valorBuscador=='' && valorFiltro=='Nombre')
                            {
                                navegador('/search?filter=&value=');
                            }
                            else if(valorFiltro=='Venta/Renta')
                            {
                                navegador('/search?filter='+'tipoVentaRenta'+'&value='+valorBuscador);
                            }
                            else if(valorFiltro=='Terreno/Vivienda')
                            {
                                navegador('/search?filter='+'tipoTerrenoVivienda'+'&value='+valorBuscador);
                            }
                            else if(valorFiltro=='' || valorFiltro==null)
                            {
                                if(valorBuscador=='Vivienda' || valorBuscador=='Terreno')
                                {
                                    valorFiltro='tipoTerrenoVivienda';
                                }
                                else if(valorBuscador=='Venta'||valorBuscador=='Renta')
                                {
                                    valorFiltro='tipoVentaRenta';
                                }
                                navegador('/search?filter='+valorFiltro+'&value='+valorBuscador);
                            }

                        }
                        console.log(valorFiltro,valorBuscador);
                       
                    }
                }
            />

        </div>
    )
}