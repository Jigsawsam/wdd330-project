export function displayPokemonInfo(pokemonData, container) {
    container.innerHTML = `
        <h2>${pokemonData.name}</h2>
        <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
        <p>Height: ${pokemonData.height}</p>
        <p>Weight: ${pokemonData.weight}</p>
        <p>Base Experience: ${pokemonData.base_experience}</p>
    `;
}