/**
 * 
8. Sabendo que latão é constituído de 70% de cobre e 30% de zinco, indique a quantidade de
    cada um desses componentes para se obter uma certa quantidade de latão (requerida pelo
    usuário).

 */

    let qtdLatão = 25
    const cobre = 0.7
    const zinco = 0.3

    let totalCobre = qtdLatão * cobre
    let totalZinco = qtdLatão * zinco

    console.log(`
    Quantidade de latão ${qtdLatão}
    Quantidade de zinco ${totalZinco}
    Quantidade de cobre ${totalCobre}`)