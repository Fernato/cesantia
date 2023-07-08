import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddNewActividad, getId } from '../../actions/actividad';




import { useForm } from '../../hooks/useForm';


export const FormActividades = () => {

    const dispatch = useDispatch();

    const {id} = useSelector(state => state.actividad)

    const [actividadValues, handleInputChange] = useForm({
        id_actividad: '',
        descripcion: '',
        unidad: '',
        precio_unitario: '',
        cantidad_min: '',
        cantidad_max: ''
    });


    const {id_actividad, descripcion, unidad,precio_unitario, cantidad_min, cantidad_max} = actividadValues;

    const handleSumit = (e) => {
        e.preventDefault();
        dispatch(AddNewActividad(actividadValues));
          
    }

    const setNuevo = () => {
        document.getElementById('nuevo').value=id
    }

    useEffect(() => {
        dispatch(getId());
    
    }, [dispatch])
    

    const nuevo = () => {
        document.getElementById('nuevo').value=id
        
    }
    
    return (
        <>
            <button
                className='btn btn-primary'
                onClick={nuevo}
            >
                Nuevo
            </button> 
      
            
            <form onSubmit={handleSumit} className='formularioCliente'>
                    <div className='mt-2'>
                        <input
                            id='nuevo'
                            type='text'
                            name='id_actividad'
                            className='form-control'
                            placeholder='Id'
                            autoComplete='off'
                            value={id_actividad}
                            onChange={handleInputChange}
                        />
                    </div>

   
                    
                    <div className='mt-2'> 
                        <input 
                        type='text'
                        name='descripcion'
                        className='form-control'
                        placeholder='Descripcion'
                        autoComplete='off'
                        value={descripcion}
                        onChange={handleInputChange}
                        />
                    </div>

                    <div className='mt-2'>
                        <input
                        type='text'
                        name='unidad'
                        className='form-control'
                        placeholder='Unidad'
                        autoComplete='off'
                        value={unidad}
                        onChange={handleInputChange}
                        />
                    </div>

                    <div className='mt-2'>
                        <input
                        type='text'
                        name='precio_unitario'
                        className='form-control'
                        placeholder='Precio Unitario'
                        autoComplete='off'
                        value={precio_unitario}
                        onChange={handleInputChange}
                        />
                    </div>

                    <div className='mt-2'>
                        <input
                        type='text'
                        name='cantidad_min'
                        className='form-control'
                        placeholder='Cantidad minima'
                        autoComplete='off'
                        value={cantidad_min}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className='mt-2'>
                        <input
                        type='text'
                        name='cantidad_max'
                        className='form-control'
                        placeholder='Cantidad maxima'
                        autoComplete='off'
                        value={cantidad_max}
                        onChange={handleInputChange}
                        />
                    </div>
                <div className='form-group d-grid gap-2 mt-2'>

                    <button type='submit' className='btn btn-primary'>
                        Guardar
                    </button>
                    
                </div>


            </form>
        </>
        

    )
};
