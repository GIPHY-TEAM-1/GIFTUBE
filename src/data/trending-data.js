import { trendingURL } from '../common/constants.js';

export const getTrending = async () => {
    const response = await trendingURL();
    const json = await response.json();
    console.log(json);
    return json.data.map(element => {
        return {
            id: element.id,
            username: element.username,
            title: element.title,
            image: element.images.fixed_width.url
        };
    });
};
