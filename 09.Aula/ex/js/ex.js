/**
 * Crie um algortimo que recebe informações de 15 produtos.
            Cada produto possui nome, marca, uma foto (link de uma imagem da internet),
            preço unitário e a quantidade de produtos em estoque. Ao receber essas informações 
            dos produtos, imprima no HTML essas informações de cada produto e o produto entre o
            preço e a quantidade de produtos em estoque (preço total).<
 */
const produtosForm = document.getElementById('form-produtos')
const estoque = []


produtosForm.addEventListener('submit', (evento) =>{
    evento.preventDefault()
    evento.stopPropagation()

    let nomeProduto = document.getElementById('campoProduto')
    let marcaProduto = document.getElementById('campoMarca')
    let imagemProduto = document.getElementById('campoImg')
    let precoProduto = document.getElementById('campoPreco')
    let quantidadeProduto = document.getElementById('campoQuantidade')


    let produto = {
        nome: nomeProduto.value,
        marca: marcaProduto.value,
        imagem: imagemProduto.value,
        preco: precoProduto.value,
        quantidade: quantidadeProduto.value
    }
    estoque.push(produto)
    nomeProduto.value = ''
    marcaProduto.value = ''
    imagemProduto.value = ''
    precoProduto.value = ''
    quantidadeProduto.value = ''
    renderizarElementos()


})


// funcionado
// function validarCampos(n, m, img, p, q) {
//     if (n != '' && m != '' && img != '' && p != '' && q != '') {
    
//         let produto = {
//             nome: n,
//             marca: m,
//             imagem: img,
//             preco: p,
//             quantidade: q
//         }
//         estoque.push(produto)
//         n.value = ''
//         renderizarElementos()
//         console.log(produto)
//     } else {
//         return alert(`Preencha os campos!`)
//     }
//   


// }




function renderizarElementos() {

    const container = document.getElementsByClassName('container')[0]
    container.innerHTML = ''
        for (let n of estoque) {

            const cardProdutos = document.createElement('div')
            cardProdutos.classList.add('card-produtos')

            const img = document.createElement('img')
            img.classList.add('img-produto')
            img.src = n['imagem']

            const nomeProduto = document.createElement('h3')
            nomeProduto.classList.add('nome-produto')
            nomeProduto.innerText = n['nome']


            const marcaProduto = document.createElement('p')
            marcaProduto.classList.add('marca')
            marcaProduto.innerText = `Marca: ${n['marca']}`

            const quantidadeProduto = document.createElement('p')
            quantidadeProduto.classList.add('quantidade')
            quantidadeProduto.innerText = `Quantidade estoque: ${n['quantidade']}`

            const precoProduto = document.createElement('p')
            precoProduto.classList.add('preco')
            precoProduto.innerText = `Preço unitário: R$ ${n['preco']}`


            cardProdutos.append(img, nomeProduto, marcaProduto, quantidadeProduto, precoProduto)
            container.appendChild(cardProdutos)
        }

}

