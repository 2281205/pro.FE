import React from 'react';
import { Container, Content, Link } from './MovieInfo.styled';
//import defaultPicture from '../../images/no-poster.jpg';
import PropTypes from 'prop-types';
import { getMovieId, getPoster } from '../../api/FetchAPI';

import {
  BackLink,
  MovieBox,
  MoviePoster,
  MovieTitle,
  MovieScore,
  MovieSubtitle,
  MovieText,
  MovieList,
  MovieItem,
  AdditionalLink,
  AdditionalBox,
} from '../../pages/MovieDetails/MovieDetails.styled';

const MovieInfo = ({ movie, backPath }) => {
  const { poster_path, title, vote_average, overview, genres, release_date } =
    movie;
  const img = getPoster(poster_path);
  const releaseDate = new Date(release_date).getFullYear();

  return (
    <MovieBox>
      <MoviePoster src={img} alt="title" />
      <div>
        <MovieTitle>
          {title} ({releaseDate})
        </MovieTitle>
        <MovieScore>2User score: {Math.round(vote_average * 10)}%</MovieScore>
        {overview && (
          <>
            <MovieSubtitle>Overview</MovieSubtitle>
            <MovieText>{overview}</MovieText>
          </>
        )}
        {genres && (
          <>
            <MovieSubtitle>Genres</MovieSubtitle>
            <MovieList>
              {genres.map(({ id, name }) => {
                return <MovieItem key={id}>{name}</MovieItem>;
              })}
            </MovieList>
          </>
        )}
      </div>
    </MovieBox>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.array,
    overview: PropTypes.string,
  }).isRequired,
  backPath: PropTypes.object.isRequired,
};

export default MovieInfo;

// <Container>
//   <img
//     src={
//     poster_path
//     ? https://image.tmdb.org/t/p/w500/${poster_path}
//         : defaultPicture
//         }
//     alt={title}
//     />
// <Content>
//     <h1>{title}</h1>
//         <p>Rating: {vote_average.toFixed(1)}</p>
//         <p>Genres: {genres.map(genre => genre.name).join(', ')}</p>
//         <p>{overview}</p>
//     <Link to="cast" state={{ from: backPath }}>
//         Cast
//     </Link>
//     <Link to="reviews" state={{ from: backPath }}>
//         Reviews
//     </Link>
// </Content>

// </Container>
