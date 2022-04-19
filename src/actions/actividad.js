
import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types"

export const getId = () => {
  return async(dispatch) => {
    try {
      const respuesta = await fetchSinToken('actividad/count')
      const body = await respuesta.json();
      dispatch(addCount(body.id_actividad))
      
    } catch (error) {
      console.log(error)
      
    }

  }
}

const addCount = (id_actividad) => ({
  type: types.idActividad,
  payload: id_actividad
})


export const startDeleteActividad = (actividad) =>{

    return (dispatch) => {

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
 
                    fetchConToken( `actividad/${actividad.id_actividad}`,{actividad},'DELETE');
                    
                } catch (error) {
                    console.log(error)    
                }
              swalWithBootstrapButtons.fire(
                'Eliminado!',
                'Su registro ha sido eliminado',
                'success'
              )
              dispatch(getActividad());
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


export const AddNewActividad = (actividad) =>{
    return async (dispatch) => {

      try {
        
        await fetchSinToken('actividad', actividad, 'POST');   
  
        
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
  
        dispatch(addActvidad(actividad));
     
      } catch (error) {
        console.log(error)
        
      }
    }
}

const addActvidad = (actividad) => ({
    type: types.AddNewActividad,
    payload: actividad
})


export const getActividad = () => {
    return async (dispatch) => {
        try {
            const respuesta = await fetchConToken('actividad');
            const body = await respuesta.json();
            dispatch(loadActividades(body.actividades));

        } catch (error) {
            console.log(error)
        }
        
    }
}

export const getUnActividad = (id_actividad) => {
    return async (dispatch) => {
        try {
            const respuesta = await fetchConToken(`actividad/${id_actividad}`);
            const actividad = await respuesta.json();
            console.log(actividad)
            dispatch(loadActividades(actividad));

        } catch (error) {
            console.log(error)
        }
        
    }
}

export const loadActividades = (actividades) => ({

        type: types.getActividad,
        payload: actividades  
})

export const getUnActividadReal = (id_actividad) => {
  return async (dispatch) => {

      try {
          //const actividades = [];
          const respuesta = await fetchConToken(`actividadreal/${id_actividad}`);
          const actividad = await respuesta.json();
          console.log(actividad)
          //actividades.push(actividad)
          //dispatch(agregarActividadVista(actividades));

      } catch (error) {
          console.log(error)
      }
      
  }
}

const agregarActividadVista = (actividades) =>({
  type: types.vistaGetActividad,
  payload: actividades
})

  


