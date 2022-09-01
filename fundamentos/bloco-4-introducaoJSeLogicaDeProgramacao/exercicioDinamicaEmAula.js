function calcularFatorialRecursivamente (n) {
    if (n === 1) {
        return 1;
    }
     
    return n * calcularFatorialRecursivamente (n - 1);
}

console.log(calcularFatorialRecursivamente(5))

function calcularFatorial (fatorial) {

    if (isNaN(fatorial)) {
        return 'Não existe fatorial de um texto';
    }
     
    if (!Number.isInteger(fatorial) || fatorial < 0) {
        return 'Não existe fatorial de um número não natural';
    }
     
    if (fatorial === 0 || fatorial === 1) {
        return 1;
    }
     
    let resultado = fatorial;
    let primeiroMultipicador = fatorial - 1;
    for (let i = primeiroMultipicador; i > 1; i--) {
        resultado *= i;
    }
     
    return resultado;
}
 
console.log(calcularFatorial("5"));

function calcularFatorialRecursivamente (n) {
    if (n === 1) {
        return 1;
    }
     
    return n * calcularFatorialRecursivamente (n - 1);
}
 

function somaFrutas (frutas){


    let sFrutas = 0
    for (let i = 0; i < frutas.length; i+=1){
           sFrutas = sFrutas + frutas[i]
    }
            if (sFrutas > 15){
                console.log(sFrutas);
            } else {
                console.log("valor menor que 16")
            }
    }

console.log(somaFrutas([3, 4, 0, 1, 1]))


// 1 --
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
//A soma total de 1 a 50 é:

let soma = 0;
for (let index = 0; index <50; index+=1){
soma = soma + index;
}
console.log(soma);

// 2 --
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let numDiv = 0
for (let i = 2; i<=150; i+= 1){
    if (i%3 == 0){
        numDiv += 1
    }
}
if (numDiv == 50){
    console.log("Mensagem secreta")
}else{
    console.log(numDiv)
}

// 3 --
//Crie um algoritmo que simula o jogo ""pedra", papel e "tesoura"" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".

let p1 = "tesoura"
let p2 = "papel"
if (p1 == "pedra" && p2 == "tesoura" || p1 == "tesoura" && p2 == "papel" || p1 == "papel" && p2 == "pedra"){
    console.log("Player 1 won")
}else if (p1 == "pedra" && p2 == "pedra" || p1 == "tesoura" && p2 == "tesoura" || p1 == "papel" && p2 == "papel"){
    console.log("A Ties");
}else{
    console.log("Player 2 won")
}

// -- 4 --
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

let idade = 21;
if (idade > 18){
    console.log("A pessoa é maior de idade")
}else{
    console.log("A pessoa é menor de idade")
}
// -- Bonus 4 --
let idade2 = 21
let verificaIdade = idade2 >= 18 ? "A pessoa é maior de idade" : "A pessoa é menor de idade"
console.log(verificaIdade)