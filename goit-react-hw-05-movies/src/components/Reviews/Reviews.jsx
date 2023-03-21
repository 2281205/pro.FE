import { getReviews } from '../../api/FetchAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  ReviewsList,
  ReviewsItem,
  ReviewsName,
  ReviewsEmpty,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    try {
      getReviews(movieId).then(data => setReviews(data.results));
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  if (reviews === null) {
    return;
  }

  return (
    <>
      {reviews.length > 0 ? (
        <ReviewsList>
          {reviews.map(({ author, content, id }) => {
            return (
              <ReviewsItem key={id}>
                <ReviewsName>{author}</ReviewsName>
                <p>{content}</p>
              </ReviewsItem>
            );
          })}
        </ReviewsList>
      ) : (
        <ReviewsEmpty>We don't have any reviews for this movie</ReviewsEmpty>
      )}
    </>
  );
};

export default Reviews;
