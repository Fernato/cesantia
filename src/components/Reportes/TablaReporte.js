import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom';
import {cargarUnPresupuesto, deletePresupuesto, getPresupuesto, getPresupuestos} from '../../actions/presupuesto'
import { pruebaPresupuestos } from '../../helpers/prepareActividades';
import { PdfScreen } from '../Pdf/PdfScreen'


export const TablaReporte = () => {

    const dispatch = useDispatch();

    const {presupuestos} = useSelector(state => state.reporte)
    const pres = pruebaPresupuestos(presupuestos)

    

    const getPresupuest = ( pre) => {
        //dispatch(cargarUnPresupuesto(presupuesto));
        dispatch(getPresupuesto(pre._id, pre.fecha, pre.total, pre.listActividades, pre.cliente))
        
       

    }

    const handleSuprimir = (id) => {
        dispatch(deletePresupuesto(id));
    }

    useEffect(() => {
        let isApiSubscribed =true;
        if(isApiSubscribed){
            dispatch(getPresupuestos());
        }
        return () => {
            isApiSubscribed = false;
        }
    
    }, [dispatch])
    

  return (
    <div>
        <h1>Tabla</h1>

        <table className='table table-striped table-hover'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Cliente</th>
                    <th>Fecha</th>
                    <th>Ver</th>
                    <th>Eliminar</th>
                    
                </tr>
            </thead>
            <tbody>

                {pres.map((pre, index) => {
                    return(
                        <tr key={pre._id}>
                            <td>{index + 1}</td>
                            <td>{pre.cliente.nombre}</td>
                            <td>{pre.fecha}</td>
                            <td>
                                <Link 
                                    className='btn btn-info'
                                    to={`/visualizar`}
                                    onClick={()=> getPresupuest(pre)}
                                >
                                    Ver
                                </Link>
                            </td>
                            <td>
                                <button 
                                    className='btn btn-danger'
                                    onClick={()=> handleSuprimir(pre._id)}
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

    </div>

  )
}
