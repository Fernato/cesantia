
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalActPre } from '../actions/modalActPre';




export const Carga = () => {

    const dispatch = useDispatch()


    const {cargando} = useSelector(state => state.carga)

    const closeModal = () => {
      dispatch(closeModalActPre())

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

   

  return (

    <Modal
    
    isOpen={cargando}
    //onAfterOpen={afterOpenModal}
    onRequestClose={closeModal}
    style={customStyles}
    closeTimeoutMS={200}

    className='modalCargando'
    overlayClassName='modal-fondo'

  >
    <div className='la-ball-grid-pulse la-2x'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

  </Modal>
  )
}
