import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { calculoPresupuesto, guardarActividadReal, guardarPresupuesto } from '../../actions/presupuesto';

export const MontoCliente = () => {


    const dispatch = useDispatch();

    const {presupuesto} = useSelector(state => state);
    const {suma} = presupuesto
    const {listActividades} = presupuesto

    
    
    
    //const {_id} = cliente
/*
    const [presupuesto, setPresupuesto] = useState({
        fecha: moment().format("MMM Do YY"),
        total: suma,
        listActividades: actividades,
        _id: _id
    })
   


    const [presupuesto, setPresupuesto] = useState({
        fecha: moment().format("MMM Do YY"),
        total: 0,
        listActividades:[],
        _id: 0
    })

*/
    const [pre, setPre] = useState({
        monto:'',
        fecha: moment().format("YY MMM Do")
    })
    const {monto, fecha} = pre;



    const handleInputChange = ({target }) => {

        setPre({
            ...pre,
            [target.name]: target.value
        });
    }
    const handleSubmitCalcular = (e) => {
        e.preventDefault();

        
        dispatch(calculoPresupuesto(monto));
    
    }
    

    const handleGuardar = () => {
        
        dispatch(guardarPresupuesto(presupuesto))

    }

    return (
        <div>

            <form onSubmit={handleSubmitCalcular}>
    
                    <input
                        type='text'
                        name='monto'
                        className='form-control'
                        placeholder='Monto'
                        autoComplete='off'
                        value={monto}
                        onChange={handleInputChange}
                    />
   
    
    
                    <div className='row mt-2'>
                        <button type='submit' className='btn btn-primary'>
                            Calcular
                        </button>
                    </div>

                    
            </form>
    
            <p>{suma}</p>

            <button 
                className='btn btn-primary'
                onClick={handleGuardar}
            >
                Guardar
            </button>
            <p>{suma}</p>
        </div>

    )
}
