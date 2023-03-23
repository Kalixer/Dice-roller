import React from "react";
import dices from '@assets/dices.jsx';
import '@styles/Resultado.scss';

function randomNumber(min, max){
    const numero_r = Math.floor(Math.random() * (max - min + 1)) + min;

    return numero_r;
}


let rango = 0; // This is for when you choose the 'normal dice', it doesn't crash the app because the input for the range doesn't exist. You let it here by default

const Resultado = () => {
    const dice_A = document.getElementById('dados_cantidad');
    const dice_B = document.getElementById('dados_rango'); // This value is null if you choose the 'normal dice'

    // If you choose the 'normal dice' you don't input a range of numbers. So this conditional evaluates, if the data exist you assing the data.
    if(dice_B != null) {
        rango = parseInt(dice_B.value) // If exists, you assing the value
    }
    
    const dice_amount = parseInt(dice_A.value);

    const output = [];

    if(rango <= 6){
        for(let i = 0; i < dice_amount; i++){
            output.push(dices[randomNumber(0, 5)])
        }

    } else {
        for(let i = 0; i < dice_amount; i++){
            output.push(<div className="dado">{randomNumber(1, rango)}</div>)
        }
    }

    
    
    return (
        <div id="main">
            <p className="result" id="result">&#128071; These are the results &#128071;</p>
            <div className="output" id="output">{output}</div>
        </div>
    );
}

export default Resultado;



// const result_text = document.getElementById('result');
// const output = document.getElementById('output');

// let resultado;
// let loader = `
//     <div class="loader" id="loader">
//         <p>Loading...<p>
//     </div>
// `

// output = loader

// setTimeout(() => {
//     output = ``

//     for(let i = 0; i < diceAmount; i++) {
//         resultado = randomNumber(1, diceRange);

//         switch (resultado){
//             case 1: output += `${dices[0]}`
//             break;
//             case 2: output += `${dices[1]}`
//             break;
//             case 3: output += `${dices[2]}`
//             break;
//             case 4: output += `${dices[3]}`
//             break;
//             case 5: output += `${dices[4]}`
//             break;
//             case 6: output += `${dices[5]}`
//             break;

//         }

//     }
//     result_text = `
//     
//     `
// }, 100)