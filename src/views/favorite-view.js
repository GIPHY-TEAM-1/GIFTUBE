import { toSimpleView } from "./gif-view.js";

export const toFavoritesView = (gifs, random = false) => 

`
<div data-page="favorites">
  <h1>Favorite GIFs:</h1>
  <div class="content">
    ${random ? `<p>Behold the GIF that's stealing the spotlight right now! 🔥 Feeling the vibe? Secure its spot in your favorites!</p>` : ''}
    ${gifs.map((g) => toSimpleView(g)).join('\n')}
  </div>
</div>
`;

