/**
 * 3) Faça um algoritmo para adicionar 20 valores em um array e depois imprima-os no HTML.
 *  Evite que o array possua valores duplicados.

 */
//let valor = [20, 5, 5, 10,  26, 98, 7, 26, 9, 78, 35, 98, 05, 521, 5, 87, 065, 64, 05, 84, 37]

let valor = []
let cont = 1
let verificacoa = []
let duplicados = 0

for(let i = 0; i < 20; i++){
    let v = Number(prompt(`Digite o valor na posição ${cont}`))
    valor[i] = v
    cont++

    for(let n of valor){
        if(!verificacoa.includes(n)){
            verificacoa.push(n)
        }else{
            i - 1
            duplicados =+ 1
        }
    }
    
    
}

document.write(`<p>Números do array: ${verificacoa} <br>
Total de valores no array é: ${verificacoa.length} <br>
Total de valores dublicados no array é: ${duplicados.length}</p>`)


