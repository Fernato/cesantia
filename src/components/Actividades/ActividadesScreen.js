import React from 'react';
import { FormActividades } from './FormActividades';
import { TablaActividades } from './TableActividades';
import { Carga } from '../../helpers/Carga';


export const ActividadesScreen = () => {  
    return (
        <div className='container col-9 mt-5'>
            <h2>ACTIVIDADES</h2>
            <hr/>
            <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-5'>
                    <FormActividades />
                </div>
                <div className='col-sm-12 col-md-6 col-lg-9 col-xl-9'>
                    <TablaActividades />
                </div>
                
                

            </div>
            <Carga/>
        </div>
    )
};
