import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 30px;
`;

export const Header = styled.header`
  margin-bottom: ${p => p.theme.spacing(20)};
  border-bottom: 1px solid green;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;
