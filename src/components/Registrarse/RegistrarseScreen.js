import React from 'react'
import { FormCliente } from '../Clientes/FormCliente'

export default function RegistrarseScreen() {
  return (
    <div className="container col-9 mt-5">
        <h1>Registrarse</h1>
        <hr/>
        <div className="col">
            <FormCliente />
        </div>
    </div>
  )
}
