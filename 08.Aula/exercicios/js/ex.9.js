/**
 * 9. Leia a velocidade máxima permitida em uma avenida e a velocidade com que o motorista
    estava dirigindo nela e calcule a multa que uma pessoa vai receber, sabendo que são
    pagos:

    a) 50 reais se o motorista estiver ultrapassar em até 10km/h a velocidade permitida (ex.: 
        velocidade máxima: 50km/h; motorista a 60km/h ou a 56km/h); 
    b) 100 reais, se o motorista ultrapassar de 11 a 30 km/h a velocidade permitida. 
    c) 200 reais, se estiver acima de 31km/h da velocidade permitida.
 */

    let velocidadeAve = 85
    let velocidadeMot = 78
    let vMaxAven = velocidadeAve + 10
    let multa =''

    if(velocidadeMot > velocidadeAve){

        multa = 'Multado em R$ 50,00'
        console.log(multa)

    }else if()