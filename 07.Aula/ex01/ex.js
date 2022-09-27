

let num = []
let par = []
let impar = []
let n = 0
let n2 = 0

for(let i = 0; i < 6; i++){
    let valor = parseInt(prompt(`Digite o valor ${i}`))
    if(valor % 2 === 0){
       par[n] = valor
       ++n
       console.log(par[n])
        continue
    }else if(valor % 2 === 1){
        impar[n2]= valor
        ++n2
       console.log(n2)
        continue
    }


}

alert(`Pares são: ${par}
O total de números pares é ${n}
Impares são: ${impar}
Total de números impáres ${n2}`)