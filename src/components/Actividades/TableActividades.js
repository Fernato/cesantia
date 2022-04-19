
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  getActividad, startDeleteActividad } from '../../actions/actividad';

export const TablaActividades = () => {

    const dispatch = useDispatch();
    const {actividades} = useSelector(state => state.actividad)


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
        <table className='table table-striped table-hover'>
            <thead>
                <tr>
                    <th>Descripcion</th>
                    <th>Unidad</th>
                    <th>Precio</th>
                    <th>Min</th>
                    <th>Max</th>
                    <th>Editar</th>
                </tr>     
            </thead>
            <tbody>
                {actividades.map(act => {
                    return(
                        <tr  key={act.id_actividad}>
                            <td>{act.descripcion}</td>
                            <td>{act.unidad}</td>
                            <td>{`$${new Intl.NumberFormat('ja-JP').format(act.precio_unitario.toFixed(2))}`}</td>
                            <td>{act.cantidad_min}</td>
                            <td>{act.cantidad_max}</td>
                            <td>
                                <button
                                    className='btn btn-secondary'
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
    )


}

