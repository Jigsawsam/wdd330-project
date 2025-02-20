export function displayPokemonInfo(pokemonData, container) {
    container.innerHTML = `
        <h2><strong>${pokemonData.name.toUpperCase()}</strong></h2>
        <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
        <p><strong>Height:</strong> ${pokemonData.height}</p>
        <p><strong>Weight:</strong> ${pokemonData.weight}</p>
        <p><strong>Base</strong> Experience: ${pokemonData.base_experience}</p>
        <p><strong>Abilities:</strong> ${pokemonData.abilities.map(a => a.ability.name).join(', ')}</p>
        <p><strong>Type:</strong> ${pokemonData.types.map(t => t.type.name).join(', ')}</p>
    `;
}