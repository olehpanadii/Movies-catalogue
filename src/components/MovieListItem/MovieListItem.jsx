import { NavLink, useLocation } from 'react-router-dom';
import { ImageGalleryObj, PosterThumb } from './MovieListItem.style';

export const MovieListItem = ({
  movie: { id, title, original_name, poster_path, vote_average },
}) => {
  const location = useLocation();
  const Url = 'https://image.tmdb.org/t/p/w500' + poster_path;

  return (
    <nav>
      <NavLink to={`/movies/${id}`} state={{ from: location }}>
        <div>
          {poster_path ? (
            <ImageGalleryObj src={Url} alt={title ?? original_name} />
          ) : (
            <PosterThumb />
          )}
          <div>
            <h3>{title ?? original_name} </h3>
            <p> Average score: {Number(vote_average).toFixed(2)}</p>
          </div>
        </div>
      </NavLink>
    </nav>
  );
};
