import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: ${p => p.theme.spacing(15)};
  margin-top: ${p => p.theme.spacing(20)};
`;

export const MovieImage = styled.img`
  object-fit: cover;
  max-width: 300px;
  height: 100%;
  border-radius: 5px;
`;
