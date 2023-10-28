import { Container, MovieImage } from './MovieListItemDetails.styled';

export const MovieListItemDetails = ({ movie }) => {
  const { vote_average, poster_path, title, overview, genres } = movie;
  const userScore = Math.round((vote_average * 100) / 10);
  const url = 'https://image.tmdb.org/t/p/w500' + poster_path;

  return (
    <Container>
      <div>
        {poster_path ? <MovieImage src={url} alt={title} /> : <svg>d</svg>}
      </div>
      <div>
        <h2>{title}</h2>
        <p>User score: {userScore}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres.map(gen => (
            <li key={gen.id}>{gen.name}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
};
