import React from 'react'
import karolay from '../../img/proyectos/karolay.jpg'
import clarines from '../../img/proyectos/clarines.jpg'


export const ProyectosScreen = () => {


    return (
      <div className="container mt-5">
        <h1>Proyectos</h1>
        <hr/>
        <div className='row'>
            <article className='col'>
            <div className="card">
                <img src={karolay} className="card-img-top" alt="karolay"/>
                <div className="card-body">
                    <h4 className="card-title">Proyecto Karolay</h4>
                    <h5>Guayabal</h5>
                    <p className="card-text">Este proyecto cuenta con habitaciones para alquilar, viviendas y un gran patio para recreacion con piscina</p>
                </div>
                </div>
            </article>
            <article className='col'>
            <div className="card">
                <img src={clarines} className="card-img-top" alt="karolay"/>
                <div className="card-body">
                    <h4 className="card-title">Proyecto Clarines</h4>
                    <h5>Provenir</h5>
                    <p className="card-text">Este proyecto cuenta con 4 habitaciones, 2 Salas y una gran terraza cerca al mar</p>
                </div>
                </div>
            </article>
        </div>
      </div>
    )
};