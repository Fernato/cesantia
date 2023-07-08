import { types } from "../types/types";

export const openModalActPre  = () =>({type: types.modalOpen})

export const closeModalActPre = () =>({type: types.modalCLose})

export const updatedModalActPre = () => ({type: types.modalActualizado})

export const noUpdatedModalActPres = () => ({type: types.modalNoActuliazado})

export const getAct = (actividad) =>({
    type: types.modalActividad,
    payload: actividad
})

export const getCli = (cliente) => ({
    type: types.modalCliente,
    payload: cliente
})



