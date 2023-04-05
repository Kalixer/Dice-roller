import React, { useState, useContext } from 'react';
import Resultado from '@components/Resultado';
import AppContext from '@context/AppContext';

import '@styles/ButtonThrow.scss';


const ButtonThrow = () => {
    const { language } = useContext(AppContext)

    let throwMessage
    let resetMessage

    if (language == 'english') {
        throwMessage = 'Throw'
        resetMessage = 'Reset'
    }
    if (language == 'spanish') {
        throwMessage = 'Lanzar'
        resetMessage = 'Resetear'
    }

    const [showComponent, setShowComponent] = useState(false);

    const handleThrow = () => {

        // Al hacerle el if, se salta el estado true y el resultado se vuelve a lanzar sin borrarse
        if(showComponent == false) { 
            setShowComponent(!showComponent); // Al hacer click cambia el estado al hacerle un NOT al estado anterior
        }
        // setMessageState(!messageState) // Al hacer click cambia el estado al hacerle un NOT al estado anterior
      } 

    const handleReset = () => {
        if(showComponent == true) {
            setShowComponent(false)
        }
    }

    return (
        <>
            <div className='buttons'>
                <button type="button" className="buttonTh buttonThrow" onClick={handleThrow}>
                    <p>{throwMessage}</p>
                </button>
                <button type="button" className="buttonTh buttonReset" onClick={handleReset}>
                    <p>{resetMessage}</p>
                </button>
            </div>
            {showComponent && <Resultado />}
        </>

    );
}

export default ButtonThrow;