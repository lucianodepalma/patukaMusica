import '../assets/css/Home.css';
import producto from '../assets/images/fotoProducto.png';

function Main() {
    return (
      <div className='main'>
          <div className='imagenFondo'>
            <div className='info-producto'>
              <div className='imagen-producto'>
                <img src={producto} className='producto' alt="producto" />
              </div>
              <div className='descripcion-producto'>
                <ul>
                  <il>Nombre</il>
                  <il>Descripcion</il>
                </ul>
              </div>
            </div>
          </div>
      </div>
    );
  }
  
  export default Main;