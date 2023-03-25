import React from 'react';
import ButtonThrow from '@components/ButtonThrow';

import '@styles/RoleDice.scss';

const RoleDice = () => {

    return (
        <>
            <div className="encabezado">
                <h1>Role Dices</h1>
                <p className="e-paragraph">Choose how many dices you want</p>
            </div>
            <div className="input">
                <div className="options">
                    <div className="dices"> 
                        <p>How many dices</p>
                        <input type="text" id="dados_cantidad" />
                    </div>
                    <div className="range">
                        <p>How many sides</p>
                        <input type="text" id="dados_rango" />
                    </div>
                </div>
                <ButtonThrow/>
            </div>
        </>
    )
}

export default RoleDice;