import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '33786160-2c53079601ad7620441dee1b3';

async function fetchPhotos(nameQuery, page) {

  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: nameQuery,
    image_type:"photo",
    orientation: "horizontal",
    safesearch: "true",
    page: page,
    per_page: 4
    
  });

  return await axios.get(`${BASE_URL}?${searchParams}`)
    .then(response => response.data);
  }

  export default { fetchPhotos };


