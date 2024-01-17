import { toSimpleView } from "./gif-view.js";


export const toTrendingView = (trending) => {
    return `
    <div id="trending">
        <h1>Trending</h1>
        ${toSimpleView(trending)}
    </div>
    `;
};