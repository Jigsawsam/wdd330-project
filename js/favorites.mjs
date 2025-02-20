// Function to save Pokemon card to local storage favorites
export function saveToFavorites(card) {
    let favorites = JSON.parse(localStorage.getItem('favoriteCards')) || [];// retrieve existing favorites/ or initialize empty array
    if (!favorites.some(fav => fav.id === card.id)) {// check if card is already in favorites
        favorites.push(card);// Add new favorite
        localStorage.setItem('favoriteCards', JSON.stringify(favorites));// Save updated favorites list
        //alert(`${card.name} added to favorites!`);
    } else {
        alert(`${card.name} is already in favorites.`);
    }
}

// Function to load favorites from local storage and display them
export function loadFavorites(container, displayFunction) {
    let favorites = JSON.parse(localStorage.getItem('favoriteCards')) || [];// Retrieve stored favorites or initialize empty array
    displayFunction(favorites, container, true);// Call display function to update UI
}

// Function to remove Pokemon card from local storage favorites
export function removeFromFavorites(cardId) {
    let favorites = JSON.parse(localStorage.getItem('favoriteCards')) || [];// Retrieve stored favorites
    favorites = favorites.filter(card => card.id !== cardId); // Remove selected card from list
    localStorage.setItem('favoriteCards', JSON.stringify(favorites)); // Save updated list to local storage
    //alert('Card removed from favorites!');
}