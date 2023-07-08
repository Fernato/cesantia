import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actuaPresupuesto, pruebaPresupuesto } from '../../actions/presupuesto';



import { PdfScreen } from '../Pdf/PdfScreen';
import { TablaPresupuesto } from '../Presupuesto/TablaPresupuesto';

export const VisualizarScreen = () => {

    const dispatch = useDispatch();

    const {presupuesto} = useSelector(state => state)
    const {cliente, listActividades, total} = useSelector(state => state.presupuesto)
    const {actualizado } = useSelector(state => state.modal)

  return (
      <div className='container col-9 mt-5'>

        <h2>{cliente.nombre}</h2>
        <hr/>
        <TablaPresupuesto />
       

        <PdfScreen 
        key={presupuesto._id}
        {...presupuesto}/>

        
        
      </div>

  )
}
