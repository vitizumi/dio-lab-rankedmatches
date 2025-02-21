// var init
let herois = [
    { nome:"John", vitorias:10 , derrotas:50}, //Ferro, saldo negativo
    { nome:"Gran", vitorias:10 , derrotas:5}, //Ferro, saldo positivo
    { nome:"Percival", vitorias:500 , derrotas:480}, //Bronze
    { nome:"Amelia", vitorias:21 , derrotas:0}, //Prata
    { nome:"Bunny", vitorias:100 , derrotas:20}, //Ouro
    { nome:"Fediel", vitorias:80 , derrotas:0}, //Ouro
    { nome:"Dan", vitorias:10000 , derrotas:9910}, //Diamante
    { nome:"Alan", vitorias:150 , derrotas:50}, //Lendário
    { nome:"John", vitorias:101 , derrotas:0}, //Imortal
    { nome:"Saber", vitorias:100000 , derrotas:50}, //Imortal
]
let vitorias = 0
let derrotas = 0
let saldoVitorias
let nivel

//Funcao para fazer o calculo do saldo de W/L
function saldoCalc(vitorias, derrotas) {
    return vitorias - derrotas
}

//Funcao para determinar o nivel
function rankingCalc (saldoVitorias) {
    let rank
    switch (true) {
        case (saldoVitorias>=101):
            rank = "Imortal"
            break
        case (saldoVitorias>=91):
            rank = "Lendário"
            break
        case (saldoVitorias>=81):
            rank = "Diamante"
            break
        case (saldoVitorias>=51):
            rank = "Ouro"
            break
        case (saldoVitorias>=21):
            rank = "Prata"
            break
        case (saldoVitorias>=11):
            rank = "Bronze"
            break
        default:
            rank = "Ferro"
            break
    }
    return rank
}

//Loop para iterar a tabela de herois, calc e output
for (i=0; i<herois.length; i++ ) {

    //chamada da funcao pra calcular o saldo de vitorias
    saldoVitorias = saldoCalc(herois[i].vitorias, herois[i].derrotas)

    //chamada da funcao pra determinar o nivel
    nivel = rankingCalc(saldoVitorias)

    //output
    console.log("O Herói " + herois[i].nome + " tem de saldo de " + saldoVitorias + " está no nível de " + nivel)
}