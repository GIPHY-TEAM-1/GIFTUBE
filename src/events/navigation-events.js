import { q, setActiveNav } from './helpers.js';
import { ABOUT, CONTAINER_SELECTOR, FAVORITES, TRENDING, UPLOAD, UPLOADBTN } from '../common/constants.js';
import { loadFavorites, loadRandomGif, loadSingleGif, loadTrending, loadUploads } from '../requests/request-service.js';
import { toTrendingView } from '../views/trending-view.js';
import { toAboutView } from '../views/about-view.js';
import { toFavoritesView } from '../views/favorite-view.js';
import { toUploadBtnView } from '../views/upload-btn-view.js';
import { toSearchView } from '../views/search-view.js';
import { getSearch } from '../data/search-data.js';
import { toUploadsView } from '../views/uploads-view.js';

/**
 * Loads the specified page, sets the active navigation link, and renders the corresponding content.
 *
 * @param {string} [page=''] - The page to load. Possible values: 'TRENDING', 'FAVORITES', 'ABOUT', 'CATEGORIES'.
 * @returns {void|null} No explicit return value or null if an invalid page is provided.
 */
export const loadPage = (page = '') => {
    switch (page) {
    case TRENDING:
        setActiveNav(TRENDING);
        return renderTrending();

    case FAVORITES:
        setActiveNav(FAVORITES);
        return renderFavorites();

    case ABOUT:
        setActiveNav(ABOUT);
        return renderAbout();

    case UPLOAD:
        setActiveNav(UPLOAD);
        return renderUploads();

    case UPLOADBTN:
        return renderUploadBtn();

    default: return null;
    }
};

/**
 * Renders the trending GIFs in the specified container using the trending view.
 *
 * @returns {Promise<void>} A promise that resolves after rendering the trending GIFs.
 */
const renderTrending = async () => {
    q(CONTAINER_SELECTOR).innerHTML = toTrendingView(await loadTrending());
};

/**
 * Renders the favorite GIFs in the specified container using the favorites view.
 *
 * @returns {Promise<void>} A promise that resolves after rendering the favorite GIFs.
 */
export const renderFavorites = async () => {
    const favorites = loadFavorites();
    const favoriteGifs = [];

    if (favorites.length !== 0) {
        for (const id of favorites) {
            const promise = await loadSingleGif(id);
            favoriteGifs.push(promise);
        }
        q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(favoriteGifs);
    } else {
        const promise = await loadRandomGif();
        favoriteGifs.push(promise);
        q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(favoriteGifs, true);
    }
};

/**
 * Renders the about view in the specified container.
 *
 * @returns {void} No explicit return value.
 */

const renderAbout = () => {
    q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};

export const renderSearch = async (query) => {
    q(CONTAINER_SELECTOR).innerHTML = toSearchView(await getSearch(query), query);
};

export const renderUploadBtn = () => {
    q(CONTAINER_SELECTOR).innerHTML = toUploadBtnView();
};

export const renderUploads = async () => {
    const uploads = loadUploads();
    const uploadGifs = [];

    for (const id of uploads) {
        const promise = await loadSingleGif(id.data.id);
        uploadGifs.push(promise);
    }
    q(CONTAINER_SELECTOR).innerHTML = toUploadsView(uploadGifs);
};