/**
 * Arrays ou vetores é um tipo especial que te permite armazenar diversos valoes
 * em apenas um local 
 */


//criando um array

/*
const arr = new Array(1, 3)
let arr2 = new Array(5)*/

/**
 *  Cada valor de um array émostrado por vírgula
 * 
 *  Dentro de um array eu posso ter vários tipos de dados
 */

/**
 * Sempre que tentar recuperar uma posição que não existe, ele te informará um valor undefined
 */

let arr = [10, 15, 9.8, 'Eu sou um texto dentro de um array', 'Olá mundo', true, false, false]
console.log(arr[6]) // false
arr[6] = 'Outro texto'
console.log(arr[6]) //'Outro texto'
console.log(arr[8]) // undefined
arr[8] = 'Agora a posição outo existe dentro do arr'
