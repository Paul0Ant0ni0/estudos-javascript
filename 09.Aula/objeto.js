/**
 * Objeto é uma estrtura que permite organizar dados na froma de 
 * chave-valor 
 */
let end = {
    rua: 'Principal',
    numero: '123',
    estado: 'BH',
    complemento: 'Sem complemento',
    cep: '123000-000'
}


let pessoa = {
    nome: 'Joana',
    idade: 23,
    endereco: {...end}, /*destructuring - cria um objeto com a mesma proprieda, sendo assim, preservando a anterior */
    cpf: '123.123.123-12',
    alttura: 1.58,
    solteira: true,
    habilidades: ['React', 'Java', 'Javascript', 'Golang', 'Rust'],
    cumprimentar() {
        /**
         * Quando eu desejo referecniar o mesmo objeto dentro dele mesmo, eu utilizo
         * a palavra chave '.this
         */

        console.log(`Olá, tudo bem? Meu nome é ${this.nome}`)
    }
}

// console.log(end)
// console.log(pessoa.cumprimentar())

// pessoa.cumprimentar()
// pessoa.nome = 'Pablo Escobar'
// pessoa.cumprimentar()
// pessoa.habilidades.push('Angular')
// console.log(pessoa.habilidades)
// console.log(pessoa['cpf'])

console.log(end.rua)
console.log(pessoa.endereco.rua)

pessoa.endereco.rua = 'Rua Secundária'

console.log(pessoa.endereco.rua)
console.log(end.rua)