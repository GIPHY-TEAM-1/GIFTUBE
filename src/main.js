import { q } from './events/helpers.js';
import { loadPage, renderFavorites, renderSearch, renderUploads } from './events/navigation-events.js';
import { FAVORITES, TRENDING, CONTAINER_SELECTOR, uploadApi, UPLOAD, UPLOADBTN } from './common/constants.js';
import { toSingleGifView } from './views/gif-view.js';
import { getSingleGif } from './data/single-gif.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { uploadGif } from './data/uploads.js';
import { loadSingleGif } from './requests/request-service.js';

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

        /** Handle clicking on a GIF in simple view */
        if (event.target.classList.contains('simple-view')) {
            q(CONTAINER_SELECTOR).innerHTML = toSingleGifView(await getSingleGif(event.target.id));
        }

        /** Handle clicking on the favorite icon */
        if (event.target.classList.contains('favorite')) {
            toggleFavoriteStatus(event.target.getAttribute('data-gif-id'));
        }

        /** Refresh favorites view if the favorite icon is clicked in the Favorites page */
        if (event.target.classList.contains('favorite') && event.target.parentNode.parentNode.parentNode.parentNode.getAttribute('data-page') === FAVORITES) {
            await renderFavorites();
        }

        if (event.target.classList.contains('uploads')) {
            renderUploads();
        }

        if (event.target.parentNode.classList.contains('search-btn')) {
            const input = q('#search');
            if (input.value !== '') {
                await renderSearch(input.value);
                input.value = '';
            }
        }

        if (event.target.classList.contains('link-btn')) {
            const result = await loadSingleGif(event.target.parentNode.parentNode.getAttribute('data-gif-id'));
            navigator.clipboard.writeText(result.image);
            q(CONTAINER_SELECTOR).innerHTML += `<div class="copy-message">Link copied to clipboard!</div>`;
        }
    });

    /** Loading of the TRENDING page when the DOM is fully loaded */
    loadPage(TRENDING);

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

    const upload = q('#upload-btn');
    upload.addEventListener('click', () => {
        loadPage(UPLOADBTN);
        const innerUpload = q('#inner-upload-btn');
        const fileInput = q('#file-input');
        innerUpload.addEventListener('click', async (event) => {
            event.preventDefault();
            const file = fileInput.files[0];

            if (!file) {
                // alert('Please upload a file!');
                q(CONTAINER_SELECTOR).innerHTML += `<br><div class="copy-message">Please upload a file!</div>`
            } else {
                const formData = new FormData();
                formData.append('file', file);
                
                try {
                    const request = await fetch(uploadApi, {
                        method: 'POST',
                        body: formData
                    });
                    const response = await request.json();
                    q(CONTAINER_SELECTOR).innerHTML += `<br><div class="copy-message">File uploaded successfully!</div>`
                    uploadGif(response)

                } catch (e) {
                    console.log(e.message);
                }
            }
        });
    });
});

