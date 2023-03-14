import '../styles/main.css'
import '../styles/dados.css'
import dices from '../assets/dices.js'

const dice_A = document.getElementById('dados_cantidad');
const dice_R = document.getElementById('dados_rango');

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

// function load() {
//     let numbers = 1;
//     let dot = '.';
//     let dots = '${dot}'

//     for (let i = 0; i <= 3; i++) {
        
        
//         numbers++;

//     }
// }

function randomNumber(min, max){
    const numero_r = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return numero_r;
}




/*

    1) Agregar las variables input
    2) Conectarlos a la funcion
    3) Construir los bloques con .innerHtml
    
*/