import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar/NavigationBar';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import { ToastContainer } from 'react-toastify';
import { Loader } from '../components/Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

const MoviePage = lazy(() => import('../pages/MoviePage/MoviePage'));

const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));

const Cast = lazy(() => import('../components/Cast/Cast'));

const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <NavigationBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <ToastContainer />
      </Suspense>
    </>
  );
};
