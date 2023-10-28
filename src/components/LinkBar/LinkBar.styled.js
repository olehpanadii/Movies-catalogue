import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  gap: ${p => p.theme.spacing(15)};
  margin: 20px 0 20px 20px;
`;

export const Link = styled(NavLink)`
  padding: 4px;
  border: 1px solid green;
  border-radius: 10px;
  transition: background-color 0.3s;
  &:hover {
    background-color: lightgreen;
  }
`;
