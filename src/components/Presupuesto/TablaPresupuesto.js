import { useDispatch, useSelector } from 'react-redux';

import { getAct, openModalActPre } from '../../actions/modalActPre';
import { Carga } from '../../helpers/Carga';
import { EditActividad } from './EditActividad';
import { EliminarActPre } from '../../actions/presupuesto';



export const TablaPresupuesto = () => {

    const dispatch = useDispatch();
    
    const {listActividades, total} = useSelector(state => state.presupuesto)
    const { actualizado } = useSelector( state => state.modal)

    const editar = (act) => {  
        dispatch(openModalActPre())
        dispatch(getAct(act))
   
    }
    const eliminarActividadPre = (id, listActividades) =>{
        dispatch(EliminarActPre(id, listActividades))
    }


    if(actualizado){
    
        listActividades.map(a=>{
            a.cantidad = parseFloat(a.cantidad)
            return a
        })
    }


    return(
        <>

        <table className='table table-striped table-hover'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Descripcion</th>
                    <th>Unidad</th>
                    <th>Cantidad</th>
                    <th>PrecioUnitario</th>
                    <th>Total</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>     
            </thead>
            <tbody>
                {listActividades.map((act, index) => {
                    return(
                        <tr key={act.id_actividad}>
                            <td>{index + 1}</td>
                            <td>{act.descripcion}</td>
                            <td>{act.unidad}</td>
                            <td>{act.cantidad.toFixed(2)}</td>
                            
                            <td>{`$${new Intl.NumberFormat('ja-JP').format(act.precio_unitario.toFixed(2))}`}</td>
                            <td>{`$${new Intl.NumberFormat('ja-JP').format(act.total.toFixed(2))}`}</td>
                            <td>
                                <button
                                    className='btn btn-secondary'
                                    onClick={()=>editar(act)}
                                >
                                    Editar
                                </button>
                            </td>
                            <td>
                                <button
                                    className='btn btn-danger'
                                    onClick={()=>eliminarActividadPre(index, listActividades)}
                                >
                                    Eliminar
                                </button>
                            </td>
                            
                        </tr>
                        
                    );
                })

                }

            </tbody>

        </table>
        <p><b>Total:</b> ${new Intl.NumberFormat('ja-JP').format(total.toFixed(2))}</p>
        <EditActividad />
        

        </>
    )
}


