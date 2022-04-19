import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";



export const addNewCliente = (cliente) => {

    return async (dispatch) => {
        if(cliente.cedula !== '')
        {
          try {
            
            const respuesta = await fetchSinToken('cliente', cliente, 'POST');   
            const body = await respuesta.json()

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
                text: `${body.msg}`,
                icon: 'error',
                confirmButtonText: 'Cool'
              })    
            }
                 
          } catch (error) {
            console.log(error)
          }
 

        }else {
            Swal.fire({
                title: 'Error!',
                text: 'Debe ingresar la cedula',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
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
 
                  fetchSinToken( `cliente/${id}`,{},'DELETE');

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
        try {
            const respuesta = await fetchSinToken('cliente');
            const body = await respuesta.json();
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
        try {
            const respuesta = await fetchConToken(`cliente/${cedula}`);
            const body = await respuesta.json();
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

const loadUnCliente = (clientes) => ({
    type: types.getUnCliente,
    payload: clientes
})

