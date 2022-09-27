
//Recuperar a quantidade de produtos
const qtd = parseInt(prompt('Informe a quantidade de produtos'))

//ler o preço de cada produto e armzenar em um array
const precoprodutos = []

for(let i = 0; i < qtd; i++){
   let preco = parseFloat(prompt(`Informe o valor do produto`))
   //precoprodutos[i] = preco
   precoprodutos.push(preco) // pegar um valor e adiconálo no final do arrya
   
  document.write(`<p>Produto ${i+1}: R$ ${precoprodutos[i]}</p>`)
}

let maiorValor = Math.max(precoprodutos)

let soma = 0

/*// [3, 4, 5]
for(let i = 0; i < precoprodutos.length; i++){
    const valor = precoprodutos[i]
    // soma = soma + valor
    soma =+ valor
    

}
*/

for (let preco of precoprodutos){
    soma =+ preco
}

alert(`O preço final a pagar é ${soma}. 
O maior valor é ${maiorValor}`)