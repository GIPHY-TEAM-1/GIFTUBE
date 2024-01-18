import { q, setActiveNav } from './helpers.js';
import { ABOUT, CONTAINER_SELECTOR, FAVORITES, TRENDING, HOME, GIF_CLICK } from '../common/constants.js';
import { loadTrending } from '../requests/request-service.js';
import { toTrendingView } from '../views/trending-view.js';
import { toAboutView } from '../views/about-view.js';
import { toHomeView } from '../views/home-view.js';
import { getFavorites } from '../data/favorites.js';
import { toFavoritesView } from '../views/favorite-view.js';
import { toSingleGifView } from '../views/gif-view.js';
import { getSingleGif } from '../data/single-gif.js';


export const loadPage = (page = '') => {
    switch (page) {
    case HOME:
        setActiveNav(HOME);
        return renderHome();

    case TRENDING:
        setActiveNav(TRENDING);
        return renderTrending();

    case FAVORITES:
        setActiveNav(FAVORITES);
        return renderFavorites();

    case ABOUT:
        setActiveNav(ABOUT);
        return renderAbout();

    case GIF_CLICK:
        return renderGifClick();

    default: return null;
    }
};

const renderHome = () => {
    q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

const renderTrending = async () => {
    q(CONTAINER_SELECTOR).innerHTML = toTrendingView(await loadTrending());
};

const renderFavorites = () => {
    q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(getFavorites());
};

const renderAbout = () => {
    q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};

const renderGifClick = () => {
    q(CONTAINER_SELECTOR).innerHTML = toSingleGifView(getSingleGif());
}