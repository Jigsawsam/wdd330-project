export async function getPokemonCards(pokemonName) {
    const url = `https://api.pokemontcg.io/v2/cards?q=name:${pokemonName}`;
    try {
        const response = await fetch(url, {
            headers: { 'X-Api-Key': 'b86db450-468e-4451-9bd5-b914bb6a82e8' }
        });
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching Pokémon cards:', error);
    }
}