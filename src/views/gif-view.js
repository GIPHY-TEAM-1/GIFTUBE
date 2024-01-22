import { link } from "../common/constants.js"
import { renderFavoriteStatus } from "../events/favorites-events.js"

/**
 * Generates the HTML string for a simple view of a GIF in GIFtube.
 *
 * @param {Object} gif - An object containing information about the GIF.
 * @returns {string} The HTML string representing the content for the simple view of the GIF.
 */
export const toSimpleView = (gif) => {
// console.log(gif)
    return `
      <div class="simple-view" data-gif-id="${gif.id}" id="${gif.id}" style="width:${gif.width}px; height:${gif.height}px; background-image:url(${gif.image})">
      <!-- <img class="gif-image" id=${gif.id} src=${gif.image} alt="${gif.title} data-page="gif-click"> -->
          ${onHoverGif(gif.id)}
      </div>
  `;
};

// TODO - Image Overlay Icon - How to // position:absolute -> top/bottom properties
/**
 * Generates the HTML string for the overlay content when hovering over a GIF in GIFtube.
 *
 * @param {string} gifId - The ID of the GIF for which the overlay is generated.
 * @returns {string} The HTML string representing the content for the overlay when hovering over a GIF.
 */
export const onHoverGif = (gifId) => {
    return `
    <div class="overlay">
      ${renderFavoriteStatus(gifId)}
      ${link}
    </div>`;
};

/**
 * Generates the HTML string for the detailed view of a single GIF in GIFtube.
 *
 * @param {Object} gif - An object containing information about the single GIF.
 * @returns {string} The HTML string representing the content for the detailed view of the GIF.
 */
export const toSingleGifView = (gif) => {
    const [date, time] = gif.date.split(' ');
    return `
    <div class="single-gif-info-container" id=${gif.id}>
      <img src=${gif.image} alt="${gif.title}">
      <div class="single-gif-info-right-side">
        <h3>Title: ${gif.title || 'Unknown'}</h3>
        <p><strong>User:</strong> ${gif.username || 'Anonymous'}</p>
        <p><strong>Uploaded:</strong> ${`${date} at ${time}` || 'Unknown'}</p>
        <div class="overlay">
          ${renderFavoriteStatus(gif.id)}
          ${link}
        </div>
      </div>
    </div>`;
};
