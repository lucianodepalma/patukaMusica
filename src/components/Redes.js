import React from 'react';
import '../assets/css/Libro.css';
import '../assets/css/Redes.css';
import insta from '../assets/images/insta.png';
import youtube from '../assets/images/youtube.png';

function Main() {
    return (
      <div className='main'>
          <div className='imagenFondo'>
            <div className='info-producto'>
                <div className='redes'>
                    <div className='titulo'><span>¡Estas son nuestras redes sociales!</span></div>
                    <div className='iconos'><a href='https://www.instagram.com/patuka.musica/' target="_blank" className='insta' rel='noreferrer'><img src={insta} alt="insta"></img></a>
                    <a href='https://www.youtube.com/channel/UC_RueoXj-njMko6uC50A7mQ' target="_blank" className='youtube' rel='noreferrer'><img src={youtube} alt="youtube"></img></a></div>
                </div>
            </div>
          </div>
      </div>
    );
  }
  
  export default Main;