import { showCardPopup } from './cardPopup.mjs';

export function displayPokemonCards(cards, container) {
    container.innerHTML = '';
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `
            <h3>${card.name}</h3>
            <img src="${card.images.small}" alt="${card.name}" data-large="${card.images.large}">
        `;
        
        cardElement.addEventListener('click', () => {
            showCardPopup(card.images.large, card.name);
        });

        container.appendChild(cardElement);
    });
}