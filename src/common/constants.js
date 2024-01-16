export const HOME = 'home';

export const ABOUT = 'about';

export const TRENDING = 'trending';

export const SEARCH = 'search';

export const FAVORITES = 'favorites';

export const UPLOAD = 'upload';

export const APIKey = '8HymYwpltTZGDtB4oK7t5Te7t617IfM6';

export const trendingURL = async (limit = 25, offset = 0) => await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${APIKey}&limit=${limit}&offset=${offset}&rating=g`); 

export const CONTAINER_SELECTOR = '#container';

export const searchURL = async (query = '', limit = 25, offset = 0) => await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&q=${query}&limit=${limit}&offset=${offset}&rating=g&lang=en`);
