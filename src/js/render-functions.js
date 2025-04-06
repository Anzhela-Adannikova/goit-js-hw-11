import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

export function createGallery(images) {
    const markup = images.map(image => {
        const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = image;
        return (
        `<li class="gallery-item">
        <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" />
        </a>
            <div class="info">
                <div class="info-colum">
                    <p class="info-title">likes</p>
                    <p class="info-value">${likes}</p>
                </div>
                <div class="info-colum">
                    <p class="info-title">Views</p>
                    <p class="info-value">${views}</p>
                </div>
                <div class="info-colum">
                    <p class="info-title">Comments</p>
                    <p class="info-value">${comments}</p>
                </div>
                <div class="info-colum">
                    <p class="info-title">Downloads</p>
                    <p class="info-value">${downloads}</p>
                </div>
            </div>
        </li>`
        );
    }).join('');

    gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
}

export function clearGallery() {
    gallery.innerHTML = '';
}

export function showLoader() {
    loader.classList.remove('hidden');
}

export function hideLoader() {
    loader.classList.add('hidden');
}



// іконка
// const iconPath = new URL('./img/iconError.svg', import.meta.url).href;
// iconUrl: iconPath,