import { loadTrending } from "../requests/request-service.js";
import { getTrending } from "./trending-data.js";

export const getSingleGif = async (id) => {
    const singleGif = await getTrending()
    const result = singleGif.find(element => element.id === id);
    return result;
};