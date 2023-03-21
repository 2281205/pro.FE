import styled from '@emotion/styled';

export const LoadMoreBox = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;
export const LoadMoreButton = styled.button`
  height: 40px;
  padding: 0 20px;
  border: none;
  background-color: #ededed;
  color: #000;
  cursor: pointer;
  text-transform: uppercase;
  transition: color 250ms linear, background-color 250ms linear;
  &:hover {
    background-color: #0c0505;
    color: #fff;
  }
`;
