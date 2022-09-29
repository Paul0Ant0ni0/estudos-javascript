/**
 * 11. Leia um número binário e transforme-o em decimal

 */

let binario = [1, 1, 1, 1]
const valor = 2
let conversao = []
let decimal = []

for(let i = 0; i < binario.length; i++){
    let c = valor**i
    conversao.push(c)   
    
}

console.log(conversao.reverse())

for(let i = 0; i < conversao.length; i++){
    let v = conversao[i] * binario[i]
    decimal.push(v)
}

let valorDecimal = decimal.reduce((x, y) => x + y, 0)
/*
let valorDecimal = 0
for(let s of decimal){
    valorDecimal += s
}
*/
//let valorDecimal = decimal.join('')
console.log(valorDecimal)
pessoa.nome = 'Pablo Escobar'

