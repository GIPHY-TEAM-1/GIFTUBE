import { toSimpleView } from "./gif-view.js";

export const toTrendingView = (trending) => {
    return `
    
    <div class="trending-container">
          <h3 id="trending-header">⚡ Trending</h3>
          ${trending.map(gif => toSimpleView(gif)).join('')}
    </div>

    `;
};