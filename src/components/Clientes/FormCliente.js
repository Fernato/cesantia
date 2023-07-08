import {  useState } from 'react';
import { useDispatch } from 'react-redux';
import {  addNewCliente } from '../../actions/cliente';
import { Carga } from '../../helpers/Carga';

export const FormCliente = () => {

    const dispatch = useDispatch();

    const [clienteValues, setClienteValues] = useState({
        cedula: '',
        nombre: '',
        apellido: '',
        direccion:'',
        ciudad: ''
    })

    const {cedula, nombre, apellido, direccion, ciudad} = clienteValues;
    const handleInputChange = ({target }) => {

        setClienteValues({
            ...clienteValues,
            [target.name]: target.value
        });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewCliente(clienteValues));
         
    }
    

    
    return (
        
        <form onSubmit={handleSubmit}>
                <div>
                    <input
                    type='text'
                    name='cedula'
                    className='form-control'
                    placeholder='Cedula'
                    autoComplete='off'
                    value={cedula}
                    onChange={handleInputChange}
                    />
                </div>

                <div className='mt-2'>
                    <input
                    type='text'
                    name='nombre'
                    className='form-control'
                    placeholder='Nombre'
                    autoComplete='off'
                    value={nombre} 
                    onChange={handleInputChange} 
                    />
                </div>

                <div className='mt-2'>
                    <input
                    type='text'
                    name='apellido'
                    className='form-control'
                    placeholder='Apellido'
                    autoComplete='off'
                    value={apellido} 
                    onChange={handleInputChange} 
                    />
                </div>

                <div className='mt-2'>
                    <input
                    type='text'
                    name='direccion'
                    className='form-control'
                    placeholder='Direccion'
                    autoComplete='off'
                     value={direccion} 
                     onChange={handleInputChange} 
                    />
                </div>

                <div className='mt-2'>
                    <input
                    type='text'
                    name='ciudad'
                    className='form-control'
                    placeholder='Ciudad'
                    autoComplete='off'
                    value={ciudad} 
                    onChange={handleInputChange} 
                    />
                </div>

                <div className="form-group d-grid gap-2 mt-2">

                    <button type='submit' className='btn btn-primary btn-block '>
                        Guardar
                    </button>
                </div>
            

        </form>

    )
};
