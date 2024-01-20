import { searchURL } from '../common/constants.js';

/**
 * Retrieves a list of GIFs matching the specified query asynchronously.
 *
 * @param {string} query - The search query.
 * @returns {Promise<Object[]>} - A promise that resolves to an array of objects containing information about GIFs matching the specified query.
 */

export const getSearch = async (query) => {
    const response = await fetch(searchURL(query, 100, 100));
    const json = await response.json();
    return json.data.map(element => {
        return {
            id: element.id,
            username: element.username,
            title: element.title,
            image: element.images.fixed_width.url,
            width: element.images.fixed_width.width,
            height: element.images.fixed_width.height,
        };
    });
};