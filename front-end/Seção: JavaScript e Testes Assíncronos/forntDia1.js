// callback.js

// Definição da função userFullName
const userFullName = ({ firstName, lastName }) => `Olá! Meu nome é ${firstName} ${lastName}`;

// Definição da função getUser
const getUser = (callback) => {
  const user = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russo',
  };
  // Retornamos nosso parâmetro, que será uma função (callback)
  return callback(user);
};

// Chamada/execução da função getUser, que vai receber como parâmetro nossa função userFullName.
// console.log(getUser(userFullName));

// Saída:
// Olá! Meu nome é Ivan Ivanovich

// callbacks-para-fixar-01.js

// const userFullName = ({ firstName, lastName }) => `Olá! Meu nome é ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} é ${nationality}`;

const getUser2 = (callback) => {
  const user = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russo',
  };
  // Insira o retorno da função `getUser`
  return callback(user);
};

console.log(getUser2(userFullName)); // Retorno esperado: "Olá! Meu nome é Ivan Ivanovich"
console.log(getUser2(userNationality)); // Retorno esperado: "Ivan é Russo"