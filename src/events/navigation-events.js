import { q, setActiveNav } from './helpers.js';
import { ABOUT, CONTAINER_SELECTOR, FAVORITES, TRENDING, HOME } from '../common/constants.js';
import { loadTrending } from '../requests/request-service.js';
import { toTrendingView } from '../views/trending-view.js';
import { toAboutView } from '../views/about-view.js';
import { toHomeView } from '../views/home-view.js';
import { getFavorites } from '../data/favorites.js';
import { toFavoritesView } from '../views/favorite-view.js';

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