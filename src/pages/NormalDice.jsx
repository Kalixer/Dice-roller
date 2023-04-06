import React, { useContext } from 'react';
import ButtonThrow from '@components/ButtonThrow';
import AppContext from '@context/AppContext';

import '@styles/global.css';
import '@styles/NormalDice.scss';

const NormalDice = () => {
    const { language } = useContext(AppContext)

    let title
    let instructions
    let amount

    if (language == 'english') {
        title = 'Normal Dices'
        instructions = 'Choose how many dices you want'
        amount = 'Input the amount'
    }
    if (language == 'spanish') {
        title = 'Dados normales'
        instructions = 'Elije cuántos dados quieres'
        amount = 'Inserta la cantidad de dados'
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
                </div>
                <ButtonThrow/>
            </div>
        </>
    )
}

export default NormalDice;