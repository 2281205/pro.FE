import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getSearchMovies } from '../../api/FetchAPI';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Loader } from '../../components/Loader/Loader';
import MovieList from '../../components/MovieList/MovieList';
import { InfoTitle } from './MoviePage.styled.jsx';
import { LoadMore } from '../../components/LoadMore/LoadMore';

export default function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalMovies, setTotalMovies] = useState(0);
  const [loadings, setLoadings] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const querySearch = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!querySearch) {
      return;
    }

    setLoadings(true);

    try {
      getSearchMovies(querySearch, page).then(({ results, total_pages }) => {
        setLoadings(false);

        if (results.length === 0) {
          setError(`No results to show for "${querySearch}!"`);
          return;
        }
        if (page > 1) {
          return setMovies(prevMovies => [...prevMovies, ...results]);
        }

        setMovies(results);

        setTotalMovies(total_pages);
      });
    } catch (error) {
      toast.error(error);
      setLoadings(false);
    }
  }, [querySearch, page]);

  const searchMovies = newMovies => {
    if (querySearch === newMovies) {
      toast.info(`Movies matching '${querySearch}' have already been found`);
      return;
    }

    setSearchParams(newMovies !== '' ? { query: newMovies } : {});
    setMovies([]);
    setLoadings(false);
    setError(false);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <main className="container">
      <SearchBar onSubmit={searchMovies} />
      {loadings && <Loader />}
      {error && <InfoTitle>{error}</InfoTitle>}

      {movies.length > 0 && <MovieList movies={movies} />}

      {totalMovies > 0 && page !== totalMovies && !loadings && !error && (
        <LoadMore onClick={loadMore} />
      )}
    </main>
  );
}
