import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const BackLink = styled(NavLink)`
  margin-bottom: 35px;
  width: 100%;
  display: block;
  text-decoration: none;
  font-size: 18px;
  color: #000;
  transition: color 250ms linear;
  &:hover,
  &:focus {
    color: #5ac8fa;
  }
`;

export const MovieBox = styled.div`
  display: flex;
  border-bottom: 1px solid #ededed;
  padding-bottom: 30px;
  margin-bottom: 30px;
`;
export const MoviePoster = styled.img`
  margin-right: 35px;
  width: 300px;
`;

export const MovieTitle = styled.h1`
  margin-bottom: 20px;
  line-height: 1;
`;
export const MovieScore = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
`;
export const MovieSubtitle = styled.h2`
  margin-bottom: 15px;
`;
export const MovieText = styled.p`
  margin-bottom: 20px;
`;
export const MovieList = styled.ul`
  list-style: square;
  padding-left: 20px;
`;
export const MovieItem = styled.li`
  margin-bottom: 10px;
`;
export const AdditionalBox = styled.div`
  margin-bottom: 30px;
  border-bottom: 1px solid #ededed;
  padding-bottom: 30px;
`;
export const AdditionalLink = styled(NavLink)`
  margin-right: 20px;
  text-decoration: none;
  color: #000;
  font-weight: 600;
  font-size: 18px;
  &.active {
    color: #5ac8fa;
  }
`;
