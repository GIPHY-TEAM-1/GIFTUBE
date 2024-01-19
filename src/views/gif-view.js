import { link } from "../common/constants.js"
import { renderFavoriteStatus } from "../events/favorites-events.js"

export const toSimpleView = (gif) => {
  // console.log(gif)
    return `
      <div class="simple-view" data-gif-id="${gif.id}" id="${gif.id}" style="width:${gif.width}px; height:${gif.height}px; background-image:url(${gif.image})">
      <!-- <img class="gif-image" id=${gif.id} src=${gif.image} alt="${gif.title} data-page="gif-click"> -->
          <!-- ${onHoverGif()} -->
          ${onHoverGif(gif.id)}
      </div>
  `
}


// TODO - Image Overlay Icon - How to // position:absolute -> top/bottom properties
export const onHoverGif = (gifId) => {
    return `
<div class="overlay">
  ${renderFavoriteStatus(gifId)}
  ${link}
</div>`

}


export const toSingleGifView = (gif) => {
  // console.log(gif)
    return `
<div class="gif-info" id=${gif.id}>
<img src=${gif.image} alt="${gif.title}">
  <h3>${gif.title}</h3>
  <p>${gif.username}</p>
  <div class="overlay">
    ${renderFavoriteStatus(gif.id)}
    ${link}
  </div>
</div>`
}
