import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const searchParams = new URLSearchParams({
  api_key: 'e9b5b085a3913cbc652ea600cb50d70b',
  language: 'en-US',
});

export const fetchTrendingFilms = async () => {
  const { data } = await axios.get(`trending/all/week?${searchParams}`);
  return data.results;
};

export const fetchMovieDetails = async movie_id => {
  const { data } = await axios.get(`movie/${movie_id}?${searchParams}`);
  return data;
};

export const fetchMovieCredits = async movie_id => {
  const { data } = await axios.get(
    `/movie/${movie_id}/credits?${searchParams}`
  );
  return data.cast;
};

export const fetchMovieRatings = async movie_id => {
  const { data } = await axios.get(
    `/movie/${movie_id}/reviews?${searchParams}`
  );
  return data.results;
};

export const fetchMovieByName = async query => {
  const { data } = await axios.get(
    `/search/movie?${searchParams}&query=${query}`
  );
  return data.results;
};
