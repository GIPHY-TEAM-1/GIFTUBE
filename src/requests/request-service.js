
export const loadTrending = () => {
    const trending = getTrending();
    return trending;
}

export const loadFavorites = () => {
    const favorites = getFavorites();
    return favorites;
}

export const loadSearch = () => {
    const search = getSearch();
    return search;
}