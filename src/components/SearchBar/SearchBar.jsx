import { Container, Input, SearchButton, SearchIcon } from './SearchBar.styled';

export const SearchBar = ({ onSubmitQuery, onCanceQuery }) => {
  return (
    <Container onSubmit={onSubmitQuery}>
      <Input
        onChange={onCanceQuery}
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <SearchButton type="submit">
        <SearchIcon />
      </SearchButton>
    </Container>
  );
};
