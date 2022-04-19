import React from 'react';
import { FormActividades } from './FormActividades';
import { TablaActividades } from './TableActividades';


export const ActividadesScreen = () => {  
    return (
        <div className='container'>
            <h2>ACTIVIDADES</h2>
            <hr/>
            <div className='row'>
                <div className='col'>
                    <FormActividades />
                </div>
                <div className='col'>
                    <TablaActividades />
                </div>
                
                

            </div>
        </div>
    )
};
