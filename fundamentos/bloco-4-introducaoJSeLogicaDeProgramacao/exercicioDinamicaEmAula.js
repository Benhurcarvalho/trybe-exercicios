// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
//A soma total de 1 a 50 é:

let soma = 0;
for (let index = 0; index <50; index+=1){
soma += index;
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