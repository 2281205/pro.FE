import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: #0c0505;
  margin-bottom: 50px;
`;
export const HeaderNav = styled.nav`
  display: flex;
  justify-content: center;
`;
export const NavigationLink = styled(NavLink)`
  padding: 20px 0;
  text-transform: uppercase;
  font-size: 18px;
  text-decoration: none;
  margin: 0 20px;
  font-weight: 600;
  color: #fff;
  border-bottom: 2px solid transparent;
  transition: color 250ms linear;
  &.active {
    color: #5ac8fa;
  }
  &:hover:not(.active),
  &:focus:not(.active) {
    color: #5ac8fa;
  }
`;
