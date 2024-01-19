import { loadPage, renderFavorites } from './events/navigation-events.js';
import { q } from './events/helpers.js';
import { FAVORITES, TRENDING } from './common/constants.js';
import { CONTAINER_SELECTOR } from './common/constants.js';
import { toSingleGifView } from './views/gif-view.js';
import { getSingleGif } from './data/single-gif.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';




document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('nav-link')) {
            loadPage(event.target.getAttribute('data-page'));
        }
    });

    const logo = document.querySelector('#logo');
    logo.addEventListener('click', async () => {
        await loadPage(TRENDING);
    });

    document.addEventListener('click', async (event) => {
        if (event.target.classList.contains('simple-view')) {
            q(CONTAINER_SELECTOR).innerHTML = toSingleGifView(await getSingleGif(event.target.id));
        }
    });

    document.addEventListener('click', async (event) => {
        if (event.target.classList.contains('favorite')) {
            toggleFavoriteStatus(event.target.getAttribute('data-gif-id'));
        }

        if (event.target.classList.contains('favorite') && event.target.parentNode.parentNode.parentNode.parentNode.getAttribute('data-page') === FAVORITES) {
            await renderFavorites();

        }
    });


    loadPage(TRENDING);
});