export async function getPokemonInfo(pokemonName) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error fetching Pokémon info:', error);
    }
}