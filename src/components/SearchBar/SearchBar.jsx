export const SearchBar = ({ onSubmitQuery, onCanceQuery }) => {
  return (
    <form onSubmit={onSubmitQuery}>
      <input
        onChange={onCanceQuery}
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <button type="submit">Search</button>
    </form>
  );
};
