import styled from 'styled-components';

import { IoIosSearch } from 'react-icons/io';

export const Container = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;

export const Input = styled.input`
  padding: 8px;
  border: none;
  border-radius: 4px;
  background-color: #c8e6c9;
  color: #333;
  outline: none;
  transition: background-color 0.3s;

  &:focus {
    background-color: #a5d6a7;
  }
`;

export const SearchButton = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background-color: #388e3c;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2e7d32;
  }
`;

export const SearchIcon = styled(IoIosSearch)`
  font-size: 20px;
`;
