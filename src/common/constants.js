export const HOME = 'home';

export const ABOUT = 'about';

export const TRENDING = 'trending';

export const SEARCH = 'search';

export const FAVORITES = 'favorites';

export const UPLOAD = 'upload';

export const APIKey = '8HymYwpltTZGDtB4oK7t5Te7t617IfM6';

export const trendingURL = async (limit = 25, offset = 0) => fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${APIKey}&limit=25&rating=g`); 

export const CONTAINER_SELECTOR = '#container';
