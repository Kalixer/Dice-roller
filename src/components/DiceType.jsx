import React from 'react';
import { Link } from 'react-router-dom';
import redDices from '../../assets/redDices.jpg';
import roleDices from '@assets/roleDices.jpg';
import '@styles/DiceType.scss';


const DiceType = () => {
    return (
        <main className="DiceType">
            <div className='containment'>
                <h1>Choose what kind of dice do you want</h1>
                    <div className='choose-dice'>
                        <Link className="Type"  to='/normal'>
                            <img src={redDices} alt=""/>
                            <p>Normal</p>
                        </Link>
                        <Link className="Type" to="/role">
                            <img src={roleDices} alt="" />
                            <p>Role / Custom</p>
                        </Link>
                    </div>
            </div>
        </main>
    );
}

export default DiceType;