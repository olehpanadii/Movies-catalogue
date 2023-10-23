import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const searchParams = new URLSearchParams({
  api_key: 'e9b5b085a3913cbc652ea600cb50d70b',
  language: 'en-US',
});

export const fetchTrendingFilms = async () => {
  const response = await axios.get(`trending/all/day?${searchParams}`);
  return response.data;
};

export const fetchMovieDetails = async movie_id => {
  const response = await axios.get(`movie/${movie_id}?${searchParams}`);
  return response.data;
};
