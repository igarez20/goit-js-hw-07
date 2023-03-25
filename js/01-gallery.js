import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
const galleryCardSet = createGalleryMarkup(galleryItems);
galleryRef.insertAdjacentHTML("beforeend", galleryCardSet);

function createGalleryMarkup(items) {
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

galleryRef.addEventListener("click", onPreviewClick);

function onPreviewClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(
    `
    <img
      class="gallery__image"
      src="${event.target.dataset.source}"
      alt="${event.target.alt}"
    />
  `,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscClose);
      },
    }
  );

  instance.show();

  function onEscClose(event) {
    if (event.key === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onEscClose);
    }
  }
}
