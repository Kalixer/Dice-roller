import React from 'react';
import { Link } from 'react-router-dom';
import redDices from '../../assets/redDices.jpg';
import roleDices from '@assets/roleDices.jpg';
import '@styles/DiceType.scss';


const DiceType = () => {

    const descriptionNormal = <p>Ideal for people who don't want to complicate and want to use normal dices used in the majority of board games. You only have to choose how many dices you want to throw</p>
    const descriptionRole = <p>Custom dices are an excelent option for role games that needs an aditional thrill. Here you can choose how many dices and how many sides you want the dices to have</p>

    return (
        <main className="DiceType">
            <div className='containment'>
                <h1>Choose what kind of dice do you want</h1>
                    <div className='choose-dice'>
                        <div className='dice-type'>
                            <Link className="Type"  to='/normal'>
                                <img src={redDices} alt=""/>
                                <p>Normal</p>
                            </Link>
                            {descriptionNormal}
                        </div>
                        <div className='dice-type'>
                            <Link className="Type" to="/role">
                                <img src={roleDices} alt="" />
                                <p>Role / Custom</p>
                            </Link>
                            {descriptionRole}
                        </div>
                    </div>
            </div>
        </main>
    );
}

export default DiceType;