import { searchURL } from '../common/constants.js';

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