import React, { useState, useEffect } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom';

// images
import Logo from "../../assets/images/logo.png";
import mapIcon from "../../assets/images/mapicon.png";
import arrowIcon from "../../assets/images/Arrow.png";
import searchIcon from "../../assets/images/search-big-left.png";
import heartIcon from "../../assets/images/heart.png";
import notifIcon from '../../assets/images/bell-notification.png';
import langIcon from "../../assets/images/language.png";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100); // Simulate delay
    return () => clearTimeout(timeout);
  }, []); 
  
    return (
        <header>
<nav className={`animated ${isVisible ? 'visible' : ''}`}>
            <ul>
                <li className='logo'>
                <img width={136} height={41} src={Logo} alt="icon" />
                </li>
                <li>
                    <img width={26} height={26} src={mapIcon} alt="map" />
                    <p>Ташкент</p>
                    <img width={18} height={18} src={arrowIcon} alt="map" />
                </li>
            </ul>
          <ul>
            <li className='nav_item'>
                <img width={26} height={26} src={searchIcon} alt="" />
                </li>
            <li>
            <li>
                    <img width={26} height={26} src={heartIcon} alt="map" />
                    <p className='nav_number'>2</p>
                </li>
            </li>
            <li>
            <img width={26} height={26} src={notifIcon} alt="notif" />
            <p className='nav_number'>1</p>
            </li>
            <li className='lan'>
            <img width={32} height={32} src={langIcon} alt="lan" />
            <p>Py</p>
            </li>
            <li ><Link to="/login" className="enter_btn">
            Войти</Link></li>
          </ul>
          
        </nav>
        </header>
        
      );
}

export default Navbar
