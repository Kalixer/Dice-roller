import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Link } from 'react-router-dom';
import '@styles/Header.scss'

const Header = () => {
    const { language, changeLanguage } = useContext(AppContext);

    const handleClick = () => {
        console.log('The actual language is: ' + language)
    }

    return (
        <nav className="Nav">
            <Link className="button-home" to="/">Home</Link>
            <button type='button' onClick={handleClick}>language</button>
        </nav>
    )
}

export default Header;