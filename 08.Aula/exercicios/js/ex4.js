/**
 * 4. Escreva um programa que leia uma letra e mostre se ela é vogal ou consoante
 */

let arrayVogal = ['a', 'e', 'i', 'o', 'u', ]
let letra = prompt(`Digite uma letra`)
let resultado = ''
console.log(arrayVogal)


arrayVogal.includes(letra) ? resultado = 'Vogal' : resultado = 'Consoante' 


alert(`A letra ${letra} é ${resultado}`)