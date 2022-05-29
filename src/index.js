import '../styles/main.css'

const dice_A = document.getElementById('dados_cantidad');
const dice_R = document.getElementById('dados_rango');

const output = document.getElementById('output');

const boton = document.getElementById("boton")
boton.addEventListener('click', throwDice)

function throwDice()
{
    let diceAmount = dice_A.value;
    let diceRange = dice_R.value;

    let resultado;
    
    output.innerHTML = `
    <div class="loader-wrapper" id="loader-w">
        <div class="loader">
            <div class="loader loader-inner"></div>
        </div>
    </div>
    `
    
    setTimeout(() => {
        output.innerHTML = ``
        for(let i = 0; i < diceAmount; i++) {
            resultado = randomNumber(1, diceRange);
            
            output.innerHTML += `<div class="box">${resultado}</div>`
        }
    }, 4000)
}

function randomNumber(min, max){
    const numero_r = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return numero_r;
}




/*

    1) Agregar las variables input
    2) Conctarlos a la funcion
    3) Construir los bloques con .innerHtml
    
*/