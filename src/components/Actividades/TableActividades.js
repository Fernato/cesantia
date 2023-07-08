
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  getActividad } from '../../actions/actividad';
import { getAct, openModalActPre } from '../../actions/modalActPre';
import { EditAct } from './EditAct';
import { useState } from 'react';

export const TablaActividades = () => {

    const dispatch = useDispatch();
    const {actividades} = useSelector(state => state.actividad)

    const handleGetActividad = (act) => {
            
        dispatch(openModalActPre())
        dispatch(getAct(act));
        
    }

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    useEffect(()=>{
        setResults(actividades)
    },[actividades])

    const handleChange = (event) => {
        const inputValue = event.target.value;
        setQuery(inputValue);
    
        // Realizar la búsqueda dentro de los resultados almacenados en el estado global
        const filteredResults = actividades.filter((result) =>
          result.descripcion.toLowerCase().includes(inputValue.toLowerCase())
        );
        setResults(filteredResults);
      };


   useEffect(() => {
    let isApiSubscribed =true;
    if(isApiSubscribed){
        dispatch(getActividad());
    }
     return () => {
        isApiSubscribed = false;
     }
   }, [dispatch])
   
       
    return(
        <>
        <div>
            <input type="text" value={query} onChange={handleChange} placeholder="Buscar..." />
        </div>
        <table className='table table-striped table-hover'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Descripcion</th>
                    <th>Unidad</th>
                    <th>Precio</th>
                    <th>Min</th>
                    <th>Max</th>
                    <th>Editar</th>
                </tr>     
            </thead>
            <tbody>
                {results.map((act, index) => {
                    return(
                        <tr  key={act.id_actividad}>
                            <td>{index + 1}</td>
                            <td>{act.descripcion}</td>
                            <td>{act.unidad}</td>
                            <td>{`$${new Intl.NumberFormat('ja-JP').format(act.precio_unitario.toFixed(2))}`}</td>
                            <td>{act.cantidad_min}</td>
                            <td>{act.cantidad_max}</td>
                            <td>
                                <button
                                    className='btn btn-secondary'
                                    onClick={()=>handleGetActividad(act)}
                                >
                                    Editar
                                </button>
                            </td>
                        </tr>
                        
                    );
                })

                }

            </tbody>
           
        </table>

        <EditAct />

        </>
    )


}

