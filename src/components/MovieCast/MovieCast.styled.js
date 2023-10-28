import styled from 'styled-components';
import { BsFileImageFill } from 'react-icons/bs';

export const ImageThumb = styled(BsFileImageFill)`
  width: 170px;
  height: 255px;
`;

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 24px);
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;
`;
export const ListItem = styled.li`
  padding: 5px;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
