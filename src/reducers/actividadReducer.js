import { types } from "../types/types";
/*
    {
        descripcion: '',
        unidad: '',
        precio_unitario: '',
        cantidad_min: '',
        cantidad_max: ''
    }

*/

const initialState = {
    actividades: [],
    id: 0
 
}


export const actividadReducer = (state = initialState, action ) => {

    switch (action.type) {
        case types.AddNewActividad:
            return {
                ...state,
                actividades: [
                    ...state.actividades,
                    action.payload
                ]
            }
        
        case types.getActividad:
            return{
                ...state,
                actividades: [ ...action.payload ]
            }
        case types.idActividad:
            return{
                ...state,
                id: action.payload
            }
       
        default:
            return state
            break;
    }
}