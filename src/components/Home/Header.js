import React from 'react';
import Navigation from './Navigation.js';
import './Header.css';


const Header = (props) =>{
    return(
       <header className="main-header">
            <h1>Aptallik Testi</h1>
            <Navigation/>
       </header>
    )
}

export default Header;