export const toTrendingView =  (trending) => {
    return `
    <div id="trending">
        <h1>Trending</h1>
        <div class="trending-container">
            ${trending.map(gif => `
            <div class="gif-container">
                <img src=${gif.image} alt="${gif.title}">
                <div class="gif-info">
                    <h3>${gif.title}</h3>
                    <p>${gif.username}</p>
                </div>
            </div>
            `).join('')}
        </div>
    `
}


