

function calc(){


let n = document.getElementById('campoN').value
let resultado = document.getElementById('result')

if(n != ''){
    console.log(n)
  

    /*while(cont < n){
        resultado.textContent = `${cont} + ${cont} = ${cont =+ cont}`
    }*/

    let soma = 0
    let d = parseInt(prompt('Digite mais um valor:'))

    while(soma <n){
        d = parseInt(prompt('Digite mais um valor:'))
        soma =+ d
    }

    if (soma != n){
        alert(`Média: ${soma/n}`)
    }

    /*for(let i = 1; i<=n; i++){

        document.write(`<p>oi${soma += i}</p>`)
        if(soma == n){
            let result = soma/n
            document.write(`<p>${soma} / ${n} = ${result}</p>`)
            break
        }
        

    }*/
    
    
       
        


}else{
    alert('Preenha o campo')
}

}