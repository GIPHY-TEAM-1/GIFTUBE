import { randomGif } from "../common/constants.js";

/**
 * Retrieves information about a random GIF asynchronously.
 *
 * @returns {Promise<Object>} A promise that resolves to an object containing information about the random GIF.
 */
export const getRandomGif = async () => {

    const response = await fetch(randomGif);
    const singleGif = await response.json();
    const gifData = singleGif.data;

    return {
            id: gifData.id,
            username: gifData.username,
            title: gifData.title,
            image: gifData.images.fixed_width.url,
            width: gifData.images.fixed_width.width,
            height: gifData.images.fixed_width.height,
    };
};