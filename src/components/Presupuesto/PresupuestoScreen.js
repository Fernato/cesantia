import React from 'react'
import moment from "moment";
import { useDispatch } from 'react-redux'
import { pruebaPresupuesto, actuaPresupuesto } from '../../actions/presupuesto'
import { DatosCliente } from './DatosCliente'
import { MontoCliente } from './MontoCliente'
import { TablaPresupuesto } from './TablaPresupuesto'

export const PresupuestoScreen = () => {

    const dispatch = useDispatch();
    
    const presupuesto = {
        _id:'',
        fecha: moment().format("yyyy-MM-DD"),
        total: 0,
        listActividades: [],
        cliente:{}, 
    }

    dispatch(pruebaPresupuesto([],0))
    //dispatch(actuaPresupuesto(presupuesto))

    return (
        <div className='container'>
            <h2>PRESUPUESTO</h2>
            <hr/>
            <div className='row'>
                <div className='col'>
                    <DatosCliente />
                    <MontoCliente />
                    
                </div>
                <div className='col'>
                    <TablaPresupuesto />
                </div>
                
                
            </div>
            
        </div>
    )
}
