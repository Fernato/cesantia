import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk'
import { actividadReducer } from "../reducers/actividadReducer";
import { cargaReducer } from "../reducers/cargaReducer";
import { clienteReducer } from "../reducers/clienteReducer";
import { modalActPreReducer } from "../reducers/modalActPreReducer";
import {presupuestoReducer} from '../reducers/presupuestoReducer';
import {reporteReducer} from '../reducers/reporteReducer';
import { usuarioReducer } from "../reducers/usuarioReducer";
import { vistaReducer } from "../reducers/vistaReducer";



const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    actividad: actividadReducer,
    cliente: clienteReducer,
    presupuesto: presupuestoReducer,
    reporte: reporteReducer,
    vista: vistaReducer,
    modal: modalActPreReducer,
    carga: cargaReducer,
    usuario: usuarioReducer

})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)