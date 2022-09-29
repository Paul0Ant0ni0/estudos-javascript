/**
 * Crie um algortimo que recebe informações de 15 produtos.
            Cada produto possui nome, marca, uma foto (link de uma imagem da internet),
            preço unitário e a quantidade de produtos em estoque. Ao receber essas informações 
            dos produtos, imprima no HTML essas informações de cada produto e o produto entre o
            preço e a quantidade de produtos em estoque (preço total).<
 */

let estoque = []
let contador = 0
function adicionar() {
    let nomeProduto = document.getElementById('campoProduto').value
    let marcaProduto = document.getElementById('campoMarca').value
    let imagemProduto = document.getElementById('campoImg').value
    let precoProduto = document.getElementById('campoPreco').value
    let quantidadeProduto = document.getElementById('campoQuantidade').value


    validarCampinas(nomeProduto, marcaProduto, imagemProduto, precoProduto, quantidadeProduto)



}

// funcionado
function validarCampinas(n, m, img, p, q) {
    if (n != '' && m != '' && img != '' && p != '' && q != '') {
        contador++
        let produto = {
            nome: n,
            marca: m,
            imagem: img,
            preco: p,
            quantidade: q
        }
        addProduto(produto, contador)
      
    } else {
        return alert(`Preencha os camposs!`)
    }
}

// funcionado
function addProduto(produto, contador = 1) {
    for (let i = 0; i <= contador; i++) {
        estoque.push(produto)
       
        criarElementos(estoque)

    }
    
}

// function listarProduto(estoque, img, h3, p1, p2, p3, p4, container) {
//     for (let i = 0; i <= estoque.length; i++) {
//         for (let n of estoque) {
//             h3 = n['nome']
//             console.log(h3)
//             img.scr = n['imagem']
//             p1.textContent = n['marca']
//             p2.textContent = n['quantidade']
//             p3.textContent = n['preco']
//             let precoTotal = n['preco'] * n['quantidade']
//             p4.textContent = precoTotal
//         }
//     }

//     container.appendChild(img);
//     container.appendChild(h3);
//     container.appendChild(p1);
//     container.appendChild(p2);
//     container.appendChild(p3);
//     container.appendChild(p4);
// }

function criarElementos(estoque) {
    let container = document.getElementsByClassName('container')[0]
    const card = document.createElement('div')
    let img = document.createElement('img')
    let h3 = document.createElement('h3')
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let p3 = document.createElement('p')
    let p4 = document.createElement('p')


    for (let i = 0; i <= estoque.length; i++) {
        for (let n of estoque) {
            h3.textContent = n['nome']
            
            img.src = n['imagem']
            p1.textContent = n['marca']
            p2.textContent = n['quantidade']
            p3.textContent = n['preco']
            let precoTotal = n['preco'] * n['quantidade']
            p4.textContent = precoTotal
        }
    }

    console.log(h3)
    console.log(img)
    console.log(p1)
    console.log(p2)
    console.log(p3)
    console.log(p4)

    container.innerHTML = img.classList.add('img-produto')
    container.innerHTML = card.classList.add('card-produtos')
    
    // card.innerHTML= img.classList.add('img-produto')

    // container.innerHTML= img.classList.add('img-produto')
    // container.innerHTML= h3.classList.add('nome-produto')
    // container.innerHTML=p1.classList.add('marca')
    // container.innerHTML= p2.classList.add('quantidade')
    // container.innerHTML=p3.classList.add('preco')
    // container.innerHTML=p4.classList.add('precototal')
    
    // container.innerHTML = card.classList.add('card-produtos')

    //listarProduto(estoque, img, h3, p1, p2, p3, p4, container)


}





// for(let i = 1; i <= 2; i++) {
//     let produto = {
//         nome: '',
//         marca: '',
//         imagem: '',
//         preco: 0,
//         quantidade: 0
//     }
    
//     let nomeProduto = prompt(`Informe o nome do produto nº ${i}`)
//     let marcaProduto = prompt(`Informe a marca do produto nº ${i}`)
//     let imagemProduto = prompt(`Informe o link da imagem do produto nº ${i}`)
//     let precoProduto = parseFloat(prompt(`Informe o preço do produto nº ${i}`))
//     let quantidadeProduto = parseInt(prompt(`Informe quantidade do produto nº ${i} em estoque`))
    


//     produto.nome = nomeProduto
//     produto.marca = marcaProduto
//     produto.imagem = imagemProduto
//     produto.preco = precoProduto
//     produto.quantidade = quantidadeProduto

//     //document.write(`<div> ${img} </div>`)
//     estoque.push(produto)
// }




// img.src = imagemProduto

// for(let i = 0; i <= estoque.length; i++){
// for (let n of estoque) {

//     let precoTotal = n['preco'] * n['quantidade']

//     document.write(`<img src="${n['imagem']}" width="85" height="85" class="img-produto"><br>`)
//     document.write(`<h3 class="nome-produto">Produto: ${n['nome']}</h3><br>`)
//     document.write(`<p class="marca">Marca: ${n['marca']}</p><br>`)
//     document.write(`<p class="preco">Preço Unitário: ${n['preco']}</p><br>`)
//     document.write(`<p class="quantidade">Quantidade ${n['quantidade']}</p><br>`)
//     document.write(`<hr>`)
//     document.write(`<p class="precototal">Preço Total: ${precoTotal}</p><br>`)

// }

// // }


// console.log(estoque)

