import { toSimpleView } from './gif-view.js';

/**
 * Renders the search results in the specified container using the search view.
 *
 * @param {Object[]} gifs - An array of objects containing information about the GIFs to render.
 * @param {string} query - The search query.
 * @returns {void} No explicit return value.
 */

export const toSearchView = (gifs, query) => {
    return `
    <div class="search-view">
        <h3 id="search-header">Search Results for "${query}"</h3>
        <div class="search-container">
            ${gifs.map(toSimpleView).join('') || `No results found for for "${query}" :(`}
        </div>
    </div>
    `;
};