import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 36px;
  font-weight: bold;
  &.active {
    color: green;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: ${p => p.theme.spacing(10)};
  margin-left: ${p => p.theme.spacing(20)};
`;
