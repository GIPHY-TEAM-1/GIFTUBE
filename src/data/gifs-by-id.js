/**
 * Fetches information for multiple GIFs based on their IDs.
 *
 * @param {string} id - The ID or comma-separated list of IDs for the GIFs to fetch.
 * @returns {Promise<Object[]>} A promise that resolves to an array of objects containing information about the requested GIFs.
 */
import { getGifsById } from '../common/constants.js';

// eslint-disable-next-line consistent-return
export const getGifsByIds = async (id) => {
    try {
        const response = await fetch(getGifsById(id));
        const gifs = await response.json();
        const gifsData = gifs.data;

        return gifsData.map(element => {
            return {
                id: element.id,
                username: element.username,
                title: element.title,
                image: element.images.fixed_width.url,
                width: element.images.fixed_width.width,
                height: element.images.fixed_width.height,
                date: element.import_datetime,
            };
        });
    } catch (e) {
        console.log(e.message);
    }
};