import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { actualizarActividad } from '../../actions/actividad';
import { closeModalActPre, noUpdatedModalActPres, updatedModalActPre } from '../../actions/modalActPre';


export const EditAct = () => {

    const dispatch = useDispatch()


    const {isOpen, actividad, actualizado} = useSelector(state => state.modal)
    


    const [actividadValues, setActividadValues] = useState({
        id_actividad: '',
        descripcion: '',
        unidad: '',
        precio_unitario: '',
        cantidad_min: '',
        cantidad_max: ''
    })
    

    
    const handleInputChange = ({target }) => {

        setActividadValues({
            ...actividadValues,
            [target.name]: target.value,
            
        });
    }

    const {id_actividad, descripcion, unidad,precio_unitario, cantidad_min, cantidad_max} = actividadValues;


    const customStyles = {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }

    Modal.setAppElement('#root');

    useEffect(() => {
        
        if(actividad){
            setActividadValues(actividad); 
            
        }

        if(actualizado){

            dispatch(noUpdatedModalActPres())
            
        }


    }, [actividad, dispatch, actualizado])

 
    const handleSumit = (e) => {
        e.preventDefault();
        
        dispatch(actualizarActividad(actividadValues));

        

        dispatch( updatedModalActPre() ) 
       closeModal()   
    }

    
    

    const closeModal = () => {
        dispatch(closeModalActPre())

    }

 
  return (

    <Modal
    
    isOpen={isOpen}
    //onAfterOpen={afterOpenModal}
    onRequestClose={closeModal}
    style={customStyles}
    closeTimeoutMS={200}

    className='modal'
    overlayClassName='modal-fondo'

  >
        <h2>Editor de actividad</h2>
        <form onSubmit={handleSumit} className='formularioCliente'>
            <div className='row'>
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
                <div className='row mt-2'>
                    <button type='submit' className='btn btn-primary'>
                        Actualizar
                    </button>
                </div>
                
            </div>
        </form>
        <div className='row mt-2'>
            <button className='btn btn-danger' onClick={closeModal}>
                Cancelar
            </button>
        </div>



  </Modal>
  )
}
