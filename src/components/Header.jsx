import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext';
import { Link } from 'react-router-dom';

import lang_image from '@assets/lang_image.png';
import lang_image_blue from '@assets/lang_image_blue.png';
import '@styles/Header.scss'

const Header = () => {
    const { language, changeLanguage } = useContext(AppContext);
    const [langImage, setlangImage] = useState(lang_image)

    const handleClick = () => {
        console.log('The actual language is: ' + language)
    }
    
    const change_to_blue = (dato) => {
        setlangImage(lang_image_blue)
    }
    
    const normalize = (data) => {
        setlangImage(lang_image)
    }
    let language_logo = <img src={langImage} alt="" />
    
    return (
        <nav className="Nav">
            <Link className="button-home" to="/">Home</Link>
            <button 
                type='button' 
                className='language-button' 
                onClick={handleClick}
                onMouseOver={change_to_blue}
                onMouseLeave={normalize}
            >
             {language_logo}   
            </button>
        </nav>
    )
}

export default Header;