// Delimitação de strings

//const aspasSimples = 'Olá, mundo'
//console.log(aspasSimples)

// Caracteres de escape

//const aspasDuplas = "Olá eu sou o \nJavascript. Eu sou melhor que o \nPython"
//console.log(aspasDuplas)

//String com crase é possivel fazer quebra de linha sem o \n e concatenação ${}
//const textoComCrase = `Olá eu sou o Javascript. Eu sou melhor que o Python`

//console.log(textoComCrase)

// métodos da strings

const texto = 'O Javascript foi criado alguns anos após o Python. No entanto, no entanto o Javascript é mais bacana.'

console.log(texto)
console.log(texto.toUpperCase()) // Maiúsculo
console.log(texto.toLowerCase()) // Minúsculo
console.log(texto.concat(' A lingauem C é a mãer de todas as linguagens.')) //Concatenar

// Recortar/Fatiar strings

//console.log(texto[2]) // retorna um valor contido na string

console.log(texto.substring(16)) // recorta o texto e retorna apartir da posição informada no index
console.log(texto.replace('Javascript', 'Rust')) // substitui e retorna a primeira ocorrência
console.log(texto.replaceAll('Javascript', 'Kotlin')) // substitui e retorna todas as ocorrências da palavra

//Expressão regular

console.log(texto.replace(/Javascript/g, 'PHP')) // procura globalmente a palavra e retorna alterada
console.log(texto.replace(/Javascript/gi, 'PHP')) // procura a palavra e retorna maesmo com Case sensitive, tanto: 'Javascript ou 'javacript'

const html = '<!DOCTYPE html>\n<html></html>'

console.log(html.startsWith('<!DOCTYPE html>')) // retorna o arquivo de busca, se o texto contém a string informada no começo
console.log(html.startsWith('batata'))

console.log(html.endsWith('</body>'))  // retorna o arquivo de busca, se o texto contém a string informada no fim

const msg = '                   Olá, mundo!            '
console.log(msg.trim()) // remove espaços na string, tanto no início quanor no fim

let senha = 'sonic'

console.log(senha.length) // retorna o tamanho da string
console.log(senha.length >= 8)