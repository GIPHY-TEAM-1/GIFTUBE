import { toSimpleView } from "./gif-view.js";

export const toFavoritesView = (gifs, random = false) => 

`
<div data-page="favorites">
  <h1>Favorite Gifs:</h1>
  <div class="content">
    ${random ? `<p>Add some gifs to favorites to see them here.</p>` : ''}
    ${gifs.map((g) => toSimpleView(g)).join('\n')}
  </div>
</div>
`;

