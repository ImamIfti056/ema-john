import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <div className="header-img">
                <img className='logo' src={logo} alt="logo" />
            </div>
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Manage Orders</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
            </nav>
        </div>
    );
};

export default Header;