/*
 * Documentação API de pokemons: https://pokeapi.co/
 * Lista com diversas APIs públicas: https://github.com/public-apis/public-apis
 * Link workshop de CSS com bootstrap https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/547754e0-5011-4787-aa58-f1646e1b8713/lesson/b79ca257-4609-4e81-8bd8-16837ee9a487
*/

function append(pokemon) {
    const section = document.querySelector("section");
  
    const divCard = document.createElement("div");
    const img = document.createElement("img");
    const divBody = document.createElement("div");
    const cardTitle = document.createElement("h5");
  
    divCard.classList.add("card");
    divBody.classList.add("card-body");
    cardTitle.classList.add("card-title");
    img.classList.add("card-img-top");
  
    img.src = pokemon.imageUrl;
    cardTitle.innerHTML = pokemon.name;
  
    divBody.appendChild(cardTitle);
    divCard.appendChild(img);
    divCard.appendChild(divBody);
    section.appendChild(divCard);
  }
  
  const fetchPokemon = (pokemonName) => {
    fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonName)
      .then((response) => response.json())
      .then((data) => {
        const pokemon = {
          imageUrl: data.sprites.front_default,
          name: data.name
        };
        append(pokemon);
      })
      .catch(() => console.log('deu erro'))
  }
  
  const fetchPokemonList = () => {
    fetchPokemon('pikachu');
    fetchPokemon('ditto');
    fetchPokemon('squirtle');
    fetchPokemon('bulbasaur');
  }
  
  // async function fetchPokemonAsync()
  const fetchPokemonAsync = async (pokemonName) => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonName);
      const data = await response.json();
      const pokemon = {
        imageUrl: data.sprites.front_default,
        name: data.name,
      };
      return pokemon;
    } catch (error) {
      console.log(error);
      return {
        name: 'error',
        imageUrl: ''
      };
    }
  }
  
  const fetchPokemonListAsync = async () => {
    const promiseResult = await Promise.all([
      fetchPokemonAsync('pikachu'),
      fetchPokemonAsync('ditto'),
      fetchPokemonAsync('squirtle'),
      fetchPokemonAsync('bulbasaur'),
      fetchPokemonAsync('alou')
    ]);
  
    promiseResult.forEach((pokemon) => {
      append(pokemon);
    })
  }
  
  window.onload = fetchPokemonListAsync;
  
  
  // const promise = fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
  
  // promise.then((response) => {
  //   const jsonPromise = response.json();
  //   jsonPromise.then((value) => {
  //     console.log(value)
  //   })
  // });
  
  // promise.catch(() => {
  //   console.log('deu erro')
  // })