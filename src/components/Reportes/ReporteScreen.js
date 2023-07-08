import React from 'react'
import { Carga } from '../../helpers/Carga'
import { DatosCliente } from './DatosClienteReporte'
import { TablaReporte } from './TablaReporte'

export const ReporteScreen = () => {
    return (
        <div className='container col-9 mt-5'>
            <h2>Reportes</h2>
            <hr/>

            <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-3 col-xl-3'>
                    <DatosCliente />

                </div>
                <div className='col-sm-12 col-md-6 col-lg-9 col-xl-9'>
                    <TablaReporte />

                </div>

            </div>
            <Carga />


        </div>
    )
}
