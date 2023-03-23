import React from 'react';
import defaultPicture from '../../images/noImage.jpg';
import PropTypes from 'prop-types';
import { getPoster } from '../../api/FetchAPI';

import {
  MovieBox,
  MoviePoster,
  MovieTitle,
  MovieScore,
  MovieSubtitle,
  MovieText,
  MovieList,
  MovieItem,

} from '../../pages/MovieDetails/MovieDetails.styled';

const MovieInfo = ({ movie, backPath }) => {
  const { poster_path, title, vote_average, overview, genres, release_date } =
    movie;
  const img = getPoster(poster_path);
  const releaseDate = new Date(release_date).getFullYear();

  return (
    <MovieBox>
      <MoviePoster 
      src={
        img
            ? img
            : defaultPicture
          } alt={title} />
      <div>
        <MovieTitle>
          {title} ({releaseDate})
        </MovieTitle>
        <MovieScore>User score: {Math.round(vote_average * 10)}%</MovieScore>
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
