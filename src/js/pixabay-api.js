import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '49633160-4cce24fc01914cf63e9c1a790';

export function getImagesByQuery(query) {
    const params = {
    key: API_KEY, 
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    };

    return axios
    .get(BASE_URL, { params })

    .then(response => {
        console.log(response);
        return response.data;
        
    }) 
    .catch(error => {
        throw error;
    })
    
    
}