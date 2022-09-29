/**
 * Criem uma função que gera o resultado de uma equação de segundo grau
 * Formula = ax**2 + bx + c = 0
 *          delta = b**2 - 4 ac
 *          b = -b +- raiz de delta / 2a
 */


function equacaoSegundoGrau(a, b, c){
    
    const delta = b ** 2 -4 * a * c
    const raizdelta = Math.sqrt(delta)
    
    let x1 = (-b + raizdelta) / (2 * a)
    let x2 = (-b - raizdelta) / (2 * a)
 

    return [x1, x2]
}

console.log(equacaoSegundoGrau(1, -1, -12)) // [4, -3]