/**
 * 5. Crie um código que receba 3 valores do comprimento de um triângulo e depois mostre
 *    um alert informando se o triângulo é equilátero, isóceles ou escaleno.
 */

let lado1 = 5
let lado2 = 5
let lado3 = 25

if (lado1 == lado3 && lado1 == lado2) {

    console.log(`Triângulo equilátero`)

} else if (lado1 != lado2 && lado2 != lado3 && lado3 != lado1) {

    console.log('Triângulo escaleno')
} else {
    console.log(`Triângulo isósceles`)
}