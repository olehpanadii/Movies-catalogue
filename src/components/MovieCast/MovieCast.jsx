import { NoInfo } from 'components/Error/NoInfo';
import { fetchMovieCredits } from 'helpers/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ImageThumb, List, ListItem } from './MovieCast.styled';

const MovieCast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const { id } = useParams();
  const url = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    async function getMovieCast() {
      try {
        const cast = await fetchMovieCredits(id);
        setMovieCast(cast);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieCast();
  }, [id]);
  if (!movieCast) {
    return;
  }

  return (
    <List>
      {movieCast.length === 0 && <NoInfo />}
      {movieCast.map(({ id, profile_path, name, character }) => (
        <ListItem key={id}>
          {profile_path ? (
            <img src={url.concat(profile_path)} alt={name} />
          ) : (
            <ImageThumb />
          )}
          <div>
            <h3>{name}</h3>
            <p>Character: {character}</p>
          </div>
        </ListItem>
      ))}
    </List>
  );
};
export default MovieCast;
