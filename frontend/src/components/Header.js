import '../assets/css/Header.css';
import logo from '../assets/images/Capturadepantalla2021-12-01171347.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
      <div className='header'>
          <div>
            <img src={logo} className='logo' alt="logo" />
          </div>
          <div>
            <h1 className='titulo'>Patuka Música</h1>
          </div>
          <div className='login'>
            <div className='loginIcon'>
                <FontAwesomeIcon icon={faUserCircle}/>
            </div>
            <div className='loginButtons'>
                <p>Login</p>
                <p>Registro</p>
            </div>
          </div>
      </div>
    );
  }
  
  export default Header;