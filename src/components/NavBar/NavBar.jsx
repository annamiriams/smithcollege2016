// src/components/NavBar/NavBar.jsx

import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    }

    return (
        <>
            <nav className="navbar">
                <div className="navbar-left">
                    <Link to="/" onClick={closeMenu}>Smith College Class of 2016</Link>
                </div>

                <div className="navbar-burger" onClick={toggleMenu}>
                    <span className="hamburger">&#9776;</span> {/* Unicode hamburger */}
                </div>

                <div className="navbar-right">
                    <Link to="/details">Reunion Details</Link>
                    <Link to="/volunteer">Volunteer</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </nav>

            {/* Fullscreen mobile menu */}
            <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={closeMenu}>
                    &times;
                </button>
                <ul>
                    <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                    <li><Link to="/details" onClick={closeMenu}>Reunion Details</Link></li>
                    <li><Link to="/volunteer" onClick={closeMenu}>Volunteer</Link></li>
                    <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                    <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                </ul>
            </div>

            
        </>
    );
};

export default NavBar;
