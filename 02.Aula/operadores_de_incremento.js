alert("Seja bem vindo(a)") //mostrar a mensagem para usuário
const nomeUsuario = prompt("Olá, usuário! Qual o seu nome : ")// mostra uma menssagem e recebe um valor

// conversão: parseInt -> inteiro; parseFloat -> Decimal; Number -> Números
let num = Number(prompt('Olá, ' + nomeUsuario + '. Digite algum número por favor: '))
//console.log(typeof(num)) // rypeof retorna o tipo de valor que a variável armazena

//operaodr de incremento
//const sucessor = num++ // = num + 1

//alert('O sucessor de ' + num + ' é ' + sucessor)
console.log(num++) //operador de pós-incremento
console.log(num)
console.log(++num) //operador de pre-incremento

//operadores de decremento
console.log(num--) //operador de pós-decremento
console.log(num)
console.log(--num) //operador de pre-decremento