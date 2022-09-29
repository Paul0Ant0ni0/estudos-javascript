
/**
 * Funçoes são blocos de construçao fundamentais em javascript.Uma função e um procedimento de Javascript
 * -um conjunto de instruções que executa uma tarefa ou calcula um valor. para usar uma função,você deve
 * defini-la em algum lugar no escopo do qual você quiser chamá-la.
 */

/**
 * Parâmetros são valores que passamos para as funções, para que elas utilizem esses valores dentro dela
 */

//passar um valor como parâmetro para mostrá-lo dentro do alert
// Para ocorrer erro de valor não definido no parâmetro pode atribuir um valor
function cumprimentar(messagem,repetir = 1){
    for(let i = 1; i <= repetir; i++){

        alert(messagem)
    }
    
}

function soma(num, num2){

    // return serve para enviar o resultado da execuções daquela função
    return num + num2
}

function maiorValor(a, b){
    if(a > b){
        return a
    }else{
        return b
    }
}

let resultado = soma(4, 7) // 11
console.log(` O valor da variável resultado é ${resultado}`) //11

const num1 = parseInt(prompt('Informe o primeiro número:')) // 3
const num2 = parseInt(prompt('Digite o segundo número:')) // 7
alert(`O menor número entre esses é ${maiorValor(num1, num2)}`)



// console.log(maiorValor(5, 10))
// cumprimentar('Olá, mundo', 3)
// cumprimentar('Eu gosto muito do javascript')
// cumprimentar('Javascript sola o C#')