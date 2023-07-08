import Swal from "sweetalert2";
import { fetchConToken} from "../helpers/fetch";
import { types } from "../types/types";
import { Cargado, Cargando } from "./carga";

export const presupuestoInicial = () => ({type: types.presupuestoInitial})

export const getPresupuestos= () => {
    return async (dispatch) => {
        dispatch(Cargando())
        try {
            
            const respuesta = await fetchConToken('presupuesto')
            const body = await respuesta.json();
        dispatch(Cargado())
            const presupuestos = body.presupuestos;
            dispatch(cargarpresupuestos(presupuestos))

        } catch (error) {
            console.log(error)
            
        }
    }
}


export const getPresupuesto = (_id, fecha, total, listActividades, cliente) => ({
    type: types.presupuetoGetPresupuesto,
    payload: {_id, fecha, total, listActividades, cliente}
})

export const EliminarActPre = (id, listActividades ) => {
    return async (dispatch) => {
        dispatch(Cargando())
     
        listActividades.splice(id,1)
        let suma = 0
        listActividades.forEach(act => {
            suma += act.total
        }); 
        dispatch(Cargado()) 
        dispatch(eliminarActividadPresupuesto(suma, listActividades))
        try {
            
        } catch (error) {
            console.log(error)
        }
    }

}

export const eliminarActividadPresupuesto = (suma, listActividades) =>({
    type: types.presupuestoEliminarActividad,
    payload: {
        suma,
        listActividades
    }
})




export const cargarUnPresupuesto = (presupuesto) => ({
    type: types.vistaGetUnPresupuesto,
    payload: presupuesto
})



const cargarpresupuestos = (presupuestos) => ({
    type: types.reporteGetPresupuestos,
    payload: presupuestos

})


export const calculoPresupuesto = (monto, fecha) => {
    return async (dispatch) => {
        
        dispatch(Cargando())
        try {
            const respuesta = await fetchConToken(`presupuesto/${monto}`);
            const pruebaPre = await respuesta.json();
            dispatch(Cargado())
            const listActividades = pruebaPre.listPrueba;
            const total = pruebaPre.suma;


            dispatch(pruebaPresupuesto(listActividades, total, fecha));



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

export const pruebaPresupuesto = (listActividades, total, fecha) => ({
    type: types.presupuestoPrueba,
    payload: {listActividades, total, fecha}

})


export const guardarPresupuesto = (presupuesto) => {
    
    return async (dispatch) => {
        dispatch(Cargando())
        try {
            
            const respuesta = await fetchConToken(`presupuesto`,presupuesto,'POST');
            const body = await respuesta.json()
            dispatch(Cargado())
            if(body.ok){

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
  
       
                dispatch(pruebaPresupuesto([],0));
            }else if(!body.ok) {
                Swal.fire({
                    title: 'Error!',
                    text: `${body.msg}`,
                    icon: 'error',
                    confirmButtonText: 'Cool'
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



export const actuaPresupuesto = (presupuesto) => {


    return async (dispatch) => {

        dispatch(Cargando())
        try {
            
           const respuesta = await fetchConToken(`presupuesto/${presupuesto._id}`,presupuesto,'PUT');
            const body = await respuesta.json()
            dispatch(Cargado())
            const pre = body.presupuesto
            dispatch(getPresupuesto(pre._id, pre.fecha, pre.total, pre.listActividades, pre.cliente))
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Ha sido actualizado',
                showConfirmButton: false,
                timer: 1000
              })
                
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


export const actualizarActividad = (actividad) => ({
    type: types.presupuestoModalActualizado,
    payload: actividad

})

export const deletePresupuesto = (id, idCliente) => {

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
 
                    fetchConToken( `presupuesto/${id}` , {} , 'DELETE' ); 
                    
                } catch (error) {
                    console.log(error)    
                }
              swalWithBootstrapButtons.fire(
                'Eliminado!',
                'Su registro ha sido eliminado',
                'success'
              )
              dispatch(getPresupuestosId(idCliente));
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


export const getPresupuestosId= (id) => {
    return async (dispatch) => {
        dispatch(Cargando()) 
        try {
            
            const respuesta = await fetchConToken(`presupuesto/presupuestosid/${id}`)
            const body = await respuesta.json();
            dispatch(Cargado())
            const presupuestos = body.presupuestos;
            const cliente = body.cliente
            dispatch(getPresupuestoId(cliente, presupuestos))

        } catch (error) {
            console.log(error)
            
        }
    }
}


export const getPresupuestoId = (cliente, presupuestos) => ({
    type: types.presupuestoGetPresupuestosId,
    payload: {
        cliente,
        presupuestos
    }
})