import { toSimpleView } from "./gif-view.js";

export const toTrendingView = (trending) => {
    return `
    <div class="trending-view">
        <h3 id="trending-header">⚡ Trending</h3>
        <div class="trending-container">
            ${trending.map(gif => toSimpleView(gif)).join('')}
        </div>
    </div>
    `;
};