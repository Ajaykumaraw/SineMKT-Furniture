import React, { useState } from 'react'
import './header.css';
import {CiSearch,CiSettings,CiShoppingCart,CiMenuFries,CiCircleRemove} from 'react-icons/ci';
import logo from '../../assets/logo/logo.png';

const Header = () => {
  const[enable,setEnable] = useState(false);

  const enableMobileMenu = ()=>{
    setEnable(enable => !enable);
  }
  return (
    <div className='header_container section_padding'>
        <div className='header-content'>
            <div className="header-logo">
               Sine<span className='header-logo-text2'>Mkt</span>.
            </div>
            <div className='mobile-menu-btn' onClick={enableMobileMenu}>{enable?<CiCircleRemove></CiCircleRemove>:<CiMenuFries></CiMenuFries>}</div>
            <div className="header-menu_links">
                <a href="#Home" id='active' className='active'>Home</a>
                <a href="#NewArrival">New Arrival</a>
                <a href="#clients">Features</a>
                <a href="#Home">Blog</a>
                <a href="#Home">Contact</a>
            </div>
            {enable?<div className="header-menu_links-mobile">
                <a href="#Home" id='active' className='active'>Home</a>
                <a href="#Home">New Arrival</a>
                <a href="#Home">Features</a>
                <a href="#Home">Blog</a>
                <a href="#Home">Contact</a>
            </div> : ''}
            <div className="header_buttons">
                <span><CiSearch/></span>
                <span className='ciSetting'><CiSettings/></span>
                <span><CiShoppingCart/></span>
            </div>

        </div>
    </div>
  )
}

export default Header