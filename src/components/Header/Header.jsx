import React, { useState } from 'react';
import logo from '../../assets/img/logo.png';
import './Header.css';
import { Link } from "react-router-dom";

function Header() {
    const [backgroundColor, setBackgroundColor] = useState('--color-naranja');

    const handleButtonClick = () => {
        if (backgroundColor === '--color-celeste') {
            setBackgroundColor('--color-naranja');
        } else {
            setBackgroundColor('--color-celeste');
        }
    };

    return (
        <div className="header-nav">
            <header>
                <Link to="/">
                <div className='header-nav-img'>
                <img src={logo} alt="logo" />
                </div>
                </Link>
                <Link to="/login">
                    <button
                        className="btn-iniciar-sesion"
                        style={{ backgroundColor: `var(${backgroundColor})` }}
                        onClick={handleButtonClick}
                    >
                        Iniciar sesión
                    </button>
                </Link>
            </header>
        </div>
    );
}

export default Header;
