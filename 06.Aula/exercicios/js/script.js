

function calc(){


let n = document.getElementById('campoN').value
let resultado = document.getElementById('result')

if(n != ''){
    console.log(n)
  

    /*while(cont < n){
        resultado.textContent = `${cont} + ${cont} = ${cont =+ cont}`
    }*/

    let soma = 0

    for(let i = 0; i<=n; i++){
        if(i == n && soma <= n){
            let result = soma/n
            document.write(`<p>${soma} / ${n} = ${result}</p>`)
            break
        }

        document.write(`<p>${soma += i}</p>`)
        

    }
    
    
       
        


}else{
    alert('Preenha o campo')
}

}