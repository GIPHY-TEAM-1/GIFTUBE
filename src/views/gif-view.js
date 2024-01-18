export const toSimpleView = (gif) => {
    return `
<div class="simple-view" id=${gif.id} style="width:${gif.width}px; height:${gif.height}px; background-image:url(${gif.image})">
<!-- <img class="gif-image" id=${gif.id} src=${gif.image} alt="${gif.title} data-page="gif-click"> -->
      <!-- ${onHoverGif()} -->
      ${onHoverGif()}
</div>`
}


// TODO - Image Overlay Icon - How to // position:absolute -> top/bottom properties
export const onHoverGif = () => {
    return `
<div class="overlay">
  <span class="material-symbols-outlined">favorite</span>
  <span class="material-symbols-outlined">share</span>
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