/***
 * Métodos de pagamento
 * * Em dinheiro
 * * Em Cheque
 * * No cartão
 */

// recebebndo o preço do produto e transfromando para decimal

/**
 * Estrutura de repetição
 */

//while -> enquanto

let precoProduto = parseFloat(prompt('Qual o preço do produto? '))

while(isNaN(precoProduto) || precoProduto <1){
    alert('O preço digitado é inválido. Por favor informe o preço apenas com números, sem caracteres especiais (letras')
    precoProduto = parseFloat(prompt('Qual o preço do produto? '))
}

const mensagem = `
Informe o método de pagamento: 
Digite 1 - Pagamento em dinheiro
Digite 2 - Pagamento em cheque
Digite 3 - Pagamento em cartão
`

let metodoDePagamento = parseInt(prompt(`${mensagem}`))

console.log(precoProduto)
console.log(metodoDePagamento)

/**
 * Se o valor do método de pagamento for 1 ou 2, significa que
 * a pessoa possuirá um desconto de 10%
 */

while(isNaN(metodoDePagamento) || metodoDePagamento <1 || metodoDePagamento > 3){
    metodoDePagamento = prompt(`${mensagem}`)
}

if (metodoDePagamento == 1 || metodoDePagamento == 2){

    const precoFinal = precoProduto * 0.9 //90% sobre o preço do produto
    alert(`O preço final do produto é ${precoFinal.toFixed(2)} reais`)

}else if(metodoDePagamento == 3){
    /**
     * 1 parcela = 15% de desconto
     * 2 parcelas = preço do produto
     * 3 ou mais parcelas = acréscimo de 10%
     */

    let parcelas = parseInt(prompt('Informe a quantidade de parcelas? '))

    while(isNaN(parcelas) || parcelas <=0){
        alert("Digite um valor válido!")
        parcelas = parseInt(prompt('Informe a quantidade de parcelas? '))
    }

    if(parcelas == 1){

        const precoFinal = precoProduto * 0.85
        alert(`O preço final do produto é ${precoFinal.toFixed(2)} reais`)

    }else if(parcelas == 2){

        alert(`O preço final do pagamento é ${precoProduto} reais`)

    }else{
        const precoFinal = precoProduto * 1.1
        alert(`O preço final do pagamento é ${precoFinal.toFixed(2)} reais`)
    }

}







/**
 * Manipulando o DOM
 */



function calculo(){

    const preco = Number(document.getElementById('campoPreco').value)
    const select = document.querySelector('#campoPagamnto').value
    const parcelas = document.querySelector('#campoParcelas').value
    const result = document.getElementById('result')

    if(select === 'dinheiro' || select === 'cartao'){

        const precoFinal = preco * 0.9
        result.textContent = `R$ ${precoFinal.toFixed(2)} reais`
        preco.value = ''

    }else if(select === 'cartao'){
            if(parcelas == 1){

                const precoFinal = precoProduto * 0.85
                result.textContent = `R$ ${precoFinal.toFixed(2)} reais`
                preco.value = ''
        
            }else if(parcelas == 2){
        
                result.textContent = `R$ ${precoProduto.toFixed(2)} reais`
                preco.value = ''
        
            }else if(parcelas >= 3 || parcelas <=10) {
                const precoFinal = precoProduto * 1.1
                result.textContent = `R$ ${precoFinal.toFixed(2)} reais`
                preco.value = ''
            }else{
                alert("Selecione uma opção de parcelas")
                
            }
     
      
    }
}
