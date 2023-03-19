import React from "react";
import dices from '@assets/dices.js'
import '@styles/global.css'
import '@styles/dados.css'


const Resultado = () => {
    const dice_A = document.getElementById('dados_cantidad');

    const result_text = document.getElementById('result');
    const output = document.getElementById('output');

    const boton = document.getElementById("boton")
    boton.addEventListener('click', throwDice)

    function throwDice()
    {
        // This is for, when you want to throw again it reloads the text 'These are the results'
        result_text.innerHTML = ``


        let diceAmount = dice_A.value;
        let diceRange = dice_R.value;

        let resultado;
        let loader = `
            <div class="loader" id="loader">
                <p>Loading...<p>
            </div>
        `

        output.innerHTML = loader

        setTimeout(() => {
            output.innerHTML = ``

            for(let i = 0; i < diceAmount; i++) {
                resultado = randomNumber(1, diceRange);

                switch (resultado){
                    case 1: output.innerHTML += `${dices[0]}`
                    break;
                    case 2: output.innerHTML += `${dices[1]}`
                    break;
                    case 3: output.innerHTML += `${dices[2]}`
                    break;
                    case 4: output.innerHTML += `${dices[3]}`
                    break;
                    case 5: output.innerHTML += `${dices[4]}`
                    break;
                    case 6: output.innerHTML += `${dices[5]}`
                    break;

                }

            }
            result_text.innerHTML = `
            &#128071; These are the results &#128071;
            `
        }, 100)
    }

    function randomNumber(min, max){
        const numero_r = Math.floor(Math.random() * (max - min + 1)) + min;

        return numero_r;
    }
    
    return (
        <div id="main">
            <p className="result" id="result">{result_text}</p>
            <div className="output" id="output"></div>
        </div>
    );
}

export default Resultado;