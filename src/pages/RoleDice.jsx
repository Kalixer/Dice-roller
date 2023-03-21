import React, { useState } from 'react';
import Resultado from '../components/Resultado';
import '@styles/RoleDice.scss';

const NormalDice = () => {
    const [showComponent, setShowComponent] = useState(false); // comienza en estado false

    const handleClick = () => {
      setShowComponent(!showComponent); // Al hacer click cambia el estado al hacerle un NOT al estado anterior
    }

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
                <button type="button" id="boton" onClick={handleClick}>Throw dices</button>
            </div>
            {showComponent && <Resultado />}
        </>
    )
}

export default NormalDice;