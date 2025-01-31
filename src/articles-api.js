import axios from 'axios';

axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

export const fetchArticles = async (query, page) => {
  try {
    //const response = await axios.get(`/search?query=react`);
    const response = await axios.get(
      `https://hn.algolia.com/api/v1/search?query=${query}&page=${page}`
    );
    console.log('API Response:', response.data);

    return response.data;
  } catch (error) {
    console.log('API Fetch Error:', error);
    throw error;
  }
};
