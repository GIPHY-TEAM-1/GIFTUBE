export const HOME = 'home';

export const ABOUT = 'about';

export const TRENDING = 'trending';

export const SEARCH = 'search';

export const FAVORITES = 'favorites';

export const UPLOAD = 'upload';

export const APIKey = '8HymYwpltTZGDtB4oK7t5Te7t617IfM6';

export const CONTAINER_SELECTOR = '#container';

export const GIF_CLICK = 'gif-click';

export const trendingURL = (limit = 25, offset = 0) => fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${APIKey}&limit=${limit}&offset=${offset}&rating=g`);

export const searchURL = (query = '', limit = 25, offset = 0) => fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&q=${query}&limit=${limit}&offset=${offset}&rating=g&lang=en`);

export const emptyHeart = (gifId) => {
    return `<span class="material-symbols-outlined favorite" data-gif-id=${gifId}>favorite</span>`
};

export const fullHeart = (gifId) => {
    return `<span class="material-symbols-outlined favorite active" data-gif-id=${gifId}>favorite</span>
    <style>
    #full-heart {
      font-variation-settings:
      'FILL' 1,
      'wght' 400,
      'GRAD' 0,
      'opsz' 24
    }
    </style>`
};

export const link = `<span class="material-symbols-outlined link-btn">link</span>`;