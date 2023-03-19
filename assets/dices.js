import '../styles/global.css'
import '../styles/dados.css'

const dot = `<div class="dot"></div>`
const space = `<div class="dotgohst"></div>`

const one = `<div class="dado"
><div class="dado-border">
${  space + space + space + 
    space + dot + space + 
    space  + space + space}
</div></div>`;

const two = `<div class="dado"
><div class="dado-border">
${  dot + space + space + 
    space + space + space + 
    space  + space + dot
}</div></div>`;

const three = `<div class="dado"
><div class="dado-border">
${  dot + space + space + 
    space + dot + space + 
    space  + space + dot
}</div></div>`;

const four = `<div class="dado"
><div class="dado-border">
${  dot + space + dot + 
    space + space + space + 
    dot  + space + dot
}</div></div>`;
const five = `<div class="dado"
><div class="dado-border">
${  dot + space + dot + 
    space + dot + space + 
    dot  + space + dot
}</div></div>`;
const six = `<div class="dado"
><div class="dado-border">
${  dot + space + dot + 
    dot + space + dot + 
    dot  + space + dot
}</div></div>`;

const dices = []
dices.push(one)
dices.push(two)
dices.push(three)
dices.push(four)
dices.push(five)
dices.push(six)

export default dices;



/* 
Todo esto para abajo es el código que hacía funcionar la varsión antes de React.
Ya está copiado y estoy tratando de implementarlo en otro archivo... 
Aunque creo que debería ponerlo en un hook pero cada cosa en su momento

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


function randomNumber(min, max){
    const numero_r = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return numero_r;
}




*/
