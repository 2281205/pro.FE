import { useLocation, useParams, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getMovieId} from '../../api/FetchAPI';
import { Loader } from '../../components/Loader/Loader';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import {
  BackLink,
  MovieSubtitle,
  AdditionalLink,
  AdditionalBox,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    async function fetchInfo() {
      try {
        const data = await getMovieId(movieId);

        setMovie(data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchInfo();
  }, [movieId]);
 
  return (
    <main className="container">
      <BackLink to={backLinkHref}>&larr; Back to</BackLink>
      {movie && <MovieInfo movie={movie} backPath={backLinkHref} />}
      <AdditionalBox>
        <MovieSubtitle>Additional information</MovieSubtitle>
        <AdditionalLink to="cast" state={{ from: backLinkHref }}>
          Cast
        </AdditionalLink>
        <AdditionalLink to="reviews" state={{ from: backLinkHref }}>
          Reviews
        </AdditionalLink>
      </AdditionalBox>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
}
