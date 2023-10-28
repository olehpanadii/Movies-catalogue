import styled from 'styled-components';
import { BsFileImageFill } from 'react-icons/bs';

export const PosterThumb = styled(BsFileImageFill)`
  width: 300px;
  height: 400px;
`;

export const ImageGalleryObj = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
  }
`;
