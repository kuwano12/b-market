import React from 'react';
import './header.styles.scss';
import { Link } from "react-router-dom";


const Header = () => (
    <div className='header'>
        <Link to="/">
            Homepage
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                ADMIN
            </Link>
        </div>
    </div>
);

export default Header;