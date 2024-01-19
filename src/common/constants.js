export const HOME = 'home';

export const ABOUT = 'about';

export const TRENDING = 'trending';

export const SEARCH = 'search';

export const FAVORITES = 'favorites';

export const UPLOAD = 'upload';

export const APIKey = '8HymYwpltTZGDtB4oK7t5Te7t617IfM6';

export const CONTAINER_SELECTOR = '#container';

export const GIF_CLICK = 'gif-click';

export const trendingURL = (limit = 25, offset = 0) => `https://api.giphy.com/v1/gifs/trending?api_key=${APIKey}&limit=${limit}&offset=${offset}&rating=g`;

export const searchURL = (query = '', limit = 25, offset = 0) => `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&q=${query}&limit=${limit}&offset=${offset}&rating=g&lang=en`;

export const getGifById = (gifId) => `https://api.giphy.com/v1/gifs/${gifId}?api_key=8HymYwpltTZGDtB4oK7t5Te7t617IfM6&rating=g`;

export const randomGif = 'https://api.giphy.com/v1/gifs/random?api_key=8HymYwpltTZGDtB4oK7t5Te7t617IfM6&tag=&rating=g';

// To check emptyHeart
export const emptyHeart = `<span class="material-symbols-outlined favorite">favorite</span>`;
// To check fullHeart
export const fullHeart = `<span class="material-symbols-outlined favorite active">favorite</span>
    <style>
    #full-heart {
      font-variation-settings:
      'FILL' 1,
      'wght' 400,
      'GRAD' 0,
      'opsz' 24
    }
    </style>`;

export const link = `<span class="material-symbols-outlined link-btn">link</span>`;