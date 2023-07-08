import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';




export const Carga = () => {

    const dispatch = useDispatch()


    const {cargando} = useSelector(state => state.carga)

   
    const customStyles = {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }

    Modal.setAppElement('#root');

   

  return (

    <Modal
    
    isOpen={cargando}
    //onAfterOpen={afterOpenModal}
    onRequestClose={cargando}
    style={customStyles}
    closeTimeoutMS={200}

    className='modalCargando'
    overlayClassName='modal-fondo'

  >
        <div class="preloader"></div>

  </Modal>
  )
}
