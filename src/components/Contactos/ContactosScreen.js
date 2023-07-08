import React from 'react'



export const ContactosScreen = () => {


    return (
      <div className="container mt-5">
        <h1>Contactanos</h1>
        <hr/>
        <div className='row contactos'>

            <a className='iconos col-sm-12 col-md-12 col-lg-12 col-xl-3 mt-5' href='https://www.facebook.com/profile.php?id=100090324523385'> <i className="fa-brands fa-facebook fa-2kl"></i> FACEBOOK </a>
            <a className='iconos col-sm-12 col-md-12 col-lg-12 col-xl-3 mt-5' href='https://www.instagram.com/arquitecturaferney/'><i className="fa-brands fa-instagram"></i> INSTAGRAM </a>
            <a className='iconos col-sm-12 col-md-12 col-lg-12 col-xl-3 mt-5' href='https://api.whatsapp.com/send?phone=573046680812&text=Hola%20espero%20te%20encuentres%20bien%2C%20en%20que%20puedo%20ayudarte'><i className="fa-brands fa-whatsapp"></i> WHATSAPP</a>   
        </div>
      </div>
    )
};

