import './Header.scss'
import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
    <header className='header'>
        <div className="container">
            <div className="row">
                <Link className='header__logo' to="/">Drink vodka, Play Dotka</Link></div>
            </div>
    </header>
)
export default Header;
