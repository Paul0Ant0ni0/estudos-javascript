/**
 * Criar uma função resposnável por mostrar o alerta na tela
 * 
 */

let clickBtn = 0

function mostrarAlerta(){
    /** O objeto domcument é um objeto que faz representação do HTML no seu site dentro do javascript */
    /**
     * getElementBy serve para pegar um elemento HTML pelo seu id
     */
    const divAlerta = document.getElementById('alerta')
    const resp = document.getElementById('resp')
    /**
     * A propriedade classList retorna um array com todas as classes CSS que um elemento possui
     */

    /**
     * classList.add() serve para adicionar novas classes dinamicamente dentro de um elemento 
     * html
     */
   
    
  

    divAlerta.classList.add('mostrar')
    clickBtn++


    let result = resp.inn= `Você clicou ${clickBtn}`
    return result
   
}


function fecharAlerta(){
    const divAlerta = document.getElementById('alerta')
    divAlerta.classList.remove('mostrar')
}

const btnMostrar = document.getElementById('mostrar')
const btnFechar = document.getElementById('fechar')


/**
 * è um metodo que permite ouvir elemtos do html no javascript
 *  SE COLOCAR A FUNÇÃO COM PARENTSES, ESTÁ EXECUTANDO A FUNÇÃO
 *  SEM ESTÁ PASSANDO A REFERENCIA DELA.
 */
btnMostrar.addEventListener('click', mostrarAlerta)
btnFechar.addEventListener('click', fecharAlerta)