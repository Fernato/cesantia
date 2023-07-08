import Swal from "sweetalert2";
import { fetchConToken} from "../helpers/fetch";
import { types } from "../types/types";
import { Cargado, Cargando } from "./carga";


const endPoint = 'cLiente'

export const addNewCliente = (cliente) => {

    return async (dispatch) => {
      dispatch(Cargando())
          try {
            
            const respuesta = await fetchConToken(`${endPoint}`, cliente, 'POST');   
            const body = await respuesta.json()
            dispatch(Cargado())
            if(body.ok){
              //dispatch(addCliente(cliente));

              const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'Guardado Correctamente'
              })
    
            
              dispatch(getClientes());

            }else{

              Swal.fire({
                title: 'Error!',
                text: `${body.errors.cedula.msg}`,
                icon: 'error',
                confirmButtonText: 'Cool'
              })    
            }
                 
          } catch (error) {
            console.log(error)
          }

    }
}

export const addCliente = (cliente) => ({
    type: types.addCliente,
    payload: cliente
});


export const startDeleteCliente = (id) =>{

    return  (dispatch) => {

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: '¿ Estas seguro?',
            text: "Si eliminas no podras recuperar la informacion!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, Eliminar!',
            cancelButtonText: 'No, cancelar!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                try {
 
                  fetchConToken( `${endPoint}/${id}`,{},'DELETE');

                    swalWithBootstrapButtons.fire(
                      'Eliminado!',
                      'Su registro ha sido eliminado',
                      'success'
                    )
                    dispatch(getClientes());
                  
                    
                } catch (error) {
                    console.log(error)    
                }
             
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelado',
                    'Sus registros siguen intactos :)',
                'error'
              )
            }
        })
    }
}

const loadCliente = (clientes) => ({

    type: types.getCliente,
    payload: clientes  
})

export const getClientes = () => {
    return async (dispatch) => {
         dispatch(Cargando())
        try {
            const respuesta = await fetchConToken(`${endPoint}`);
            const body = await respuesta.json();
          dispatch(Cargado())
            dispatch(loadCliente(body.clientes));

        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: `${error}`,
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        }
        
    }
}

export const getCliente = (cedula) => {
    return async (dispatch) => {
        dispatch(Cargando())

        try {
            const respuesta = await fetchConToken(`${endPoint}/${cedula}`);
            const body = await respuesta.json();
            dispatch(Cargado())
            dispatch(loadUnCliente(body.cliente));

        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: `${error}`,
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        }
        
    }
}

export const loadUnCliente = (cliente) => ({
    type: types.getUnCliente,
    payload: cliente
})


export const updateCliente = (cliente) => ({
  type: types.updateCliente,
  payload: cliente
})

export const actualizarCliente = (cliente ) => {
  
  return async (dispatch) => {
    dispatch(Cargando())
    try {

      const respuesta = await fetchConToken(`${endPoint}/${cliente._id}`,cliente, 'PUT')
      const body = await respuesta.json();
      dispatch(Cargado())
      
      if(body.ok){
        await dispatch(getClientes());
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Ha sido actualizado',
          showConfirmButton: false,
          timer: 1000
        })
      }

       
    } catch (error) {

      Swal.fire({
                title: 'Error!',
                text: `${error}`,
                icon: 'error',
                confirmButtonText: 'Cool'
              })
    }
  }
}