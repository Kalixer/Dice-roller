import React from 'react';
import redDices from '../../assets/redDices.jpg';
import roleDices from '../../assets/roleDices.jpg';
import '../../styles/DiceType.scss';


const DiceType = () => {
    return (
        <main className="Choose-dice">
            <div className="Type">
                <img src={redDices} alt="" />
                <p>Normal</p>
            </div>
            <div className="Type">
                <img src={roleDices} alt="" />
                <p>Role / Custom</p>
            </div>
        </main>
    );
}

export default DiceType;