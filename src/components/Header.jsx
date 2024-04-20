import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import logo from '../images/logo.jpg'; // Adjusted path to logo.png

const Header = () => {
    return (
        <header>
            <div className="container flex-row">
                <div className="header_logo">
                    <Link to="/">
                        <img src={logo} alt="Schedule Genius Logo" />
                    </Link>
                </div>
                <nav>
                    <ul className="header_menu flex-row">
                        {/* Replace anchor tag with Link */}
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/features">Features</Link>
                        </li>
                        <li>
                            <Link to="/support">Support</Link>
                        </li>
                    </ul>
                </nav>
                <div className="right flex-center">
                    <Link to="/signin" className="btn btn-secondary">Sign In</Link>
                    <div className="menu-btn">
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
