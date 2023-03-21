import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;
  margin-bottom: 50px;
`;
export const MovieItem = styled.li`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;
  width: calc((100% - 3 * 20px) / 3);
  &:nth-of-type(-n + 3) {
    margin-top: 0;
  }
`;
export const MovieLink = styled(Link)`
  display: block;
  text-decoration: none;
  border: 1px solid #ededed;
  &:hover > h2 {
    color: #5ac8fa;
  }
`;
export const MovieImg = styled.img`
  background-color: #ededed;
  min-height: 610px;
  margin-bottom: 15px;
`;
export const MovieTitle = styled.h2`
  font-size: 22px;
  color: #000;
  margin-bottom: 15px;
  padding: 0 15px;
  transition: color 250ms linear;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
