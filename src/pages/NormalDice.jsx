import React, { useState } from 'react';
import ButtonThrow from '@components/ButtonThrow';

import '@styles/global.css';

const NormalDice = () => {
    

    return (
        <>
            <div className="encabezado">
                <h1>Normal Dices</h1>
                <p className="e-paragraph">Choose how many dices you want</p>
            </div>
            <div className="input">
                <div className="options">
                    <div className="dices"> 
                        <p>How many dices</p>
                        <input type="text" id="dados_cantidad" />
                    </div>
                </div>
                <ButtonThrow/>
            </div>
        </>
    )
}

export default NormalDice;