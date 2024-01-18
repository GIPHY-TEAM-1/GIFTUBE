import { toSimpleView } from "./gif-view.js";


export const toTrendingView = (trending) => {
    return `
    <div id="trending">
        <h3 id="trending-header">⚡ Trending</h3>
        ${toSimpleView(trending)}
    </div>
    `;
};