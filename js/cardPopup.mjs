export function showCardPopup(imageUrl, cardName) {
    const popup = document.createElement('div');
    popup.classList.add('card-popup');
    popup.innerHTML = `
        <div class="popup-content">
            <span class="close-popup">&times;</span>
            <img src="${imageUrl}" alt="${cardName}">
        </div>
    `;
    
    document.body.appendChild(popup);
    document.querySelector('.close-popup').addEventListener('click', () => {
        popup.remove();
    });
}