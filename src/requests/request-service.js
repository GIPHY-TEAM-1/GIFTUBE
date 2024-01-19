import { getTrending } from '../data/trending-data.js';
import { getFavorites } from '../data/favorites.js';
import { getSingleGif } from '../data/single-gif.js';
import { getRandomGif } from '../data/random-gif.js';

export const loadTrending = async () => {
    const trending = await getTrending();

    return trending;
};

export const loadFavorites = () => {
    // add await / 
    const favorites = getFavorites();
    return favorites;
};

export const loadSearch = () => {
    const search = getSearch();
    return search;
};

export const loadSingleGif = async (id) => {
    const singleGif = await getSingleGif(id);
    return singleGif;
};

export const loadRandomGif = async () => {
    const randomGif = await getRandomGif();
    return randomGif;
}