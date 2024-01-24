/**
 * Generates the HTML string for the "Uploads" view in GIFtube.
 *
 * @returns {string} - The HTML string representing the content for the "Uploads" view.
 */
export const toUploadsView = () => {
    return `
<div class="uploads-view gif-view" data-page="uploads">
  <h3 class="h3-uploads-view"></h3>
  <div class="uploads-container gif-container">
  </div>
</div>
`;
};