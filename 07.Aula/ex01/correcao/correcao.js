// Criar um novo array

const nums = []

//criar um loop que execute 6 vezes

for(let i = 1; i <= 6; i++){
    const n = parseInt(prompt(`Digite o ${i}º número`))
    nums.push(n)
}

// Separa os pares dos ímpares
const pares = []
const impares = []

// percorrer o array com números informados
// Criar uma variável que guardará os valores de cada posição do array 
// o array que iremos precorrer 

for(let numero of nums){
    /**
     * Sepera os valores pares dos ímpares
     * colocando o valor no seu respectivo array
     */


    if(numero % 2 === 0){
        pares.push(numero)
    }else{
        impares.push(numero)
    }

}

alert(`Nós temos ${pares.length} pares, que são: ${pares.join(', ')}`)
alert(`Nós temos ${impares.length} ímpares, que são: ${impares.join(', ')}`)