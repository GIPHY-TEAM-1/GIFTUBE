import { toSimpleView } from "./gif-view.js";

export const toFavoritesView = (gifs) => `
<div id="favorite-gifs">
  <h1>Favorite Gifs:</h1>
  <div class="content">
    ${gifs.map((g) => toSimpleView(g)).join('\n') || '<p>Add some gifs to favorites to see them here.</p>'}
  </div>
</div>
`;
