// src/components/NavBar/NavBar.jsx

// src/components/NavBar/NavBar.jsx

import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/">Smith College Class of 2016</Link>
            </div>
            <div className="navbar-right">
                <Link to="/volunteer">We Need You</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
};

export default NavBar;
