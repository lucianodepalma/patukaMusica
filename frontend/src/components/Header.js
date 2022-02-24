import React from 'react';
import '../assets/css/Header.css';
import logo from '../assets/images/logo.png';
import NavBar from './NavBar';
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//import {} from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
      <div className='header'>
          <div className='logo-div'>
            <img src={logo} className='logo' alt="logo" />
          </div>
          <NavBar/>
      </div>
    );
  }
  
  export default Header;