import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryCardSet = createGalleryItemsMarkUp(galleryItems);

function createGalleryItemsMarkUp(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`
    )
    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", galleryCardSet);
