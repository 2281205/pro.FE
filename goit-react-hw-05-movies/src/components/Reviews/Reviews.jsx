import { getReviews } from '../../api/FetchAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

import {
  ReviewsList,
  ReviewsItem,
  ReviewsName,
  ReviewsEmpty,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      setIsLoading(true);
      try {
        const data = await getReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <>
     {isLoading && <Loader />}
      {reviews && reviews.length > 0 ? (
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
