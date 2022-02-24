import React from 'react';
import { Link } from 'react-router-dom';
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
                    <il className='nombre'>La Fiesta Selvática</il>
                    <il className="descripcion">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</il>
                  </ul>
                </div>
              <Link to='/formulario-compra'><div className='boton-compra'>Comprar</div></Link>
              </div>
            </div>
          </div>
      </div>
    );
  }
  
  export default Main;