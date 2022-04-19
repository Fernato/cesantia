import { types } from "../types/types";

/*
    {
        cedula: '',
        nombre: '',
        apellido: '',
        direccion: '',
        ciudad: ''
    }
*/

const initialState = {
    cliente: []
}

export const clienteReducer = ( state = initialState, action ) => {

    switch (action.type) {
        case types.getCliente:
            return {
                ...state,
                cliente: [ ...action.payload ]
                
            }
        
        //case types.getUnCliente:
            //return{
               // cliente: action.payload
            //}

        
        case types.addCliente:
            return {
                ...state,
                cliente: [
                    ...state.cliente,
                    action.payload
                ]
            }

   
        default:
            return state;
    }

}