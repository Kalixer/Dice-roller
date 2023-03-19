import React from 'react';
import '@styles/global.css';

const NormalDice = () => {
    return (
        <>
            <div className="encabezado">
                <h1>Dice roller</h1>
                <p className="e-paragraph">Choose how many dices you want</p>
            </div>
            <div className="input">
                <div className="options">
                    <div className="dices"> 
                        <p>How many dices</p>
                        <input type="text" id="dados_cantidad" />
                    </div>
                </div>
                <button type="button" id="boton">Throw dices</button>
            </div>
            <div id="main">
                <p className="result" id="result"></p>
                <div className="output" id="output"></div>
            </div>
        </>
    )
}

export default NormalDice;