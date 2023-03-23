import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header.scss'

const Header = () => {

    return (
        <nav className="Nav">
            <Link className="button-home" to="/">Home</Link>
        </nav>
    )
}

export default Header;