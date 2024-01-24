import { q } from './events/helpers.js';
import { loadPage, renderFavorites, renderSearch, renderUploads } from './events/navigation-events.js';
import { FAVORITES, TRENDING, CONTAINER_SELECTOR, uploadApi, UPLOADBTN } from './common/constants.js';
import { toSingleGifView } from './views/gif-view.js';
import { getSingleGif } from './data/single-gif.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { loadSingleGif } from './requests/request-service.js';
import { UploadPostRequest } from './events/upload-events.js';
import { toUploadBtnView } from './views/upload-btn-view.js';

/**
 * Event listener setup for GIFtube webpage.
 *
 * @listens DOMContentLoaded - Listens for the DOMContentLoaded event to initialize the script.
 * @listens click - Listens for click events on navigation links, simple views, favorite icons, and upload buttons to trigger relevant actions.
 * @listens keydown - Listens for keydown events on the search input field to initiate a search when the Enter key is pressed.
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

        /** Handle clicking on the upload button */
        if (event.target.classList.contains('uploads')) {
            renderUploads();
        }

        /** Handle clicking on the search button */
        if (event.target.parentNode.classList.contains('search-btn')) {
            const input = q('#search');
            if (input.value !== '') {
                await renderSearch(input.value);
                input.value = '';
            }
        }

        /** Handle clicking on the link button */
        if (event.target.classList.contains('link-btn')) {
            const result = await loadSingleGif(event.target.parentNode.parentNode.getAttribute('data-gif-id'));
            navigator.clipboard.writeText(result.image);
            // q(CONTAINER_SELECTOR).innerHTML += '<div class="copy-message">Link copied to clipboard!</div>';
        }
    });

    /** Handle runaway button */
    // const uploadBtn = q('.upload-btn');
    // uploadBtn.addEventListener('mouseover', (event) => {
    //     if (event.target.parentNode.classList.contains('upload-btn')) {
    //         event.target.parentNode.classList.toggle('move-right');
    //     }
    // });

    /** Handle copy link popup button */
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('link-btn')) {
            q('.pop-up').classList.toggle('hidden');
            setTimeout(() => {
                q('.pop-up').classList.toggle('hidden');
            }, 2500);
        }
    });

    /** Loading of the TRENDING page when the DOM is fully loaded */
    loadPage(TRENDING);

    /** Event listener for the search input field.
     * Loads the SEARCH page when the Enter key is pressed.
     * @listens keydown
    */
    q('#search').addEventListener('keydown', async (event) => {
        if (event.key === 'Enter') {
            const input = q('#search');
            if (input.value !== '') {
                await renderSearch(input.value);
                input.value = '';
            }
        }
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

    /**
     * Handles the click event on the upload button, initiates the upload page,
     * and sets up an event listener for the inner upload button.
     *
     * @function
     * @returns {void}
     *
     * @listens click
    */
    const upload = q('#upload-btn');
    upload.addEventListener('click', () => {
        /** Load the upload page when the main upload button is clicked */
        loadPage(UPLOADBTN);

        /** Get references to the inner upload button and file input */
        const innerUpload = q('#inner-upload-btn');
        const fileInput = q('#file-input');

        /**
        * Event listener for the click event on the inner upload button.
        * Prevents the default form submission behavior, checks if a file is selected,
        * and either displays a message indicating that no file is attached or initiates
        * the upload request using the UploadPostRequest function.
        *
        * @function
        * @param {Event} event - The click event object.
        * @returns {void}
        *
        * @listens click
        */
        innerUpload.addEventListener('click', async (event) => {
            /** Prevent the default form submission behavior */
            event.preventDefault();

            /** Get the selected file from the file input */
            const file = fileInput.files[0];

            if (!file) {
                /** Display a message if no file is attached */
                q('#user-msg').innerHTML = 'Please choose a file!';
            } else {
                /** If a file is selected, initiate the upload request */
                UploadPostRequest(file, uploadApi);
            }
        });
    });
});
