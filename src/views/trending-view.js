import { toSimpleView } from "./gif-view.js";

/**
 * Generates the HTML string for the trending view in GIFtube.
 *
 * @param {Object[]} trending - An array of objects containing information about trending GIFs.
 * @returns {string} The HTML string representing the content for the trending view.
 */
export const toTrendingView = (trending) => {
    return `
    <div class="trending-view gif-view">
        <h3 id="trending-header">⚡ Trending</h3>
        <div class="trending-container gif-container">
            ${trending.map(gif => toSimpleView(gif)).join('')}
        </div>
    </div>
    `;
};