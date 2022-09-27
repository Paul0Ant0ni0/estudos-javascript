/**
 * 1. Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e
    mostrar :
    a. A menor altura do grupo;
    b. A maior altura do grupo;

 */

let pessoas = []
let maiorAltura = 0
let menorAltura = 0
let cont = 0

for(let i = 1; i < 6; i++){
    let altura = parseFloat(prompt(`Digite a altura da ${i}º pessoa: `))
    pessoas.push(altura)
  
}


for(let valor of pessoas){
    if(valor > maiorAltura){
        maiorAltura = valor
        console.log(`Maior altura ${valor}`)
    }else{
        menorAltura = valor
        console.log(`Menor altura ${valor}`)
    }
}



alert(`A maior altura do grupo é: ${maiorAltura}`)
alert(`A menor altura do grupo é: ${menorAltura}`)