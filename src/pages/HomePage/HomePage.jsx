import { fetchTrendingFilms } from 'helpers/api';
import { useEffect, useState } from 'react';
import { MovieList } from 'components/MovieList/MovieList';

export default function HomePage() {
  const [trendingMovie, setTrendingMovie] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const movies = await fetchTrendingFilms();
        setTrendingMovie(movies);
      } catch (error) {
        console.log(error);
      }
    }

    getMovies();
  }, []);

  return (
    <div>
      <h2>Trending Movies</h2>
      <MovieList movies={trendingMovie} />
    </div>
  );
}
