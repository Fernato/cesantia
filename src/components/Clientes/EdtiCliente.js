import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { actualizarCliente } from '../../actions/cliente';
import { closeModalActPre, noUpdatedModalActPres, updatedModalActPre } from '../../actions/modalActPre';


export const EditCliente = () => {

    const dispatch = useDispatch()


    const {isOpen, cliente, actualizado} = useSelector(state => state.modal)
  
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
        
        if(cliente){
            setClienteValues(cliente); 
            
        }
        if(actualizado){

            dispatch(noUpdatedModalActPres())
            
        }

    }, [cliente, dispatch, actualizado])

 
    const handleSumit = (e) => {
        e.preventDefault();
        
        dispatch(actualizarCliente(clienteValues));

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
