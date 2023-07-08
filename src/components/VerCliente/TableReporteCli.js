import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom';
import {cargarUnPresupuesto, deletePresupuesto, getPresupuesto, getPresupuestos} from '../../actions/presupuesto'
import { pruebaPresupuestos } from '../../helpers/prepareActividades';
import { PdfScreen } from '../Pdf/PdfScreen'


export const TableReporteCli = () => {

    const dispatch = useDispatch();

    const {presupuestos} = useSelector(state => state.presupuesto)
    //const pres = pruebaPresupuestos(presupuestos)

    

    const getPresupuest = ( pre) => {
        //dispatch(cargarUnPresupuesto(presupuesto));
        dispatch(getPresupuesto(pre._id, pre.fecha, pre.total, pre.listActividades, pre.cliente))
        
       

    }

    const handleSuprimir = (pre) => {
        dispatch(deletePresupuesto(pre._id, pre.cliente._id));
    }

    /* useEffect(() => {
        let isApiSubscribed =true;
        if(isApiSubscribed){
            dispatch(getPresupuestos());
        }
        return () => {
            isApiSubscribed = false;
        }
    
    }, [dispatch]) */
    

  return (
    <div className='row mt-5'>
        <h3>Presupuestos Realizados</h3>

        <table className='table table-striped table-hover'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Fecha</th>
                    <th>Total</th>
                    <th>Ver</th>
                    <th>Eliminar</th>
                    
                </tr>
            </thead>
            <tbody>

                {presupuestos.map((pre, index) => {
                    return(
                        <tr key={pre._id}>
                            <td>{index + 1}</td>
                            <td>{pre.fecha}</td>
                            <td>{`$${new Intl.NumberFormat('ja-JP').format(pre.total.toFixed(2))}`}</td>
                            <td>
                                <Link 
                                    className='btn btn-info'
                                    to={`visualizar`}
                                    onClick={()=> getPresupuest(pre)}
                                >
                                    Ver
                                </Link>
                            </td>
                            <td>
                                <button 
                                    className='btn btn-danger'
                                    onClick={()=> handleSuprimir(pre)}
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
