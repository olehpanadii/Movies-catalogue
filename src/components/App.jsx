import { NavLink, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink>Home</NavLink>
        <NavLink>Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<div>Home page</div>} />
        <Route path="/dogs" element={<div>Movies page</div>} />
      </Routes>
    </div>
  );
};
