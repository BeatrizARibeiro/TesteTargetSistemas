const fs = require('fs')

var js, men, mai, med

fs.readFile('Exercicio3/dados.json','utf8', function(error,data){
    if(error){
        console.log(error)
        return
    }

    try{
        js = JSON.parse(data)
    }
    catch(e){
        console.log('Arquivo fora do padrão')
    } 
    
    mai = maior(js)
    men = menor(js, mai)
    med = avg(js)
    bom = maiorMedia(js, med)

    console.log("Menor valor faturado: " + men)
    console.log("Maior valor faturado: " + mai)
    console.log("Qtde de dias que faturaram mais que a média: " + bom)
});

function maior(i){
    var num = 0.0
    i.forEach((diaAtual) => {
        if(diaAtual.valor > num){
            num = diaAtual.valor
        }
    })

    return num
}


function menor(i, m){
    var num = m
    i.forEach((diaAtual) => {
        if(diaAtual.valor < num && diaAtual.valor != 0.0){
            num = diaAtual.valor
        }
    })
    
    return num
}

function avg(i){
    var cont = 0, soma = 0, m = 0
    i.forEach((diaAtual) => {
        cont++
        soma += diaAtual.valor
    })

    m = soma/cont

    return m
}

function maiorMedia(i, m){
    var qtde = 0
    i.forEach((diaAtual) => {
        if(diaAtual.valor > m){
            qtde++
        }
    })

    return qtde
}
