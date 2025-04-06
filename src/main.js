import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from './js/pixabay-api.js';
import { 
    createGallery,
    clearGallery,
    showLoader,
    hideLoader
} from './js/render-functions.js';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const elements = event.currentTarget.elements;
    const query = elements['search-text'].value.trim();

    if(!query) {
        return;
    }

    clearGallery();
    showLoader();

    getImagesByQuery(query)
        .then(function(data) {
            if(!data.hits || data.hits.length === 0) {
                iziToast.info({
                    message: 'Sorry, there are no images matching your search query. Please try again!'
                });
                return;
            }
            createGallery(data.hits);
        })
        .catch(function() {
            iziToast.info({
                message: 'Sorry, there are no images matching your search query. Please try again!'
            });
        })
        .finally(function() {
            hideLoader();
        });
});