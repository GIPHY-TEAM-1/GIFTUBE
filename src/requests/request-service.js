import { getTrending } from '../data/trending-data.js';

export const loadTrending = async () => {
    const trending = await getTrending();
    return trending;
};

export const loadFavorites = () => {
    const favorites = getFavorites();
    return favorites;
};

export const loadSearch = () => {
    const search = getSearch();
    return search;
};

export const loadSingleGif = (id) => {
    const singleGif = getSingleGif(id);
    return singleGif;
};