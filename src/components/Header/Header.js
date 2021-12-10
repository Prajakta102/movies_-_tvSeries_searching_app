import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <span onClick={()=>window.scroll(0,0)} className="header">movies & tv-series app</span>
    );
}

export default Header;
