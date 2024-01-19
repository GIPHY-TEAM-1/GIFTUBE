/*
DONE      1. How TO - Image Overlay Icon
2. toggleFavoriteStatus - add/remove active status - to check how to
DONE      3. renderFavoriteStatus
4. renderFavorites im navigation-events.js
*/

import { getFavorites } from "../data/favorites.js"


export const renderFavoriteStatus = (gifId) => {
    const favorites = getFavorites();

    if (favorites.includes(gifId)) {
        return `
        <span class="material-symbols-outlined favorite active" data-gif-id${gifId}>
          favorite
        </span>
        <style>
          #full-heart {
            font-variation-settings:
            'FILL' 1,
            'wght' 400,
            'GRAD' 0,
            'opsz' 24
           }
        </style>`
    } else {
        return `
        <span class="material-symbols-outlined favorite" data-gif-id${gifId}>
          favorite
        </span>`;
    }
}