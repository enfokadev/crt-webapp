import React from 'react';
import './Navbar.css';
import logo from '../assets/logo_crt.png';

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <div className="navbar glass-effect liquid-glass">
                <div className="logo">
                    <a href="#hero">
                        <img src={logo} alt="CRT Logo" className="brand-logo" />
                    </a>
                </div>
                <div className="nav-actions">
                    <a href="#contact" className="btn-premium btn-primary btn-cta-large">Contacto</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
