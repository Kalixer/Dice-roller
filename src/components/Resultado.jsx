import React, { useContext } from "react";
import AppContext from "@context/AppContext";
import dices from '@assets/dices.jsx';
import '@styles/Resultado.scss';

function randomNumber(min, max){
    const numero_r = Math.floor(Math.random() * (max - min + 1)) + min;

    return numero_r;
}



const Resultado = () => {
    const { language } = useContext(AppContext)

    let resultMessage

    if (language == 'english') {
        resultMessage = ' These are the results '
    }
    if (language == 'spanish') {
        resultMessage = ' Estos son los resultados '
    }

    let rango = 0; // This is for when you choose the 'normal dice', it doesn't crash the app because the input for the range doesn't exist. You let it here by default
    
    const dice_A = document.getElementById('dados_cantidad');
    const dice_B = document.getElementById('dados_rango'); // This value is null if you choose the 'normal dice'

    // If you choose the 'normal dice' you don't input a range of numbers. So this conditional evaluates, if the data exist you assing the data.
    const dice_amount = parseInt(dice_A.value);

    const output = [];

    if(dice_B != null) {
        rango = parseInt(dice_B.value) // If exists, you assing the value
        
        for(let i = 0; i < dice_amount; i++){
            output.push(<div className="dado dado-role">{randomNumber(1, rango)}</div>)
        }
    } else {
        for(let i = 0; i < dice_amount; i++){
            output.push(dices[randomNumber(0, 5)])
        }

    }
    
    
    return (
        <div className="main">
            <p className="result" id="result">&#128071;{resultMessage}&#128071;</p>
            <div className="output" id="output">{output}</div>
        </div>
    );
}

export default Resultado;


