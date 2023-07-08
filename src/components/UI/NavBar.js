import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { checkingFinish } from '../../actions/usuario'

export const Navbar = () => {

    const dispatch = useDispatch()
    const Logout = () => {
        dispatch(checkingFinish())
    }

    const {checking} = useSelector(state => state.usuario)

    if(checking) return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    Home
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                        <div className='nav-item'>
                            <NavLink 
                                className={({isActive}) => 'nav-link ' + (isActive ? 'active' : '')}
                                                        
                                to="app/cliente"
                            >
                                Clientes
                            </NavLink>
                        </div>
                        <div className='nav-item'>
                            <NavLink 
                                className={({isActive}) => 'nav-link ' + (isActive ? 'active' : '')}
                                
                                to="app/actividades"
                            >
                                Actividades
                            </NavLink>
                        </div>
                        {/* <div className='nav-item'>
                            <NavLink 
                                className={({isActive}) => 'nav-link ' + (isActive ? 'active' : '')}
                                
                                to="app/presupuesto"
                            >
                                Presupuesto
                            </NavLink>
                        </div>
                        <div className='nav-item'>
                            <NavLink 
                                className={({isActive}) => 'nav-link ' + (isActive ? 'active' : '')}
                                
                                to="app/reporte"
                            >
                                Reportes
                            </NavLink>
                        </div> */}
                        <div className='nav-item'>
                            <NavLink 
                                className={({isActive}) => 'nav-link ' + (isActive ? 'active' : '')}
                                onClick={Logout}
                                
                                to="usuario/login"
                            >
                                Logout
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
       
    )

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">

            <Link 
                className="navbar-brand" 
                to="/"
            >
                Home
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
                <div className='nav-item'>
                    <NavLink 
                        className={({isActive}) => 'nav-link ' + (isActive ? 'active' : '')}
                                                
                        to="/proyectos"
                    >
                        Proyectos
                    </NavLink>
                </div>
                <div className='nav-item'>
                    <NavLink 
                        className={({isActive}) => 'nav-link ' + (isActive ? 'active' : '')}
                        
                        to="/contactos"
                    >
                        Constactos
                    </NavLink>
                </div>
                <div className='nav-item'>
                    <NavLink 
                        className={({isActive}) => 'nav-link ' + (isActive ? 'active' : '')}
                        
                        to="/registrarse"
                    >
                        Registrarse
                    </NavLink>
                </div>
                
            
                <div className='nav-item'>
                    <NavLink 
                        className={({isActive}) => 'nav-link ' + (isActive ? 'active' : '')}
                        
                        to="usuario/login"
                    >
                        Login
                    </NavLink>
                </div>
                </div>
            </div>
        </div>
    </nav>

    )
}