/* 
La idea es hacer el modelo de los dados y por cada uno solo cambiar 
la cantidad y la posición de los dados

Deben exportarse los dados (checked)

Los estilos default de los dados deben estar en el archivo styles (checked)

Haz los dados uno por uno (estilos para los puntos)

Luego haces los estilos por default

Puedes hacer una caja dentro de los dados para que no se salgan de su lugar

*/

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



module.exports = dices;
