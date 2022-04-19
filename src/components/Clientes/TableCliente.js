import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getClientes, startDeleteCliente } from '../../actions/cliente';

export const TableCliente = () => {

    const dispatch = useDispatch();
    const {cliente} = useSelector(state => state.cliente)

   
    const handleDelete = (id) => {
        dispatch(startDeleteCliente(id));

    }
    
   useEffect(() => {
    let isApiSubscribed =true;
    if(isApiSubscribed){
        dispatch(getClientes());
    }
     return () => {
        isApiSubscribed = false;
     }
   }, [dispatch])


    return(
        <div>
            <h1>Tabla</h1>
        
            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th>Cedula</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Direccion</th>
                        <th>Ciudad</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>

                    {cliente.map(cli => {
                        return(
                            <tr key={cli._id}>
                                <td>{cli.cedula}</td>
                                <td>{cli.nombre}</td>
                                <td>{cli.apellido}</td>
                                <td>{cli.direccion}</td>
                                <td>{cli.ciudad}</td>
                                <td>
                                    <button
                                        className='btn btn-secondary'
                                    >
                                        Editar
                                    </button>
                                </td>
                                <td>
                                    <button 
                                        className='btn btn-danger'
                                        onClick={()=>handleDelete(cli._id)}
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                            
                        );
                    })

                    }
                </tbody>

                
            </table>

        </div>
        
        
    )


};

