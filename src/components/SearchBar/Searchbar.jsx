import React from "react";
import './searchbar.css';

const SearchBar = () =>{

    setTimeout(() => {
        setInterval(() => {
            
        }, 500);
    }, 3000);

    return ( 
        <div className="header_searchBar">
            <input placeholder="search furniture" className="header__search-input" type="text" />
        </div>
    )
}

export default SearchBar;