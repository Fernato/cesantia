import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch"
import { types } from "../types/types";

export const startLogin = (usuario, password) => {
    return async(dispatch) =>{

        const respuesta = await fetchConToken('login', { usuario, password }, 'POST');
        const body = await respuesta.json();

        if(body.ok){
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({
                uid: body.uid
            }))
        }else {
            Swal.fire('Error', body.msg, 'error')
        }

    }
}

export const login = ( usuario ) => ({
    type: types.usuarioLogin,
    payload: usuario

})

export const startChecking = () => {
    return async (dispatch) =>{

        const respuesta = await fetchConToken('login/renew');
        const body = await respuesta.json();

        if(body.ok){
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({
                uid: body.uid
            }))
        }else {
            dispatch(checkingFinish())
        }

    }
}

export const checkingFinish = () => ({ type: types.usuarioChekingFinish})