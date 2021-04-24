import React from 'react';
import './header.styles.scss';
import { Link } from "react-router-dom";
import { auth } from '../../firebase/firebase.utils';


const Header = () => (
    <div className='header'>
        <Link to="/">
            Liste des articles
        </Link>
        <div className="options">
            <Link className="option" to="/admin">
                ADMIN
            </Link>
            <div className="option" onClick={() => auth.signOut()}>Déconnexion</div>

        </div>
    </div>
);

export default Header;