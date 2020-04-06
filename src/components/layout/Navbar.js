import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignOutLinks from './SignedOutLinks';

const NavBar = () => {
    return (
        <nav className="navbar-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Scooby Plan</Link>
                <SignedInLinks />
                <SignOutLinks />
            </div>
        </nav>
    )
}

export default NavBar