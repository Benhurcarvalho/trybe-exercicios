const listaDeNomes = ['Pedro Guerra', 'Luiza Drumond', 'Carla Paiva', 'Ben-Hur Carvalho'];

const geraEmailPonto = (nome) => `${nome.replace(' ', '.').toLowerCase()}@trybe.com`;

const geraEmailLine = (nome) => `${nome.replace(' ', '_').toLowerCase()}@trybe.com`;

const newEmployees = (listaDeNomes, callback) => {

    const employees = {};
    // const employees = {
    //   id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    //   id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    //   id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    // }
    // for (let i = 0; i < listaDeNomes.length; i+= 1) {
    //     employees.push(listaDeNomes[i], geraEmail(listaDeNomes[i]))
    // }

    for (let i = 0, j = listaDeNomes.length; i < j; i++){
        employees[listaDeNomes[i]] = callback(listaDeNomes[i]);
    }
    return employees;
  };

//   nome_da_pessoa@trybe.com

// console.log(newEmployees(listaDeNomes, geraEmailPonto));
// console.log(newEmployees(listaDeNomes, geraEmailLine));

const PrizeDraw = () => Math.round(Math.random()*5);

// console.log(PrizeDraw())

const lotteryWinner = (num, callback) => {
    // return `${num} ${callback()}`
    return num == callback() ? 'Parabéns você ganhou' : 'Tente novamente';
    // if (num === callback()) {
    //     return 'Parabéns você ganhou'
    // } {
    //     return 'Tente novamente'
    // }
}
console.log(lotteryWinner(4, PrizeDraw));