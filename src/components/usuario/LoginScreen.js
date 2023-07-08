import React from 'react';
import { useDispatch } from 'react-redux';
import { login, startLogin } from '../../actions/usuario';
import { useForm } from '../../hooks/useForm';
import {  useState } from 'react';
import {  addNewCliente } from '../../actions/cliente';
import './login.css';

export const LoginScreen = () => {


    const dispatch = useDispatch();

    const [clienteValues, setClienteValues] = useState({
        cedula: '',
        nombre: '',
        apellido: '',
        direccion:'',
        ciudad: ''
    })

    const {cedula, nombre, apellido, direccion, ciudad} = clienteValues;
    const handleInputChange = ({target }) => {

        setClienteValues({
            ...clienteValues,
            [target.name]: target.value
        });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewCliente(clienteValues));
         
    }


    const [ formLoginValues, handleLoginInputChange ] = useForm({
        usuario: '',
        password: ''
    });

    const {usuario, password} = formLoginValues

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLogin(usuario, password))
        //dispatch(login())

    }


    return (
        <div className="container login-container">
                <div className='row'>

                
            
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Usuario"
                                name='usuario'
                                value={usuario}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group mt-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name='password'
                                value={password}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group d-grid gap-2 mt-2">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-8 col-xl-8 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={handleSubmit}>
                <div>
                    <input
                    type='text'
                    name='cedula'
                    className='form-control'
                    placeholder='Cedula'
                    autoComplete='off'
                    value={cedula}
                    onChange={handleInputChange}
                    />
                </div>

                <div className='mt-2'>
                    <input
                    type='text'
                    name='nombre'
                    className='form-control'
                    placeholder='Nombre'
                    autoComplete='off'
                    value={nombre} 
                    onChange={handleInputChange} 
                    />
                </div>

                <div className='mt-2'>
                    <input
                    type='text'
                    name='apellido'
                    className='form-control'
                    placeholder='Apellido'
                    autoComplete='off'
                    value={apellido} 
                    onChange={handleInputChange} 
                    />
                </div>

                <div className='mt-2'>
                    <input
                    type='text'
                    name='direccion'
                    className='form-control'
                    placeholder='Direccion'
                    autoComplete='off'
                     value={direccion} 
                     onChange={handleInputChange} 
                    />
                </div>

                <div className='mt-2'>
                    <input
                    type='text'
                    name='ciudad'
                    className='form-control'
                    placeholder='Ciudad'
                    autoComplete='off'
                    value={ciudad} 
                    onChange={handleInputChange} 
                    />
                </div>

                <div className="form-group d-grid gap-2 mt-2">

                    <button type='submit' className='btn btn-primary btn-block '>
                        Registrar
                    </button>
                </div>
            

        </form>
                </div>
                </div>
            
        </div>
    )
}