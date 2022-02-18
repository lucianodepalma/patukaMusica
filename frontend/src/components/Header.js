import '../assets/css/Header.css';
import logo from '../assets/images/logo.png';
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//import {} from '@fortawesome/free-solid-svg-icons';

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
                <a href='https://www.instagram.com/patuka.musica/'><p>Instagram</p></a>
                <a href='https://localhost:3000'><p>Youtube</p></a>
                <a href='https://localhost:3000'><p>Mail</p></a>
            </div>
          </div>
      </div>
    );
  }
  
  export default Header;