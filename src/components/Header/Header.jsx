import React, { useContext, useState } from 'react'
import './header.css';
import {CiSearch,CiSettings,CiShoppingCart,CiMenuFries,CiCircleRemove} from 'react-icons/ci';
import logo from '../../assets/logo/logo.png';
import SearchBar from '../SearchBar/Searchbar';

const Header = ({setCartOpen,activeSearchBar,searchBar}) => {
  const[enable,setEnable] = useState(false);
  // const searchB = useContext(SearchContext)

  const enableMobileMenu = ()=>{
    setEnable(enable => !enable);
  }

  const handleLinkclick = () =>{
    
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
                <a onClick={handleLinkclick} href="#Discover">Discover</a>
                <a href="#NewArrival">New Arrivals</a>
                <a href="#Clients">Clients</a>
                <a href="#Contact">Contact</a>
            </div>
            {enable?<div className="header-menu_links-mobile">
                <a href="#Home" id='active' className='active'>Home</a>
                <a href="#Discover">Discover</a>
                <a href="#NewArrival">New Arrivals</a>
                <a href="#Clients">Clients</a>
                <a href="#Contact">Contact</a>
            </div> : ''}
            <div className="header_buttons">
                <span onClick={()=> activeSearchBar(searchBar => !searchBar)}><CiSearch/></span>
                <span className='ciSetting'><CiSettings/></span>
                <span onClick={()=> {}}><CiShoppingCart/></span>
            </div>

        </div>
    </div>
  )
}

export default Header