// // Exercícios bonus... Formas de *

function triâgulo (n) {

    let aux = '';
    for (let linha = 1; linha <= n; linha++) {
        for(let coluna = 1; coluna <= n; coluna++) {
            if (coluna == linha) {
                aux += '*'
            }
        }
        console.log(aux)
    } 
        
    }
    
    console.log(triâgulo(5));


// A função roda no console mas, não consegui entender por que ela não esta rodando no vscode.

function primeNumbers(num) {
    let numbers = [0];
    for (var i = 0; i <= num; i++) {
      if (num[i] == isPrime(i) == true){
        number = numbers.push(i);
      }
    }
    return numbers[numbers.length - 1];  
 }
console.log(primeNumbers(50));


function maiorString (array) {

    let maior = []
    for (let i = 0; i < array.length; i += 1) {
        if (array[i].length > maior.length) {
            maior = array[i]
        }
    }


   return maior; 
}
console.log(maiorString(['python','javascript','exemplo','java','html','css']))

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
 
console.log(calcularFatorial(5));

function revertString (str) {

    //Também é possível resolver essa função ultilizando o for, 
    //eu ecolhi deste modo para amplicar meu repertório nessas pequenas funções intermediárias.

    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");

    return joinArray;
    
}

console.log(revertString("Trybe"));
 

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
    console.log("A pessoa é maior de idade");
}else{
console.log(verificaIdade)

    console.log("A pessoa é menor de idade");
}
// -- Bonus 4 --
let idade2 = 21
let verificaIdade = idade2 >= 18 ? "A pessoa é maior de idade" : "A pessoa é menor de idade"

function multiploDeA (a, N) {
    let soma = 0
    for (let i = 1; i <= N; i++) {
        if (i % a === 0) {
             soma = soma + i
        }
    }
    return soma
}
multiploDeA (3, 18);