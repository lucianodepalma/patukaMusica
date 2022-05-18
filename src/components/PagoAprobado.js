import React from 'react';
import '../assets/css/PagoAprobado.css';

function PagoAprobado() {
    return (
      <div className='main'>
          <div className='imagenFondo'>
            <div className='info-pago'>
                <span> ¡Muchas gracias por tu compra! </span>
                <span> Se enviará un mail con los datos del envío. </span>
            </div>
          </div>
      </div>
    );
  }
  
  export default PagoAprobado;