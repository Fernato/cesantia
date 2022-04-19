import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    Home
                </Link>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink 
                        className={({isActive}) => 'nav-link ' + (isActive ? 'active' : '')}
                                                
                        to="/cliente"
                    >
                        Cliente
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => 'nav-link ' + (isActive ? 'active' : '')}
                        
                        to="/actividades"
                    >
                        Actividades
                    </NavLink>
                    <NavLink 
                        className={({isActive}) => 'nav-link ' + (isActive ? 'active' : '')}
                        
                        to="/presupuesto"
                    >
                        Presupuesto
                    </NavLink>
                    <NavLink 
                        className={({isActive}) => 'nav-link ' + (isActive ? 'active' : '')}
                        
                        to="/reporte"
                    >
                        Reportes
                    </NavLink>
                    
                </div>
                </div>
            </div>
        </nav>
       
    )
}