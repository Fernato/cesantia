import moment from "moment";
import { types } from "../types/types";



/*
    {
        actividades: [],
        cantidades: [],
        totales: [],
        total

    }

*/



const initialState = {
    _id:'',
    fecha: moment().format("yyyy-MM-DD"),
    total: 0,
    listActividades: [],
    cliente:{}, 
}

export const presupuestoReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.presupuestoPrueba:
            return {
                ...state,
                listActividades: [ ...action.payload.listActividades ],
                total: action.payload.total,
                //fecha: action.payload.fecha
            }
        case types.getUnCliente:
            return{
                ...state,
                cliente: action.payload
            }  
        
        case types.presupuestoModalActualizado:
            return {
                ...state,
                listActividades: state.listActividades.map(
                    a=> ( a.id_actividad === action.payload.id_actividad) ? action.payload : a
                )
            }
        case types.presupuetoGetPresupuesto:
            return {
                ...state,
                _id: action.payload._id,
                fecha: action.payload.fecha,
                total: action.payload.total,
                listActividades: [ ...action.payload.listActividades ],
                cliente: action.payload.cliente
            }  
     
    
        default:
            return state
    }




}