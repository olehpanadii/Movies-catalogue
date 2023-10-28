import { MovieListItem } from 'components/MovieListItem/MovieListItem';
import { List, ListItem } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  return (
    <List>
      {movies.map(movie => (
        <ListItem key={movie.id}>
          <MovieListItem movie={movie} />
        </ListItem>
      ))}
    </List>
  );
};
