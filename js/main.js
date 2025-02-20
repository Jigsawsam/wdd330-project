import { getPokemonInfo } from './fetchPokemon.mjs';
import { getPokemonCards } from './fetchPokemonCards.mjs';
import { displayPokemonInfo } from './displayPokemonInfo.mjs';
import { displayPokemonCards } from './displayPokemonCards.mjs';
import { loadFavorites } from './favorites.mjs';

// get DOM elements
const searchButton = document.getElementById('search-button');
const pokemonInput = document.getElementById('pokemon-input');
const pokemonInfoContainer = document.getElementById('pokemon-info');
const cardShowcaseContainer = document.getElementById('card-showcase');
const favoritesButton = document.getElementById('view-favorites');
const favoritesContainer = document.getElementById('favorites-container');

// toggle saved cards
favoritesButton.addEventListener('click', () => {
    favoritesVisible = !favoritesVisible;
    if (favoritesVisible) {
        loadFavorites(favoritesContainer, displayPokemonCards);
        favoritesContainer.style.display = 'flex';
    } else {
        favoritesContainer.style.display = 'none';
    }
});

// function search pokemon
async function searchPokemon() {
    // get pokemon name from input and convert lowercase
    const pokemonName = pokemonInput.value.toLowerCase();
    // fetch pokemon data (info and cards)
    const pokemonData = await getPokemonInfo(pokemonName);
    const pokemonCards = await getPokemonCards(pokemonName);

    // display data
    displayPokemonInfo(pokemonData, pokemonInfoContainer);
    displayPokemonCards(pokemonCards, cardShowcaseContainer);
}

// click event for the search button
searchButton.addEventListener('click', searchPokemon);

// keydown event for Enter key on input field
pokemonInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        searchPokemon();
    }
});