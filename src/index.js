import '../styles/main.css'

const dice_A = document.getElementById('dados_cantidad');
const dice_R = document.getElementById('dados_rango');

const result_text = document.getElementById('result');
const output = document.getElementById('output');

const boton = document.getElementById("boton")
boton.addEventListener('click', throwDice)

function throwDice()
{
    let diceAmount = dice_A.value;
    let diceRange = dice_R.value;

    let resultado;

    setInterval(output.innerHTML = `
    <div class="loader" id="loader">
        <p>Loading...<p>
    </div>
`, 300)
    
    setTimeout(() => {
        output.innerHTML = ``

        for(let i = 0; i < diceAmount; i++) {
            resultado = randomNumber(1, diceRange);
            
            output.innerHTML += `
            <div class="box">${resultado}</div>
            `
        }
        result_text.innerHTML = `
        &#128071; These are the results &#128071;
        `
    }, 3000)
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
    2) Conctarlos a la funcion
    3) Construir los bloques con .innerHtml
    
*/