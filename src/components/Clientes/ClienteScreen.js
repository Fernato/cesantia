import React from 'react'
import { FormCliente } from './FormCliente'
import { TableCliente } from './TableCliente'

export const ClienteScreen = () => {

    
    

    return (
        <div className='container'>

        <h2>CLIENTES</h2>
        <hr/>

        <div className='row'>
            <div className='col'>
                <FormCliente />
            </div>
            <div className='col'>
                <TableCliente />
            </div>
            
            
        </div>

    </div>
    )
}
