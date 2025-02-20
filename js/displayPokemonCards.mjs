import { showCardPopup } from './cardPopup.mjs';
import { saveToFavorites, removeFromFavorites, loadFavorites } from './favorites.mjs';

// function to display Pokemon cards dynamically
export function displayPokemonCards(cards, container, isFavorites = false) {
    container.innerHTML = ''; // clear the container before displaying new cards
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');// CSS class for styling
        // Create card HTML structure with a condition for favorite/removal buttons
        cardElement.innerHTML = `
            <h3>${card.name}</h3>
            <img src="${card.images.small}" alt="${card.name}" data-large="${card.images.large}">
            ${isFavorites ? '<button class="remove-favorite-btn" data-id="' + card.id + '">❌ Remove</button>' : '<button class="favorite-btn"><span class="star">⭐</span></button>'}
        `;
        
        // Event listener to open high quality image popup on card click
        cardElement.addEventListener('click', () => {
            showCardPopup(card.images.large, card.name);
        });

        if (isFavorites) {
            // Event listener for removing from favorites
            cardElement.querySelector('.remove-favorite-btn').addEventListener('click', (event) => {
                event.stopPropagation(); // prevent triggering popup
                const cardId = event.target.getAttribute('data-id');
                removeFromFavorites(cardId);// Remove card from local storage
                // reload the favorites list
                loadFavorites(container, displayPokemonCards);
            });
        } else {
            // Event listener for adding to favorites
            cardElement.querySelector('.favorite-btn').addEventListener('click', (event) => {
                event.stopPropagation(); // prevent triggering popup
                saveToFavorites(card); // Save card to local storage
                if (favoritesVisible) {
                    // auto-update favorites view
                    loadFavorites(favoritesContainer, displayPokemonCards); 
                }
            });
        }

        container.appendChild(cardElement);// Append the card to the container
    });
}

// Toggle View Favorites
const favoritesButton = document.getElementById('view-favorites');
const favoritesContainer = document.getElementById('favorites-container');
// Track favorites section visibility
let favoritesVisible = false; 

// Event listener to toggle favorites view
favoritesButton.addEventListener('click', () => {
    favoritesVisible = !favoritesVisible;
    if (favoritesVisible) {
        loadFavorites(favoritesContainer, displayPokemonCards);// Load and display favorites
        favoritesContainer.style.display = 'flex';
    } else {
        favoritesContainer.style.display = 'none';// Hide favorites section
    }
});