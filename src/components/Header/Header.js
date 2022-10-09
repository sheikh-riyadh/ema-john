import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <div className="logo">
                <h1>Ema-John</h1>
            </div>
            <div className='menu-items'>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default Header;