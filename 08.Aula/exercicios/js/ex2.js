/**
 * 2. Escreva um algoritmo que leia um valor inicial A e imprima o seu fatorial
 */

let a = parseInt(prompt('Digite uma valor'))
let fatorial = []
let produto = 1

for(let i = 1; i <= a; i++){
    fatorial.push(i)
}

for(let n of fatorial){
    produto *= n
}

alert(`O fatorial de ${a} é: ${produto}`)