export const HOME = 'home';

export const ABOUT = 'about';

export const TRENDING = 'trending';

export const SEARCH = 'search';

export const FAVORITES = 'favorites';

export const UPLOAD = 'upload';

export const UPLOADBTN = 'upload-button';

export const CATEGORIES = 'categories';

export const API_KEY = '8HymYwpltTZGDtB4oK7t5Te7t617IfM6';

export const CONTAINER_SELECTOR = '#container';

export const GIF_CLICK = 'gif-click';

export const trendingURL = (limit = 25, offset = 0) => `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}&offset=${offset}&rating=g`;

export const searchURL = (query = '', limit = 25, offset = 0) => `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=${limit}&offset=${offset}&rating=g&lang=en`;

export const getGifById = (gifId) => `https://api.giphy.com/v1/gifs/${gifId}?api_key=${API_KEY}&rating=g`;

export const uploadApi = `https://upload.giphy.com/v1/gifs?api_key=${API_KEY}`;

export const randomGif = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`;

export const categories = `https://api.giphy.com/v1/gifs/categories?api_key=${API_KEY}`

export const link = '<span class="material-symbols-outlined link-btn">link</span>';
