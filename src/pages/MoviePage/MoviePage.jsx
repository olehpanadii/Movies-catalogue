import { MovieList } from 'components/MovieList/MovieList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { fetchMovieByName } from 'helpers/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Movie() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) {
      return;
    }
    async function getMovieByName() {
      try {
        const movieByName = await fetchMovieByName(query);
        setMovies(movieByName);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieByName();
  }, [searchParams]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    setSearchParams(query !== '' ? { query } : {});
  };
  if (!movies) {
    return;
  }
  return (
    <div>
      <SearchBar onSubmitQuery={handleOnSubmit} onCanceQuery={handleChange} />
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
