/**
 * 7. Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em
    P.G. contendo 10 valores.

    fórmula t1 * r(n - 1)
 */

let a = 5
let r = 2

for(let i = 1; i <= 10; i++){
    let calculo = a * r **(i - 1)
    document.write(`<p>${calculo}<sub>Indice: ${i}</sub></p>`)
}