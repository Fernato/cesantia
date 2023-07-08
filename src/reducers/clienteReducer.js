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
    clientes: []
}

export const clienteReducer = ( state = initialState, action ) => {

    switch (action.type) {
        case types.getCliente:
            return {
                ...state,
                clientes: [ ...action.payload ]
                
            }
 /*       
        case types.getUnCliente:
        return{
                unCliente: action.payload
            }

   */      
        case types.updateCliente:
            return {
                ...state,
                clientes: state.clientes.map(
                    c=> ( c._id === action.payload._id) ? action.payload : c
                )
            }

        case types.addCliente:
            return {
                ...state,
                clientes: [
                    ...state.cliente,
                    action.payload
                ]
            }

   
        default:
            return state;
    }

}