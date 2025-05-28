const pokemonListElement = document.getElementById('pokemon-list');
const pokemonDetailElement = document.getElementById('pokemon-detail');

const getPokemonList = async () => {
  const response = await fetch('https:                                       
  const data = await response.json();
  return data.results;
};

const getPokemonDetails = async (name) => {
  const response = await fetch(`https:                                      
  const data = await response.json();
  return data;
};

const renderPokemonList = async () => {
  const pokemonList = await getPokemonList();
  pokemonListElement.innerHTML = '//pokeapi.co/api/v2/pokemon?limit=20');
  const data = await response.json();
  return data.results;
};

const getPokemonDetails = async (name) => {
  const response = await fetch(https://pokeapi.co/api/v2/pokemon/${name});
  const data = await response.json();
  return data;
};

const renderPokemonList = async () => {
  const pokemonList = await getPokemonList();
  pokemonListElement.innerHTML = '';
  pokemonList.forEach((pokemon) => {
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card');
    pokemonCard.innerHTML = `
      <img src="https:                                                                                                                                              
      <h2>${pokemon.name}</h2>
      <button>Ver detalles</button>
    `;
    pokemonCard.querySelector('//raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/').filter(Boolean).pop()}.png" alt="${pokemon.name}">
      <h2>${pokemon.name}</h2>
      <button>Ver detalles</button>
    `;
    pokemonCard.querySelector('button').addEventListener('click', () => {
      renderPokemonDetails(pokemon.name);
    });
    pokemonListElement.appendChild(pokemonCard);
  });
};

const renderPokemonDetails = async (name) => {
  const pokemonDetails = await getPokemonDetails(name);
  pokemonDetailElement.style.display = 'flex';
  pokemonDetailElement.innerHTML = `
    <h1>${pokemonDetails.name}</h1>
    <img src="${pokemonDetails.sprites.other['official-artwork'].front_default}" alt="${pokemonDetails.name}">
    <p>ID: ${pokemonDetails.id}</p>
    <p>Altura: ${pokemonDetails.height}</p>
    <p>Peso: ${pokemonDetails.weight}</p>
    <p>Tipos: ${pokemonDetails.types.map((type) => type.type.name).join(', ')}</p>
    <p>Habilidades: ${pokemonDetails.abilities.map((ability) => ability.ability.name).join(', ')}</p>
    <button>Volver a la lista</button>
  `;
  pokemonDetailElement.querySelector('button').addEventListener('click', () => {
    pokemonDetailElement.style.display = 'none';
  });
  pokemonListElement.style.display = 'none';
};

renderPokemonList();