import styled from 'styled-components';
import { BsFileImageFill } from 'react-icons/bs';

export const Container = styled.div`
  display: flex;
  gap: ${p => p.theme.spacing(15)};
  margin-top: ${p => p.theme.spacing(20)};

  @media only screen and (max-width: 678px) {
    flex-direction: column;
  }
`;
export const PosterThumb = styled(BsFileImageFill)`
  width: 300px;
  height: 400px;
`;
export const MovieImage = styled.img`
  object-fit: cover;
  max-width: 300px;
  height: 100%;
  border-radius: 5px;
`;

export const List = styled.ul`
  display: flex;
  gap: ${p => p.theme.spacing(8)};
`;

export const ListItem = styled.li`
  border: 1px solid grey;
  padding: 4px;
  border-radius: 6px;
`;
