import React from 'react'
import './header.css';
import {CiSearch,CiSettings,CiShoppingCart} from 'react-icons/ci';
import logo from '../../assets/logo/logo.png';

const Header = () => {
  return (
    <div className='header_container section_padding'>
        <div className='header-content'>
            <div className="header-logo">
               Sine<span className='header-logo-text2'>Mkt</span>.
            </div>
            <div className="header-menu_links">
                <a href="#Home" id='active' className='active'>Home</a>
                <a href="#Home">New Arrival</a>
                <a href="#Home">Features</a>
                <a href="#Home">Blog</a>
                <a href="#Home">Contact</a>
            </div>
            <div className="header_buttons">
                <span><CiSearch/></span>
                <span><CiSettings/></span>
                <span><CiShoppingCart/></span>
            </div>

        </div>
    </div>
  )
}

export default Header