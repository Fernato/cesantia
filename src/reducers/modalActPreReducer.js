import { types } from "../types/types"

const initialState = {

    isOpen: false,
    actividad:{},
    actualizado: false
}

export const modalActPreReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.modalOpen:
            return {
                ...state,
                isOpen: true
            }
        case types.modalCLose:
            return{
                ...state,
                isOpen: false
            }  
        case types.modalActividad: return{
            ...state,
            actividad: action.payload
        }
        case types.modalActualizado:
            return {
                ...state,
                actualizado: true
            }
        case types.modalNoActuliazado:
            return {
                ...state,
                actualizado: false
            }
    
        default:
            return state
            break;
    }




}