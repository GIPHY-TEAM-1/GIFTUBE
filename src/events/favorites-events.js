import { getFavorites, removeFavorite, addFavorite } from "../data/favorites.js"
import { q } from "./helpers.js";

/**
 * Renders the favorite status icon based on whether the specified GIF ID is in the favorites.
 *
 * @param {string} gifId - The ID of the GIF.
 * @returns {string} The HTML representation of the favorite status icon.
 */
export const renderFavoriteStatus = (gifId) => {
    const favorites = getFavorites();

    if (favorites.includes(gifId)) {
        return `
        <span class="material-symbols-outlined favorite active" data-gif-id="${gifId}">
          favorite
        </span>
        <style>
          .active {
            font-variation-settings:
            'FILL' 1,
            'wght' 400,
            'GRAD' 0,
            'opsz' 24
           }
        </style>`
    } else {
        return `
        <span class="material-symbols-outlined favorite" data-gif-id="${gifId}">
          favorite
        </span>`;
    };
};

/**
 * Toggles the favorite status of a GIF based on its ID.
 *
 * @param {string} gifId - The ID of the GIF to toggle the favorite status for.
 * @returns {void} - No explicit return value.
 */
export const toggleFavoriteStatus = (gifId) => {
    const favorites = getFavorites();
    const favoriteStatus = q(`span[data-gif-id="${gifId}"]`);

    if (favorites.includes(gifId)) {
        removeFavorite(gifId);
        favoriteStatus.classList.remove('active');
    } else {
        addFavorite(gifId);
        favoriteStatus.classList.add('active');
    };

    favoriteStatus.innderHTML = renderFavoriteStatus(gifId);
};