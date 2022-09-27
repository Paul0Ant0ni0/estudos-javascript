/**
 * 2) Faça um programa em Javascript que leia um vetor com dez números reais,
 *  calcule e mostre a quantidade de números negativos e a soma dos números positivos desse vetor.
 */

let vetor =  new Array(10)
let negativos = 0
let positivos = 0
let cont = 1

for(let i = 0; i <= 9; i++){
    vetor[i] = Number(prompt( `Digite o número na posição ${cont}: `))
    ++cont
    if(vetor[i] < 0){
        ++negativos
    }else if(vetor[i] > 0){
        positivos = positivos + vetor[i]
        console.log(positivos)
    }
}

alert(`Quantidade de números negativos são: ${negativos}.
A soma do números positivos é: ${positivos}`)