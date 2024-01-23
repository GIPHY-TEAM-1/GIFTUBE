import { toSimpleView } from './gif-view.js';


/**
 * Generates the HTML string for the "Uploads" view in GIFtube.
 *
 * @param {Object[]} gifs - An array of objects containing information about uploaded GIFs.
 * @returns {string} - The HTML string representing the content for the "Uploads" view.
 * @see toSimpleView
 */
export const toUploadsView = (gifs) =>
    `
<div class="uploads-view gif-view" data-page="uploads">
  <h3>${gifs[0].username}</h3>
  <div class="uploads-container gif-container">
    ${gifs.map((g) => toSimpleView(g)).join('\n')}
  </div>
</div>
`;
