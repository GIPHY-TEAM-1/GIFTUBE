import { toSimpleView } from "./gif-view.js";

/**
 * Generates the HTML string for the "Favorites" view in GIFtube.
 *
 * @param {Object[]} gifs - An array of objects containing information about favorite GIFs.
 * @param {boolean} [random=false] - A flag indicating whether the view is for a random GIF.
 * @returns {string} The HTML string representing the content for the "Favorites" view.
 */
export const toFavoritesView = (gifs, random = false) => 
`
<div data-page="favorites">
  <h3>❤️ Favorite GIFs</h3>
  <div class="content">
    ${random ? `<p>Behold the GIF that's stealing the spotlight right now! 🔥 Feeling the vibe? Secure its spot in your favorites!</p>` : ''}
    ${gifs.map((g) => toSimpleView(g)).join('\n')}
  </div>
</div>
`;

