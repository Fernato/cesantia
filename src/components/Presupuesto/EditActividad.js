import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalActPre, noUpdatedModalActPres, updatedModalActPre } from '../../actions/modalActPre';
import { actualizarActividad, actuaPresupuesto } from '../../actions/presupuesto';



export const EditActividad = () => {

    const dispatch = useDispatch()


    const {isOpen, actividad, actualizado} = useSelector(state => state.modal)
    const {presupuesto} = useSelector(state => state)
   


    const [actividadValues, setActividadValues] = useState({
        id_actividad: '',
        descripcion: '',
        unidad: '',
        precio_unitario: '',
        cantidad:0,
        total: ''
    })
    

    
    const handleInputChange = ({target }) => {

        setActividadValues({
            ...actividadValues,
            [target.name]: target.value,
            
        });
    }

    const {id_actividad, descripcion, unidad,precio_unitario, cantidad, total} = actividadValues;


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
           
            dispatch(actuaPresupuesto(presupuesto))
            dispatch(noUpdatedModalActPres())
            
        }

    }, [actividad, dispatch, presupuesto, actualizado])

 
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
                <div className='row mt-2'>
                    <input
                    type='text'
                    name='id_actividad'
                    className='form-control'
                    placeholder='id_actividad'
                    autoComplete='off'
                    value={id_actividad}
 
                    onChange={handleInputChange}
                    />
                </div>
                <div className='row mt-2'>
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
                <div className='row mt-2'>
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
                <div className='row mt-2'>
                    <input
                    type='text'
                    name='cantidad'
                    className='form-control'
                    placeholder='Cantidad'
                    autoComplete='off'
                    //value={new Intl.NumberFormat('ja-JP').format(cantidad.toFixed(2))}
                    value={cantidad}

                    onChange={handleInputChange}
                    />
                </div>
                <div className='row mt-2'>
                    <input
                    type='text'
                    name='precio_unitario'
                    className='form-control'
                    placeholder='Precio Unitario'
                    autoComplete='off'
                    //value={new Intl.NumberFormat('ja-JP').format(precio_unitario.toFixed(2))}
                    value={precio_unitario}

                    onChange={handleInputChange}
                    />
                </div>
                <div className='row mt-2'>
                    <input
                    type='text'
                    name='total'
                    className='form-control'
                    placeholder='Total'
                    autoComplete='off'
                    //value={new Intl.NumberFormat('ja-JP').format(precio_unitario.toFixed(2))}
                    value={total}

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
