import { types } from "../types/types";

const initialState = {

    cliente:{}, 
    presupuestos:[]
}

export const reporteReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.getUnCliente:
            return{
                ...state,
                cliente: action.payload
            }   
        
        case types.reporteGetPresupuestos:
            return{
                ...state,
                presupuestos: action.payload
            }
    
        default:
            return state
            break;
    }




}