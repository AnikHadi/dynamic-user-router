import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const activeStyle = {
        color: 'red',
        fontWeight: '900'
    }
    return (
        <div className='nav-bar'>
            <nav>
                <NavLink activeStyle={activeStyle} to='/' >Home</NavLink>
                <NavLink activeStyle={activeStyle} to='/service' >Service</NavLink>
                <NavLink activeStyle={activeStyle} to='/user' >Single User</NavLink>
                <NavLink activeStyle={activeStyle} to='/about' >About</NavLink>
            </nav>
        </div>
    );
};

export default Header;