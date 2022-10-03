const listaDeNomes = ['Pedro Guerra', 'Luiza Drumond', 'Carla Paiva'];

const geraEmail = (nome) => `${nome.replace(' ', '_').toLowerCase()}@trybe.com`;

const newEmployees = (listaDeNomes) => {

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
        employees[listaDeNomes[i]] = geraEmail(listaDeNomes[i]);
    }
    return employees;
  };

//   nome_da_pessoa@trybe.com

console.log(newEmployees(listaDeNomes));