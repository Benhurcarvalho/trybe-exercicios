// apiScript.js
const fetch = require('node-fetch');

function append(piada) {
    const section = document.getElementById("piadaAleatoria");
  
    const divCard = document.createElement("div");
    const divBody = document.createElement("div");
    const cardTitle = document.createElement("h2");
  
    divCard.classList.add("card");
    divBody.classList.add("card-body");
    cardTitle.classList.add("card-title");
  
    cardTitle.innerHTML = piada;
  
    divBody.appendChild(cardTitle);
    divCard.appendChild(divBody);
    section.appendChild(divCard);
  }

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => {
        const piada = data.joke;
        append(piada)
        console.log(piada)
    })
    // .catch(() => console.log('not funny joke')) 
}

// window.onload = () => 
fetchJoke();