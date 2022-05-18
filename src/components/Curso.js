import React from 'react';
import '../assets/css/Libro.css';
import Imagenes from './Imagenes';

function Main() {
    return (
      <div className='main'>
          <div className='imagenFondo'>
            <div className='info-producto'>
              <Imagenes/>
              <div className='descripcion-producto'>
                <div>
                  <ul>
                    <il className='nombre'>Soy Curso</il>
                    <il className="descripcion">Este es un libro sensorial que a la vez lo acompaña un código QR para reproducir video clip con la música. Además contiene unos dibujos para pintarlos libremente y acompañar la canción con ellos.</il>
                  </ul>
                </div>
              <div><button className='boton-compra'>Comprar</button></div>
              </div>
            </div>
          </div>
      </div>
    );
  }
  
  export default Main;