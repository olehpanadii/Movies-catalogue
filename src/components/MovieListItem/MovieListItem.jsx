import { NavLink } from 'react-router-dom';

export const MovieListItem = ({
  movie: { id, title, original_name, poster_path, vote_average },
}) => {
  const Url = 'https://image.tmdb.org/t/p/w500' + poster_path;

  return (
    <nav>
      <NavLink to={`/movies/${id}`}>
        <div>
          <img src={Url} alt={title ?? original_name} />
          <div>
            <h3>{title ?? original_name} </h3>
            <p>{vote_average}</p>
          </div>
        </div>
      </NavLink>
    </nav>
  );
};
