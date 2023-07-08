import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Carga } from '../../helpers/Carga'
import { getPresupuestosId } from '../../actions/presupuesto';
import { useDispatch, useSelector } from 'react-redux';
import { MontoCliente } from '../Presupuesto/MontoCliente';
import { TablaPresupuesto } from '../Presupuesto/TablaPresupuesto';
import { getCli, openModalActPre } from '../../actions/modalActPre';
import { EditCliente } from '../Clientes/EdtiCliente';
import { TableReporteCli } from './TableReporteCli';
import { PresupuestoCli } from './PresupuestoCli';



/* import { DatosCliente } from './DatosClienteReporte'
import { TablaReporte } from './TablaReporte' */

export const VerClienteScreen = () => {

    const {id} = useParams(); 
    const dispatch = useDispatch();
    const {cliente} = useSelector(state=> state.presupuesto)

    const [status, setStatus] = useState(true);
    let componente = null

    const handleGetCliente = () => {
        
        dispatch(openModalActPre())
        dispatch(getCli(cliente));
        
    }

    useEffect(() => {
        let isApiSubscribed =true;
        if(isApiSubscribed){
            dispatch(getPresupuestosId(id));
        }
        return () => {
            isApiSubscribed = false;
        }
    }, [id, dispatch])

    const handleGetPresupuestosId = () =>{
        setStatus(true)
        dispatch(getPresupuestosId(id));
    }
    const handleGetCrearPresupuesto = () =>{
        setStatus(false)
        dispatch(getPresupuestosId(id));
    }

    if (status) {
        componente = <TableReporteCli />;
    } else {
        componente = <PresupuestoCli />;
    }


    return (
        <div className='container col-9 mt-5'>
            <h2>{cliente.nombre} {cliente.apellido}</h2>
            <hr/>
            <div className='row'>

                <div className='col'>
                    <p>Cedula: {cliente.cedula}</p>
                    <p>Ciudad: {cliente.ciudad}</p>
                    <p>Direccion: {cliente.direccion}</p>
                </div>
                
                <div className='col'>
                    <button
                        className='btn btn-secondary'
                        onClick={()=>handleGetCliente()}
                    >
                        Editar
                    </button>
                </div>
            </div>
            <hr/>
            <div className='row'>
                <div className='col'>
                    <button onClick={handleGetPresupuestosId} className='btn btn-info'>Reportes</button>
                </div>
                <div className='col'>
                    <button onClick={handleGetCrearPresupuesto} className='btn btn-info' >Crear Presupuesto</button>
                </div>
            </div>
            
                {componente}
            <hr/>

            {/* <div className='row mt-5'>
                <h2>PRESUPUESTO</h2>
                <hr/>
                <div className='row mt-5'>
                    <div className='col-sm-12 col-md-6 col-lg-3 col-xl-3'>
                        <MontoCliente />
                        
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-9 col-xl-9'>
                        <TablaPresupuesto />
                    </div>
                    
                    
                </div>   
            </div>
            <hr/>

            <div className='row mt-5'>
                    <TableReporteCli />
            </div> */}

            <EditCliente />
            <Carga />


        </div>
    )
}
