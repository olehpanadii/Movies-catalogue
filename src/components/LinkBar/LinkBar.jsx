import { Container, Link } from './LinkBar.styled';

export const LinkBar = () => {
  return (
    <>
      <h3>Additional information</h3>
      <Container>
        <Link to={'cast'}>Cast</Link>
        <Link to={'reviews'}>Review</Link>
      </Container>
    </>
  );
};
