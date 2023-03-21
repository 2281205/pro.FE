import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../api/FetchAPI';
import MovieList from '../../components/MovieList/MovieList';
import { Title } from './HomePage.styled';
import { Loader } from 'components/Loader/Loader';
import { LoadMore } from '../../components/LoadMore/LoadMore';

function HomePage() {
  const [popularMovie, setPopularMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const moviesTrends = async () => {
      setIsLoading(true);
      try {
        const movies = await getTrendingMovies(page);
                     
        page === 1
          ? setPopularMovie(movies.results)
          : setPopularMovie((state) => [...state, ...movies.results]);
                      
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    moviesTrends();

  }, [page]);


  const loadMore = () => {

    setPage(prevPage => prevPage + 1);
  };

  return (
    <main className="container">
      <Title>Trending today</Title>
      {isLoading && <Loader />}
      {popularMovie && <MovieList movies={popularMovie} />}
      {error && <p>Oops...Something went wrong</p>}
    
    
        <LoadMore onClick={loadMore} />
      
    </main>
  );
}
export default HomePage;
