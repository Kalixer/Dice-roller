import React, { useState } from 'react';
import Resultado from '@components/Resultado'
import '@styles/ButtonThrow.scss';


const ButtonThrow = () => {
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
                    <p>Throw dices</p>
                </button>
                <button type="button" className="buttonTh buttonReset" onClick={handleReset}>
                    <p>Reset</p>
                </button>
            </div>
            {showComponent && <Resultado />}
        </>

    );
}

export default ButtonThrow;