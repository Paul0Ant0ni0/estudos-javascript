/**
 * 6. Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em
    P.A. contendo 10 valores.

    fórmula an = a1 + (n – 1) * r
 */

let a = 5
let r = 2

for(let i = 1; i <= 10; i ++){
    let calculo = a + (i - 1) * r
    document.write(`<p>${calculo}<sub>Indice: ${i}</sub></p>`)
}


