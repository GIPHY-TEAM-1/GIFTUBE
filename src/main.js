import { loadPage, renderFavorites } from './events/navigation-events.js';
import { q } from './events/helpers.js';
import { FAVORITES, TRENDING, CONTAINER_SELECTOR } from './common/constants.js';
import { toSingleGifView } from './views/gif-view.js';
import { getSingleGif } from './data/single-gif.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';

// !!!! REMINDER TO MYSELF: TO ADD IN @listens click ALL NEW IMPLEMENTATIONS!!!!
/**
 * Event listener setup for GIFtube webpage.
 *
 * @listens DOMContentLoaded - Listens for the DOMContentLoaded event to initialize the script.
 * @listens click - Listens for click events on navigation links, simple views, and favorite icons to trigger relevant actions.
 */
document.addEventListener('DOMContentLoaded', () => {

    document.addEventListener('click', async (event) => {

        /** Handle navigation link clicks */
        if (event.target.classList.contains('nav-link')) {
            loadPage(event.target.getAttribute('data-page'));
        }


        /** Handle clicking on a GIF in simple view*/
        if (event.target.classList.contains('simple-view')) {
            q(CONTAINER_SELECTOR).innerHTML = toSingleGifView(await getSingleGif(event.target.id));
        }

        /** Handle clicking on the favorite icon */
        if (event.target.classList.contains('favorite')) {
            toggleFavoriteStatus(event.target.getAttribute('data-gif-id'));
        }

        /** Refresh favorites view if the favorite icon is clicked in the Favorites page */
        if (event.target.classList.contains('favorite') &&
            event.target.parentNode.parentNode.parentNode.parentNode.getAttribute('data-page') === FAVORITES) {
            await renderFavorites();
        }
    });

    /** Loading of the TRENDING page when the DOM is fully loaded */
    loadPage(TRENDING);
});

/**
 * Event listener for a click on the logo element.
 * Loads the TRENDING page when the logo is clicked.
 *
 * @listens click
 */
const logo = q('#logo');
logo.addEventListener('click', () => {
    loadPage(TRENDING);
});