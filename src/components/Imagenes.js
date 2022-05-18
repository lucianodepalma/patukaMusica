import React, { useState } from 'react';
import producto1 from '../assets/images/DSC_0001-removebg-preview (1).png';
import producto2 from '../assets/images/DSC_0004-removebg-preview.png';
import producto3 from '../assets/images/DSC_0035-removebg-previewd.png';
import producto4 from '../assets/images/DSC_0029-removebg-preview.png';

function Imagenes () {

    const [imagenes, setImagenes] = useState(producto1)

    function cambiarImagen(imagen) {
       return setImagenes (imagen)
    }
    
    return(
        <div className='imagen-producto'>
            <div className='imagen-principal'>
                <img src={imagenes} alt="producto" />
            </div>
            <div className='imagenes-retrato'>
              <div onMouseEnter={() => cambiarImagen(producto1)}><div><img src={producto1} alt="producto" /></div></div>
              <div onMouseEnter={() => cambiarImagen(producto2)}><div><img src={producto2} alt="producto" /></div></div>
              <div onMouseEnter={() => cambiarImagen(producto3)}><div><img src={producto3} alt="producto" /></div></div>
              <div onMouseEnter={() => cambiarImagen(producto4)}><div><img src={producto4} alt="producto" /></div></div>
            </div>
        </div>
    )
}
export default Imagenes;