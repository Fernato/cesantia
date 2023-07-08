import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getClientes, startDeleteCliente} from '../../actions/cliente';
import { getCli, openModalActPre } from '../../actions/modalActPre';
import { Carga } from '../../helpers/Carga';
import { EditCliente } from './EdtiCliente';


export const TableCliente = () => {


    const dispatch = useDispatch();
    const {clientes} = useSelector(state => state.cliente)

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);


    useEffect(()=>{
        setResults(clientes)
    },[clientes])
       
    const handleDelete = (id) => {
        dispatch(startDeleteCliente(id));

    }

    const handleGetCliente = (cli) => {
            
        dispatch(openModalActPre())
        dispatch(getCli(cli));
        
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

  

    const handleChange = (event) => {
        const inputValue = event.target.value;
        setQuery(inputValue);
    
        // Verificar si la búsqueda es numérica
        const isNumeric = !isNaN(inputValue);
    
        // Realizar la búsqueda en función del tipo de dato ingresado
        const filteredResults = clientes.filter((item) => {
          if (isNumeric) {
            // Realizar búsqueda numérica
            return item.cedula.includes(inputValue);
          } else {
            // Realizar búsqueda de cadena de texto
            return item.nombre.toLowerCase().includes(inputValue.toLowerCase());
          }
        });
    
        setResults(filteredResults);

    };


    return(
        <div>
            <div className='table-responsive'>
            <div>
                <input type="text" value={query} onChange={handleChange} placeholder="Buscar..." />
            </div>
            <table className='table table-striped table-hover '>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Ver</th>
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

                    {results.map((cli, index) => {
                        return(
                            <tr key={cli._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <Link 
                                        className='btn btn-info'
                                        to={`${cli._id}`}
                                        /* onClick={()=> getPresupuest(pre)} */
                                    >
                                        Ver
                                    </Link>
                                </td>
                                <td>{cli.cedula}</td>
                                <td>{cli.nombre}</td>
                                <td>{cli.apellido}</td>
                                <td>{cli.direccion}</td>
                                <td>{cli.ciudad}</td>
                                <td>
                                    <button
                                        className='btn btn-secondary'
                                        onClick={()=>handleGetCliente(cli)}
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
            <EditCliente />
            <Carga />
                 
        </div>
        
        
    )


};

