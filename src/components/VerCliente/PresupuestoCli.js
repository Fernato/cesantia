import React, { useEffect, useState } from 'react'

import { MontoCliente } from '../Presupuesto/MontoCliente';
import { TablaPresupuesto } from '../Presupuesto/TablaPresupuesto';



export const PresupuestoCli = () => {

    return (

        <div className='row mt-5'>
            <h2>PRESUPUESTO</h2>
            <hr/>
            <div className='row mt-5'>
                <div className='col-sm-12 col-md-6 col-lg-3 col-xl-3'>
                    <MontoCliente />
                    
                </div>
                <div className='col-sm-12 col-md-6 col-lg-9 col-xl-9'>
                    <TablaPresupuesto />
                </div>
                
                
            </div>   
        </div>

    )
}
