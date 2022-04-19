import moment from "moment"

export const pruebaPresupuestos = (presupuestos = []) =>{

    return presupuestos.map(
        (pre) =>({
            ...pre,
            fecha: moment(pre.fecha).toISOString().substring(0,10)
        })
    );

}