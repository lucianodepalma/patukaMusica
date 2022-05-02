import React from 'react';
import '../assets/css/Libro.css';
import '../assets/css/Descargas.css';
import download from '../assets/images/download.png';
import document from '../assets/documents/la-fiesta-selvatica.pdf'

function Main() {
    return (
      <div className='main'>
          <div className='imagenFondo'>
            <div className='info-producto'>
                <div>
                    <div className='titulo'><span>¡Esta es la letra y acordes de la canción LA FIESTA SELVÁTICA!</span></div>
                    <div className='desc'><a href={document} target="_blank" rel='noreferrer' className='link'><img src={download} className='download'></img>Descargar archivo</a></div>
                </div>
            </div>
          </div>
      </div>
    );
  }
  
  export default Main;