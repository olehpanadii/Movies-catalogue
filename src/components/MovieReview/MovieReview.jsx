import { NoInfo } from 'components/Error/NoInfo';
import { fetchMovieRatings } from 'helpers/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieReview = () => {
  const [movieReview, setMovieReview] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function getMovieReviews() {
      try {
        const reviws = await fetchMovieRatings(id);
        setMovieReview(reviws);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieReviews();
  }, [id]);

  if (!movieReview) {
    return;
  }
  return (
    <ul>
      {movieReview.length === 0 && <NoInfo />}
      {movieReview.map(({ author, content, id }) => (
        <li key={id}>
          <h3>{author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
export default MovieReview;
