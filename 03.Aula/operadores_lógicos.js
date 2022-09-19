/**
 * Operadores lógicos
 * 
 *  E 
 * 
 */

// V -> Verdadiro
// F -> Falso


/**
 * Operador lógico E - &&
 * Tabela verdade 
 * 
 * V V -> V
 * F V -> F
 * V F -> F
 * F F -> F
 * 
 * 
 */

// média precisa ser igual ou igual a 7 e preciso ter, no minimo, 80% de presença

const media = (7 + 10 + 10) / 3
const presenca = 0.95

console.log(media >= 7 && presenca >= 0.8)// true


/**
 * Operador lógico OU - ||
 * Tabela verdade 
 * 
 * V V -> V
 * V F -> V
 * F V -> V
 * F F -> F
 * 
 */


console.log(4 > 7 || 3 < 2) // false
console.log(5 >= 3.5 || 7 > 8) //true

const estado = 'MG'

console.log(estado == 'SP' ||  estado == 'MG') // true


/**
 * Operador lógico Negação - !
 * Tabela verdade 
 * 
 * !V -> F
 * !F -> v
 * 
 */


const  resultado = 5 < 5

console.log(!resultado) //true

const logado = false

// !logado ou logado == false 

if(!logado){
    console.log('Você não está logado no site...')
}