import { toSimpleView } from './gif-view.js';

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