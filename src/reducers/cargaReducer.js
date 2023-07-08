import { types } from "../types/types";

/*
    {
        cargando: false
    }
*/

const initialState = {
    cargando: false
}

export const cargaReducer = ( state = initialState, action ) => {

    switch (action.type) {
        case types.cargaCargando:
            return {
                ...state,
                cargando: true  
            }
        case types.cargaCargado:
            return {
                ...state,
                cargando: false
            }
    
   
        default:
            return state;
    }

}