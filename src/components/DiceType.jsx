import React from 'react';
import { Link } from 'react-router-dom';
import redDices from '../../assets/redDices.jpg';
import roleDices from '../../assets/roleDices.jpg';
import '../../styles/DiceType.scss';


const DiceType = () => {
    return (
        <main className="Choose-dice">
            <Link className="Type"  to='/normal'>
                <img src={redDices} alt=""/>
                <p>Normal</p>
            </Link>
            <Link className="Type" to="/role">
                <img src={roleDices} alt="" />
                <p>Role / Custom</p>
            </Link>
        </main>
    );
}

export default DiceType;