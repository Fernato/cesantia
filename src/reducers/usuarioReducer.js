import { types } from "../types/types";

const initialState = {
 
   checking: false,

}

export const usuarioReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.usuarioLogin:
            return{
                ...state,
                checking: true,
                ...action.payload
            }   
        case types.usuarioChekingFinish:
            return{
                ...state,
                checking: false
            }
      
    
        default:
            return state
    }




}