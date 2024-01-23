import { getGifById } from '../common/constants.js';

// Requirements: You should use the get-gif-by-id endpoint with your api_key and the desired gif’s id – gif_id.

/**
 * Retrieves information about a single GIF by its ID asynchronously.
 *
 * @param {string} id - The ID of the GIF to retrieve information for.
 * @return {Promise<Object>} A promise that resolves to an object containing information about the GIF.
 */
export const getSingleGif = async (id) => {
    const response = await fetch(getGifById(id));
    const singleGif = await response.json();
    const gifData = singleGif.data;

    return {
        id: gifData.id,
        username: gifData.username,
        title: gifData.title,
        image: gifData.images.fixed_width.url,
        width: gifData.images.fixed_width.width,
        height: gifData.images.fixed_width.height,
        date: gifData.import_datetime,
    };
};