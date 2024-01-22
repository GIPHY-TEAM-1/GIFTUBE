import { trendingURL } from '../common/constants.js';

/**
 * Retrieves a list of trending GIFs asynchronously.
 *
 * @returns {Promise<Object[]>} - A promise that resolves to an array of objects containing information about trending GIFs.
 */
export const getTrending = async () => {
    const response = await fetch(trendingURL(100, 100));
    const json = await response.json();
    return json.data.map(element => {
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
};
