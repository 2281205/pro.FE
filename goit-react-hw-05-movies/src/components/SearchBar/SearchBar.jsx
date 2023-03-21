import { toast } from 'react-toastify';
import propTypes from 'prop-types';
import { useState } from 'react';
import {
  SearchBox,
  SearchForm,
  SearchInput,
  SearchButton,
} from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const [querySearch, setQuerySearch] = useState('');

  const onChangeQuery = ({ currentTarget }) => {
    setQuerySearch(currentTarget.value.toLowerCase());
  };

  const onSearchMovies = e => {
    e.preventDefault();

    if (querySearch.trim() === '') {
      toast.warning('Search field is empty');
      return;
    }

    onSubmit(querySearch);
    setQuerySearch('');
  };

  return (
    <SearchBox>
      <SearchForm onSubmit={onSearchMovies}>
        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
          name="text"
          value={querySearch}
          onChange={onChangeQuery}
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
    </SearchBox>
  );
};

SearchBar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
