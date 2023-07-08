import React, { useState } from 'react'
import { Navbar } from '../UI/NavBar'
import { FormCliente } from './FormCliente'
import { TableCliente } from './TableCliente'
import { Carga } from '../../helpers/Carga'
import { useDispatch, useSelector } from 'react-redux'

export const ClienteScreen = () => {


    

    return (
        <div className='container col-9 mt-5'>

        <h2>CLIENTES</h2>
        <hr/>
        
        <div className='row'>
            <div className='col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-5'>
                <FormCliente />
            </div>
            <div className='col-sm-12 col-md-6 col-lg-9 col-xl-9'>
                <TableCliente />
            </div>
            
            
        </div>
        <Carga/>
    </div>
    )
}
