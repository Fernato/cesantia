import React, { useEffect } from 'react'
import moment from "moment";
import { useDispatch, useSelector } from 'react-redux'
import { pruebaPresupuesto, actuaPresupuesto, presupuestoInicial } from '../../actions/presupuesto'
import { DatosCliente } from './DatosCliente'
import { MontoCliente } from './MontoCliente'
import { TablaPresupuesto } from './TablaPresupuesto'
import { loadUnCliente } from '../../actions/cliente';
import { Carga } from '../../helpers/Carga';


export const PresupuestoScreen = () => {

    const dispatch = useDispatch();
    //const {cliente} = useSelector(state => state.presupuesto)
    

    const fecha = moment().format("YY MMM Do")
    dispatch(pruebaPresupuesto([],0,fecha))
    
   
    //dispatch(pruebaPresupuesto([],0))
    //dispatch(loadUnCliente({}))
    
   

    return (
        <div className='container mt-5 col-9'>
            <h2>PRESUPUESTO</h2>
            <hr/>
            <div className='row mt-5'>
                <div className='col-sm-12 col-md-6 col-lg-3 col-xl-3'>
                    <DatosCliente />
                    <MontoCliente />
                    
                </div>
                <div className='col-sm-12 col-md-6 col-lg-9 col-xl-9'>
                    <TablaPresupuesto />
                </div>
                
                
            </div>
            <Carga/>
        </div>
    )
}
