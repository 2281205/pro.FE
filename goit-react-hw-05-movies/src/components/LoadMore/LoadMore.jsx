import PropTypes from 'prop-types';
import { LoadMoreBox, LoadMoreButton } from './LoadMore.styled';

export const LoadMore = ({ onClick }) => {
  return (
    <LoadMoreBox>
      <LoadMoreButton type="button" onClick={onClick}>
        Load More
      </LoadMoreButton>
    </LoadMoreBox>
  );
};

LoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};
