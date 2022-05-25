import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Header.css';
import logo from '../assets/images/logo-removebg-preview.png';
import NavBar from './NavBar';
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//import {} from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
      <div className='header'>
          <div className='logo-div'>
            <Link to={{ pathname: "/" }}><img src={logo} className='logo' alt="logo" /></Link>
          </div>
          <NavBar/>
      </div>
    );
  }
  
  export default Header;