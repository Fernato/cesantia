import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCliente } from '../../actions/cliente';




export const DatosCliente = () => {

    const dispatch = useDispatch();

    const [cli, setCli] = useState({
        cedula: '',
    })


    const {cedula} = cli;
    

    const {cliente} = useSelector(state => state.presupuesto)
  
    const {nombre} = cliente

    const handleInputChange = ({target }) => {

        setCli({
            ...cli,
            [target.name]: target.value
        });
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(getCliente(cedula));
              
    }


    return (
        <>
            <form onSubmit={handleSubmit}>

                <input
                    type='text'
                    name='cedula'
                    className='form-control'
                    placeholder='Cedula'
                    autoComplete='off'
                    value={cedula}
                    onChange={handleInputChange}
                />
               

                <div className='row mt-2'>
                    <button type='submit' className='btn btn-primary'>
                        Buscar
                    </button>
                </div>
            </form>

            <h2 className='mt-2'> <b>Nombre:</b> {nombre}  </h2>
         

        </>
    )
}
