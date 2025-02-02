import axios from 'axios';
const API_KEY = import.meta.env.VITE_UNSPLASH_KEY;

axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Accept-Version'] = 'v1';

export const fetchImages = async (query, page = 1, perPage = 10) => {
  try {
    if (!query || query.trim() === '') {
      //console.warn('fetchImages was called with an empty query.');
      return { results: [], totalPages: 0 };
    }
    //console.log(
    //   `Fetching images for: "${query}" (Page: ${page}, PerPage: ${perPage})`
    // );
    const response = await axios.get(`/search/photos`, {
      params: {
        query: query.trim(),
        page: page,
        per_page: perPage,
        client_id: API_KEY,
      },
    });
    // console.log('API Response: response.data', response.data);

    // console.log('Response Headers:', response.headers);
    // console.log('X-Per-Page:', response.headers['x-per-page']);
    // console.log('X-Total:', response.headers['x-total']);

    const results = response.data.results || [];
    const totalPages =
      Math.ceil(response.headers['x-total'] / response.headers['x-per-page']) ||
      1;
    // console.log('API Response:', results);
    // console.log('Total Pages:', totalPages);

    return { results, totalPages };
  } catch (error) {
    //console.error('API Fetch Error:', error.message || error);
    throw new Error(error.message || 'Unknown API error');
  }
};
