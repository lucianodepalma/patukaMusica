import '../assets/css/Header.css';
import logo from '../assets/images/logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
      <div className='header'>
          <div className='logo-div'>
            <img src={logo} className='logo' alt="logo" />
          </div>
          <div className='titulo-div'>
            <h1 className='titulo'>Patuka Música</h1>
          </div>
          <div className='login'>
            <div className='loginButtons'>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>LinkedIn</p>
            </div>
          </div>
      </div>
    );
  }
  
  export default Header;