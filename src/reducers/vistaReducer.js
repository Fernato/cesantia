import { types } from "../types/types";

const initialState = {
 
    presupuesto:{}
}

export const vistaReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.vistaGetUnPresupuesto:
            return{
                ...state,
                presupuesto: action.payload
            }   
        
        case types.vistaGetActividad:
            return{
                ...state,
                listActividades:[
                    ...state.listActividades,
                    action.payload
                ]
            }
       
    
        default:
            return state
            break;
    }




}