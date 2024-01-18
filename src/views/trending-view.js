import { toSimpleView } from "./gif-view.js";


export const toTrendingView = (trending) => {
    return `
    <div id="trending">
        <h1>Trending</h1>
        <div class="trending-container">
          ${trending.map(gif => toSimpleView(gif)).join('')}
    </div>
    `;
};