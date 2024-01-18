export const toSimpleView = (gif) => {
    return `
<div class="trending-container">
  ${gif.map(g => `
    <div class="gif-container">
      <img class="gif-image" id=${g.id} src=${g.image} alt="${g.title} data-page="gif-click">
      <!-- ${onHoverGif()} --!>
    </div>
   `).join('')}
</div>`
}


// TODO - Image Overlay Icon - How to // position:absolute -> top/bottom properties
export const onHoverGif = () => {
    return `
<div class="overlay">
  <span class="material-symbols-outlined">favorite</span>
  <span class="material-symbols-outlined">share</span>
  <span class="material-symbols-outlined">preview</span>
</div>`

}


// To discuss with the team if it's needed
export const toSingleGifView = (gif) => {
    return `
<div class="gif-info">
<img src=${gif.image} alt="${gif.title}">
  <h3>${gif.title}</h3>
  <p>${gif.username}</p>
  <div class="overlay">
    <span class="material-symbols-outlined">favorite share preview</span>
  </div>
</div>`
}