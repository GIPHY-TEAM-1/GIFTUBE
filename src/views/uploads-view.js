import { toSimpleView } from './gif-view.js';

export const toUploadsView = (gifs) =>
    `
<div class="uploads-view gif-view" data-page="uploads">
  <h3>${gifs[0].username}</h3>
  <div class="uploads-container gif-container">
    ${gifs.map((g) => toSimpleView(g)).join('\n')}
  </div>
</div>
`;
