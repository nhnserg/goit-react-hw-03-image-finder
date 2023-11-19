import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '39797585-95f120e70fb7e422bd65b56f5';

const fetchImages = async ({ query, page, perPage = 12 }) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
    );
    return response.data.hits;
  } catch (error) {
    throw error;
  }
};
export default fetchImages;
