import React from 'react';
import './header.styles.scss';
import { Link } from "react-router-dom";
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';



const Header = ({currentUser}) => (
    <div className='header'>
        <Link to="/">
            Liste des articles
        </Link>
        <div className="options">
            <Link className="option" to="/admin">
                ADMIN
            </Link>
            {
                currentUser ? 
                <div className="option" onClick={() => auth.signOut()}>Déconnexion</div>
                :
                null
            }

        </div>
    </div>
);

const mapStateToProps = ({user: {currentUser}}) => ({
    currentUser
})
export default connect (mapStateToProps)(Header);