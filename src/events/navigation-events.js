import { q, setActiveNav } from './helpers.js';
import { ABOUT, CONTAINER_SELECTOR, FAVORITES, TRENDING, HOME, GIF_CLICK } from '../common/constants.js';
import { loadTrending } from '../requests/request-service.js';
import { toTrendingView } from '../views/trending-view.js';
import { toAboutView } from '../views/about-view.js';
import { getFavorites } from '../data/favorites.js';
import { toFavoritesView } from '../views/favorite-view.js';



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

    default: return null;
    }
};

const renderTrending = async () => {
    q(CONTAINER_SELECTOR).innerHTML = toTrendingView(await loadTrending());
};

const renderFavorites = () => {
    // to add await before getFavorites after finishing favorites.js!!!!!
    // replace get\favorites with loadFavorites????????
    // If no favorites, return random gif 
    q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(getFavorites());
};

const renderAbout = () => {
    q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};
