import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy } from 'react';
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MovieDetails = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage')
);
const Movie = lazy(() => import('pages/MoviePage/MoviePage'));
const MovieCast = lazy(() => import('./MovieCast/MovieCast'));
const MovieReview = lazy(() => import('./MovieReview/MovieReview'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<Movie />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReview />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </div>
  );
};
