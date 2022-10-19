// const fetch = require('node-fetch');

// function append(piada) {
//     const section = document.getElementById("piadaAleatoria");
  
//     const divCard = document.createElement("div");
//     const divBody = document.createElement("div");
//     const cardTitle = document.createElement("h2");
  
//     divCard.classList.add("card");
//     divBody.classList.add("card-body");
//     cardTitle.classList.add("card-title");
  
//     cardTitle.innerHTML = piada;
  
//     divBody.appendChild(cardTitle);
//     divCard.appendChild(divBody);
//     section.appendChild(divCard);
//   }

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
  };

   return fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => data.joke)
    .catch(() => console.log('not funny joke'));

}

// window.onload = () => fetchJoke().then((data) => console.log(data));

fetchJoke().then((data) => {
  const jokeDom = document.createElement('p');
  jokeDom.innerText = data
  document.getElementById('piadaAleatoria').appendChild(jokeDom);
  });

  const proList = async () => {
    const itens = await fetchProducts('computador');
    const { results } = itens;
    const capItems = document.querySelector('.items');
    results.forEach((element) => capItems.appendChild(createProductItemElement(element)));
  };
  
  proList();