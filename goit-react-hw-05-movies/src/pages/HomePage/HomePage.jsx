import { getTrendingMovies } from '../../api/FetchAPI';
import { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { Title } from './HomePage.styled';
import { Loader } from 'components/Loader/Loader';

function HomePage() {
  const [popularMovie, setPopularMovie] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      getTrendingMovies().then(({ results }) => setPopularMovie(results));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const moviesTrends = async () => {
      try {
        setIsLoading(true);
        const movies = await getTrendingMovies();
        if (movies.length === 0) {
          return;
        }
        setPopularMovie(movies.results);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    moviesTrends();
  }, []);

  return (
    <main className="container">
      <Title>Trending today</Title>
      {isLoading && <Loader />}
      {popularMovie && <MovieList movies={popularMovie} />}
      {error && <p>Oops...Something went wrong</p>}
    </main>
  );
}
export default HomePage;
