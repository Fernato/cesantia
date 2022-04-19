import React from 'react'
import { DatosCliente } from './DatosClienteReporte'
import { TablaReporte } from './TablaReporte'

export const ReporteScreen = () => {
    return (
        <div className='container'>
            <h2>Reportes</h2>
            <hr/>

            <div className='row'>
                <div className='col'>
                    <DatosCliente />

                </div>
                <div className='col'>
                    <TablaReporte />

                </div>

            </div>



        </div>
    )
}
