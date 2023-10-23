import { fetchTrendingFilms } from 'helpers/api';
import { useEffect, useState } from 'react';
import { Routes } from 'react-router-dom';

export const App = () => {
  const [quizItems, setQuizItems] = useState([]);
  useEffect(() => {
    async function getQuizzes() {
      try {
        const quizzes = await fetchTrendingFilms();
        setQuizItems(quizzes);
      } catch (error) {
      } finally {
      }
    }

    getQuizzes();
  }, []);
  return (
    <div>
      <Routes></Routes>
    </div>
  );
};
