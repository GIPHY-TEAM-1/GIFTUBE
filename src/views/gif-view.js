export const toSimpleView = (gif) => {
    return `
<div class="trending-container">
  ${gif.map(g => `
    <div class="gif-container">
      <img class="gif-image" src=${g.image} alt="${g.title}">
      <!-- ${onHoverGif()} --!>
    </div>
   `).join('')}
</div>`
}


// TODO - Image Overlay Icon - How to
export const onHoverGif = () => {
    return `
<div class="overlay">
  <span class="material-symbols-outlined">favorite share preview</span>
</div>`

}


// To discuss with the team if it's needed
export const toSingleGifView = (gif) => {
    return `
<div class="gif-info">
<img src=${g.image} alt="${g.title}">
  <h3>${gif.title}</h3>
  <p>${gif.username}</p>
  <div class="overlay">
    <span class="material-symbols-outlined">favorite share preview</span>
  </div>
</div>`
}