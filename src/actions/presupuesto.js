import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";


export const getPresupuestos= () => {
    return async (dispatch) => {
        try {
            
            const respuesta = await fetchConToken('presupuesto')
            const body = await respuesta.json();
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

        let suma = 0;

        try {
            const respuesta = await fetchConToken(`presupuesto/${monto}`);
            const pruebaPre = await respuesta.json();
            const listActividades = pruebaPre.listPrueba;
            const total = pruebaPre.suma;



            /*listPrueba.map(act => {
                    suma += act.total
            })
            */

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

        //let suma = 0;

        try {
            
            const respuesta = await fetchConToken(`presupuesto`,presupuesto,'POST');
            
           
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
            //const pruebaPre = await respuesta.json();
            //console.log(presupuesto)


            
            dispatch(pruebaPresupuesto([],0));



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

        try {
            
           const respuesta = await fetchSinToken(`presupuesto/${presupuesto._id}`,presupuesto,'PUT');
            const body = await respuesta.json()
            const pre = body.presupuesto
            dispatch(getPresupuesto(pre._id, pre.fecha, pre.total, pre.listActividades, pre.cliente))
                
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

export const deletePresupuesto = (id) => {

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
 
                    fetchSinToken( `presupuesto/${id}` , {} , 'DELETE' ); 
                    
                } catch (error) {
                    console.log(error)    
                }
              swalWithBootstrapButtons.fire(
                'Eliminado!',
                'Su registro ha sido eliminado',
                'success'
              )
              dispatch(getPresupuestos());
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
