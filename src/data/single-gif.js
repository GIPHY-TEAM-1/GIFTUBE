import { getGifById } from "../common/constants.js";

// Requirements: You should use the get-gif-by-id endpoint with your api_key and the desired gif’s id – gif_id.
export const getSingleGif = async (id) => {

    const response = await getGifById(id);
    const singleGif = await response.json();
    const gifData = singleGif.data

    return gifData;
};