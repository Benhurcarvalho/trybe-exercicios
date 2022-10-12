const fetch = require('node-fetch');

const fetchCep = (cep) => {
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url)
  .then((response) => response.json())
  .then((object) => console.log(`${object.logradouro} | ${object.localidade}`))
  .catch((error) => console.log(`Algo deu errado - ${error}`));
}

fetchCep('31995170');


const fetchCep2 = (cep) => {
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url)
  .then((response) => response.json())
  .then((object) => {
    const {localidade} = object;
    console.log(localidade);
  });
}

fetchCep2('31995170');