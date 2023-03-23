import React, { useState } from 'react';
import Resultado from '@components/Resultado'
import '@styles/ButtonThrow.scss';


const ButtonThrow = () => {
    const [showComponent, setShowComponent] = useState(false); // comienza en estado false
    const [messageState, setMessageState] = useState(true);

    let message;
    if(messageState){
        message = 'Throw dices'
    } else {
        message = 'Again?'
    }

    const handleClick = () => {
        setShowComponent(!showComponent); // Al hacer click cambia el estado al hacerle un NOT al estado anterior
        setMessageState(!messageState) // Al hacer click cambia el estado al hacerle un NOT al estado anterior
      }

    return (
        <>
            <button type="button" className="buttonThrow" onClick={handleClick}>
                <p>{message}</p>
            </button>
            {showComponent && <Resultado />}
        </>

    );
}

export default ButtonThrow;