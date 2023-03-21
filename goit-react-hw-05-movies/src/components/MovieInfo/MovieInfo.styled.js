import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const Container = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  @media only screen and (min-width: 1200px) {
    gap: 50px;
    flex-direction: row;
  }
  > img { 
    height: 200px;
    @media only screen and (min-width: 1200px) {
    height: 500px;
}
  }
`;


export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
@media only screen and (min-width: 1200px) {
    max-width: 50%; 
}
`;

export const BackButton = styled(NavLink)`
  align-items: center;
  gap: 8px;
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  border: 2px solid orangered;
  margin-bottom: 10px;
  display: block;
  width: 100px;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  border: 2px solid orangered;
  text-decoration: none;
  color: white;
  font-weight: 500;
  max-width: 150px;
  text-align: center;
  &.active {
    color: white;
    background-color: orangered;
  }
`;



// @media only screen and (min-width: 320px) {
//     flex-basis: 100%;
//   }
  
//   @media only screen and (min-width: 760px) {
//     flex-basis: 40%;
//   }
  
//   @media only screen and (min-width: 1200px) {
//     flex-basis: calc((100% - 50px) / 5);
//   }
