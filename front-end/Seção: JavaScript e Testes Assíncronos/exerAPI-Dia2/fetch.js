const fetch = require('node-fetch');

const fetchCep1 = (cep) => {
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url)
  .then((response) => response.json())
  .then((object) => console.log(`${object.logradouro} | ${object.localidade}`))
  .catch((error) => console.log(`Algo deu errado - ${error}`));
}

fetchCep1('31995170');


const fetchCep2 = (cep) => {
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url)
  .then((response) => response.json())
  .then((object) => console.log(object.localidade));
    // const {localidade} = object;
    // console.log(localidade);
}

fetchCep2('31995170');


const fetchCep3 = async (cep) => {
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  const result = await fetch(url)
    .then((response) => response.json())
    .then((object) => console.log(`${object.localidade} | ${object.uf}`))
    .catch((error) => console.log(`Algo deu errado - ${error}`));
}

fetchCep3('31995170');