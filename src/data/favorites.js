/**
 * An array containing the IDs of favorite GIFs retrieved from localStorage or an empty array if none are found.
 * @type {string[]}
 */
export let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

/**
 * Adds the specified GIF ID to the list of favorites and stores it in the localStorage.
 *
 * @param {string} gifId - The ID of the GIF to be added to favorites.
 * @returns {void} - No explicit return value.
 */
export const addFavorite = (gifId) => {
  if (favorites.find(id => id === gifId)) {
    // Gif has already been added to favorites
    return;
  }

  favorites.push(gifId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

/**
 * Removes the specified GIF ID from the list of favorites and updates the localStorage.
 *
 * @param {string} gifId - The ID of the GIF to be removed from favorites.
 * @returns {void} - No explicit return value.
 */
export const removeFavorite = (gifId) => {
  favorites = favorites.filter(id => id !== gifId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

/**
 * Retrieves a copy of the current list of favorite GIF IDs.
 *
 * @returns {string[]} - An array containing the current favorite GIF IDs.
 */
export const getFavorites = () => [...favorites];
