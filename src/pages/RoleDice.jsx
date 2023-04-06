import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import ButtonThrow from '@components/ButtonThrow';

import '@styles/RoleDice.scss';

const RoleDice = () => {
    const { language } = useContext(AppContext)

    let title
    let instructions
    let amount
    let sides

    if (language == 'english') {
        title = 'Role Dices'
        instructions = 'Choose how many dices and how many sides you want the dices to have'
        amount = 'Choose how many dices'
        sides = 'Choose how many sides'
    }
    if (language == 'spanish') {
        title = 'Dados de Rol'
        instructions = 'Elije cuantos dados quieres y cuantas caras quieres que tenga cada dado'
        amount = 'Cuántos de dados'
        sides = 'Caras por dado'
    }

    return (
        <>
            <div className="encabezado">
                <h1>{title}</h1>
                <p className="e-paragraph">{instructions}</p>
            </div>
            <div className="input">
                <div className="options">
                    <div className="dices"> 
                        <p>{amount}</p>
                        <input type="text" id="dados_cantidad" />
                    </div>
                    <div className="range">
                        <p>{sides}</p>
                        <input type="text" id="dados_rango" />
                    </div>
                </div>
                <ButtonThrow/>
            </div>
        </>
    )
}

export default RoleDice;