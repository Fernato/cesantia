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
   
   

  //if(!actualizado){

    //dispatch(pruebaPresupuesto(listActividades, total));
  //}
/*
    const actualizar = () => {
      console.log(presupuesto)
      dispatch(actuaPresupuesto(presupuesto))
    }

    */
/*
    useEffect(() => {

      let isApiSubscribed =true;
      if(actualizado){
        dispatch(actuaPresupuesto(presupuesto))
      }else if(isApiSubscribed){
        dispatch(pruebaPresupuesto(listActividades, total));
      }
      return () => {
          isApiSubscribed = false;
      }
      

    }, [dispatch])
    
*/

//  dispatch(pruebaPresupuesto(listActividades, total));

  return (
      <div className='container'>

        <h2>{cliente.nombre}</h2>
        <hr/>
        <TablaPresupuesto />
       

        <PdfScreen 
        key={presupuesto._id}
        {...presupuesto}/>
        
      </div>

  )
}
