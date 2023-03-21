import styled from '@emotion/styled';

export const SearchBox = styled.div`
  margin-bottom: 200px;
`;
export const SearchForm = styled.form`
  max-width: 400px;
  margin: auto;
  position: relative;
  width: 100%;
  display: flex;
`;
export const SearchInput = styled.input`
  height: 40px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ededed;
  padding: 0 10px;
  &:focus {
    border-color: #0c0505;
    outline: none;
  }
`;
export const SearchButton = styled.button`
  border: none;
  background-color: #ededed;
  color: #000;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  text-transform: uppercase;
  transition: color 250ms linear, background-color 250ms linear;
  &:hover {
    background-color: #0c0505;
    color: #fff;
  }
`;
